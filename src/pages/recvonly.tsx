import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ColDebug from "@/components/ColDebug";
import ColDemo from "@/components/ColDemo";
import Head from "@/components/Head";
import Header from "@/components/Header";
import { disconnectSora, setInitialParameter, setMediaDevices } from "@/slice";
import { EnabledParameters } from "@/utils";

const ENABLED_PARAMETERS: EnabledParameters = {
  audio: true,
  audioCodecType: true,
  audioOutput: true,
  channelId: true,
  metadata: true,
  video: true,
  videoCodecType: true,
};

const Recvonly: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setInitialParameter({
        audioCodecType: "OPUS",
        videoCodecType: "VP9",
      })
    );
    dispatch(setMediaDevices());
    return () => {
      dispatch(disconnectSora());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head title={"recvonly"} />
      <Header pageName="recvonly" enabledParameters={ENABLED_PARAMETERS} />
      <main role="main">
        <div className="container">
          <div className="row">
            <ColDemo connectType="recvonly" enabledParameters={ENABLED_PARAMETERS} />
            <ColDebug />
          </div>
        </div>
      </main>
    </>
  );
};

export default Recvonly;
