import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui';
import ListPicksItem from './ListPicksItem';

class TablePicks extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { picks } = this.props;

    const picksItem = picks.map(pick => (
      <ListPicksItem
        pick={pick}
      />
    ));
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Sport</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Result</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {picksItem}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default TablePicks;
