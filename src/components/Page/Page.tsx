/* eslint-disable react/no-danger */

import PrintMarkdown from '@components/PrintMarkdown';
import Title from '@components/Title';
import { Typography } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';

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
        <PrintMarkdown markdown={body} />
      </Typography>
    </>
  );
};

export default Page;
