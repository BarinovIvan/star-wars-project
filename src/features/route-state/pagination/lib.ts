import { changeUrlQueryParam } from "../index"

function goToPage(page: number): void {
  changeUrlQueryParam(PAGE_PARAM_KEY, String(page))
}

function changePerPage(perPage: number): void {
  changeUrlQueryParam(PER_PAGE_PARAM_KEY, String(perPage))
}

function getPageCount(perPage: number, itemCount: number): number {
  return Math.ceil(itemCount / perPage)
}

const PAGE_SIZES = [10, 30, 50]

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = PAGE_SIZES[0]

const PAGE_PARAM_KEY = "page"
const PER_PAGE_PARAM_KEY = "perPage"

export {
  goToPage,
  changePerPage,
  getPageCount,
  PAGE_SIZES,
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  PAGE_PARAM_KEY,
  PER_PAGE_PARAM_KEY,
}
