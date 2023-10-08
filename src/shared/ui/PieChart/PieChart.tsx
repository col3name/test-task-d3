import React from 'react';

import styles from './PieChart.module.css'

import {PieChartProps} from './PieChart.props';
import {usePieChart} from './hooks/usePieChart';

const PieChart: React.FC<PieChartProps> = ({
  id,
  activeSegment,
  segments,
  outerRadius = 200,
  innerRadius = 165,
  radius = 20,
  margin = {
   top: 10, right: 10, bottom: 10, left: 10,
  },
  children,
  onHover,
}) => {
  const { idContainer } = usePieChart({
    id, activeSegment, segments, outerRadius, innerRadius, radius,margin, onHover
  });
  return (
    <div className={ styles.pieChartWrapper }>
      <div className={ styles.pieChartCard }>
        { children }
      </div>
      <div
        id={idContainer}
        className={ styles.pieChart }
      />
    </div>
  );
};

export default PieChart;