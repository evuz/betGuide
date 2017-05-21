import React from 'react';
import { Card, CardText, CardHeader } from 'material-ui';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './index.scss';

const StatsDetailsItem = (props) => {
  const { id, winPicks, lostPicks, voidPicks, profits } = props.stat;
  const date = new Date(parseInt(id, 10));
  const monthStr = date.toLocaleDateString('en', { month: 'long' });

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
          <p>{profits}</p>
          <p>{`${winPicks} ${lostPicks}  ${voidPicks}`}</p>
        </CardText>
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
    paddingBottom: '0px',
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
};

export default StatsDetailsItem;
