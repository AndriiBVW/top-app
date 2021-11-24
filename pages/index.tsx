import type { NextPage } from 'next';
import { Button, Htag } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" className="Natalinka">Button</Button>
      <Button appearance="ghost">Button</Button>
    </>
  );
};

export default Home;
