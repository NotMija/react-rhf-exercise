import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { Outlet } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
        <Navbar isBordered>
            <NavbarContent >
                <NavbarItem>
                    <Link >
                        HomePage
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link >
                        Posts
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link >
                        Crear Post
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
        <Outlet/>
        </>
    );
}