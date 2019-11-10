import React, { SyntheticEvent } from 'react';
import { StyledButton } from './styles';

type propTypes = {
  children?: React.ReactNode;
  onClick: (x: SyntheticEvent) => void;
};

export const Button: React.FC<any> = (props: propTypes): any => {
  const { children, onClick } = props;

  const handleClick = (event: SyntheticEvent) => {
    // Local handler may not be needed but kept it here for completeness
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};
