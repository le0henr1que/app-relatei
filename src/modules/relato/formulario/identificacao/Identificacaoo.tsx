import { Main } from '../../../../shared/components/Main/Main';
import { Header } from '../../home/components/header';
import { Footer } from '../../home/components/footer';
import { Pergunta } from './components/pergunta';
import { PerguntaRoot } from './components/pergunta/PerguntaRoot';
import { PerguntaCheck } from './components/pergunta/PerguntaCheck';
import { CardAction } from '../../home/components/card/CardAction';

export function Identificacao() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Header />
      <Main>
        <div className="inline-flex flex-col items-end gap-[16px] w-[797px] h-[404px]">
          <div className="h-[70px]"></div>
          <PerguntaRoot>
            <Pergunta.Content title="Vamos lá. Você é a vítima?"></Pergunta.Content>
            <div className="flex items-start content-start gap-x-16 gap-y-48 self-stretch flex-wrap">
              <PerguntaCheck label="Não, não sou a vítima" checked={false} />
              <PerguntaCheck label="Sim, não sou a vítima" checked={false} />
              <PerguntaCheck
                label="Caso sem vitima direta (impessoal)"
                checked={false}
              />
            </div>
          </PerguntaRoot>

          <PerguntaRoot>
            <Pergunta.Content title="Você deseja se identificar?"></Pergunta.Content>
            <div className="flex items-start content-start gap-x-16 gap-y-48 self-stretch flex-wrap">
              <PerguntaCheck
                label="Sim, quero me identificar"
                checked={false}
              />
              <PerguntaCheck
                label="Não, não quero me identificar"
                checked={false}
              />
              oi
            </div>
          </PerguntaRoot>

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
  );
}
