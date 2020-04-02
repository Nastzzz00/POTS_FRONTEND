import _ from 'lodash'

import React from 'react'
import { Search, Grid } from 'semantic-ui-react'

export interface ISearchProps {
  onSearch?: any
  size?: any
}
const SearchComponent = (props: ISearchProps) => {
  const { onSearch, size } = props
  return (
    <Grid>
      <Grid.Column width={6}>
        <Search fluid size={size} onSearchChange={onSearch} />
      </Grid.Column>
    </Grid>
  )
}

export default SearchComponent
