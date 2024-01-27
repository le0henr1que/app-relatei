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
                <Card.Icon />

                <Card.Content
                  title="Criar Relato"
                  description="Clique no botão abaixo para criar um relato anônimo ou identificado e envie-nos para podermos analisar-mos e ajudar você!"
                />
              </div>

              <Card.Action />
            </Card.Root>

            <Card.Root>
              <div className="flex flex-col gap-[24px] items-center justify-center">
                <Card.Icon />

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
