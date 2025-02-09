import { configureStore } from "@reduxjs/toolkit"
import { characterListReducer } from "../features/character-list"
import { characterDetailsReducer } from "../features/character-details"

export const store = configureStore({
  reducer: {
    characterList: characterListReducer,
    characterDetails: characterDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["character-list/fetch/pending"],
        ignoredPaths: ["character-list.loading"],
      },
    }),
})
