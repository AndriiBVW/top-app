import type { NextPage } from 'next';
import { Button, Htag, P } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">Button</Button>
      <Button appearance="ghost" arrow="down">Button</Button>
      <P size="l">Big</P>
      <P>Middle</P>
      <P size="s">Small</P>
    </>
  );
};

export default Home;