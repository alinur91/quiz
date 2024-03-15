import { ImageSizes } from "../types/quizTypes";

type ImageProps = {
  src: string;
  size: ImageSizes;
  isReactLogo: boolean;
};

const Image = ({ src, size, isReactLogo }: ImageProps) => {
  const imageSizeClasses = {
    [ImageSizes.small]: "h-20",
    [ImageSizes.medium]: "h-20 md:h-32",
    [ImageSizes.large]: "h-52",
  };

  const className = `${imageSizeClasses[size]} ${isReactLogo && size !== ImageSizes.large ? "spin-animation animate-spin" : ""}`;

  return <img className={className} src={src} alt="" />;
};

export default Image;
