import { InputGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrementSwitchCheckingAction, increment } from "../../../app/Features/CounterFeatures/action";

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center">
      <div className="wrapper col-md-6 my-5">
        <InputGroup className="mb-3">
          <Button className="btn btn-primary" onClick={() => dispatch(decrementSwitchCheckingAction(1))}>
            -
          </Button>
          <input className="form-control text-center" value={count} disabled />
          <Button className="btn btn-primary" onClick={() => dispatch(increment(1))}>
            +
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Counter;
