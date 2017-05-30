import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui';

const TablePicks = (props) => {
  const { picks } = props;

  const picksItem = picks.map((pick, index) => (
    <TableRow key={index}>
      <TableRowColumn>{pick.sport}</TableRowColumn>
      <TableRowColumn>{pick.competition}</TableRowColumn>
      <TableRowColumn>{pick.match}</TableRowColumn>
      <TableRowColumn>{pick.pick}</TableRowColumn>
      <TableRowColumn>{pick.stake}</TableRowColumn>
      <TableRowColumn>{pick.odd}</TableRowColumn>
      <TableRowColumn>{pick.result}</TableRowColumn>
      <TableRowColumn>{pick.tipster}</TableRowColumn>
    </TableRow>
  ));
  return (
    <div>
      <Table
        multiSelectable
        displaySelectAll
        enableSelectAll
      >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Sport</TableHeaderColumn>
            <TableHeaderColumn>Competition</TableHeaderColumn>
            <TableHeaderColumn>Match</TableHeaderColumn>
            <TableHeaderColumn>Pick</TableHeaderColumn>
            <TableHeaderColumn>Stake</TableHeaderColumn>
            <TableHeaderColumn>Odd</TableHeaderColumn>
            <TableHeaderColumn>Result</TableHeaderColumn>
            <TableHeaderColumn>Tipster</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox
          showRowHover
        >
          {picksItem}
        </TableBody>
      </Table>
    </div>
  );
};

export default TablePicks;
