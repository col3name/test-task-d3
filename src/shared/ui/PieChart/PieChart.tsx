import React from 'react';

import styles from './PieChart.module.css'

import {PieChartProps} from './PieChart.props';
import {usePieChart} from './hooks';

const PieChart: React.FC<PieChartProps> = ({
  id,
  segments,
  outerRadius = 400,
  innerRadius = 165,
  radius = 20,
  margin = {
   top: 20, right: 20, bottom: 20, left: 20,
  },
  children,
  onHover,
}) => {
  const { idContainer } = usePieChart({
    id, segments, outerRadius, innerRadius, radius,margin, onHover
  });
  return (
    <div className={ styles.pieChartWrapper }>
      <div className={ styles.pieChartCard}>
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