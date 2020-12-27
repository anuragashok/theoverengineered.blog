type Props = { alt: string; src: string };

const Image: React.FC<Props> = (props) => {
  const { alt, src } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <img alt={alt} src={src} width="100%" />;
};

export default Image;
