import React from 'react'
import {
  List,
} from 'semantic-ui-react'

const TagList = ({ tags }) => (
  <List divided horizontal>
  { tags.map( tag =>
  <List.Item key={tag.id}>
  #{tag.name}
  </List.Item>
  )
  }
  </List>
)

export default TagList