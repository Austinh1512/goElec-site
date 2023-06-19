import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import NavBarCenter from "./NavBarCenter";
import NavBarRight from "./NavBarRight";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
      >
        <Link to="/">
          <img src="/logo.png" width={90} height={90} />
        </Link>

        <NavBarCenter />

        <NavBarRight />
      </Toolbar>
    </AppBar>
  );
}
