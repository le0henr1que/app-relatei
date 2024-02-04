import { Main } from '@/shared/components/Main';
import { Header } from '../components/Header';
import { Progress } from './components/Progress';
import { Footer } from '../components/Footer';
import { Identification } from './identification';
import { useProgress } from '@/store/ducks/progress/hooks/actions';
import { useProgressState } from '@/store/ducks/progress/hooks/progressState';
import { Informations } from './informations';
import { Report } from './report/Report';
import { ProtocolCode } from './protocol-code';
import { FormProvider, useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import Alert from '../components/Alert/Alert';
import { useEffect, useState } from 'react';
import { useDialogModalState } from '@/store/ducks/dialog-modal/hooks/dialogModalState';
import { useDialogModal } from '@/store/ducks/dialog-modal/hooks/actions';

const steps = [
  {
    id: 1,
    title: 'Identificação',
    element: <Identification />,
  },
  {
    id: 2,
    title: 'Informações',
    element: <Informations />,
  },
  {
    id: 3,
    title: 'Relato',
    element: <Report />,
  },
  {
    id: 4,
    title: 'Código do protocolo',
    element: <ProtocolCode />,
  },
];

export function Form() {
  const { currentStep } = useProgressState();
  const { isOpen } = useDialogModalState();
  const { handleModal } = useDialogModal();

  const methods = useForm();
  const currentStepCookies = Cookies.get('currentStep');
  const formDataCookiesValues = Cookies.get('acceptCookie');
  console.log(formDataCookiesValues);
  useEffect(() => {
    handleModal({
      isOpen: formDataCookiesValues !== 'true',
    });
  }, [formDataCookiesValues]);

  const closeModal = () => {
    Cookies.set('acceptCookie', 'true');
    handleModal({
      isOpen: false,
    });
  };

  return (
    <>
      <Alert
        isOpen={isOpen}
        onClose={closeModal}
        initialState={true}
        title="teste"
        description="teste"
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main>
          <div className="w-full flex flex-col justify-center items-center">
            <Progress steps={steps} />
            <FormProvider {...methods}>
              {steps[(currentStepCookies || currentStep) as number].element}
            </FormProvider>
          </div>
        </Main>
        <Footer />
      </div>
    </>
  );
}
