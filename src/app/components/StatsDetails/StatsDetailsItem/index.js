import React from 'react';
import { Card, CardText, CardHeader } from 'material-ui';
import { PieChart, Pie, Cell } from 'recharts';
import './index.scss';

const StatsDetailsItem = (props) => {
  const { id, winPicks, lostPicks, voidPicks, profits } = props.stat;
  const date = new Date(parseInt(id, 10));
  const monthStr = date.toLocaleDateString('en', { month: 'long' });

  const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="stats_details_component_item">
      <Card style={style.card}>
        <CardHeader
          title={`${monthStr} ${date.getFullYear()}`}
        />
        <CardText>
          <PieChart width={218} height={180} >
            <Pie
              data={data}
              cx={110}
              cy={85}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
            >
              {
                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
          </PieChart>
          <p>{profits}</p>
          <p>{`${winPicks} ${lostPicks}  ${voidPicks}`}</p>
        </CardText>
      </Card>
      {
        // <h1>{`${monthStr} ${date.getFullYear()}`}</h1>
        // <p>{profits}</p>
        // <p>{winPicks + lostPicks + voidPicks}</p>
      }
    </div>
  );
};

const style = {
  card: {
    width: '250px',
  },
};

export default StatsDetailsItem;
