import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import LogoImage from "../../image/header-icon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BUSINESS_ROUTE,
  CONTACTS_ROUTE,
  FEATURED_ROUTE,
  GEAR_CAGE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGN_ROUTE,
} from "../../utils/const";
import Container from "../Container/Container";
import MyButton from "../MyButton/MyButton";
import { ILinkedInterface } from "../../types/linked";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { isLoginHelper } from "../../helpers/authHelper";

const Navbar = () => {
  const [isBurger, setIsBurger] = useState(false);
  const [isLogin, setIsLogin] = useState(isLoginHelper());

  const location = useLocation();
  const navigate = useNavigate();
  const locatedUser = location.pathname === LOGIN_ROUTE;
  const classes = isBurger
    ? `${styles["navbar-menu"]} ${styles.activate}`
    : styles["navbar-menu"];

  const linkedList: ILinkedInterface[] = [
    {
      path: BUSINESS_ROUTE,
      text: "Business areas",
    },
    {
      path: FEATURED_ROUTE,
      text: "Featured images",
    },
    {
      path: GEAR_CAGE_ROUTE,
      text: "Gear cage",
    },
    {
      path: CONTACTS_ROUTE,
      text: "Contact",
    },
  ];

  useEffect(() => {
    setIsBurger(false);
    setIsLogin(isLoginHelper());
  }, [location]);

  if (!isLogin) {
    return (
      <div className={styles.navbar}>
        <Container>
          <div className={styles.box}>
            <div className={styles.logo_image}>
              <Link to={HOME_ROUTE}>
                <img src={LogoImage} alt="Aperature" />
              </Link>
            </div>
            <div className={styles["navbar-link"]}>
              {locatedUser ? (
                <MyButton
                  text="Sign-Up"
                  className={styles["navbar-btn"]}
                  onClickHandler={() => navigate(SIGN_ROUTE)}
                />
              ) : (
                <MyButton
                  text="Login"
                  className={styles["navbar-btn"]}
                  onClickHandler={() => navigate(LOGIN_ROUTE)}
                />
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.box}>
          <div className={styles.logo_image}>
            <Link to={HOME_ROUTE}>
              <img src={LogoImage} alt="Aperature" />
            </Link>
          </div>
          <div className={styles["navbar-link"]}>
            <ul className={classes}>
              {linkedList.map(({ path, text }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={
                      location.pathname === path
                        ? `${styles.linked} ${styles.active}`
                        : styles.linked
                    }
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <MyButton
              text="Get template"
              className={styles["navbar-btn"]}
              onClickHandler={() => alert("Start navbar")}
            />
            <div
              onClick={() => setIsBurger(!isBurger)}
              className={styles.mobile_btn}
            >
              {isBurger ? (
                <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
