import { EditFieldName, CharacterDetailsState } from "./types"
import { Character } from "../../data/types"

const EDITABLE_FIELDS: EditFieldName[] = [
  "birth_year",
  "gender",
  "eye_color",
  "hair_color",
  "height",
  "mass",
  "skin_color",
]

const TITLE_KEY_MAPPING: Record<keyof Character, string> = {
  birth_year: "Birth Year",
  eye_color: "Eye Color",
  films: "Films",
  gender: "Gender",
  hair_color: "Hair Color",
  height: "Height",
  homeworld: "Homeworld",
  id: "Id",
  mass: "Mass",
  name: "Name",
  skin_color: "Skin Color",
  species: "Species",
  starships: "Starships",
  url: "Url",
  vehicles: "Vehicles",
}

function getFieldTitleByKey(key: keyof Character): string {
  return TITLE_KEY_MAPPING[key]
}

const CHARACTER_DETAILS_DEFAULT_VALUES: CharacterDetailsState = {
  state: "error",
  character: undefined,
}

export {
  EDITABLE_FIELDS,
  TITLE_KEY_MAPPING,
  CHARACTER_DETAILS_DEFAULT_VALUES,
  getFieldTitleByKey,
}
