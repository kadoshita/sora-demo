import React from "react";
import { useSelector } from "react-redux";
import { SimulcastQuality } from "sora-js-sdk";

import { changeSimulcastQuality } from "@/api";
import { SoraDemoState } from "@/slice";

type Props = {
  quality: SimulcastQuality;
};
const ChangeSimulcastQuality: React.FC<Props> = (props) => {
  const { soraContents, channelId } = useSelector((state: SoraDemoState) => state);
  const onClick = (): void => {
    if (soraContents.sora?.connectionId) {
      changeSimulcastQuality(channelId, soraContents.sora.connectionId, props.quality);
    }
  };
  return (
    <div className="col-auto mb-1">
      <input
        className="btn btn-secondary"
        type="button"
        name={`changeAllSimulcastQualityTo${props.quality.charAt(0).toUpperCase() + props.quality.slice(1)}`}
        defaultValue={`${props.quality} quality`}
        onClick={onClick}
      />
    </div>
  );
};

export default ChangeSimulcastQuality;
