import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getCharacters } from "../../data/storage"
import { GetListParams } from "../../shared/types"
import { CHARACTER_LIST_DEFAULT_VALUES } from "./lib"

const characterListSlice = createSlice({
  name: "characterList",
  initialState: CHARACTER_LIST_DEFAULT_VALUES,
  reducers: {
    destroy() {
      return CHARACTER_LIST_DEFAULT_VALUES
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.state = "loading"
    })

    builder.addCase(fetchCharacters.fulfilled, (state, { payload }) => {
      state.characters = payload.result
      state.totalCharacters = payload.count
      state.state = "success"
    })

    builder.addCase(fetchCharacters.rejected, (state, payload) => {
      if (!payload.meta.aborted) {
        state.state = "error"
      }
    })
  },
})

const fetchCharacters = createAsyncThunk(
  "character-list/fetchCharacters",
  (payload: GetListParams) => {
    return getCharacters(payload)
  },
)

export { characterListSlice, fetchCharacters }
