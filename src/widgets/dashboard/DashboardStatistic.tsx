import React from "react";

import PieChart from "../../shared/ui/PieChart/PieChart";
import Title from "../../shared/ui/Title/Title";
import {TitleAlign, TitleSize} from "../../shared/ui/Title/Title.props";
import Colors from "../../shared/styles/colors";
import DashTextItem from "./DashTextItem";
import {
  DashboardStatisticProps,
  DashStatusTypes,
} from "./Dashboard.props";
import {useDashboard} from "./hooks";

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
      <PieChart id={type} segments={data} outerRadius={200} onHover={ onMouseOver }>
        <Title align={TitleAlign.Center} size={TitleSize.Medium} color={Colors.gray50} >
          { getTitle() }
        </Title>
        <Title align={TitleAlign.Center} size={TitleSize.Large} color={Colors.secondary} >
          { getCount() }
        </Title>
      </PieChart>
      <DashTextItem onMouseOver={ () => setActive('')} onMouseOut={ () => setActive('')}>Всего: {total}</DashTextItem>
      <DashTextItem
        active={active === DashStatusTypes.ACTIVE}
        onMouseOver={ () => setActive(DashStatusTypes.ACTIVE)}
        onMouseOut={ () => setActive('')}
      >
        <span>Активных:</span> <span>{statistic.active}</span>
      </DashTextItem>
      <DashTextItem
        active={active === DashStatusTypes.INACTIVE}
        onMouseOver={ () => setActive(DashStatusTypes.INACTIVE)}
        onMouseOut={ () => setActive('')}
      >
        <span>Неактивных:</span> <span>{statistic.inactive}</span>
      </DashTextItem>
      <DashTextItem
        active={active === DashStatusTypes.COMPLETED}
        onMouseOver={ () => setActive(DashStatusTypes.COMPLETED)}
        onMouseOut={ () => setActive('')}
      >
        <span>Завершенных:</span> <span>{statistic.completed}</span>
      </DashTextItem>
    </div>
  )
}

export default DashboardStatistic;
