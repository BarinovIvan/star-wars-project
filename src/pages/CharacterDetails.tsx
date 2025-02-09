import { FC, useEffect } from "react"
import {
  characterDetailsActions,
  fetchCharacter,
} from "../features/character-details"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { CharacterDetails } from "../features/character-details/components/CharacterDetails"
import { CircularProgress, Paper, Stack } from "@mui/material"
import { EditCharacter } from "../features/character-details/components/EditCharacter"

type Props = {
  characterId: string
}

export const CharacterDetailsPage: FC<Props> = ({ characterId }) => {
  const dispatch = useAppDispatch()
  const characterDetails = useAppSelector((state) => state.characterDetails)

  useEffect(() => {
    const fetcher = dispatch(fetchCharacter(characterId))

    return () => {
      fetcher.abort()
    }
  }, [characterId, dispatch])

  useEffect(() => {
    return () => {
      dispatch(characterDetailsActions.destroy())
    }
  }, [dispatch])

  return (
    <Paper
      sx={{
        py: 2,
        px: 4,
      }}
    >
      <Stack direction="row" justifyContent="center">
        {characterDetails.state === "loading" && <CircularProgress />}
        {characterDetails.state === "error" && <span>Error occurred</span>}
      </Stack>

      {characterDetails.state === "success" && (
        <CharacterDetails character={characterDetails.character} />
      )}

      {(characterDetails.state === "characterEditing" ||
        characterDetails.state === "characterUpdating") && (
        <EditCharacter
          disabled={characterDetails.state === "characterUpdating"}
          character={characterDetails.character}
        />
      )}
    </Paper>
  )
}
