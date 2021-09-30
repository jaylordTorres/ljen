import { Divider, Typography } from "@mui/material";
import { useFooterStyle } from "../style/footer.style";

export const Footer = () => {
  const classes = useFooterStyle();

  return (
    <div className={classes.container}>
      <Typography variant="h5">footer</Typography>
      <Divider />
      <Typography classes={classes.buy}>buy</Typography>
    </div>
  );
};
