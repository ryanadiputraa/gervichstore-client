import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Container } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import navbar from "../styles/navbar";
import { useAppContext } from "../context/AppContext";

export default function NavBar() {
    const { state } = useAppContext();

    const classes = navbar();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" elevation={0}>
                <Container>
                    <Toolbar>
                        <Link href="/">
                            <a className={classes.logo}>
                                <Image
                                    src="/images/logo.png"
                                    width={180}
                                    height={60}
                                />
                            </a>
                        </Link>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Cari..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                className={classes.menuIcon}
                                size="small"
                                color="inherit"
                            >
                                <Badge
                                    badgeContent={state.cart.count}
                                    color="error"
                                >
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                className={classes.menuIcon}
                                size="small"
                                color="inherit"
                            >
                                <Badge
                                    badgeContent={state.notification.count}
                                    color="error"
                                >
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                className={classes.menuIcon}
                                size="small"
                                edge="end"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMenu}
        </div>
    );
}
