import React from "react";
import { useState } from "react";
import CatCard from "../components/CatCard";
import ReactPaginate from "react-paginate";
import filledArray from "./fakerdata";

const CatCardHolder = (props) => {
  const [currentPage, setCurrentPage] = useState(0);

  const catsPerPage = 9;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(props.catData ? props.catData.length / catsPerPage : 11);
  const displayedCats = props.catData ? props.catData.slice(currentPage * catsPerPage, (currentPage + 1) * catsPerPage) : [];
  return (
    <div className="cats-and-paginate">
      <div className="all-cats">
        {console.log(`displayedcats: ${displayedCats}`)}
        {[
          displayedCats.length > 0
            ? displayedCats.map((cat, index) => {
                return <CatCard key={index} cat={cat} price={filledArray[index]} handleAddToCart={props.handleAddToCart} />;
              })
            : "Loading Cat Data",
        ]}
      </div>
      <div className="paginate-div">
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default CatCardHolder;
