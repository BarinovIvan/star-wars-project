import { FC } from "react"
import { Box, Typography } from "@mui/material"
import { FieldProps } from "../types"

export const InfoField: FC<FieldProps> = ({ title, value }) => (
  <Box sx={{ mb: 1, ":last-child": { mb: 0 } }}>
    <Typography variant="h6" component="h2">
      {title}
    </Typography>
    <Typography variant="body1">{value}</Typography>
  </Box>
)
