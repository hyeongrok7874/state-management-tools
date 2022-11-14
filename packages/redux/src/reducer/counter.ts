import { SET_COUNT, setCount } from "action";
import { initialState, CounterState } from "store";

type CounterAction = ReturnType<typeof setCount>;

export default function counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case SET_COUNT:
      return { count: (state.count = action.value) };
    default:
      return state;
  }
}
