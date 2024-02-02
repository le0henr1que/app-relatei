import { Main } from '../../../../shared/components/Main/Main';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Pergunta } from './components/question';
import { QuestionRoot } from './components/question/QuestionRoot';
import { QuestionCheck } from './components/question/QuestionCheck';
import { CardAction } from '../../home/components/card/CardAction';

export function Identification() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Header />
        <Main>
          <div className="inline-flex flex-col items-end gap-[16px] w-[797px] h-[404px]">
            <div className="h-[70px]"></div>
            <QuestionRoot>
              <Pergunta.Content title="Vamos lá. Você é a vítima?"></Pergunta.Content>
              <div className="flex items-start content-start gap-x-16 gap-y-48 self-stretch flex-wrap">
                <QuestionCheck label="Não, não sou a vítima" checked={false} />
                <QuestionCheck label="Sim, não sou a vítima" checked={false} />
                <QuestionCheck
                  label="Caso sem vitima direta (impessoal)"
                  checked={false}
                />
              </div>
            </QuestionRoot>

            <QuestionRoot>
              <Pergunta.Content title="Você deseja se identificar?"></Pergunta.Content>
              <div className="flex items-start content-start gap-x-16 gap-y-48 self-stretch flex-wrap">
                <QuestionCheck
                  label="Sim, quero me identificar"
                  checked={false}
                />
                <QuestionCheck
                  label="Não, não quero me identificar"
                  checked={false}
                />
              </div>
            </QuestionRoot>

            <CardAction
              title="Próxima Etapa"
              icon={
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
              }
            />
          </div>
        </Main>

        <Footer />
      </div>
    </>
  );
}
