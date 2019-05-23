import { Notice, Pagination, Title } from '../../components'
import * as React from 'react'

function handleOnChange(page: number, pageSize: number): void {
  Notice.open({
    message: `Current page ${page}, ${pageSize} items per page.`
  })
}

export const PaginationD = () => (
  <>
    <Title>Pagination</Title>
    <Pagination onChange={handleOnChange} total={1000} />
  </>
)
