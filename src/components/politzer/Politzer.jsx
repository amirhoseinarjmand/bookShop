import { useState, useEffect } from "react";
import axios from "axios";
import css from "./Politzer.module.css";

export default function Politzer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:9000/politzer");

        setBooks(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={`${css.Politzer} container`}>
      <section className={css.title}>
        کتاب های برنده ی جایزه ی پولیتزر داستان
      </section>

      <section className={css.cartContainer}>
        <section className={`${css.cart} rounded-4`}>
          {books.map((book) => {
            const { id, name, img, discount, prevPrice, newPrice } = book;
            return (
              <div className="contain" key={id}>
                <img
                  className={`${css.cart__img} shadow rounded`}
                  src={img}
                  alt=""
                />

                <p className={css.cart__title}>{name}</p>

                <p className={css.cart__cost}>
                  <span className={css.cost__prevPrice}>
                    <del>{prevPrice}</del>
                  </span>
                  <span className={css.cost__discount}>{discount}</span>
                </p>

                <p className={css.cost__newPrice}>
                  <span>{newPrice}</span>
                  <span> تومان </span>
                </p>
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
}
