import { Character } from "../../data/types"
import { RouteState } from "../route-state/types"

interface CharacterListState {
  state: "loading" | "success" | "error"
  totalCharacters: number
  characters: Character[]
}

type FetchParams = RouteState

export type { CharacterListState, FetchParams }
