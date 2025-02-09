import {
  characterDetailsSlice,
  fetchCharacter,
} from "./character-details-slice"

export const characterDetailsReducer = characterDetailsSlice.reducer
export const characterDetailsActions = characterDetailsSlice.actions

export { fetchCharacter }
