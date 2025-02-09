import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./types"

export const useAppDispatch = (): AppDispatch => {
  return useDispatch<AppDispatch>()
}

export const useAppSelector: TypedUseSelectorHook<RootState> = <T>(
  selector: (state: RootState) => T,
): T => {
  return useSelector<RootState, T>((state) => {
    const value = selector(state)
    return value ?? ({} as T)
  })
}
