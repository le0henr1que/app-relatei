import { z } from 'zod';
import { Question } from './components/question';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonProgress } from '../components/ButtonProgress';
import { useProgress } from '@/store/ducks/progress/hooks/actions';
import { InputText } from '../../components/Input';
import { useEffect, useState } from 'react';
import { useProgressState } from '@/store/ducks/progress/hooks/progressState';
import Cookies from 'js-cookie';

const schema = z
  .object({
    isVictim: z.string(),
    isIdentity: z.string(),
    victimName: z.string().optional(),
    responsibleName: z.string().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.isVictim === 'notVictim') {
        return data.victimName && data.responsibleName;
      }

      return true;
    },
    {
      message:
        'Nome da vítima e nome do responsável são obrigatórios quando a pessoa não é a vítima',
    },
  )
  .refine(
    (data) => {
      if (data.isIdentity === 'yesIdentity') {
        return data.name && data.email;
      }

      return true;
    },
    {
      message: 'Nome e email são obrigatórios quando a identidade é confirmada',
    },
  );
export function Identification() {
  const { nextStep } = useProgress();
  const { currentStep } = useProgressState();

  const [buttonState, setButtonState] = useState(true);

  let formDataCookiesValues = Cookies.get('formData');
  let dataObject = formDataCookiesValues
    ? JSON.parse(formDataCookiesValues)
    : {};

  const defaultValues = {
    isVictim: dataObject.identity?.isVictim,
    isIdentity: dataObject.identity?.isIdentity,
    victimName: dataObject.identity?.victimName,
    responsibleName: dataObject.identity?.responsibleName,
    name: dataObject.identity?.name,
    email: dataObject.identity?.email,
  };
  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const watchAllFields = watch();
  let newWatch = watchAllFields;

  if (watchAllFields.isVictim !== 'notVictim') {
    delete newWatch.victimName;
    delete newWatch.responsibleName;
  }
  if (watchAllFields.isIdentity !== 'yesIdentity') {
    delete newWatch.name;
    delete newWatch.email;
  }
  console.log(errors);
  const isDisabled = Object.values(newWatch).some((x) => !x);

  const onSubmit = async (data: any) => {
    let dataString = JSON.stringify({ ...dataObject, identity: data });
    Cookies.set('formData', dataString);
    Cookies.set('currentStep', String(currentStep));
    nextStep();
  };

  useEffect(() => {
    setButtonState(isDisabled);
  }, [isDisabled]);

  return (
    <>
      <Question.Root>
        <form
          className="w-full flex flex-col gap-[40px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Question.Content title="Vamos lá. Você é a vítima?">
            <Question.Check
              items={[
                {
                  label: 'Não, não sou a vítima',
                  content: (
                    <Controller
                      name="isVictim"
                      control={control}
                      render={({ field: { onChange, value, ...rest } }) => (
                        <input
                          type="radio"
                          checked={value === 'notVictim'}
                          onChange={() => onChange('notVictim')}
                          {...rest}
                          className="form-radio h-5 w-5 text-[#7F56D9] border border-gray-300"
                        />
                      )}
                    />
                  ),
                },
                {
                  label: 'Sim, sou a vítima',
                  content: (
                    <Controller
                      name="isVictim"
                      control={control}
                      render={({ field: { onChange, value, ...rest } }) => (
                        <input
                          type="radio"
                          checked={value === 'yesVictim'}
                          onChange={() => onChange('yesVictim')}
                          {...rest}
                          className="form-radio h-5 w-5 text-[#7F56D9] border border-gray-300"
                        />
                      )}
                    />
                  ),
                },
                {
                  label: 'Caso sem vitima direta (impessoal)',
                  content: (
                    <Controller
                      name="isVictim"
                      control={control}
                      render={({ field: { onChange, value, ...rest } }) => (
                        <input
                          type="radio"
                          checked={value === 'impersonalCase'}
                          onChange={() => onChange('impersonalCase')}
                          {...rest}
                          className="form-radio h-5 w-5 text-[#7F56D9] border border-gray-300"
                        />
                      )}
                    />
                  ),
                },
              ]}
            />
            {watchAllFields.isVictim === 'notVictim' && (
              <div className="mt-[16px]">
                <InputText
                  errorMessage={errors.victimName?.message}
                  label="Insira o nome da vítima"
                  placeholder="Nome da vitma"
                  {...register('victimName')}
                />
                <InputText
                  errorMessage={errors.responsibleName?.message}
                  label="Insira o nome da vítima"
                  placeholder="Nome da vitma"
                  {...register('responsibleName')}
                />
              </div>
            )}
          </Question.Content>
          <Question.Content title="Você deseja se identificar?">
            <Question.Check
              items={[
                {
                  label: 'Sim, quero me identificar',
                  content: (
                    <Controller
                      name="isIdentity"
                      control={control}
                      render={({ field: { onChange, value, ...rest } }) => (
                        <input
                          type="radio"
                          checked={value === 'yesIdentity'}
                          onChange={() => onChange('yesIdentity')}
                          {...rest}
                          className="form-radio h-5 w-5 text-[#7F56D9] border border-gray-300"
                        />
                      )}
                    />
                  ),
                },
                {
                  label: 'Não, não quero me identificar',
                  content: (
                    <Controller
                      name="isIdentity"
                      control={control}
                      render={({ field: { onChange, value, ...rest } }) => (
                        <input
                          type="radio"
                          checked={value === 'noIdentity'}
                          onChange={() => onChange('noIdentity')}
                          {...rest}
                          className="form-radio h-5 w-5 text-[#7F56D9] border border-gray-300"
                        />
                      )}
                    />
                  ),
                },
              ]}
            />
            {watchAllFields.isIdentity === 'yesIdentity' && (
              <div className="mt-[16px]">
                <InputText
                  errorMessage={errors.victimName?.message}
                  label="Digite seu nome"
                  placeholder="Nome"
                  {...register('name')}
                />
                <InputText
                  errorMessage={errors.responsibleName?.message}
                  label="Digite seu email"
                  placeholder="Email"
                  {...register('email')}
                />
              </div>
            )}
          </Question.Content>
          <ButtonProgress disabled={buttonState} />
        </form>
      </Question.Root>
    </>
  );
}
