import { Controller, useForm } from 'react-hook-form';
import { ButtonProgress } from '../components/ButtonProgress';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Cookies from 'js-cookie';
import { useDialogModal } from '@/store/ducks/dialog-modal/hooks/actions';
import { useEffect, useState } from 'react';
import Alert from '../../components/Alert/Alert';
import { useDialogModalState } from '@/store/ducks/dialog-modal/hooks/dialogModalState';
import { CopyIcon, HomeIcon } from '@radix-ui/react-icons';
import { InputText } from '../../components/Input';

const schema = z.object({
  descriptionOccurrence: z.string(),
  dateOccurrence: z.string(),
});

export function Report() {
  const { handleModal } = useDialogModal();
  const [buttonState, setButtonState] = useState(true);

  let formDataCookiesValues = Cookies.get('formData');
  let dataObject = formDataCookiesValues
    ? JSON.parse(formDataCookiesValues)
    : {};
  const { control, handleSubmit, watch } = useForm({
    resolver: zodResolver(schema),
  });

  const watchAllFields = watch();
  let newWatch = watchAllFields;
  console.log(watchAllFields);
  const isDisabled = Object.values(newWatch).some((x) => !x);
  const { isOpen } = useDialogModalState();

  const onSubmit = async (data: any) => {
    console.log('DADOS PARA ENVIO ---> ', { dataObject, report: data });
    // if (finishStep === currentStep) {
    handleModal({
      isOpen: true,
      // component: <div>Deu certo</div>,
    });
    // }
  };

  const cleanCache = async () => {
    Cookies.remove('currentStep');
    Cookies.remove('formData');
    window.location.href = '/';
  };

  useEffect(() => {
    setButtonState(isDisabled);
  }, [isDisabled]);

  return (
    <>
      <Alert
        isOpen={isOpen}
        onClose={() => {
          handleModal({
            isOpen: false,
          });
        }}
      >
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[20px]">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="check-circle">
                  <path
                    id="Icon"
                    d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86M22 4L12 14.01L9.00001 11.01"
                    stroke="#039855"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div>
              <p className="self-stretch text-[#12B76A] font-semibold text-xl leading-7">
                Relato entregue com sucesso!
              </p>
            </div>
            <div>
              <p className="self-stretch text-[#1D2939] ">
                Analisaremos as informações fornecidas e tomaremos as medidas
                cabíveis. Abaixo está o código do protocolo; com ele, você
                poderá acompanhar o andamento do seu relato. Não o perca!
              </p>
            </div>
            <div>
              <InputText label="Código do protocolo" value="123456" />
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <button className="w-full p-[12px 20px] h-[48px] btn bg-primaryColor text-white flex gap-[8px] items-center justify-center">
              <CopyIcon /> Copiar código de protocolo
            </button>
            <button
              onClick={cleanCache}
              className="w-full p-[12px 20px] h-[48px] btn bg-white text-[#344054] border border-[#D0D5DD] flex gap-[8px] items-center justify-center"
            >
              <HomeIcon /> Voltar ao menu principal
            </button>
          </div>
        </div>
      </Alert>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-[783px] h-[433px] gap-[24px]">
          <h1 className="font-inter font-semibold text-xl">
            Preencha as informações do relato com o máximo de detalhes.
          </h1>
          <div className="flex flex-col gap-[6px]">
            <label className="text-sm font-medium font-inter text-base leading-5 tracking-normal text-left">
              Data da ocorrência
            </label>
            <Controller
              name="dateOccurrence"
              control={control}
              // defaultValue=""
              render={({ field }) => (
                <input
                  type="date"
                  {...field}
                  className="w-full h-[44px] p-[10px] border border-gray-300 rounded-md gap-8"
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className="text-sm font-medium font-inter text-base leading-5 tracking-normal text-left">
              Conte-nos o que aconteceu
            </label>
            <Controller
              name="descriptionOccurrence"
              control={control}
              // defaultValue=""
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Ontem fui vítima de..."
                  className="w-full h-[128px] px-[14px] py-[10px] border border-gray-300 rounded-md gap-8 resize-none"
                ></textarea>
              )}
            />
            <p className="text-sm font-normal font-inter text-base leading-5 tracking-normal text-left text-gray-400">
              Forneça o máximo de detalhes possível.
            </p>
          </div>
          <div className="flex justify-between self-stretch w-full gap-[4px] h-[79px] p-[20px] border-dashed border-2 border-purple-400 rounded-md gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="35"
              viewBox="0 0 29 35"
              fill="none"
            >
              <path
                d="M17.75 1.25H4.75C3.88805 1.25 3.0614 1.59241 2.4519 2.2019C1.84241 2.8114 1.5 3.63805 1.5 4.5V30.5C1.5 31.362 1.84241 32.1886 2.4519 32.7981C3.0614 33.4076 3.88805 33.75 4.75 33.75H24.25C25.112 33.75 25.9386 33.4076 26.5481 32.7981C27.1576 32.1886 27.5 31.362 27.5 30.5V11M17.75 1.25L27.5 11M17.75 1.25V11H27.5M21 19.125H8M21 25.625H8M11.25 12.625H8"
                stroke="#7F56D9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex flex-col">
              <p className="font-inter text-base font-semibold leading-5">
                Possui alguma prova ou evidência? Adicione ela ao seu relato
              </p>
              <p className="font-inter text-xs font-normal leading-6">
                Formatos suportados: JPEG,PNG e PDF até 10 MB.
              </p>
            </div>
            <label
              className="flex items-center justify-center gap-[8px] px-[8px] py-[14px] border border-solid border-purple-400 rounded-md cursor-pointer"
              x-data="{ files: null }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M11.6668 2.16666H5.00016C4.55814 2.16666 4.13421 2.34225 3.82165 2.65481C3.50909 2.96737 3.3335 3.3913 3.3335 3.83332V17.1667C3.3335 17.6087 3.50909 18.0326 3.82165 18.3452C4.13421 18.6577 4.55814 18.8333 5.00016 18.8333H15.0002C15.4422 18.8333 15.8661 18.6577 16.1787 18.3452C16.4912 18.0326 16.6668 17.6087 16.6668 17.1667V7.16666M11.6668 2.16666L16.6668 7.16666M11.6668 2.16666V7.16666H16.6668M10.0002 15.5V10.5M7.50016 13H12.5002"
                  stroke="#7F56D9"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                type="file"
                className="sr-only"
                id="singlefile"
                x-on:change="files = Object.values($event.target.files)"
              />
              <span
                className="block w-full truncate"
                x-text="files ? files.map(file => file.name).join(', ') : 'Choose single file...'"
              >
                <p className="font-inter text-base font-semibold leading-5 text-purple-600">
                  Adicionar evidência
                </p>
              </span>
            </label>
          </div>
        </div>
        <ButtonProgress disabled={buttonState} />
      </form>
    </>
  );
}
