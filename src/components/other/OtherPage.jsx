import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../utilities/API";
import Card from "../card/Card";
import Loading from "./../../utilities/loading/Loading";

const OtherPage = ({ category }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  // Function to fetch data
  const fetchData = async (pageNumber) => {
    setIsFetching(true);
    try {
      const response = await API.get(
        `/articlesbycatigory?page=${pageNumber}&limit=10&category=${category.english}`
      );
      const newData = response.data;

      if (newData.length === 0) {
        setHasMore(false); // No more articles to load
      } else {
        setData((prevData) => [...prevData, ...newData]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsFetching(false);
      setLoading(false);
    }
  };

  // Fetch data whenever category changes
  useEffect(() => {
    setData([]); // Clear the current data
    setPage(1); // Reset page to 1
    setHasMore(true); // Reset hasMore to true
    fetchData(1); // Fetch data for the new category
  }, [category]);

  // Fetch data whenever page changes (pagination)
  useEffect(() => {
    if (page > 1) {
      fetchData(page);
    }
  }, [page]);

  // Handle scroll event to detect when to load more data
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (hasMore && !isFetching) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, isFetching]);

  return (
    <main
      className="page"
      style={location.pathname === "/" ? { marginTop: "120px" } : {}}
    >
      {loading ? (
        <Loading />
      ) : (
        data.map((data) => {
          const { _id, title, writer, cardData, categories, date } = data;
          return (
            <Card
              key={_id}
              id={_id}
              title={title}
              writer={writer}
              cardData={cardData}
              categories={categories}
              date={date}
            />
          );
        })
      )}
      {isFetching && <Loading />} {/* Loading while fetching more data */}
    </main>
  );
};

export default OtherPage;
