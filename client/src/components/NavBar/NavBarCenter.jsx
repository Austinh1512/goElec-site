import {
  Button,
  InputAdornment,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { MenuLink, NavBarBox, SearchTextInput } from "./styled";
import { ExpandMore, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function NavBarCenter() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchInputLabel, setSearchInputLabel] = useState("search...");
  const [productsBtnAnchor, setProductsBtnAnchor] = useState(null);

  const handleSearchInputChange = (e) => {
    const length = e.target.value.length;
    if (length > 0) {
      setSearchInputLabel("");
    } else {
      setSearchInputLabel("search...");
    }
    setSearchInputValue(e.target.value);
  };

  const handleProductsBtnClick = (e) => {
    setProductsBtnAnchor(e.target);
  };

  useEffect(() => {
    return () => {
      setProductsBtnAnchor(null);
    };
  }, []);

  return (
    <NavBarBox>
      <SearchTextInput
        id="search-input"
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
      />
      <Button
        variant="text"
        endIcon={<ExpandMore />}
        sx={{ color: "white" }}
        onClick={handleProductsBtnClick}
      >
        <Typography variant="body1" sx={{ marginRight: -1 }}>
          Products
        </Typography>
      </Button>
      <Menu
        id="products-menu"
        open={Boolean(productsBtnAnchor)}
        anchorEl={productsBtnAnchor}
        onClose={() => setProductsBtnAnchor(null)}
      >
        <MenuLink to="/products?q=electric_skateboards">
          <MenuItem>Electric Skateboards</MenuItem>
        </MenuLink>
        <MenuLink to="/products?q=electric_scooters">
          <MenuItem>Electric Scooters</MenuItem>
        </MenuLink>
        <MenuLink to="/products?q=electric_bikes">
          <MenuItem>Electric Bikes</MenuItem>
        </MenuLink>
        <MenuLink to="/products?q=accessories">
          <MenuItem>Accessories</MenuItem>
        </MenuLink>
      </Menu>
    </NavBarBox>
  );
}
