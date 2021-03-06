import React from 'react'
import { connect } from 'react-redux'
import {
  Card,
  List,
  Image,
} from 'semantic-ui-react'
import { getLikeUsers } from '../reducers/likeUsers'
import TagList from './TagList';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'

class LikeUsers extends React.Component {
  componentDidMount() {
    this.reload()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tags !== this.props.tag)
      this.reload()   
  }

  reload = () => {
    this.props.dispatch(getLikeUsers())
  }

  render() {
    return (
      <Card.Group itemsPerRow={4} stackable>
        { this.props.likeUsers.map( user => {
          const { id, name, image, tags } = user
          return (
            <Card key={id}>
            <Image src={image || defaultImage}
            alt="user Avatar"
            />
            <Card.Header>{name}</Card.Header>
            <TagList />
              
              </Card>
          )
        })
        }
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    likeUsers: state.likeUsers
  }
}

export default connect(mapStateToProps)(LikeUsers)