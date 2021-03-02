import React from "react";
import cx from "clsx";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Box, makeStyles } from "@material-ui/core";
import TrustIndicator from "./TrustIndicator";
import "./ContactCard.scss";
import { Add } from "@material-ui/icons";

interface UserProps {
  user: {
    userId: number;
    fullName: string;
    profileImageUrl: string;
    trust: number;
  };
  [rest: string]: any;
}

// to override the card root element styles
const useStyles = makeStyles({
  root: {
    overflow: "visible",
    borderRadius: 8
  }
});

function ContactCard({ user }: UserProps) {
  const styles = useStyles();
  return (
    <Box>
      <Card className={cx("card")} classes={{ root: styles.root }}>
        <CardContent className={cx("card-body")}>
          <TrustIndicator avatar={user.profileImageUrl} trust={75}></TrustIndicator>
          <Box className={cx("contact-details")}>
            <Typography className={cx("contact-details__name")}>{user.fullName}</Typography>
            <Typography className={cx("contact-details__role")}>nessuna connessione</Typography>
          </Box>
          <IconButton className={cx("call-to-action")}>
            <Add></Add>
          </IconButton>
        </CardContent>
        <CardActions className={cx("footer")}>
          Sta già condividendo <Typography className={cx("footer-link")}>Disney Plus</Typography>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ContactCard;
