import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Alert from "@/components/Alert";
import ColDebug from "@/components/ColDebug";
import ColDemo from "@/components/ColDemo";
import Forms from "@/components/Forms";
import Head from "@/components/Head";
import Header from "@/components/Header";
import LocalVideo from "@/components/LocalVideo";
import RemoteVideos from "@/components/RemoteVideos";
import {
  disconnectSora,
  setInitialParameter,
  setMediaDevices,
  setResolution,
  setVideoBitRate,
  setVideoCodecType,
} from "@/slice";

const ENABLED_PARAMETERS = {
  enabledAudio: true,
  enabledAudioBitRate: true,
  enabledAudioCodecType: true,
  enabledAudioInput: true,
  enabledAudioOutput: true,
  enabledAutoGainControl: true,
  enabledChannelId: true,
  enabledCpuOveruseDetection: true,
  enabledEchoCancellation: true,
  enabledEchoCancellationType: true,
  enabledFake: true,
  enabledFrameRate: true,
  enabledGetDisplayMedia: true,
  enabledNoiseSuppression: true,
  enabledResolution: true,
  enabledSimulcastQuality: true,
  enabledVideo: true,
  enabledVideoBitRate: true,
  enabledVideoCodecType: true,
  enabledVideoInput: true,
};

const MultiSimulcastSendrecv: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setVideoCodecType("VP8"));
    dispatch(setVideoBitRate("3000"));
    dispatch(setResolution("HD"));
    dispatch(setInitialParameter(ENABLED_PARAMETERS));
    dispatch(setMediaDevices());
    return () => {
      dispatch(disconnectSora());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head title={"multi simulcast sendrecv"} />
      <Header pageName="multi simulcast sendrecv" />
      <main role="main">
        <div className="container">
          <div className="row">
            <ColDemo>
              <Alert />
              <Forms connectType="sendrecv" connectOptionMultistream={true} connectOptionSimulcast={true} />
              <LocalVideo />
              <RemoteVideos />
            </ColDemo>
            <ColDebug />
          </div>
        </div>
      </main>
    </>
  );
};

export default MultiSimulcastSendrecv;
