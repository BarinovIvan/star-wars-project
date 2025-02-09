import { Character } from "./types"
import * as charactersApi from "../api/characters"
import { GetListParams } from "../shared/types"
import { LOCAL_STORAGE_KEY } from "./lib"

async function getCharacters(params: GetListParams): Promise<{
  result: Character[]
  count: number
}> {
  const { result, count } = await charactersApi.fetchCharacters(params)

  return {
    count,
    result: result.map((person) => {
      const localPerson = getCharacterFromLocalStorage(person.id)

      return localPerson ?? person
    }),
  }
}

async function getCharacter(characterId: string): Promise<Character> {
  const savedCharacter = getCharacterFromLocalStorage(characterId)

  if (savedCharacter) return savedCharacter

  const character = await charactersApi.fetchCharacter(characterId)

  saveCharacterToLocalStorage(character)

  return character
}

async function setCharacter(character: Character): Promise<void> {
  await Promise.resolve()

  saveCharacterToLocalStorage(character)
}

function getCharacterFromLocalStorage(characterId: string): Character | null {
  const value = localStorage.getItem(getCharacterKey(characterId))

  if (!value) return null

  const character = JSON.parse(value)
  return { ...character }
}

function saveCharacterToLocalStorage(character: Character): void {
  localStorage.setItem(getCharacterKey(character.id), JSON.stringify(character))
}

function getCharacterKey(characterId: string) {
  return `${LOCAL_STORAGE_KEY}.${characterId}`
}

export { getCharacters, getCharacter, setCharacter }
