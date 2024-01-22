import * as React from 'react';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => (
  <div className="grid [grid-template-areas:'header''main''footer'] grid-rows-[max-content_auto_max-content] min-h-[100vh]">
    <Header />
    <main className="[grid-area:main] py-8">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
