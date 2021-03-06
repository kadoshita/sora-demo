import React from "react";
import { useSelector } from "react-redux";
import { SimulcastQuality } from "sora-js-sdk";

import { requestSpotlightQuality } from "@/api";
import { SoraDemoState } from "@/slice";

type Props = {
  quality: SimulcastQuality;
  streamId: string;
};
const RequestSimulcastQualityByStreamId: React.FC<Props> = (props) => {
  const { soraContents, channelId } = useSelector((state: SoraDemoState) => state);
  const onClick = (): void => {
    if (soraContents.sora?.connectionId) {
      requestSpotlightQuality(channelId, soraContents.sora.connectionId, props.quality, props.streamId);
    }
  };
  return (
    <input
      className="btn btn-secondary btn-sm mb-1 mx-1"
      type="button"
      name={`RequestSimulcastQualityTo${props.quality.charAt(0).toUpperCase() + props.quality.slice(1)}`}
      defaultValue={`${props.quality} quality`}
      onClick={onClick}
    />
  );
};

export default RequestSimulcastQualityByStreamId;
