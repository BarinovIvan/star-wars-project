import { Character } from "../../data/types"

interface FieldProps {
  title: string
  value: string
}

type EditFieldName = keyof Omit<
  Character,
  "homeworld" | "films" | "species" | "starships" | "vehicles"
>

interface ChangeHandler {
  (field: keyof Character, value: string): void
}

type CharacterDetailsState =
  | { state: "loading" | "error"; character: undefined }
  | {
      state: SuccessState
      character: Character
    }
type SuccessState = "success" | "characterEditing" | "characterUpdating"

export type {
  FieldProps,
  EditFieldName,
  ChangeHandler,
  CharacterDetailsState,
  SuccessState,
}
