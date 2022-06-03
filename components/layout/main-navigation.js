import Link from "next/link";
import classes from "./main-navigation.module.scss";

function MainNavigation() {
  return (
    <header>
      <div className={classes.header_navbar_wrapper}>
        <div className={classes.header_navbar_container}>
          <div className={classes.header_navbar_logo}>
            <Link href={"/"}>
              <img src="/images/logo.svg" alt="logo" />
            </Link>
          </div>
          <nav className={classes.header_navbar_nav_wrapper}>
            <ul className={classes.header_navbar_nav_container}>
              <li className={classes.nav_item}>
                <Link href={"/"}>
                  <h4>Home</h4>
                </Link>
              </li>
              <li className={classes.nav_item}>
                <Link href={"/search"}>
                  <h4>Pretrazivanje</h4>
                </Link>
              </li>
              <li className={classes.nav_item}>
                <Link href={"/bill"}>
                  <h4>Racun</h4>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={classes.header_navbar_basket_wrapper}>
            <div className={classes.header_navbar_basket_container}>
              <div className={classes.header_basket_img}>
                <img src="/images/Korpa.svg" alt="Korpa" />
              </div>
              <div className={classes.header_basket_amount_container}>
                <div className={classes.header_basket_amount_book}>
                  <p>
                    <span>4</span> Books
                  </p>
                </div>
                <div className={classes.header_basket_amount_bill_amount}>
                  <h6>
                    10.000,00 <span>RSD</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.header_humburger_wrapper}>
            <div className={classes.header_humburger_container}>
              <div className={classes.humburger_item}>
                <span className={classes.humburger_item_burger}></span>
                <span className={classes.humburger_item_burger}></span>
                <span className={classes.humburger_item_burger}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.header_banner_wrapper}>
        <div className={classes.header_banner_container}>
          <div className={classes.header_banner_item}>
            <img
              src="/images/Header fotografija.jpg"
              alt="header_fotografija"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
