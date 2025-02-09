import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getCharacter, setCharacter } from "../../data/storage"
import { Character } from "../../data/types"
import { CHARACTER_DETAILS_DEFAULT_VALUES } from "./lib"
import { SuccessState } from "./types"

const characterDetailsSlice = createSlice({
  name: "characterDetails",
  initialState: CHARACTER_DETAILS_DEFAULT_VALUES,
  reducers: {
    changeState(state, { payload }: PayloadAction<SuccessState>) {
      state.state = payload
    },

    destroy() {
      return CHARACTER_DETAILS_DEFAULT_VALUES
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchCharacter.pending, (state) => {
      state.state = "loading"
    })

    builder.addCase(fetchCharacter.fulfilled, (state, { payload }) => {
      state.state = "success"
      state.character = payload
    })

    builder.addCase(fetchCharacter.rejected, (state, payload) => {
      if (!payload.meta.aborted) {
        state.state = "error"
      }
    })

    builder.addCase(updateCharacter.pending, (state) => {
      state.state = "characterUpdating"
    })

    builder.addCase(updateCharacter.fulfilled, (state, payload) => {
      state.state = "success"
      state.character = payload.payload
    })

    builder.addCase(updateCharacter.rejected, (state, payload) => {
      if (!payload.meta.aborted) {
        state.state = "error"
      }
    })
  },
})

const fetchCharacter = createAsyncThunk(
  "character-details/fetchCharacter",
  (characterId: string) => {
    return getCharacter(characterId)
  },
)

const updateCharacter = createAsyncThunk(
  "character-details/updateCharacter",
  async (character: Character) => {
    await setCharacter(character)

    return character
  },
)

export { characterDetailsSlice, fetchCharacter, updateCharacter }
