import { Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

const useFooterStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  buy: {
    color: "red",
  },
}));
