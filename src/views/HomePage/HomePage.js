import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import * as API from "../../service/Api";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  // const {url} = useRouteMatch;
  console.log(movies);

  useEffect(() => {
    API.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/:${movie.id}`}>
                {movie.title} {movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default HomePage;
