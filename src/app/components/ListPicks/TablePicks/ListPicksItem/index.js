import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui';

const ListPicksItem = (props) => {
  const { pick } = props;
  return (
    <TableRow>
      <TableRowColumn>{pick.sport}</TableRowColumn>
      <TableRowColumn>{pick.match}</TableRowColumn>
      <TableRowColumn>{pick.result}</TableRowColumn>
    </TableRow>
  );
};

export default ListPicksItem;
