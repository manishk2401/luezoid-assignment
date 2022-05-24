import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header.js";
import Home from "./Components/Home/Home";
import axios from "axios";
import ItemDetails from "./Components/ItemDetails/ItemDetails";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const [listData, setListData] = useState({});
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.products.luezoid.com/products?page=" + pageNum, {
        headers: {
          Authorization: "Bearer ULxG9gG98KDGPql/BFI/woCN9T8=",
        },
      })
      .then((response) => {
        setListData(response);
      });
  }, [pageNum]);

  const updatePage = (e) => {
    setPageNum(e);
  };

  const addInCard = (e) => {
    setCartItems([...cartItems, e]);
  };

  return (
    <div>
      <Header cartCount={cartItems}></Header>
      <Routes>
        {listData.data ? (
          <>
            <Route path="/" element={<Home changePage={updatePage} addItem={addInCard} itemsList={listData.data} />} />
            <Route path="/product/:itemId" element={<ItemDetails addItem={addInCard} dataList={listData.data.items}></ItemDetails>} />
          </>
        ) : (
          <>
            <Route path="/" element={<h4>Loading..</h4>} />
            <Route path="/product/:itemId" element={<h4>Loading..</h4>} />
          </>
        )}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
