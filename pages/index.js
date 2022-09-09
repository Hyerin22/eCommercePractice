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
  const [totalSum, setTotalSum] = useState(0);
  const [curPage, setCurPage] = useState([]);
  const [deviceNum, setdeviceNum] = useState();

  useEffect(() => {
    const GetProducts = async () => {
      const result = await axios.get("https://dummyjson.com/products");
      console.log(result.data);
      setProducts(result.data.products);
    };
    GetProducts();
  }, []);

  // useEffect(()=>{
  //   const total = result.reduce((acc, o) => acc + o.amount, 0);
  //   setTotalSum(total);
  // },[products])

  // after clicking hamburger menu change the main bg color

  // pagination =================================================
  const PageClick = async (p) => {
    const result = await axios.get("api/data", {
      params: {
        page: p,
        num: 15,
      },
    });
    // console.log(res.data);
    setProducts(result.data.lists);
    setCurPage(p);
    setdeviceNum(result.data.numDevices);
  };

  var butt_arr = [];
  var ind = 1;
  for (var i = 0; i < deviceNum; i += 15) {
    butt_arr.push(
      <button
        className={styles.pagiButton}
        onClick={PageClick.bind(this, ind)}
        style={{ backgroundColor: curPage === ind ? "pink" : "white" }}
      >
        {ind}
      </button>
    );
    ind++;
  }

  var numpages = Math.ceil(deviceNum / 10);
  if (curPage == 1) {
    var lastpage = curPage + 4;
  } else if (curPage == 2) {
    var lastpage = curPage + 3;
  } else {
    var lastpage = curPage + 2;
  }
  if (lastpage > numpages) {
    lastpage = numpages;
  }

  console.log(butt_arr);
  butt_arr = butt_arr.slice(curPage - 3 < 0 ? 0 : curPage - 3, lastpage);

  // butt_arr = butt_arr.slice(curPage - 5 < 0 ? 0 : curPage - 5, curPage + 5);
  // butt_arr = butt_arr.slice(0, 10);

  return (
    <div className={styles.container}>
      {/* <div className={styles.hamburger}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div> */}
      <HamburgerMenu />
      <div className={styles.content}>
        <FilterCont totalNumber={totalSum} />
        <div className={styles.homeDisplay}>
          {products.map((o, i) => (
            <div key={i}>
              <ProductCard
                id={o.id}
                desc = {o.description}
                thumbnail={o.thumbnail}
                title={o.title}
                price={o.price}
                // amount={o.amount}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.pagiCont}>{butt_arr}</div>
    </div>
  );
}
