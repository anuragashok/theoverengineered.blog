type Props = { alt: string; src: string };
import urlParameterAppend from 'url-parameter-append';

const Media: React.FC<Props> = (props) => {
  const { alt, src } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  if (src.endsWith('.mp4')) {
    return (
      <video autoPlay loop muted playsInline width="100%">
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  if (src.includes('ctfasset')) {
    return (
      <picture>
        <source srcSet={urlParameterAppend(src, 'fm', 'webp')} />
        <source srcSet={urlParameterAppend(src)} />
        <img alt={alt} src={src} width="100%" />
      </picture>
    );
  }

  return <img alt={alt} src={src} width="100%" />;
};

export default Media;
