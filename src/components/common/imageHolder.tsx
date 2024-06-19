import { ImageHolderProps } from "../../utils/types";
const ImageHolder = ({
  imageUrl= "/logo.svg",
  className ,
  children
}: ImageHolderProps) => {
  return (
    <div
      style={{ backgroundImage: `url('${imageUrl}')` }}
      className={`image-holder ${className}`}
      aria-label="image"
    >
      {children}
    </div>
  );
};

export default ImageHolder;
