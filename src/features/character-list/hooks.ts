import { useMemo } from "react"
import { useSearch } from "wouter/use-location"
import { getRouteState } from "../route-state"
import { RouteState } from "../route-state/types"
import { FetchParams } from "./types"

export function useCharacterListRouteState(): RouteState {
  const locationSearch = useSearch()

  return useMemo<FetchParams>(() => {
    return getRouteState(locationSearch)
  }, [locationSearch])
}
