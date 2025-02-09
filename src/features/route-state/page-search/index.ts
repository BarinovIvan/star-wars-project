import { changeUrlQueryParam } from "../index"

const PAGE_SEARCH_PARAM_KEY = "search"

function changeSearch(value: string): void {
  changeUrlQueryParam(PAGE_SEARCH_PARAM_KEY, value)
}

export { changeSearch }
