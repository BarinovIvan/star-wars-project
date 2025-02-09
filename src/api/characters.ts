import { People, IPeople } from "swapi-ts"
import { GetListParams } from "../shared/types"
import { extractResourceId } from "./lib"
import { Character } from "./types"

export async function fetchCharacters(params: GetListParams): Promise<{
  count: number
  result: Character[]
}> {
  try {
    const characters = await People.find()
    const filteredCharacters = characters.resources.filter(({ value }) =>
      value.name.toLowerCase().includes(params.search?.toLowerCase() ?? ""),
    )

    return {
      count: filteredCharacters.length,
      result: filteredCharacters
        .slice(
          (params.pagination.page - 1) * params.pagination.perPage,
          params.pagination.page * params.pagination.perPage,
        )
        .map(({ value }) => ({
          id: extractResourceId(value.url),
          ...value,
        })),
    }
  } catch (error) {
    throw new Error(
      `Failed to fetch characters: ${
        error instanceof Error ? error.message : String(error)
      }`,
    )
  }
}

export async function fetchCharacter(id: string): Promise<Character> {
  const characterUrl = `https://swapi.dev/api/people/${id}`

  try {
    const response = await fetch(characterUrl, {
      headers: { accept: "application/json" },
    })
    const characterData: IPeople = await response.json()
    return {
      id,
      ...characterData,
    }
  } catch (error) {
    throw new Error(
      `Failed to fetch character: ${
        error instanceof Error ? error.message : String(error)
      }`,
    )
  }
}
