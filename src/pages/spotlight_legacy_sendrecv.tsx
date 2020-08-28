import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ColDebug from "@/components/ColDebug";
import ColDemo from "@/components/ColDemo";
import Head from "@/components/Head";
import Header from "@/components/Header";
import { disconnectSora, setInitialParameter, setMediaDevices } from "@/slice";

const ENABLED_PARAMETERS = {
  audio: true,
  audioBitRate: true,
  audioCodecType: true,
  audioInput: true,
  audioOutput: true,
  autoGainControl: true,
  channelId: true,
  cpuOveruseDetection: true,
  echoCancellation: true,
  echoCancellationType: true,
  fake: true,
  frameRate: true,
  getDisplayMedia: true,
  noiseSuppression: true,
  resolution: true,
  spotlight: true,
  video: true,
  videoBitRate: true,
  videoCodecType: true,
  videoInput: true,
};

const SpotlightLegacySendrecv: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialParameter());
    dispatch(setMediaDevices());
    return () => {
      dispatch(disconnectSora());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head title={"spotlight sendrecv"} />
      <Header pageName="spotlight sendrecv" enabledParameters={ENABLED_PARAMETERS} />
      <main role="main">
        <div className="container">
          <div className="row">
            <ColDemo
              connectType="sendrecv"
              multistream={true}
              spotlight={true}
              enabledParameters={ENABLED_PARAMETERS}
            />
            <ColDebug />
          </div>
        </div>
      </main>
    </>
  );
};

export default SpotlightLegacySendrecv;