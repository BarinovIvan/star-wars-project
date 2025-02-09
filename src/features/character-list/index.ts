import { characterListSlice, fetchCharacters } from "./character-list-slice"

export const characterListReducer = characterListSlice.reducer
export const characterListActions = characterListSlice.actions

export { fetchCharacters }
