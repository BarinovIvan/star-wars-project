import { IPeople } from "swapi-ts"

interface BaseStarWarsEntity {
  id: string
}

interface Character
  extends Omit<IPeople, "created" | "edited">,
    BaseStarWarsEntity {}

interface NamedStarWarsEntity extends BaseStarWarsEntity {
  name: string
}

interface Film extends BaseStarWarsEntity {
  title: string
}

interface Species extends NamedStarWarsEntity {}

interface Vehicle extends NamedStarWarsEntity {}

interface Starship extends NamedStarWarsEntity {}

interface Filter {
  [key: string]: any
}

export type { Character, Film, Species, Vehicle, Starship, Filter }
