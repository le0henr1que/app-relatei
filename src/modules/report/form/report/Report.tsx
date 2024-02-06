import { useForm } from 'react-hook-form';
import { ButtonProgress } from '../components/ButtonProgress';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProgress } from '@/store/ducks/progress/hooks/actions';
import { z } from 'zod';

const schema = z.object({});

export function Report() {
  const { nextStep } = useProgress();

  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    console.log(errors);

    nextStep();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-[783px] h-[433px] gap-[24px]">
          <h1 className="font-inter font-semibold text-xl">
            Preencha as informações do relato com o máximo de detalhes.
          </h1>
          <div className="flex flex-col gap-[6px]">
            <label className="text-sm font-medium font-inter text-base leading-5 tracking-normal text-left">
              Data da ocorrência
            </label>
            <input
              type="date"
              className="w-full h-[44px] p-[10px] border border-gray-300 rounded-md gap-8"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className="text-sm font-medium font-inter text-base leading-5 tracking-normal text-left">
              Conte-nos o que aconteceu
            </label>
            <textarea
              placeholder="Ontem fui vítima de..."
              className="w-full h-[128px] px-[14px] py-[10px] border border-gray-300 rounded-md gap-8 resize-none"
            ></textarea>
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
        <ButtonProgress disabled={false} />
      </form>
    </>
  );
}
