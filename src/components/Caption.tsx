import React from 'react';

import { createStyles, makeStyles, Typography } from '@material-ui/core';

const captionStyle = makeStyles((theme) =>
  createStyles({
    root: {
      fontStyle: 'italic',
      marginTop: theme.spacing(2),
    },
  })
);

const Caption: React.FC = ({ children }) => {
  const classes = captionStyle();
  return (
    <Typography variant="subtitle2" className={classes.root}>
      {children}
    </Typography>
  );
};

export default Caption;
