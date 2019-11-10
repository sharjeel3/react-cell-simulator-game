import React from 'react';
import { RowRoot } from './styles';

type propTypes = {
  children?: React.ReactNode;
};

export const Row: React.FC<any> = (props: propTypes): any => {
  return <RowRoot>{props.children}</RowRoot>;
};
