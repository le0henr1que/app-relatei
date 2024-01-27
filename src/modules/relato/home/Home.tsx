import { Main } from '../../../shared/components/Main/Main';
import { Footer } from './components/footer';
import { Header } from './components/header';

export function Home() {
  return (
    <>
      <Header />

      <Main>
        <div className="container mx-auto my-8">
          <h1 className="text-3xl font-bold">Card do relatei</h1>
        </div>
      </Main>

      <Footer />
    </>
  );
}
