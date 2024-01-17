import React from "react";
import Counter from "./../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increaseAsyc, decreaseAsyc } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsyc());
  };

  const onDecrease = () => {
    dispatch(decreaseAsyc());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
