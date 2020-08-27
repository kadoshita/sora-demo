import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setAudioOutput, SoraDemoState } from "@/slice";

const FormAudioOutput: React.FC = () => {
  const { audioOutput, audioOutputDevices } = useSelector((state: SoraDemoState) => state);
  const dispatch = useDispatch();
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setAudioOutput(event.target.value));
  };
  return (
    <div className="col-auto form-inline flex-nowrap mb-1">
      <label className="mr-1" htmlFor="audioOutput">
        audioOutput:
      </label>
      <select
        id="audioOutput"
        className="custom-select"
        name="audioOutput"
        value={audioOutput}
        onChange={onChange}
        disabled={audioOutputDevices.length === 0}
      >
        {audioOutputDevices.map((deviceInfo) => {
          return (
            <option key={deviceInfo.deviceId} value={deviceInfo.deviceId}>
              {deviceInfo.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormAudioOutput;
