import { FC, useMemo } from "react"
import { Input, InputAdornment } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"
import { debounce } from "lodash"
import { goToPage } from "../pagination"
import { changeSearch } from "../page-search"
import { getRouteState } from "../index"

const Search: FC = () => {
  const defaultValue = getRouteState(window.location.search).search

  const debouncedChange = useMemo(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        changeSearch(event.target.value)
        goToPage(1)
      }, 500),
    [],
  )

  return (
    <Input
      onChange={debouncedChange}
      defaultValue={defaultValue}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
      fullWidth
    />
  )
}

export { Search }
