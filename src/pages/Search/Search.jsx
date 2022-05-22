import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ListSearch from "../../component/List/ListSearch/ListSearch";

export default function Search({ searchMovies, search, isLoading }) {
  const location = useLocation();
  const query = location.state.query;

  const handleData = () => {
    searchMovies(query);
  };
  useEffect(() => {
    handleData();
  }, [query]);
  return (
    <div className="content">
      {/* {search.length !== 0 ? ( */}
        <>
          <div className="content-heading">
            <div>
              <h5>Khám phá phim và chương trình liên quan đến: </h5>
            </div>
            <div className="content-genres">{/* <span>Anime</span> */}</div>
          </div>
          <div>
            <ListSearch data={search} isLoading={isLoading} />
          </div>
        </>
      {/* // ) : (
      //   <div className="content-empty">
      //     <p>{`Không có dữ liệu kết quả nào khớp với yêu cầu tìm kiếm " ${query} " của bạn.`}</p>
      //   </div>
      // )} */}
    </div>
  );
}
