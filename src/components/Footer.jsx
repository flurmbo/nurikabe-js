import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Made in 2019 by
      {' '}
      <Link color="primary" href="https://www.github.com/flurmbo">
        Phil Marshall
      </Link>{' '}
    </Typography>
  );
}

export default Footer;