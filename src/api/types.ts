import { IPeople } from "swapi-ts"

type Character = IPeople & { id: string }

export type { Character }
