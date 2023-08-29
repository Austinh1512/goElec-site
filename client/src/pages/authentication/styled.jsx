import { styled, TextField } from "@mui/material";

export const FormContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 50,
  width: "40%",
  height: "auto",
  backgroundColor: "#333333",
  borderRadius: 6,
  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

export const TextInput = styled(TextField)({
  width: "100%",
});
