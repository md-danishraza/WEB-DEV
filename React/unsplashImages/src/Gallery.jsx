import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAppContext } from "./AppContext";
import axios from "axios";

function Gallery() {
  const { searchValue } = useAppContext();
  const fetchImages = async () => {
    try {
      const result = await axios.get(
        "https://api.unsplash.com/search/photos?query=" + searchValue,
        {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_API}`,
          },
        }
      );
      // console.log(result.data.results);
      return result.data.results;
    } catch (error) {
      throw error;
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchValue],
    queryFn: fetchImages,
  });
  if (isError) {
    return <h1 className="notFound">Error!!!</h1>;
  }
  if (!isLoading && !data?.length) {
    return <h1 className="notFound">Found Nothing!</h1>;
  }
  return (
    <div className="gallery">
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        data.map((image, i) => {
          return (
            <a
              href={image.urls.full} // full-resolution image
              download // download prompt if clicked
              key={i}
              target="_blank"
            >
              <img
                src={image.urls.small} // smaller image for performance
                alt={image.alt_description || "Unsplash Image"}
                title="Click to download"
              />
            </a>
          );
        })
      )}
    </div>
  );
}

export default Gallery;
