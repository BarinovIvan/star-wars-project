import { FC, memo } from "react"
import { Box, TextField } from "@mui/material"
import { ChangeHandler } from "../types"
import { Character } from "../../../data/types"

interface Props {
  name: keyof Character
  label: string
  value: string
  onChange: ChangeHandler
}

const EditField: FC<Props> = memo(({ name, label, value, onChange }) => (
  <Box sx={{ mb: 4, ":last-child": { mb: 0 } }}>
    <TextField
      fullWidth
      label={label}
      size="small"
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    />
  </Box>
))

export default EditField
