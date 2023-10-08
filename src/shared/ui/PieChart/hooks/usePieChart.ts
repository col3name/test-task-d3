import {useCallback, useEffect, useLayoutEffect} from 'react';
import * as d3 from 'd3';

import {UsePieChartProps} from '../PieChart.props';

export const usePieChart = ({
  id,
  segments,
  outerRadius = 300,
  innerRadius = 165,
  radius = 20,
  margin = {
    top: 10, right: 10, bottom: 10, left: 10,
  },
  onHover
}: UsePieChartProps) => {
  const idContainer = `pie-container${id}`

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateCool)
    .domain([0, segments.length]);
  const drawChart = useCallback(() => {
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
  }, [
    colorScale, height, idContainer, innerRadius, outerRadius, onHover, radius,segments,width
  ]);

  useLayoutEffect(() => {
    drawChart();
  }, [drawChart])
  useEffect(() => {
    drawChart();
  }, [segments, drawChart]);

  return {
    idContainer
  }
}