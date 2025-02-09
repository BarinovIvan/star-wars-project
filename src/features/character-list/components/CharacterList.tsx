import { FC, useEffect } from "react"
import { useCharacterListRouteState } from "../hooks"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { fetchCharacters } from ".."
import { Box, CircularProgress, Stack } from "@mui/material"
import { Pagination } from "../../route-state/components/Pagination"
import { CharacterItem } from "./CharacterItem"

const CharacterList: FC = () => {
  const routeState = useCharacterListRouteState()
  const { characters, state, totalCharacters } = useAppSelector(
    (state) => state.characterList,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetcher = dispatch(fetchCharacters(routeState))

    return () => {
      fetcher.abort()
    }
  }, [dispatch, routeState])

  const { pagination } = routeState

  return (
    <>
      {state === "loading" ? (
        <Stack direction="row" justifyContent="center">
          <CircularProgress />
        </Stack>
      ) : (
        <Stack spacing={2}>
          {characters.map((character) => (
            <CharacterItem character={character} key={character.id} />
          ))}
        </Stack>
      )}

      <Box sx={{ mt: 4 }}>
        <Pagination
          perPage={pagination.perPage}
          itemCount={totalCharacters}
          page={pagination.page}
          disabled={state === "loading"}
        />
      </Box>
    </>
  )
}

export { CharacterList }
