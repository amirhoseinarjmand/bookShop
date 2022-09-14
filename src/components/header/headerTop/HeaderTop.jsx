import { useState } from "react";
import { Link } from "react-router-dom";

import css from "./HT.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function HeaderTop() {
  const [checkScroll, setCheckScroll] = useState(false);

  const toggleClassName = () => {
    if (!checkScroll && window.scrollY > 10) {
      setCheckScroll(true);
    } else if (checkScroll && window.scrollY <= 10) {
      setCheckScroll(false);
    }
  };

  window.addEventListener("scroll", toggleClassName);

  return (
    <section className={`${css.top} ${checkScroll ? css.active : ""} py-3`}>
      <Link to="/" className={css.logo}>
        <img
          src={require("../../../assets/logo.png")}
          className="img-fluid"
          alt=""
        />
      </Link>

      <div className={`${css.search} rounded p-1`}>
        <input
          type="text"
          placeholder="نام کتاب ، نویسنده و ..."
          className=""
        />
        <BiSearchAlt2 size={25} className="mx-2" />
      </div>

      <section className={css.top_left}>
        <div className={`${css.login} rounded p-2`}>
          <BsPersonFill size={19} style={{ marginTop: "0.3rem" }} />
          <span>ورود / ثبت نام</span>
        </div>

        <div className={css.iconShop}>
          <AiOutlineShoppingCart size={25} style={{ cursor: "pointer" }} />
          <span className="position-absolute top-0 start-100 translate-middle badge">
            0
          </span>
        </div>
      </section>
    </section>
  );
}
