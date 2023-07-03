import { Button } from "@mui/material";

const CButton = ({ onClick, children }) => {
  return (
    <Button variant="outlined" onClick={() => onClick()}>
      {children}
    </Button>
  );
};
export default CButton;
