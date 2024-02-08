import { useForm } from 'react-hook-form';
import { ButtonProgress } from '../components/ButtonProgress';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProgress } from '@/store/ducks/progress/hooks/actions';
import { z } from 'zod';
const schema = z.object({});

export function ProtocolCode() {
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
        <ButtonProgress disabled={false} />
      </form>
    </>
  );
}
