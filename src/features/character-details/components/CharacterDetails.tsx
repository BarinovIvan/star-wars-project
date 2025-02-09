import { FC } from "react"
import { Character } from "../../../data/types"
import { Box, IconButton, Typography } from "@mui/material"
import { Edit } from "@mui/icons-material"
import { useAppDispatch } from "../../../app/hooks"
import { characterDetailsActions } from ".."
import { InfoField } from "./InfoField"

interface Props {
  character: Character
}

export const CharacterDetails: FC<Props> = ({ character }) => {
  const dispatch = useAppDispatch()

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        onClick={() =>
          dispatch(characterDetailsActions.changeState("characterEditing"))
        }
        sx={{ position: "absolute", top: 0, right: 0 }}
      >
        <Edit />
      </IconButton>

      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        {character.name}
      </Typography>

      <InfoField title="Birth Year" value={character.birth_year} />
      <InfoField title="Gender" value={character.gender} />
      <InfoField title="Eye Color" value={character.eye_color} />
      <InfoField title="Hair Color" value={character.hair_color} />
      <InfoField title="Height" value={character.height} />
      <InfoField title="Mass" value={character.mass} />
      <InfoField title="Skin Color" value={character.skin_color} />
    </Box>
  )
}
