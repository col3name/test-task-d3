import React from 'react';

import PieChart from 'shared/ui/PieChart/PieChart';
import Title from 'shared/ui/Title/Title';
import Legend from './Legend';

import styles from './Dashboard.module.css';

import {TitleAlign, TitleSize} from 'shared/ui/Title/Title.props';
import Colors from 'shared/styles/colors';
import {
  DashboardStatisticProps,
  DashStatusTypes,
} from './Dashboard.props';
import {useDashboard} from './hooks/useDashboard';

const DashboardStatistic: React.FC<DashboardStatisticProps> = ({
  type,
  statistic,
}) => {
  const {
    active,
    data,
    total,
    getTitle,
    getCount,
    setActive,
    onMouseOver,
  } = useDashboard(type, statistic);

  if (!statistic) {
    return null;
  }
  return (
    <div>
      <PieChart activeSegment={active} id={type} segments={data} outerRadius={150}  innerRadius={130} onHover={ onMouseOver }>
        <Title align={TitleAlign.Center} size={TitleSize.Medium} color={Colors.gray50} >
          { getTitle() }
        </Title>
        <Title align={TitleAlign.Center} size={TitleSize.XLarge} color={Colors.secondary} >
          { getCount() }
        </Title>
      </PieChart>
      <div className={ styles.legendWrapper}>
        <Legend
          onMouseOver={ () => setActive(DashStatusTypes.ALL)}
          onMouseOut={ () => setActive('')}
        >
          <span>Всего:</span> <span>{total}</span></Legend>
        <Legend
          active={active === DashStatusTypes.ACTIVE}
          onMouseOver={ () => setActive(DashStatusTypes.ACTIVE)}
          onMouseOut={ () => setActive('')}
        >
          <span>Активных:</span> <span>{statistic.active}</span>
        </Legend>
        <Legend
          active={active === DashStatusTypes.INACTIVE}
          onMouseOver={ () => setActive(DashStatusTypes.INACTIVE)}
          onMouseOut={ () => setActive('')}
        >
          <span>Неактивных:</span> <span>{statistic.inactive}</span>
        </Legend>
        <Legend
          active={active === DashStatusTypes.COMPLETED}
          onMouseOver={ () => setActive(DashStatusTypes.COMPLETED)}
          onMouseOut={ () => setActive('')}
        >
          <span>Завершенных:</span> <span>{statistic.completed}</span>
        </Legend>
      </div>
    </div>
  )
}

export default DashboardStatistic;
