/* eslint-disable react/no-danger */
import hydrate from 'next-mdx-remote/hydrate';

import Title from '@components/Title';
import { components } from '@lib/markdown';
import { Typography } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';

import Logo from '../Layout/Logo.svg';

type Props = {
  title: string;
  coverImage?: string;
  body: string;
};

const Page: React.FC<Props> = ({ title, coverImage, body }) => {
  const content = hydrate(body, { components });
  return (
    <>
      <Title title={title} />
      {coverImage && <SvgIcon component={Logo} viewBox="0 0 100 100" />}
      <Typography variant="body1" align="justify">
        {content}
      </Typography>
    </>
  );
};

export default Page;
