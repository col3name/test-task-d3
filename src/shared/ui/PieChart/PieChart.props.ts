import React from 'react';

export type Segment = {
  color?: string,
  label: string,
  data: string|number,
  value: number,
  index: number,
  startAngle?: number,
  endAngle?: number,
  padAngle: number,
}
export type Box = {
  top: number, right: number, bottom: number, left: number,
};

export type UsePieChartProps = {
  id: string,
  segments: Segment[],
  outerRadius?: number,
  innerRadius?: number,
  radius?: number,
  margin?: Box,
  onHover: (value: string) => void,
}
export type PieChartProps = UsePieChartProps & {
  children: React.ReactNode,
}