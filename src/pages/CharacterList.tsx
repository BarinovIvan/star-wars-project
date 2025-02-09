import { FC, useEffect } from "react"

import { Search } from "../features/route-state/components/Search"
import { CharacterList } from "../features/character-list/components/CharacterList"
import { Box } from "@mui/material"
import { useAppDispatch } from "../app/hooks"
import { characterListActions } from "../features/character-list"

export const CharacterListPage: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(characterListActions.destroy())
    }
  }, [dispatch])

  return (
    <div>
      <Search />

      <Box sx={{ mt: 4 }}>
        <CharacterList />
      </Box>
    </div>
  )
}
