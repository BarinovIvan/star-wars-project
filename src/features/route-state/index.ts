import { RouteState } from "./types"

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, PAGE_SIZES } from "./pagination/lib"

function changeUrlQuery(params: URLSearchParams): void {
  window.history.pushState(null, "", `?${params}`)
}

function changeUrlQueryParam(key: string, value: string): void {
  const params = new URLSearchParams(window.location.search)
  params.set(key, value)
  changeUrlQuery(params)
}

function getParamsFromSearch(
  searchQuery: string,
): Partial<Record<string, string>> {
  const params = new URLSearchParams(searchQuery)
  return Object.fromEntries(params.entries())
}

function getRouteState(locationSearch: string): RouteState {
  const {
    page,
    perPage: rawPerPage,
    search = "",
    ...filter
  } = getParamsFromSearch(locationSearch)

  const perPage = Number(rawPerPage)

  return {
    filter,
    pagination: {
      page: Number(page ?? DEFAULT_PAGE),
      perPage: PAGE_SIZES.includes(perPage) ? perPage : DEFAULT_PAGE_SIZE,
    },
    search,
  }
}

export { getRouteState, changeUrlQuery, changeUrlQueryParam }
