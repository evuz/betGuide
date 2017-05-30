import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardHeader,
  CardActions,
  CardText,
  DatePicker,
  FlatButton,
  TextField,
  SelectField,
  MenuItem,
} from 'material-ui';
import { saveDataPick } from '../../reducers/createPick';
import styles from './styles';
import { listSports, listBookies } from './lists';

class CreatePick extends Component {
  constructor() {
    super();

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleSubmit() {
    this.handleKeyUp({});
    console.log(this.props.data);
  }

  handleKeyUp(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  handleChangeText(e) {
    this.props.saveDataPick({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeSelect(name, value) {
    this.props.saveDataPick({
      [name]: value,
    });
  }

  handleChangeDate(name, value) {
    this.props.saveDataPick({
      [name]: value.getTime(),
    });
  }

  render() {
    const { data } = this.props;
    const DateTimeFormat = global.Intl.DateTimeFormat;
    return (
      <Card style={styles.card} onKeyUp={this.handleKeyUp}>
        <CardHeader
          title="Introduce New Pick"
        />
        <CardText style={styles.cardText}>
          <SelectField
            floatingLabelText="Sport"
            value={data.sport}
            onChange={(e, i, value) => this.handleChangeSelect('sport', value)}
            name="sport"
            style={styles.textField}
          >
            {
              listSports.map((sport, index) => (
                <MenuItem
                  value={sport}
                  key={index}
                  primaryText={sport}
                />
              ))
            }
          </SelectField>
          <SelectField
            floatingLabelText="Bookie"
            value={data.bookie}
            onChange={(e, i, value) => this.handleChangeSelect('bookie', value)}
            name="bookie"
            style={styles.textField}
          >
            {
              listBookies.map((bookie, index) => (
                <MenuItem
                  key={index}
                  value={bookie}
                  primaryText={bookie}
                />
              ))
            }
          </SelectField>
          <TextField
            floatingLabelText="Tipster"
            name="tipster"
            value={data.tipster}
            onChange={this.handleChangeText}
            style={styles.textField}
          />
          <TextField
            floatingLabelText="Competition"
            name="competition"
            value={data.competition}
            onChange={this.handleChangeText}
            style={styles.textField}
          />
          <TextField
            floatingLabelText="Match"
            name="match"
            value={data.match}
            onChange={this.handleChangeText}
            style={styles.fullTextField}
          />
          <TextField
            floatingLabelText="Pick"
            name="pick"
            value={data.pick}
            onChange={this.handleChangeText}
            style={styles.fullTextField}
          />
          <DatePicker
            floatingLabelText="Date"
            mode="landscape"
            name="date"
            onChange={(e, date) => this.handleChangeDate('date', date)}
            formatDate={new DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format}
          />
          <TextField
            floatingLabelText="Stake"
            name="stake"
            type="number"
            value={data.stake}
            onChange={this.handleChangeText}
            style={styles.numberField}
          />
          <TextField
            floatingLabelText="Odd"
            name="odd"
            type="number"
            value={data.odd}
            onChange={this.handleChangeText}
            style={styles.numberField}
          />
        </CardText>
        <CardActions style={styles.carAction}>
          <FlatButton
            onTouchTap={this.handleSubmit}
            label="Create"
          />
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  data: state.createPick.pickData,
});

const mapDispatchToProps = {
  saveDataPick,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePick);
