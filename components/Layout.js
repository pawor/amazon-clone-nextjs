import React  from 'react';
import Head from 'next/head';
import useStyles from '../utils/styles';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function Layout({children}) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazon</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazon</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
        {children}
      </Container>
      <footer className={classes.footer}>
        <Typography>
          All right reserved. Next Amazon.
        </Typography>
      </footer>
    </div>
  )
}
