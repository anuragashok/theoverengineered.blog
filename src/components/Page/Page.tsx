/* eslint-disable react/no-danger */
import hydrate from 'next-mdx-remote/hydrate';

import Title from '@components/Title';
import { components } from '@lib/markdown';
import { Typography } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import ReactMarkdown from 'react-markdown'

import Logo from '../Layout/Logo.svg';

type Props = {
  title: string;
  coverImage?: string;
  body: string;
};

const Page: React.FC<Props> = ({ title, coverImage, body }) => {
  return (
    <>
      <Title title={title} />
      {coverImage && <SvgIcon component={Logo} viewBox="0 0 100 100" />}
      <Typography variant="body1" align="justify">
      <ReactMarkdown>{body}</ReactMarkdown>
      </Typography>
    </>
  );
};

export default Page;
