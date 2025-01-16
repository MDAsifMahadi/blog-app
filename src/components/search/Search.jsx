import { useEffect, useState } from 'react';
import API from '../../utilities/API';
import Card from '../card/Card';
import CategoryName from '../categoryName/CategoryName';
import Loading from './../../utilities/loading/Loading';
import './style.search.css';

const SearchArticles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Debounce function to handle search term changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms delay after typing stops

    return () => clearTimeout(timeoutId); // Cleanup timeout on cleanup
  }, [searchTerm]);

  // Fetch articles based on the debounced search term and page
  const fetchArticles = async (pageNumber) => {
    setIsFetching(true);
    try {
      const response = await API.get(`/search/articles`, {
        params: {
          searchTerm: debouncedSearchTerm,
          page: pageNumber,
          limit: 10,
        },
      });
      const newData = response.data;

      if (newData.length === 0) {
        setHasMore(false); // No more articles to load
      } else {
        // Add new articles without duplicating
        setArticles((prevData) => {
          const uniqueData = [
            ...prevData,
            ...newData.filter(
              (newArticle) => !prevData.some((existingArticle) => existingArticle._id === newArticle._id)
            ),
          ];
          return uniqueData;
        });
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setIsFetching(false);
      setLoading(false);
    }
  };

  // Reset articles and page when search term changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      setArticles([]); // Clear previous articles when a new search term is entered
      setPage(1); // Reset to the first page
      setHasMore(true); // Ensure we start from the first page with more data
      setLoading(true); // Show loading when fetching new articles
    }
  }, [debouncedSearchTerm]);

  // Fetch articles when the search term or page changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchArticles(page); // Only fetch articles when search term or page changes
    }
  }, [debouncedSearchTerm, page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (hasMore && !isFetching) {
        setPage((prevPage) => prevPage + 1); // Increment page number for infinite scroll
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, isFetching]);

  return (
    <div className="search__div">
      <CategoryName cName="Search" />
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Trigger search on input change
          placeholder="Search by title"
        />
      </form>
      <div className="result">
        {loading ? (
          <Loading />
        ) : (
          articles.map((article) => {
            const { _id, title, writer, cardData, categories, date } = article;
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
        {isFetching && <Loading />}
      </div>
    </div>
  );
};

export default SearchArticles;
