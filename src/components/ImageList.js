import "../styles/ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });

  return <div className="image-list">{renderedImages} </div>;
}

export default ImageList;

/*
Requirements for Keys:
1. use whenever we have a list of elements
(so every time we do the 'map')
2. add the key to the top-most JSX element in the list
3. must be a strung or a number
4. should be unique for this list
5. should be consistent across re-renders (should not change)
 */
