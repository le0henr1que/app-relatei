import { Main } from '../../../../shared/components/Main';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Question } from './components/question';

export function Identification() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main>
          <div className="w-full flex flex-col justify-center items-center">
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
                      Identificação
                    </div>
                  </div>
                  <div className="justify-end items-center gap-0.5 flex">
                    <div className="text-center text-gray-400 text-sm font-medium font-['Inter'] leading-tight">
                      Etapa 1 de 4
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-1 inline-flex">
                <div className="grow shrink basis-0 h-3 bg-violet-500 rounded-[50px]"></div>
                <div className="grow shrink basis-0 h-3 bg-black bg-opacity-10 rounded-[50px]"></div>
                <div className="grow shrink basis-0 h-3 bg-black bg-opacity-10 rounded-[50px]"></div>
                <div className="grow shrink basis-0 h-3 bg-black bg-opacity-10 rounded-[50px]"></div>
              </div>
            </div>
            <Question.Root>
              <Question.Content title="Vamos lá. Você é a vítima?">
                <Question.Check
                  name="isVictim"
                  items={[
                    {
                      label: 'Não, não sou a vítima',
                      checked: false,
                    },
                    {
                      label: 'Sim, não sou a vítima',
                      checked: false,
                    },
                    {
                      label: 'Caso sem vitima direta (impessoal)',
                      checked: false,
                    },
                  ]}
                />
              </Question.Content>
              <Question.Content title="Você deseja se identificar?">
                <Question.Check
                  name="isIdentity"
                  items={[
                    {
                      label: 'Sim, quero me identificar',
                      checked: false,
                    },
                    {
                      label: 'Não, não quero me identificar',
                      checked: false,
                    },
                  ]}
                />
              </Question.Content>
              <div className="w-full flex justify-end mt-[64px]">
                <button className="bg-[#7F56D9] rounded-[8px] w-[199px] btn btn-primary btn-lg flex p-[12px 20px] justify-center items-center gap-[8px] ">
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
            </Question.Root>
          </div>
        </Main>

        <Footer />
      </div>
    </>
  );
}
