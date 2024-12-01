import React from "react";
import s from "./Pages.module.scss";
import Banner from "../components/Banner";
import Category from "./Category";
import Products from "./Products";
const Home = () => {
  return (
    <div className={s.home}>
      <Banner
        heading={`This is banner`}
        img={`https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
        detail={`fmlsdfsnfnsdflnsdf`}
        button={`Look into page`}
        pageLink={`/product/:id`}
      />
      <div className={s.container}>
        <Category list={3} heading={`Category`} />
        <Products list={6} heading={`Products`} />
      </div>
    </div>
  );
};

export default Home;
