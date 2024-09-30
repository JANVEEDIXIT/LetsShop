import CategoryBanner from "../images/CategoryBanner.jpg";
import CategoriesData from "../data/CategoriesData";
import BrandCards from "./BrandCards";

function Categories() {
  return (
    <div>
      <img src={CategoryBanner} alt="CategoryBanner" />
      {/* <div className="flex">
        <img src={Category1} alt="CategoryBanner" />
        <img src={Category2} alt="CategoryBanner" />
        <img src={Category1} alt="CategoryBanner" />
        <img src={Category2} alt="CategoryBanner" />
      </div>
      <div className="flex">
        <img src={Category1} alt="CategoryBanner" />
        <img src={Category2} alt="CategoryBanner" />
        <img src={Category1} alt="CategoryBanner" />
        <img src={Category2} alt="CategoryBanner" />
      </div> */}
      <div className="flex justify-around flex-wrap">
        {CategoriesData.map((category) => {
          return (
            <BrandCards
              categoryTitle={category.title}
              imageURL={category.imageUrl}
              minOffer={category.offer}
            ></BrandCards>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
