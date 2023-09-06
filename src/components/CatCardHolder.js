import React from "react";
import { useState, useEffect } from "react";
import CatCard from "../components/CatCard";
import ReactPaginate from "react-paginate";

const CatCardHolder = () => {
  const [catData, setCatData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const createRandomPrice = () => {
    return Math.floor(Math.random() * 250);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=99&api_key=live_a49d14G4QIFGKTDT4vMm7ZlGDTCMhjTTcluXKodeyxclY7XubXPGvHa55wY6eNIf`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setCatData(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  const catsPerPage = 9;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(catData.length / catsPerPage);
  const displayedCats = catData.slice(currentPage * catsPerPage, (currentPage + 1) * catsPerPage);
  return (
    <div>
      <div className="all-cats">
        {[
          displayedCats.length > 0
            ? displayedCats.map((cat, index) => {
                return <CatCard key={index} cat={cat} price={createRandomPrice()} />;
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
          pageClassName="page-item"
          previousClassName="page-item"
          nextClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
        />
      </div>
    </div>
  );
};

export default CatCardHolder;
