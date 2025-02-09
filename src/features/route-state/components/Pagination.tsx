import { FC } from "react"

import {
  FormControl,
  InputLabel,
  Pagination as MUIPagination,
  MenuItem,
  Select,
  Stack,
} from "@mui/material"
import { goToPage, changePerPage } from "../pagination"
import { PAGE_SIZES, getPageCount } from "../pagination/lib"

type Props = {
  page: number
  itemCount: number
  perPage: number
  disabled?: boolean
}

const Pagination: FC<Props> = ({
  page,
  perPage,
  itemCount,
  disabled = false,
}) => {
  const paginationCount = getPageCount(perPage, itemCount)

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <MUIPagination
        page={page}
        count={paginationCount}
        disabled={disabled}
        shape="rounded"
        onChange={(_, page) => goToPage(page)}
      />

      <FormControl variant="standard" sx={{ minWidth: 120 }} size="small">
        <InputLabel id="pagination-per-page-label">Per page</InputLabel>
        <Select
          labelId="pagination-per-page-label"
          value={perPage}
          label="Age"
          placeholder="100"
          size="small"
          onChange={(e) => changePerPage(Number(e.target.value))}
        >
          {PAGE_SIZES.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  )
}

export { Pagination }
