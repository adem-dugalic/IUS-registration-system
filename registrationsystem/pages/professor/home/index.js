import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../../Components/Layout";
import Welcome from "../../../Components/Welcome";
import { createStyles, makeStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from "next/link";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Calendar } from '@material-ui/pickers'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridListContainer:{
    overflowY: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: '82vh',
    margin: theme.spacing(4),
    background: 'gray',
    position:"relative",
  },
  paper: {
    padding: theme.spacing(8),
    margin: 'auto',
    maxWidth: 600,
  },
  image: {
    width: '65%',
    height: '74%',
    margin: 'auto',
    display: 'block',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  gridList: {
    paddingTop: '5%',
    width: '100%',
    height: '100%',
    overflowY: 'auto'
  },
  setting: {
    position: 'absolute',
    top: '13%',
    right: '3%'
  },
  approval:{
    marginTop: '5%',
    width: '100%',
    height: '80%',
    margin: 'auto',
    display: 'block',
  },
  innerApproval: {
    padding: theme.spacing(8),
    margin: 'auto',
    width: '69%',
    height: '50%'
  }
}));

const Home = (props) => {
  const [user, serUser] = useState("admin");
  const classes = useStyles();
  return <Layout mobile={false} user={user}>
    <Grid container spacing={2} style={{position: 'relative'}}>
      <Grid item xs={7} className={classes.gridListContainer}>
        <Typography>
          Courses
        </Typography>
        <div>
        <GridList cellHeight={220} className={classes.gridList} cols={2}>
              <GridListTile cols={1}>
                <ButtonBase className={classes.image}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Course Name
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item className={classes.setting}>
                            <Link variant="subtitle1" style={{ cursor: 'pointer' }} href="/professor/home" onhover=''><MoreVertIcon></MoreVertIcon>
                            </Link>
                          </Grid>
                        </Grid>
                    </Grid>
                  </Paper>
                </ButtonBase>
              </GridListTile>
              <GridListTile cols={1}>
              <ButtonBase className={classes.image}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Course Name
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item className={classes.setting}>
                            <Link variant="subtitle1" style={{ cursor: 'pointer' }} href="/professor/home"><MoreVertIcon></MoreVertIcon>
                            </Link>
                          </Grid>
                        </Grid>
                    </Grid>
                  </Paper>
                </ButtonBase>
              </GridListTile>
              <GridListTile cols={1}>
              <ButtonBase className={classes.image}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Course Name
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item className={classes.setting}>
                            <Link variant="subtitle1" style={{ cursor: 'pointer' }} href="/professor/home"><MoreVertIcon></MoreVertIcon>
                            </Link>
                          </Grid>
                        </Grid>
                    </Grid>
                  </Paper>
                </ButtonBase>
              </GridListTile>
              <GridListTile cols={1}>
              <ButtonBase className={classes.image}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Course Name
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item className={classes.setting}>
                            <Link variant="subtitle1" style={{ cursor: 'pointer' }} href="/professor/home"><MoreVertIcon></MoreVertIcon>
                            </Link>
                          </Grid>
                        </Grid>
                    </Grid>
                  </Paper>
                </ButtonBase>
              </GridListTile>
              <GridListTile cols={1}>
              <ButtonBase className={classes.image}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Course Name
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item className={classes.setting}>
                            <Link variant="subtitle1" style={{ cursor: 'pointer' }} href="/professor/home"><MoreVertIcon></MoreVertIcon>
                            </Link>
                          </Grid>
                        </Grid>
                    </Grid>
                  </Paper>
                </ButtonBase>
              </GridListTile>
          </GridList>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Grid item style={{height: '50%'}}>
            <ButtonBase className={classes.approval}>
            <Link variant="subtitle1" style={{ cursor: 'pointer' }} href="/professor/home">
            <Paper className={classes.innerApproval}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Approval
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            </Link>
          </ButtonBase>
        </Grid>
        <Grid item style={{height: '50%'}}>
            <ButtonBase className={classes.approval}>
            <Link variant="subtitle1" style={{ cursor: 'pointer' }} href="/professor/home">
            <Paper className={classes.innerApproval}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Approval
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            </Link>
          </ButtonBase>
        </Grid>
      </Grid>
    </Grid>
  </Layout>;
};
export default Home;
