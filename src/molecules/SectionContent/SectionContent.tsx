import * as React from 'react';
import cn from 'classnames';
import Container from '../../atoms/Container';
import Typography from '../../atoms/Typography';

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleVariant?: 'h1' | 'h2';
}

const SectionContent: React.FC<Props> = ({ children, className, title, titleVariant = 'h2' }) => (
  <section className={cn('', className)}>
    <Container>
      {title && (
        <Typography className="mb-6" color="secondary" variant={titleVariant}>
          {title}
        </Typography>
      )}
      {children}
    </Container>
  </section>
);

export default SectionContent;
