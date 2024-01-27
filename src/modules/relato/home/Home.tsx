import { Main } from '../../../shared/components/Main/Main';
import { Card } from './components/card';
import { Footer } from './components/footer';
import { Header } from './components/header';

export function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <Main>
          <div className="w-full flex justify-center items-center mt-[84px] gap-[50px]">
            <Card.Root>
              <div className="flex flex-col gap-[24px] items-center justify-center">
                <Card.Icon
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="61"
                      height="62"
                      viewBox="0 0 61 62"
                      fill="#7F56D9"
                    >
                      <path
                        d="M58.1105 13.9222C56.9949 15.0932 55.9121 16.2297 55.8793 17.3662C55.7808 18.4683 56.8964 19.6048 57.9464 20.6724C59.5214 22.3944 61.0636 23.9442 60.998 25.6317C60.9324 27.3193 59.2589 29.0757 57.5855 30.7977L44.034 45.0557L39.3747 40.1652L53.3199 25.5628L50.1699 22.2566L45.5106 27.1126L33.206 14.1977L45.8059 1.00736C47.0856 -0.335787 49.2184 -0.335787 50.4324 1.00736L58.1105 9.06624C59.3902 10.3405 59.3902 12.5791 58.1105 13.9222ZM0 49.0851L31.3685 16.1264L43.6731 29.0412L12.3046 62H0V49.0851Z"
                        fill="#7F56D9"
                      />
                    </svg>
                  }
                />

                <Card.Content
                  title="Criar Relato"
                  description="Clique no botão abaixo para criar um relato anônimo ou identificado e envie-nos para podermos analisar-mos e ajudar você!"
                />
              </div>

              <Card.Action />
            </Card.Root>

            <Card.Root>
              <div className="flex flex-col gap-[24px] items-center justify-center">
                <Card.Icon
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="87"
                      height="86"
                      viewBox="0 0 87 86"
                      fill="none"
                    >
                      <path
                        d="M11.25 47.8374C7.30833 47.8374 4.08333 44.6124 4.08333 40.6707V22.7541C4.08333 18.8124 7.30833 15.5874 11.25 15.5874H39.9167C43.8583 15.5874 47.0833 18.8124 47.0833 22.7541V40.6707C47.0833 44.6124 43.8583 47.8374 39.9167 47.8374H32.75V58.5874L22 47.8374H11.25ZM75.75 69.3374C79.6917 69.3374 82.9167 66.1124 82.9167 62.1707V44.2541C82.9167 40.3124 79.6917 37.0874 75.75 37.0874H54.25V40.6707C54.25 48.5541 47.8 55.0041 39.9167 55.0041V62.1707C39.9167 66.1124 43.1417 69.3374 47.0833 69.3374H54.25V80.0874L65 69.3374H75.75Z"
                        fill="#7F56D9"
                      />
                    </svg>
                  }
                />

                <Card.Content
                  title="Acompanhar Relato"
                  description="Digite abaixo o código do protocolo e clique no botão para acompanhar o andamento do seu relato"
                />
              </div>

              <Card.Action />
            </Card.Root>
          </div>
        </Main>

        <Footer />
      </div>
    </>
  );
}
