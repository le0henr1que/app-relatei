import { z } from 'zod';
import { Question } from './components/question';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonProgress } from '../components/ButtonProgress';
import { useProgress } from '@/store/ducks/progress/hooks/actions';
const schema = z.object({
  isVictim: z.string('Campo obrigatório'),
  isIdentity: z.string('Campo obrigatório'),
});
export function Identification() {
  const { nextStep } = useProgress();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const watchAllFields = watch();
  console.log(watchAllFields);
  const isDisabled = Object.values(watchAllFields).some((x) => !x);
  console.log(Object.values(watchAllFields).some((x) => !x));

  const onSubmit = async (data) => {
    console.log(data);
    console.log(errors);

    nextStep();
  };
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
                          className="form-radio h-5 w-5 text-[#7F56D9]"
                        />
                      )}
                    />
                  ),
                },
                {
                  label: 'Sim, não sou a vítima',
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
                          className="form-radio h-5 w-5 text-[#7F56D9]"
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
                          className="form-radio h-5 w-5 text-[#7F56D9]"
                        />
                      )}
                    />
                  ),
                },
              ]}
            />
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
                          className="form-radio h-5 w-5 text-[#7F56D9]"
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
                          className="form-radio h-5 w-5 text-[#7F56D9]"
                        />
                      )}
                    />
                  ),
                },
              ]}
            />
          </Question.Content>
          <ButtonProgress disabled={isDisabled} initialState={true} />
        </form>
      </Question.Root>
    </>
  );
}
