import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function Logo({ breakpointSmall, classes, withColor }) {
  return (
    <Box className={classes.logo} display="flex">
      <img
        src="../public/static/lifeseed.svg"
        alt="lifeseed"
        className={classes.logo}
      />

      {breakpointSmall && (
        <Typography variant="h6" component="span" className={classes.title}>
          lifeseed
        </Typography>
      )}
    </Box>
  );
}
