import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardActions,
  CardText,
  FlatButton,
  TextField,
} from 'material-ui';
import styles from './styles';

class CreatePick extends Component {
  constructor() {
    super();

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.handleKeyUp({});
    console.log('submit');
  }

  handleKeyUp(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <Card style={styles.card} onKeyUp={this.handleKeyUp}>
        <CardHeader
          title="Introduce New Pick"
        />
        <CardText>
          <TextField
            hintText="Sport"
            name="sport"
          />
          <TextField
            hintText="Name"
            name="name"
          />
          <TextField
            hintText="Sport"
            name="sport"
          />
        </CardText>
        <CardActions style={styles.carAction}>
          <FlatButton
            label="Create"
          />
        </CardActions>
      </Card>
    );
  }
}

export default CreatePick;
