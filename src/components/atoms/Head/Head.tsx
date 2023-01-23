import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
};

export const Head = ({ title }: Props) => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <title>{title ?? ''} | CharVstack</title>
  </Helmet>
);
