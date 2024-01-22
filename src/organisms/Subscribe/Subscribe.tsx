import { FC } from 'react';
import Panel from '../../atoms/Panel';
import SubscribeForm from '../../molecules/SubscribeForm';
import Typography from '../../atoms/Typography';

const Subscribe: FC = () => (
  <Panel className="text-center" variant="secondary">
    <Typography className="md:max-w-[600px] md:mx-auto mb-8" variant="huge">
      An enterprise template to ramp up your company website
    </Typography>
    <SubscribeForm />
  </Panel>
);

export default Subscribe;
