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
      <TableRowColumn>{pick.match}</TableRowColumn>
      <TableRowColumn>{pick.result}</TableRowColumn>
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
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Result</TableHeaderColumn>
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
