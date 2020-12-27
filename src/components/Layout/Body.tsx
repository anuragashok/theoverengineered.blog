import React from 'react';

import { Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    },
  })
);

type Props = {
  children: React.ReactNode;
};

const Body: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container className={classes.paper} spacing={5}>
          {children}
        </Grid>
      </div>
    </>
  );
};

export default Body;
