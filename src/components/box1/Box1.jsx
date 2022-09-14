import axios from "axios";
import { useEffect, useState } from "react";
import css from "./Box1.module.css";

export default function Box1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:9000/box1");
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={`${css.Box1} rounded-5`}>
      {products.map((product) => (
        <div className={`${css.info} col`} key={product.id}>
          <img src={product.img} alt="" />
          <p>{product.title}</p>
          <p>{product.count}</p>
          <span></span>
        </div>
      ))}
    </section>
  );
}
