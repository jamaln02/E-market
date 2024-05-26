import React from "react";

const SearchLoader = () => {
  return (
    <div className="w-full h[50vh] relative flex justify-center items-start">
      <div className="search">
        <div className="search__glass">
          <div className="search__glass__paper">
            <div className="search__glass__paper__"></div>
          </div>
        </div>

        <div className="search__handle"></div>
      </div>
    </div>
  );
};

export default SearchLoader;
