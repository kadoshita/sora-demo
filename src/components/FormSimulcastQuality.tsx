import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSimulcastQuality, SoraDemoState } from "@/slice";
import { isSimulcastQuality } from "@/utils";

const FormSimulcastQuality: React.FC = () => {
  const { simulcastQuality } = useSelector((state: SoraDemoState) => state);
  const dispatch = useDispatch();
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    if (isSimulcastQuality(event.target.value)) {
      dispatch(setSimulcastQuality(event.target.value));
    }
  };
  return (
    <div className="col-auto form-inline flex-nowrap mb-1">
      <label className="mr-1" htmlFor="simulcastQuality">
        simulcastQuality:
      </label>
      <select
        id="simulcastQuality"
        className="custom-select"
        name="simulcastQuality"
        value={simulcastQuality}
        onChange={onChange}
      >
        <option value="">未指定</option>
        <option value="low">low</option>
        <option value="middle">middle</option>
        <option value="high">high</option>
      </select>
    </div>
  );
};

export default FormSimulcastQuality;
