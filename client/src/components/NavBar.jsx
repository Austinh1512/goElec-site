import { Link } from "react-router-dom";
import { AppBar, Box, Icon, IconButton, Menu, MenuItem,  Toolbar, Typography } from "@mui/material"

export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#096A2E", padding: 2 }}>
                <Link to="/">
                    <img src="/logo.png" width={90} height={80} />
                </Link>
                <Typography variant="h6">Test</Typography>
            </Toolbar>
        </AppBar>
    )
    
}