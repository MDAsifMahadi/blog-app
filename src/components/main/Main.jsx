import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../utilities/API";
import Card from "../card/Card";
import Loading from "./../../utilities/loading/Loading";
import './style.main.css';

const Main = () => {
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
      const response = await API.get(`/articles?page=${pageNumber}&limit=10`);
      const newData = response.data;
      // Filter out duplicate articles
      const uniqueData = newData.filter(
        (newArticle) => !data.some((existingArticle) => existingArticle._id === newArticle._id)
      );

      if (uniqueData.length === 0) {
        setHasMore(false); // No more articles to load
      } else {
        setData((prevData) => [...prevData, ...uniqueData]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsFetching(false);
      setLoading(false);
    }
  };

  // Fetch data whenever page changes
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Handle scroll event to detect when to load more data
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
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
    <main className='page' style={location.pathname === "/" ? { marginTop: "120px" } : {}}>
      {loading ? (
       ""
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

export default Main;


