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
import { disconnectSora, setInitialParameter, setMediaDevices } from "@/slice";

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
  enabledVideo: true,
  enabledVideoBitRate: true,
  enabledVideoCodecType: true,
  enabledVideoInput: true,
};

const MultiSendrecv: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialParameter(ENABLED_PARAMETERS));
    dispatch(setMediaDevices());
    return () => {
      dispatch(disconnectSora());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head title={"multi sendrecv"} />
      <Header pageName="multi sendrecv" />
      <main role="main">
        <div className="container">
          <div className="row">
            <ColDemo>
              <Alert />
              <Forms connectType="sendrecv" connectOptionMultistream={true} />
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

export default MultiSendrecv;
