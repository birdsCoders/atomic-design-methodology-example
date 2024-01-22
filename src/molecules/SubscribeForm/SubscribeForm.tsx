import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import WithLabel from '../../atoms/WithLabel';

interface FormValues {
  email: string;
}

const SubscribeForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log(values);
  };

  return (
    <form
      className="flex sm:items-start flex-col sm:flex-row gap-4 md:max-w-[600px] md:mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <WithLabel
        className="grow sm:w-[1%]"
        label="Email address"
        isLabelHidden
        error={errors?.email?.message}
      >
        <Input
          {...register('email', { required: 'Email Address is required' })}
          placeholder="Your email address"
        />
      </WithLabel>
      <Button type="submit">Start now</Button>
    </form>
  );
};

export default SubscribeForm;
