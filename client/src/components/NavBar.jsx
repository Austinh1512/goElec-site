import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Badge, Box, Button, Collapse, IconButton, InputAdornment, Menu, MenuItem, TextField,  Toolbar, Typography, styled } from "@mui/material";
import { AccountCircle, ExpandMore, MenuOutlined, Search, Shop, ShoppingCart } from "@mui/icons-material";

const NavBarBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}))

const SearchTextInput = styled(TextField)(({ theme }) => ({
    width: "70%",
    backgroundColor: "white",
    borderRadius: 10,
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: "none"
        },
        "&.Mui-focused fieldset": {
            borderColor: "black",
            borderWidth: 1
        }
    },
    "& label.Mui-focused": {
        transform: 'translate(14px, 2px) scale(0.75)',
        color: "darkgrey"
    },
}));

const MenuLink = styled(Link)({
    textDecoration: "none",
    color: "black",
    "&:hover": {
        textDecoration: "underline"
    }
})

const ShoppingCartBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        border: "1px solid black",
        backgroundColor: "#A6002A",
        fontSize: "10px",
        color: "white"
    }
})

const Expand = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton { ...other } />
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
    })
}))

export default function NavBar() {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchInputLabel, setSearchInputLabel] = useState("search...");
    const [productsBtnAnchor, setProductsBtnAnchor] = useState(null);
    const [menuBtnAnchor, setMenuBtnAnchor] = useState(null);
    const [expanded, setExpanded] = useState(null);

    const handleSearchInputChange = (e) => {
        const length = e.target.value.length;
        if (length > 0) { setSearchInputLabel(""); }
        else { setSearchInputLabel("search..."); }
        setSearchInputValue(e.target.value);
    }

    const handleProductsBtnClick = (e) => {
        setProductsBtnAnchor(e.target);
    }

    const handleMenuIconClick = (e) => {
        setMenuBtnAnchor(e.target);
    }

    const handleExpandIconClick = () => {
        setExpanded(!expanded);
    }

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#00A67C", padding: 2 }}>
                <Link to="/">
                    <img src="/logo.png" width={90} height={90} />
                </Link>
                
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
                            )
                        }}
                    />
                    <Button variant="text" endIcon={ <ExpandMore /> } sx={{ color: "white" }} onClick={handleProductsBtnClick} >
                        <Typography variant="body1" sx={{ marginRight: -1 }}>Products</Typography>
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
                
                <NavBarBox>
                    <IconButton sx={{ color: "white" }} size="large" aria-label="cart" >
                        <ShoppingCartBadge  badgeContent={2}>
                            <ShoppingCart />
                        </ShoppingCartBadge>
                    </IconButton>
                    <IconButton sx={{ color: "white" }} size="large" aria-label="profile">
                        <AccountCircle />
                    </IconButton>
                </NavBarBox>

                <IconButton sx={{ color: "white", display: { "md": "none" } }} size="large" aria-label="menu" onClick={handleMenuIconClick}>
                    <MenuOutlined />
                </IconButton>
                <Menu
                    id="menu"
                    open={Boolean(menuBtnAnchor)}
                    onClose={() => setMenuBtnAnchor(null)}
                    anchorEl={menuBtnAnchor}
                >
                    <MenuItem divider={true} >
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
                            )
                        }}
                        sx={{ width: "100%" }}
                    />
                    </MenuItem>
                    <MenuItem divider={true}>
                        <Typography variant="body1" sx={{ marginLeft: 1 }}>Products</Typography>
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
                        <MenuLink to="/products?q=electric_skateboards">
                            <MenuItem divider={true} sx={{ paddingLeft: 5 }}>Electric Skateboard</MenuItem>
                        </MenuLink>
                        <MenuLink to="/products?q=electric_scooters">
                            <MenuItem divider={true} sx={{ paddingLeft: 5 }}>Electric Scooters</MenuItem>
                        </MenuLink>
                        <MenuLink to="/products?q=electric_bikes">
                            <MenuItem divider={true} sx={{ paddingLeft: 5 }}>Electric Bikes</MenuItem>
                        </MenuLink>
                        <MenuLink to="/products?q=accessories">
                            <MenuItem divider={true} sx={{ paddingLeft: 5 }}>Accessories</MenuItem>
                        </MenuLink>
                        
                    </Collapse>
                    <MenuItem divider={true}>
                        <Typography variant="body1" sx={{ marginLeft: 1 }}>Cart</Typography>
                        <IconButton sx={{ color: "black", marginLeft: "auto" }} size="large" aria-label="cart" >
                            <ShoppingCartBadge  badgeContent={2}>
                                <ShoppingCart />
                            </ShoppingCartBadge>
                        </IconButton>
                    </MenuItem>
                    <MenuItem divider={true}>
                    <Typography variant="body1" sx={{ marginLeft: 1 }}>Login / Register</Typography>
                    </MenuItem>
                </Menu>
                
            </Toolbar>
        </AppBar>
    )
    
}