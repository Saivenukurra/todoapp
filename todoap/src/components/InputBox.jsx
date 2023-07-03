import { TextField } from "@mui/material";
const InputBox = ({ value, onChange }) => (
  <TextField
    variant="outlined"
    label="Add Something"
    size="small"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);
export default InputBox;
