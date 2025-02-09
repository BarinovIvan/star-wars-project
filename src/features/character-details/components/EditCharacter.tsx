import { FC, useCallback, useState } from "react"
import { Character } from "../../../data/types"
import { Box, Button, Typography } from "@mui/material"
import { useAppDispatch } from "../../../app/hooks"
import { updateCharacter } from "../character-details-slice"
import { EDITABLE_FIELDS, getFieldTitleByKey } from "../lib"
import { ChangeHandler } from "../types"
import EditField from "./EditField"

interface Props {
  character: Character
  disabled: boolean
}

const EditCharacter: FC<Props> = ({ character, disabled = false }) => {
  const [localCharacter, setLocalCharacter] = useState(character)
  const dispatch = useAppDispatch()

  const handleFieldChange = useCallback<ChangeHandler>((field, value) => {
    setLocalCharacter((state) => ({ ...state, [field]: value }))
  }, [])

  return (
    <Box
      sx={{
        ...(disabled && {
          pointerEvents: "none",
          touchAction: "none",
          opacity: 0.7,
        }),
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Edit: {character.name}
      </Typography>

      {EDITABLE_FIELDS.map((field) => (
        <EditField
          key={field}
          name={field}
          label={getFieldTitleByKey(field)}
          value={localCharacter[field]}
          onChange={handleFieldChange}
        />
      ))}

      <Button
        sx={{ ml: "auto", display: "block" }}
        onClick={() => {
          dispatch(updateCharacter({ ...localCharacter }))
        }}
      >
        Save
      </Button>
    </Box>
  )
}

export { EditCharacter }
