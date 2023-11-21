import Main, { Props } from './Main';
import Navbar from './Navbar';
import Layout from './Layout';

interface SectionProps extends Props {
  image: string;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  childrenName: string;
}

const Section = ({
  image,
  activeSection,
  setActiveSection,
  childrenName,
  children,
}: SectionProps) => {
  return (
    <Main>
      <Navbar navText='Universe' />
      <Layout
        columns={[
          ['default', 0],
          ['default', 0],
        ]}
        gap={12}
        sideGap={10.4}
      >
        <h1 className='h5 section__title'>
          <span className='tc-t'>01 </span>
          Universe
        </h1>
      </Layout>
      <Layout
        columns={[
          ['fixed', 44.5],
          ['auto', 0],
        ]}
        gap={12}
        sideGap={10.4}
      >
        <div>
          <img src={image} alt='' />
        </div>
        <section className='section section--universe'>
          <nav className='section__nav'>
            <ul role='nav'>
              <li>
                <button
                  aria-expanded={activeSection == 'overview' ? true : false}
                  onClick={() => setActiveSection('overview')}
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  aria-expanded={
                    activeSection == 'characteristics' ? true : false
                  }
                  onClick={() => setActiveSection('characteristics')}
                >
                  Characteristics
                </button>
              </li>
              <li>
                <button
                  aria-expanded={activeSection == 'content' ? true : false}
                  onClick={() => setActiveSection('content')}
                >
                  {childrenName}
                </button>
              </li>
            </ul>
          </nav>

          {children}
        </section>
      </Layout>
    </Main>
  );
};

export default Section;
