import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../service/Api";

const MovieDetailsPage = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);
  console.log(movies);

  useEffect(() => {
    API.fetchDetailsMove(movieId).then(setMovies);
  }, [movieId]);

  return (
    <>
      <h2>Details</h2>
      {/* {movies && (
             <img
             src={src}
             alt=""
             className={styles.ImageGalleryItemImage}
             data-img={largeImg}
             height="240"
             width="320"
           />
          
            )
           
        } */}
    </>
  );
};

export default MovieDetailsPage;
