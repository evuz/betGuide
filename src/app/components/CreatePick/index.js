import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardActions,
  CardText,
  FlatButton,
  TextField,
  SelectField,
  MenuItem,
} from 'material-ui';
import styles from './styles';
import { listSports, listBookies } from './lists';

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
        <CardText style={styles.cardText}>
          <SelectField
            floatingLabelText="Sport"
            name="sport"
            style={styles.textField}
          >
            {
              listSports.map(sport => (
                <MenuItem
                  value={sport}
                  primaryText={sport}
                />
              ))
            }
          </SelectField>
          <SelectField
            floatingLabelText="Bookie"
            name="sport"
            style={styles.textField}
          >
            {
              listBookies.map(bookie => (
                <MenuItem
                  value={bookie}
                  primaryText={bookie}
                />
              ))
            }
          </SelectField>
          <TextField
            hintText="Tipster"
            name="tipster"
            style={styles.textField}
          />
          <TextField
            hintText="Competition"
            name="competition"
            style={styles.textField}
          />
          <TextField
            hintText="Match"
            name="match"
            style={styles.fullTextField}
          />
          <TextField
            hintText="Pick"
            name="pick"
            fullWidth
            style={styles.fullTextField}
          />
          <TextField
            hintText="Stake"
            name="stake"
            type="number"
            style={styles.numberField}
          />
          <TextField
            hintText="Odd"
            name="odd"
            type="number"
            style={styles.numberField}
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
