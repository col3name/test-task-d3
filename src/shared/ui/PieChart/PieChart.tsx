import React, {useEffect, useLayoutEffect} from 'react';
import * as d3 from 'd3';
//
// // @ts-ignore
import styles from './PieChart.module.css'

import {PieChartProps} from "./PieChart.props";

const PieChart: React.FC<PieChartProps> = (props) => {
  const {
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
  } = props;
  const idContainer = `pie-container${id}`

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateCool)
    .domain([0, segments.length]);

  useLayoutEffect(() => {
    drawChart();
  }, [])
  useEffect(() => {
    drawChart();
  }, [segments]);
  const drawChart = () => {
    // Remove the old svg
    d3.select('#' +idContainer)
      .select('svg')
      .remove();

    // Create new svg
    const svg = d3
      .select('#' +idContainer)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .cornerRadius(radius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      // @ts-ignore
      .value((d) => {
        return d
      });

    const arc = svg
      .selectAll()
      .data(pieGenerator(segments.map(it => it.value)))
      .enter();

    // Append arcs
    arc
      .append('path')
      // @ts-ignore
      .attr('d', arcGenerator)
      .style('fill', (_, i) => segments[i].color || colorScale(i))
      .attr('data-type', (_, i) => {
        const {label} = segments[i];
        return label;
      })
      .style('stroke', '#ffffff')
      .style('stroke-width', 0)
      .on('mouseover', (event) => {
        const type = event.target.getAttribute('data-type');
        onHover(type);
      })
      .on('mouseout', () => {
        onHover('')
      })
  }

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