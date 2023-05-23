import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
// RootState 타입이 미리 입력된 훅을 만들어서 사용
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;