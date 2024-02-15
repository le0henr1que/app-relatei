import { useProgressState } from '@/store/ducks/progress/hooks/progressState';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export function Progress({ steps }: any) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { currentStep } = useProgressState();

  const currentStepCookies:any = Cookies.get('currentStep');

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2);
  }, [currentStep]);
  return (
    <>
      <div className="w-[797px] h-[68px] flex-col justify-start items-start gap-1 inline-flex mb-[40px] mt-[36px]">
        <div className="self-stretch h-[52px] flex-col justify-end items-start flex">
          <div className="justify-start items-end gap-2.5 inline-flex">
            <div className="text-center text-gray-400 text-sm font-normal font-['Inter'] leading-tight">
              Etapa atual
            </div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="justify-start items-center gap-1.5 flex">
              <div className="text-center text-violet-500 text-2xl font-semibold font-['Inter'] leading-loose">
                {
                  steps[((+currentStepCookies ?? 0) || +currentStep) as number]
                    .title
                }
              </div>
            </div>
            <div className="justify-end items-center gap-0.5 flex">
              <div className="text-center text-gray-400 text-sm font-medium font-['Inter'] leading-tight">
                Etapa{' '}
                {(((+currentStepCookies ?? 0) || +currentStep) as number) + 1}{' '}
                de {steps.length}
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch justify-start items-start gap-1 inline-flex">
          {steps.map((step: any) => (
            <div
              key={steps.title}
              className="grow shrink basis-0 h-3 bg-black bg-opacity-10 rounded-[50px]"
            >
              <div
                className={`grow shrink basis-0 h-3 rounded-[50px] ${
                  isLoaded &&
                  ((currentStepCookies || currentStep) as number) >= step.id - 1
                    ? 'w-full bg-violet-500 transition-all duration-1000'
                    : 'w-0 bg-violet-500 transition-all duration-1000'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
