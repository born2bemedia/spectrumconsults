"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import MenuIcon from "@/icons/MenuIcon";

const Header = () => {
  const { cart, cartQuantity } = useCart();
  const { currentUser } = useAuth();
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header className={`${menuOpened && "menu-opened"}`}>
        <div className="_container">
          <div className="header-row">
            <Link href="/" className="logo">
              {!menuOpened ? (
                <img src="/images/logo.svg" alt="logo" />
              ) : (
                <img src="/images/logo.svg" alt="logo" />
              )}
            </Link>

            <div className="header-right">
              <div className="head-account">
                {currentUser ? (
                  <Link className="white-button" href="/dashboard">
                    Account
                  </Link>
                ) : (
                  <>
                    <Link className="white-button" href="/log-in">
                      Log in
                    </Link>
                    <Link className="white-button" href="/sign-up">
                      Sign up
                    </Link>
                  </>
                )}
              </div>
              <div>
              <Link
                  href="/cart"
                  className={`cart-icon ${cartQuantity > 0 && "not-empty"}`}
                >
                  {!menuOpened ? (
                    <img src="/images/cart-icon.svg" alt="cart-icon" />
                  ) : (
                    <img
                      src="/images/cart-icon.svg"
                      alt="cart-icon"
                    />
                  )}
                </Link>
                <span onClick={() => menuOpen()} className="menu-btn">
                  {!menuOpened ? <MenuIcon /> : <MenuIcon />}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`menu-wrap ${menuOpened ? "opened" : ""}`}>
        <div className="_container">
          <nav>
            <div className="left-col"></div>
            <div className="right-col"></div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
