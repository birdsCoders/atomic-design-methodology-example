import { FC } from 'react';
import Button from '../../atoms/Button';
import Card from '../../organisms/Card';
import Grid from '../../atoms/Grid';
import { mockedPosts } from './mockedPosts';

const Posts: FC = () => (
  <>
    <Grid>
      {mockedPosts.map((post) => (
        <Card
          category={post?.category}
          date={post?.date}
          key={post?.id}
          media={post?.image}
          title={post?.title}
          url={post?.url}
          userName={post?.userName}
          userPath={post?.userPath}
        />
      ))}
    </Grid>
    <div className="mt-12 text-center">
      <Button variant="secondary">Load more</Button>
    </div>
  </>
);

export default Posts;
