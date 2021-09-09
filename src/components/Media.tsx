import urlParameterAppend from 'url-parameter-append';
import Image from 'next/image';

type Props = { alt: string; src: string;  };

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
    return <Image alt={alt} src={`https:${src}`} width="920px" height="420px" layout="responsive" />;
  }

  return <img alt={alt} src={src} width="100%" />;
};

export default Media;
