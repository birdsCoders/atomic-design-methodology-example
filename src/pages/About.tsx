import { FC } from 'react';
import SectionContent from '../molecules/SectionContent';
import Subscribe from '../organisms/Subscribe';

const AboutPage: FC = () => (
  <>
    <SectionContent title="About us" titleVariant="h1">
      About us content ...
    </SectionContent>
    <SectionContent className="pt-20">
      <Subscribe />
    </SectionContent>
  </>
);

export default AboutPage;
