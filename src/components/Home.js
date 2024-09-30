import OfferBanner from "../images/OfferBanner.png";
import BannerHer from "../images/BannerHer.jpg";
import BannerHim from "../images/BannerHim.jpg";
import Coupom from "../images/Coupon.jpg";

function Home() {
  return (
    <div>
      <img src={OfferBanner} alt="Offer" />
      <span className="flex w-[50rem] ml-[-38px] h-50">
        <img src={BannerHer} alt="BannerLeft" className="max-w-full h-auto" />
        <img src={BannerHim} alt="BannerRight" className="max-w-full h-auto" />
      </span>
      <img src={Coupom} alt="Cupon" className="max-w-full h-auto" />
    </div>
  );
}

export default Home;
