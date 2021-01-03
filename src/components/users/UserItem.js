import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 150,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    textDecoration: "underline",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));
const UserItem = ({ user: { login, avatar_url, id } }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={avatar_url} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {login}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            (Duration: {id} sec)
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Text and Music by {login}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton>
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <span>Play Vocal</span>
        </div>
      </div>
    </Card>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
