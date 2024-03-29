const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsyc = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsyc = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    default:
      return state;
  }
}
