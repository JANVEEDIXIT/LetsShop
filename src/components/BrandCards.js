function BrandCards({ categoryTitle, imageURL, minOffer }) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#"> */}
        <img className="rounded-t-lg" src={imageURL} alt="" />
        {/* </a> */}
        {/* <div class="p-5"> */}
        <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {categoryTitle}
        </h6>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {minOffer}
        </p>
      </div>
    </div>
    // </div>
  );
}

export default BrandCards;
