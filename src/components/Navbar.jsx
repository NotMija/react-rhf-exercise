import React from "react";
import { Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div >
        <nav >
          <div >
            <div>
              <a href="/" >
                Inicio
              </a>
            </div>
            <div >
              <a
                href="/posts"
              >
                Posts
              </a>
            </div>
            <div>
              <a href="/create-post">
                Create Post
              </a>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
};
