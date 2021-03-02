import React from "react";
import cx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { Avatar, Badge } from "@material-ui/core";
import "./TrustIndicator.scss";

interface TrustIndicatorProps {
  avatar: string;
  trust: number;
}

function TrustIndicator(props: TrustIndicatorProps) {
  return (
    <Box className={cx("trust-container")}>
      <CircularProgress
        className={cx("indicator")}
        variant="determinate"
        value={props.trust}
        size={93}
        thickness={3}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Badge
          classes={{ root: cx("badge-container"), badge: cx("badge") }}
          badgeContent={props.trust}></Badge>
        <Avatar className={cx("avatar")} alt="contact" src={props.avatar}></Avatar>
      </Box>
    </Box>
  );
}

export default TrustIndicator;
