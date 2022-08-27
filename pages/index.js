import styles from "../styles/Home.module.css";

import ProductCard from "../components/ProductCard";
import FilterCont from "../components/FilterCont";
import HamburgerMenu from "../components/HamburgerMenu";

import axios from "axios";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const fakeData = [
  {
    id: 1,
    title: "Test Title 1",
    description: "TestDESC 1",
    movie_banner: "https://placekitten.com/200/100",
  },
  {
    id: 2,
    title: "Test Title 2",
    description: "TestDESC 2",
    movie_banner: "https://placekitten.com/500/900",
  },
];

export default function Home() {
  const [products, setProducts] = useState(fakeData);

  useEffect(() => {
    const GetProducts = async () => {
      const result = await axios.get("https://dummyjson.com/products");
      console.log(result.data);
      setProducts(result.data.products);
    };
    GetProducts();
  }, []);

  return (
    <div className={styles.container}>
      {/* <div className={styles.hamburger}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div> */}
      <HamburgerMenu />
      <FilterCont />
      <div className={styles.homeDisplay}>
        {
          products.map((o,i)=>(
            <div key={i}>
              <ProductCard id={o.id} thumbnail={o.thumbnail} title={o.title} price={o.price} />
            </div>

          ))
        }

      </div>
    </div>
  );
}
