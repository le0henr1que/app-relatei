import { Controller, useForm } from 'react-hook-form';
import { ButtonProgress } from '../components/ButtonProgress';
import { useProgress } from '@/store/ducks/progress/hooks/actions';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';
import { useProgressState } from '@/store/ducks/progress/hooks/progressState';

const schema = z.object({
  relationshipCompany: z.string(),
  reportClassification: z.string(),
});

export function Informations() {
  const { nextStep } = useProgress();
  const { currentStep } = useProgressState();
  let formDataCookiesValues = Cookies.get('formData');
  let dataObject = formDataCookiesValues
    ? JSON.parse(formDataCookiesValues)
    : {};

  const defaultValues = {
    relationshipCompany: dataObject.informations?.relationshipCompany,
    reportClassification: dataObject.informations?.reportClassification,
  };
  const { control, handleSubmit, watch } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const watchAllFields = watch();
  let newWatch = watchAllFields;

  const isDisabled = Object.values(newWatch).some((x) => !x);

  const onSubmit = async (data: any) => {
    let dataString = JSON.stringify({ ...dataObject, informations: data });
    Cookies.set('formData', dataString);
    Cookies.set('currentStep', String(currentStep));
    nextStep();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto flex flex-col justify-center items-center gap-[40px]">
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4">
              Qual sua relação com a empresa?
            </h1>

            <div className="flex flex-col items-start w-full gap-[6px] ">
              <label className="text-gray-700 font-medium text-sm leading-[1.43]">
                Insira sua relação com a empresa
              </label>
              <Controller
                name="relationshipCompany"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select className="form-select w-full" {...field}>
                    <option value="" disabled selected>
                      Selecione sua relação
                    </option>
                    <option>Não sei</option>
                    <option>Não sei 2</option>
                  </select>
                )}
              />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4">
              Abaixo, classifique o seu relato.
            </h1>

            <div className="flex flex-col items-start w-full gap-[6px] ">
              <label className="text-gray-700 font-medium text-sm leading-[1.43]">
                Classifique seu relato.
              </label>
              <Controller
                name="reportClassification"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select className="form-select w-full" {...field}>
                    <option value="" disabled selected>
                      Selecione uma classificação
                    </option>
                    <option>Não sei</option>
                    <option>Não sei 2</option>
                  </select>
                )}
              />
            </div>
          </div>
        </div>
        <ButtonProgress disabled={isDisabled} />
      </form>
    </>
  );
}
