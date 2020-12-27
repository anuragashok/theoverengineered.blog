/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Typography } from '@material-ui/core';

type Props = {
  title: string;
};
const Title: React.FC<Props> = ({ title }) => {
  return (
    <Typography variant="h3" component="h1">
      {title}
    </Typography>
  );
};

export default Title;
