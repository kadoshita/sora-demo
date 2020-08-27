import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setChannelId, SoraDemoState } from "@/slice";

const FormChannelId: React.FC = () => {
  const { channelId } = useSelector((state: SoraDemoState) => state);
  const dispatch = useDispatch();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setChannelId(event.target.value));
  };
  return (
    <div className="col-auto form-inline flex-nowrap mb-1">
      <label className="mr-1" htmlFor="channelId">
        channelId:
      </label>
      <input
        id="channelId"
        type="text"
        className="form-control"
        name="channelId"
        placeholder="ChannelIdを指定"
        value={channelId}
        onChange={onChange}
      />
    </div>
  );
};

export default FormChannelId;
