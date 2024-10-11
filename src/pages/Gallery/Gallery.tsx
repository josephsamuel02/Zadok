import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../DB/firebase";
import Nav from "../../components/Nav";
const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const photosListRef = ref(storage, "gallery");

    listAll(photosListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) =>
          setPhotos((prev: any) => [...prev, { src: url, width: 800, height: 600 }])
        );
      });
    });
  }, []);

  // const photos = [
  //   { src: "/img/2.jpg", width: 1600, height: 900 },
  //   { src: "/img/1.jpg", width: 800, height: 600 },
  //   { src: "/img/3.jpg", width: 1600, height: 900 },
  //   { src: "/img/4.jpg", width: 800, height: 600 },
  //   { src: "/img/6.jpg", width: 800, height: 600 },
  //   { src: "/img/7.jpg", width: 1600, height: 900 },
  //   { src: "/img/8.jpg", width: 800, height: 600 },
  //   { src: "/img/9.jpg", width: 1600, height: 900 },
  //   { src: "/img/10.jpg", width: 800, height: 600 },
  //   { src: "/img/11.jpg", width: 1600, height: 900 },
  //   { src: "/img/12.jpg", width: 800, height: 600 },
  //   { src: "/img/13.jpg", width: 1600, height: 900 },
  //   { src: "/img/14.jpg", width: 800, height: 600 },
  //   { src: "/img/15.jpg", width: 1600, height: 900 },
  //   { src: "/img/16.jpg", width: 800, height: 600 },
  //   { src: "/img/17.jpg", width: 800, height: 600 },
  //   { src: "/img/18.jpg", width: 800, height: 600 },
  //   { src: "/img/19.jpg", width: 800, height: 600 },
  //   { src: "/img/20.jpg", width: 800, height: 600 },
  //   { src: "/img/21.jpg", width: 800, height: 600 },
  //   { src: "/img/22.jpg", width: 800, height: 600 },
  //   { src: "/img/23.jpg", width: 800, height: 600 },
  //   { src: "/img/24.jpg", width: 800, height: 600 },
  //   { src: "/img/25.jpg", width: 800, height: 600 },
  //   { src: "/img/26.jpg", width: 800, height: 600 },
  //   { src: "/img/27.jpg", width: 800, height: 600 },
  //   { src: "/img/28.jpg", width: 800, height: 600 },
  //   { src: "/img/29.jpg", width: 800, height: 600 },
  //   { src: "/img/30.jpg", width: 800, height: 600 },
  //   { src: "/img/31.jpg", width: 800, height: 600 },
  //   { src: "/img/32.jpg", width: 800, height: 600 },
  //   { src: "/img/33.jpg", width: 1600, height: 900 },
  //   { src: "/img/34.jpg", width: 800, height: 600 },
  //   { src: "/img/35.jpg", width: 1600, height: 900 },
  //   { src: "/img/36.jpg", width: 800, height: 600 },
  //   { src: "/img/37.jpg", width: 1600, height: 900 },
  //   { src: "/img/38.jpg", width: 800, height: 600 },
  //   { src: "/img/39.jpg", width: 1600, height: 900 },
  //   { src: "/img/40.jpg", width: 800, height: 600 },
  //   { src: "/img/41.jpg", width: 1600, height: 900 },
  //   { src: "/img/42.jpg", width: 800, height: 600 },
  //   { src: "/img/43.jpg", width: 1600, height: 900 },
  //   { src: "/img/44.jpg", width: 800, height: 600 },
  //   { src: "/img/45.jpg", width: 1600, height: 900 },
  //   { src: "/img/46.jpg", width: 800, height: 600 },
  //   { src: "/img/47.jpg", width: 1600, height: 900 },
  //   { src: "/img/48.jpg", width: 800, height: 600 },
  //   { src: "/img/50.jpg", width: 800, height: 600 },
  //   { src: "/img/51.jpg", width: 1600, height: 900 },
  //   { src: "/img/52.jpg", width: 800, height: 600 },
  //   { src: "/img/53.jpg", width: 1600, height: 900 },
  //   { src: "/img/54.jpg", width: 800, height: 600 },
  //   { src: "/img/55.jpg", width: 800, height: 600 },
  // ];

  return (
    <div className=" mx-0 mt-28">
      <Nav />
      <h3 className="mb-12 mx-auto text-3xl md:text-5xl text-gray-1000   text-center">
        Explore Our Gallery
      </h3>
      <hr className="mx-8 md:mx-12 bg-[#de1102] h-1" />
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  );
};

export default Gallery;
