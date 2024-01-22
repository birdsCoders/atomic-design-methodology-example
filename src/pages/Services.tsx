import { FC } from 'react';
import SectionContent from '../molecules/SectionContent';
import Subscribe from '../organisms/Subscribe';

const ServicesPage: FC = () => (
  <>
    <SectionContent title="Services" titleVariant="h1">
      Services content ...
    </SectionContent>
    <SectionContent className="pt-20">
      <Subscribe />
    </SectionContent>
  </>
);

export default ServicesPage;
