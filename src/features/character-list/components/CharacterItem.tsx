import { Character } from "../../../data/types"
import { FC } from "react"
import { Link } from "wouter"
import Paper from "@mui/material/Paper"
import { grey } from "@mui/material/colors"
import { Typography } from "@mui/material"

type Props = {
  character: Character
}

const CharacterItem: FC<Props> = ({ character }) => {
  return (
    <Link href={`/character/${character.id}`}>
      <Paper
        component="a"
        sx={{
          py: 2,
          px: 2,
          textDecoration: "none",

          ":hover": {
            backgroundColor: grey[200],
          },
        }}
      >
        <Typography variant="body1">{character.name}</Typography>
      </Paper>
    </Link>
  )
}

export { CharacterItem }
