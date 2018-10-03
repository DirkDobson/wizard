import React from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Divider,
  List,
  Image,
} from 'semantic-ui-react'
import { getLikeUsers } from '../reducers/likeUsers'

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'

class LikeUsers extends React.Component {
  componentDidMount() {
    this.reload()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.likeUsers !== this.props.likeUsers)
      this.reload()
  }

  reload = () => {
    this.props.dispatch(getLikeUsers())
  }

  render() {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    likeUsers: state.likeUsers
  }
}

export default connect(mapStateToProps)(LikeUsers)