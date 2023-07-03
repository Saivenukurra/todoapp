import { Button } from "@mui/material";

const controlButton = ({ onClick }) => {
  return <Button variant="outlined" onClick={() => onClick()}></Button>;
};
export default controlButton;
