import { FC } from 'react';
import Posts from '../templates/Posts';
import SectionContent from '../molecules/SectionContent';
import Subscribe from '../organisms/Subscribe';
import Typography from '../atoms/Typography';

const HomePage: FC = () => (
  <>
    <SectionContent className="pt-6">
      <Typography
        className="md:text-center md:max-w-[42rem] md:mx-auto"
        color="secondary"
        variant="h1"
      >
        We love to make great things, things that matter
      </Typography>
    </SectionContent>
    <SectionContent className="pt-20" title="Latest news">
      <Posts />
    </SectionContent>
    <SectionContent className="pt-20">
      <Subscribe />
    </SectionContent>
  </>
);

export default HomePage;
