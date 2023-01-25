import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
};

const appName = import.meta.env.VITE_APP_TITLE;

export const Head = ({ title }: Props) => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <title>
      {title ?? ''} | {appName ?? 'UNKNOWN APP NAME'}
    </title>
  </Helmet>
);
