import Button from '../components/Button';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

export default function Root() {
  return (
    <Main introMain={true}>
      <Navbar intro={true} />

      <Layout
        columns={[
          ['ratio', 0.5],
          ['auto', 0],
        ]}
      >
        <div>
          <div>
            <h1 className='h5'>
              Journey beyond the stars, Exploring{' '}
              <span className='h1'>Space</span>
            </h1>
            <p>
              From the creation of new worlds to the intricacies of the
              mysteries of the cosmos. Create new civilizations, unravel the
              secrets of deep space, and embark on the adventure of a lifetime.
              Join us as we push the boundaries of what is known and venture
              into the unknown depths of the final frontier. The universe
              awaits, are you ready to explore?
            </p>
          </div>
        </div>
        <div>
          <Button type='large'>Explore</Button>
        </div>
      </Layout>
    </Main>
  );
}
