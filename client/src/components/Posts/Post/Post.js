import React from "react";
import useStyles from "./Styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAltIcon";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Delete from "@material-ui/icons/Delete";
import moment from "moment";

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.Card}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: "white" }} size="small" onClick={() => {}} />
          <MoreHorizIcon fontSize="default" />
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {post.creator}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default Post;
