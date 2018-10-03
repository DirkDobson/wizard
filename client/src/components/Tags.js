import React from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import TagForm from './TagForm'

const Tags = () => (
  <Container>
    <TagForm />
  </Container>
)

const mapStateToProps = (state) => {
  return {tags: state.tags}
}
export default connect(state => (mapStateToProps))(Tags)