import React from 'react';

export type LoaderProps = {
  text?: string,
}

const Loader: React.FC<LoaderProps> = ({
  text
}) => {
  return (
    <div>{text || 'Загрузка ...'}</div>
  )
}

export default Loader;

