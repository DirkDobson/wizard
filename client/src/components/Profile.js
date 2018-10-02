import React from 'react'
import { 
  Grid,
  Button,
  Divider,
  Container,
  Header,
  Image,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'

class Profile extends React.Component {
  state = { editing: false}

  editView = () => {

  }
  profileView = () => {
    const { user } = this.props

    return(
      <>
      <Grid.Column width={4}>
        <Image src={user.image || defaultImage} alt="user avatar" />
      </Grid.Column>
      <Grid.Column width={8}>
      <Header as="h1">{user.name}</Header>
      <Header as="h1">{user.email}</Header>
      </Grid.Column>
      </>

    )
  }

  toggleEdit = () => {
    //this.setState({ editing: !this.state.editing})
    //this.setState( state => { 
      //return { editing: !state.editing} 
    //})
    this.setState( state => ( { editing: !state.editing } ) )
  }
  render() {
    const { editing } = this.state
    return(
      <Container>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            { editing ? this.editView() : this.profileView() }
            <Grid.Column>
              <Button onClick={this.toggleEdit}>
              { editing ? 'Cancel' : 'Edit' }
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return { user: state.user }
}
export default connect(mapStateToProps)(Profile)