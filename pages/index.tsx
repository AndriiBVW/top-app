import type { NextPage } from 'next';
import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';

const Home: NextPage = () => {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">Button</Button>
      <Button appearance="ghost" arrow="down">Button</Button>
      <P size="l">Big</P>
      <P>Middle</P>
      <P size="s">Small</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="s" color="green">Green</Tag>
      <Tag color="primary">Green</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
};

export default withLayout(Home);