import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Alert from "@/components/Alert";
import ColDebug from "@/components/ColDebug";
import ColDemo from "@/components/ColDemo";
import Forms from "@/components/Forms";
import Head from "@/components/Head";
import Header from "@/components/Header";
import LocalVideo from "@/components/LocalVideo";
import {
  disconnectSora,
  setInitialParameter,
  setMediaDevices,
  setResolution,
  setSpotlight,
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
  enabledVideo: true,
  enabledVideoBitRate: true,
  enabledVideoCodecType: true,
  enabledVideoInput: true,
  enabledSpotlightNumber: true,
};

const SpotlightSendonly: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setResolution("HD"));
    dispatch(setSpotlight("true"));
    dispatch(setVideoCodecType("VP8"));
    dispatch(setVideoBitRate("3000"));
    dispatch(setInitialParameter(ENABLED_PARAMETERS));
    dispatch(setMediaDevices());
    return () => {
      dispatch(disconnectSora());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head title={"spotlight sendonly"} />
      <Header pageName="spotlight sendonly" />
      <main role="main">
        <div className="container">
          <div className="row">
            <ColDemo>
              <Alert />
              <Forms
                connectType="sendonly"
                connectOptionMultistream={true}
                connectOptionSpotlight={true}
                connectOptionSimulcast={true}
              />
              <LocalVideo />
            </ColDemo>
            <ColDebug />
          </div>
        </div>
      </main>
    </>
  );
};

export default SpotlightSendonly;
