import React , {useEffect} from "react";
import FindClothes from "./home/FindClothes";
import NewArrivals from "./home/NewArrivals";
import TopSelling from "./home/topSelling";
import DressStyle from "./home/DressStyle";
import OurHappyCustomers from "./home/OurHappyCustomers";

function Home() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <FindClothes />
    <NewArrivals />
    <TopSelling  />
    <DressStyle  />
    <OurHappyCustomers  />
    </>
  );
}

export default Home;
