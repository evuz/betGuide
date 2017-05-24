import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardText,
  CardHeader,
  CardActions,
  FlatButton,
} from 'material-ui';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './index.scss';

const StatsDetailsItem = (props) => {
  const { id, winPicks, lostPicks, voidPicks, profits, totalStake } = props.stat;
  const date = new Date(parseInt(id, 10));
  const monthStr = date.toLocaleDateString('en', { month: 'long' });
  const totalPicks = winPicks + lostPicks + voidPicks;
  const monthYield = (profits / (totalStake)) * 100;

  const data = [
    { name: 'Wins', value: winPicks },
    { name: 'Void', value: voidPicks },
    { name: 'Lost', value: lostPicks },
  ];
  const COLORS = ['#50b432', '#058dc7', '#ed561b'];

  return (
    <div className="stats_details_component_item">
      <Card style={style.card}>
        <CardHeader
          title={`${monthStr} ${date.getFullYear()}`}
        />
        <CardText style={style.cardTextChart}>
          <div style={style.pieChartSpan}>
            <span style={style.pieChartSpan.text}>{profits.toFixed(2)}</span>
          </div>
          <PieChart width={218} height={180}>
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
            >
              {
                data.map((entry, index) =>
                  <Cell fill={COLORS[index % COLORS.length]} key={index} />)
              }
            </Pie>
            <Tooltip />
          </PieChart>
        </CardText>
        <CardText style={style.cardText}>
          <span><b>Yield:</b> {monthYield.toFixed(2)}%</span>
          <span><b>Nº Picks:</b> {totalPicks}</span>
        </CardText>
        <CardActions style={style.cardActions}>
          <FlatButton
            label="Details"
            primary
            containerElement={<Link to="/monthStats" />}
          />
        </CardActions>
      </Card>
    </div>
  );
};

const style = {
  card: {
    width: '250px',
    paddingBottom: '0px',
  },
  cardTextChart: {
    paddingTop: '0px',
    paddingBottom: '0px',
    position: 'relative',
  },
  cardText: {
    paddingBottom: '8px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  pieChartSpan: {
    position: 'absolute',
    top: 0,
    left: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '218px',
    height: '180px',
    text: {
      fontSize: '28px',
    },
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export default StatsDetailsItem;
