import React from "react";
import { useImages } from "../contexts/ImagesProvider";

function CustomPage() {
  const [images, setImages] = useImages();

  console.log(images);
  return <div>CustomPage</div>;
}

export default CustomPage;
