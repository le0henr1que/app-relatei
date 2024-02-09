import { Main } from '../../../shared/components/Main';
import { Card } from './components/card';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useRepositoriesState } from '@/store/ducks/progress/hooks/repositoriesState';
import { useRepositories } from '@/store/ducks/progress/hooks/actions';
import { useNavigate } from 'react-router-dom';
import { useLoginQuery } from '@/services/access/login';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InputText } from '../components/Input';

export function Home() {
  const schema = z.object({
    protocol: z
      .string()
      .min(3, 'Mínimo 3 caracteres')
      .max(50, 'Máximo 50 caracteres'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main>
          <div className="w-full flex flex-col md:flex-row sm:flex-column sm:mt-[46px] justify-center md:items-start sm:items-center md:mt-[34px] gap-8 md:gap-16">
            <Card.Root>
              <div className="flex flex-col gap-[24px] items-center justify-center">
                <Card.Icon
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
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

              <Card.Action
                type="button"
                onClick={() => navigate('/formulario')}
                title="Criar Relato"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M11.6667 1.66666H5.00001C4.55798 1.66666 4.13406 1.84225 3.8215 2.15481C3.50894 2.46737 3.33334 2.8913 3.33334 3.33332V16.6667C3.33334 17.1087 3.50894 17.5326 3.8215 17.8452C4.13406 18.1577 4.55798 18.3333 5.00001 18.3333H15C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V6.66666M11.6667 1.66666L16.6667 6.66666M11.6667 1.66666V6.66666H16.6667M13.3333 10.8333H6.66668M13.3333 14.1667H6.66668M8.33334 7.49999H6.66668"
                      stroke="white"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </Card.Root>

            <Card.Root>
              <div className="flex flex-col gap-[24px] items-center justify-center">
                <Card.Icon
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
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
              
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 justify-center items-center"
              >
<div className="p-[6px]">                
                <InputText
                  label="Protocolo"
                  placeholder="Ex: 123456"
                  errorMessage={errors.protocol?.message}
                  {...register('protocol')}
                />
                

                <span className="text-[#344054] font-inter text-base font-normal text-[18px] ">
                  O código é entregue ao finalizar um relato
                </span>
</div>
                <Card.Action
                  type="submit"
                  title="Acompanhar Relato"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M18 12.5C18 12.942 17.8244 13.366 17.5118 13.6785C17.1993 13.9911 16.7754 14.1667 16.3333 14.1667H6.33333L3 17.5V4.16667C3 3.72464 3.17559 3.30072 3.48816 2.98816C3.80072 2.67559 4.22464 2.5 4.66667 2.5H16.3333C16.7754 2.5 17.1993 2.67559 17.5118 2.98816C17.8244 3.30072 18 3.72464 18 4.16667V12.5Z"
                        stroke="white"
                        stroke-width="1.67"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                />
              </form>
              
            </Card.Root>
          </div>
        </Main>

        <Footer />
      </div>
    </>
  );
}
