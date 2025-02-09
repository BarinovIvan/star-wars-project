interface Pagination {
  page: number
  perPage: number
}

interface Filter extends Record<string, unknown> {}

interface GetListParams {
  filter: Filter
  pagination: Pagination
  search: string
}

export type { Pagination, Filter, GetListParams }
