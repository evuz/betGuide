import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  FlatButton,
} from 'material-ui';
import TablePicks from './TablePicks';

import styles from './styles';

const ListPicks = (props) => {
  const { monthId, picks } = props;
  const date = new Date(parseInt(monthId, 10));
  const monthStr = date.toLocaleDateString('en', { month: 'long' });

  return (
    <div style={styles.listPicksComponent}>
      <Card>
        <CardHeader
          title={`${monthStr} ${date.getFullYear()}`}
        />
        <CardText>
          <TablePicks
            picks={picks}
          />
        </CardText>
        <CardActions style={styles.cardAction}>
          <FlatButton
            label="Delete"
            primary
          />
          <FlatButton
            label="Edit"
            primary
          />
        </CardActions>
      </Card>
    </div>
  );
};

export default ListPicks;
