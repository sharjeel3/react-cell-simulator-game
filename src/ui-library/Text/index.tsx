import React from 'react';
import { NormalText } from './styles';

type propTypes = {
  children?: React.ReactNode;
  bold: boolean | undefined;
};

export const Text: React.FC<any> = (props: propTypes): any => {
  const { bold, children } = props;
  return <NormalText bold={bold}>{children}</NormalText>;
};
