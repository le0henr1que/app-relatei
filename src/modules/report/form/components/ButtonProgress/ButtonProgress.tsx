import { useProgress } from '@/store/ducks/progress/hooks/actions';
import { useProgressState } from '@/store/ducks/progress/hooks/progressState';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export function ButtonProgress({ disabled }: any) {
  const { nextStep, prevStep } = useProgress();

  const { currentStep } = useProgressState();
  const currentStepCookies = Cookies.get('currentStep');

  let formDataCookiesValues = Cookies.get('formData');
  let dataObject = formDataCookiesValues
    ? JSON.parse(formDataCookiesValues)
    : {};
  // useEffect(() => {
  //   setButtonState(disabled);
  // }, [disabled]);

  console.log('disabled', disabled);
  return (
    <>
      <div className="w-[797px]  flex justify-between mt-[64px]">
        <div>
          {((currentStepCookies || currentStep) as number) !== 0 && (
            <button
              onClick={() => {
                let dataString = JSON.stringify(dataObject);
                Cookies.set('formData', dataString);
                prevStep();
              }}
              className="bg-[#FFF] rounded-[8px] border border-[#D0D5DD] w-auto btn  btn-lg flex p-[12px 20px] justify-center items-center gap-[8px] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.8334 9.99999H4.16675M4.16675 9.99999L10.0001 15.8333M4.16675 9.99999L10.0001 4.16666"
                  stroke="#344054"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Voltar
            </button>
          )}
        </div>
        <div>
          <button
            disabled={disabled}
            type="submit"
            className="bg-[#7F56D9] rounded-[8px] w-auto btn btn-primary btn-lg flex p-[12px 20px] justify-center items-center gap-[8px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.16663 9.99999H15.8333M15.8333 9.99999L9.99996 4.16666M15.8333 9.99999L9.99996 15.8333"
                stroke="white"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Próxima etapa
          </button>
        </div>
      </div>
    </>
  );
}
