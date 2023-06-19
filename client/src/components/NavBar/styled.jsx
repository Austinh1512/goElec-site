import { Badge, Box, IconButton, TextField, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const NavBarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 25,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const SearchTextInput = styled(TextField)({
  width: "70%",
  backgroundColor: "white",
  borderRadius: 10,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderWidth: 1,
    },
  },
  "& label.Mui-focused": {
    transform: "translate(14px, 2px) scale(0.75)",
    color: "darkgrey",
  },
});

export const MenuLink = styled(Link)({
  textDecoration: "none",
  color: "black",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const ShoppingCartBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: "1px solid black",
    backgroundColor: theme.palette.secondary.main,
    fontSize: "10px",
    color: "white",
  },
}));

export const Expand = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
