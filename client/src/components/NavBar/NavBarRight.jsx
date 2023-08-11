import {
  Collapse,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  Expand,
  MenuLink,
  NavBarBox,
  SearchTextInput,
  ShoppingCartBadge,
} from "./styled";
import {
  AccountCircle,
  ExpandMore,
  MenuOutlined,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import ShoppingCartContext from "../../context/ShoppingCartContext";

export default function NavBarRight() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchInputLabel, setSearchInputLabel] = useState("search...");
  const [menuBtnAnchor, setMenuBtnAnchor] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const { cart } = useContext(ShoppingCartContext);

  const handleSearchInputChange = (e) => {
    const length = e.target.value.length;
    if (length > 0) {
      setSearchInputLabel("");
    } else {
      setSearchInputLabel("search...");
    }
    setSearchInputValue(e.target.value);
  };

  const handleMenuIconClick = (e) => {
    setMenuBtnAnchor(e.target);
  };

  const handleExpandIconClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <NavBarBox>
        <IconButton sx={{ color: "white" }} size="large" aria-label="cart">
          {cart.length > 0 ? (
            <ShoppingCartBadge badgeContent={cart.length}>
              <ShoppingCart />
            </ShoppingCartBadge>
          ) : (
            <ShoppingCart />
          )}
        </IconButton>
        <IconButton sx={{ color: "white" }} size="large" aria-label="profile">
          <AccountCircle />
        </IconButton>
      </NavBarBox>

      <IconButton
        sx={{ color: "white", display: { md: "none" } }}
        size="large"
        aria-label="menu"
        onClick={handleMenuIconClick}
      >
        <MenuOutlined />
      </IconButton>
      <Menu
        id="menu"
        open={Boolean(menuBtnAnchor)}
        onClose={() => setMenuBtnAnchor(null)}
        on
        anchorEl={menuBtnAnchor}
      >
        <MenuItem divider={true}>
          <SearchTextInput
            id="menu-search-input"
            variant="outlined"
            label={searchInputLabel}
            autoComplete="on"
            onChange={handleSearchInputChange}
            value={searchInputValue}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ width: "100%" }}
          />
        </MenuItem>
        <MenuItem divider={true}>
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            Products
          </Typography>
          <Expand
            expand={expanded}
            onClick={handleExpandIconClick}
            aria-expanded={expanded}
            aria-label="show more..."
          >
            <ExpandMore />
          </Expand>
        </MenuItem>
        <Collapse in={expanded} unmountOnExit timeout="auto">
          <MenuLink
            to="/products?q=electric_skateboards"
            onClick={() => setMenuBtnAnchor(null)}
          >
            <MenuItem divider={true} sx={{ paddingLeft: 5 }}>
              Electric Skateboard
            </MenuItem>
          </MenuLink>
          <MenuLink
            to="/products?q=electric_scooters"
            onClick={() => setMenuBtnAnchor(null)}
          >
            <MenuItem divider={true} sx={{ paddingLeft: 5 }}>
              Electric Scooters
            </MenuItem>
          </MenuLink>
          <MenuLink
            to="/products?q=electric_bikes"
            onClick={() => setMenuBtnAnchor(null)}
          >
            <MenuItem divider={true} sx={{ paddingLeft: 5 }}>
              Electric Bikes
            </MenuItem>
          </MenuLink>
          <MenuLink
            to="/products?q=accessories"
            onClick={() => setMenuBtnAnchor(null)}
          >
            <MenuItem divider={true} sx={{ paddingLeft: 5 }}>
              Accessories
            </MenuItem>
          </MenuLink>
        </Collapse>
        <MenuItem divider={true}>
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            Cart
          </Typography>
          <IconButton
            sx={{ color: "black", marginLeft: "auto" }}
            size="large"
            aria-label="cart"
          >
            <ShoppingCartBadge badgeContent={2}>
              <ShoppingCart />
            </ShoppingCartBadge>
          </IconButton>
        </MenuItem>
        <MenuItem divider={true}>
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            Login / Register
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
