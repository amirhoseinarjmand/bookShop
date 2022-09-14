import { useState } from "react";
// import { Link } from 'react-router-dom'

import css from "./HB.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

export default function HeaderBottom() {
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
    <section
      className={`${css.bottom} ${checkScroll ? css.active : ""}`}
    >
      <ul>
        <li>
          <span>دسته بندی موضوعی</span>
          <span>
            <IoMdArrowDropdown />
          </span>

          <ul className={`${css.subMenu} rounded`}>
            <li> ادبیات داستانی </li>
            <li> روانشناسی </li>
            <li> فلسفه </li>
          </ul>
        </li>
        <li>
          <span>انواع داستان</span>
          <span>
            <IoMdArrowDropdown />
          </span>

          <ul className={`${css.subMenu} rounded`}>
            <li> داستان عاقانه </li>
            <li> داستان تاریخی </li>
            <li> داستان معمایی </li>
          </ul>
        </li>
        <li>
          <span>کتاب های برگزیده</span>
          <span>
            <IoMdArrowDropdown />
          </span>

          <ul className={`${css.subMenu} rounded`}>
            <li> 101 رمانی که قبل از مرگ باید بخوانید </li>
            <li> پرفروش های نیویورک تایمز </li>
            <li> برترین های گاردین </li>
          </ul>
        </li>
        <li>
          <span>جوایز ادبی</span>
          <span>
            <IoMdArrowDropdown />
          </span>

          <ul className={`${css.subMenu} rounded`}>
            <li> جایزه ی نوبل ادبیات </li>
            <li> جایزه ی من بوکر </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
