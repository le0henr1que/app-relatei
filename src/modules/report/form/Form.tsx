import { Main } from '@/shared/components/Main';
import { Header } from '../components/Header';
import { Progress } from './components/Progress';
import { Footer } from '../components/Footer';
import { Identification } from './identification';
import { useProgress } from '@/store/ducks/progress/hooks/actions';
import { useProgressState } from '@/store/ducks/progress/hooks/progressState';

const steps = [
  {
    id: 1,
    title: 'Identificação',
    element: <Identification />,
  },
  {
    id: 2,
    title: 'Teste',
    element: <h1>teste 2</h1>,
  },
  {
    id: 3,
    title: 'tarara',
    element: <h1>teste 3</h1>,
  },
];

export function Form() {
  const { currentStep } = useProgressState();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main>
          <div className="w-full flex flex-col justify-center items-center">
            <Progress steps={steps} />
            {steps[currentStep].element}
          </div>
        </Main>
        <Footer />
      </div>
    </>
  );
}
