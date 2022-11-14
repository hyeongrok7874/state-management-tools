export const SET_COUNT = "store/SET_COUNT" as const;

export const setCount = (value: number) => ({ type: SET_COUNT, value });
