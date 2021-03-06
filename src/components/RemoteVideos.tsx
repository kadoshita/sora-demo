import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import ButtonChangeSimulcastQualityByStreamId from "@/components/Button/ChangeSimulcastQualityByStreamId";
import ButtonRequestSpotlightQualityByStreamId from "@/components/Button/RequestSpotlightQualityByStreamId";
import ButtonResetSpotlightQualityByStreamId from "@/components/Button/ResetSpotlightQualityByStreamId";
import { SoraDemoState } from "@/slice";
import { CustomHTMLVideoElement } from "@/utils";

import VolumeVisualizer from "./VolumeVisualizer";

type VideoElementProps = {
  stream: MediaStream;
  setHeight: Dispatch<SetStateAction<number>>;
  mute: boolean;
  audioOutput: string;
};
const VideoElement: React.FC<VideoElementProps> = (props) => {
  const { stream, setHeight, mute, audioOutput } = props;
  const videoRef = useRef<CustomHTMLVideoElement>(null);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });
    if (videoRef.current) {
      if (mute) {
        videoRef.current.muted = true;
      }
      videoRef.current.srcObject = stream;
      resizeObserver.observe(videoRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (audioOutput && videoRef.current?.setSinkId && stream && stream.getAudioTracks().length > 0) {
    videoRef.current.setSinkId(audioOutput);
  }
  return <video autoPlay playsInline controls ref={videoRef} />;
};

const VideoElementMemo = React.memo((props: VideoElementProps) => {
  return <VideoElement {...props} />;
});

type RemoteVideoProps = {
  stream: MediaStream;
  multistream: boolean;
  simulcast: boolean;
  spotlight: boolean;
};
const RemoteVideo: React.FC<RemoteVideoProps> = (props) => {
  const [height, setHeight] = useState<number>(0);
  const { audioOutput, mute, spotlightConnectionIds } = useSelector((state: SoraDemoState) => state);
  return (
    <div className="col-auto">
      <div className="video-status">
        <p>{props.stream.id}</p>
        <p className="mx-1">
          {props.stream.id in spotlightConnectionIds ? ` [${spotlightConnectionIds[props.stream.id]}]` : ""}
        </p>
        {!props.spotlight && props.multistream && props.simulcast ? (
          <>
            <ButtonChangeSimulcastQualityByStreamId quality="low" streamId={props.stream.id} />
            <ButtonChangeSimulcastQualityByStreamId quality="middle" streamId={props.stream.id} />
            <ButtonChangeSimulcastQualityByStreamId quality="high" streamId={props.stream.id} />
          </>
        ) : null}
        {props.spotlight && props.multistream && props.simulcast ? (
          <>
            <ButtonRequestSpotlightQualityByStreamId quality={"low"} streamId={props.stream.id} />
            <ButtonRequestSpotlightQualityByStreamId quality={"middle"} streamId={props.stream.id} />
            <ButtonRequestSpotlightQualityByStreamId quality={"high"} streamId={props.stream.id} />
            <ButtonResetSpotlightQualityByStreamId streamId={props.stream.id} />
          </>
        ) : null}
      </div>
      <div className="d-flex align-items-start">
        <VideoElementMemo stream={props.stream} setHeight={setHeight} mute={mute} audioOutput={audioOutput} />
        <VolumeVisualizer stream={props.stream} height={height} />
      </div>
    </div>
  );
};

type RemoteVideosProps = {
  multistream: boolean;
  simulcast: boolean;
  spotlight: boolean;
};
const RemoteVideos: React.FC<RemoteVideosProps> = (props) => {
  const { soraContents } = useSelector((state: SoraDemoState) => state);
  const { remoteMediaStreams } = soraContents;
  return (
    <div className="row mt-2">
      {remoteMediaStreams.map((mediaStream) => {
        return (
          <RemoteVideo
            key={mediaStream.id}
            stream={mediaStream}
            multistream={props.multistream}
            simulcast={props.simulcast}
            spotlight={props.spotlight}
          />
        );
      })}
    </div>
  );
};

export default RemoteVideos;
