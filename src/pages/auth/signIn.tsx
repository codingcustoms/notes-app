import { FacebookIcon, GoogleIcon, TwitterIcon } from '@/assets/icons';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Paragraph,
  Spinner,
  toast,
} from '@/components/ui';
import { SIGN_IN_FORM_SCHEMA } from '@/constants';
import { useAppNavigate, useSignIn } from '@/hooks';
import { buildAppRoutes, getErrorResponseMessage } from '@/lib/utils';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/routes/appRoutes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { signInSchema } from './validations';

const { EMAIL, PASSWORD } = SIGN_IN_FORM_SCHEMA;
type FormInput = TZodInfer<typeof signInSchema>;

export const SignIn = () => {
  const { navigateTo } = useAppNavigate();

  const form = useForm<FormInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      [EMAIL.key]: '',
      [PASSWORD.key]: '',
    },
  });

  const { data, isPending, isSuccess, isError, error, mutate } = useSignIn();

  useEffect(() => {
    if (isSuccess) {
      console.log({ data });
      toast.success('Signed In successfully!');
      navigateTo(buildAppRoutes(PRIVATE_ROUTES.DASHBOARD.BASE, ''));
    }
  }, [isSuccess, data, navigateTo]);

  useEffect(() => {
    if (isError) {
      toast.error(getErrorResponseMessage(error));
    }
  }, [isError, error]);

  const onSubmit = (values: FormInput) => {
    console.log(values);
    mutate(values);
  };

  const handleOnClickSignUp = () => navigateTo(PUBLIC_ROUTES.SIGN_UP);

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=''>
          <CardContent className='grid gap-4'>
            <FormField
              control={form.control}
              name={EMAIL.key}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{EMAIL.title}</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='m@example.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={PASSWORD.key}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{PASSWORD.title}</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Enter your password'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className='flex flex-col my-2'>
            <Button className='w-full' type='submit'>
              {isPending && <Spinner />}
              Sign in
            </Button>
            <div className='flex gap-2 justify-center items-center my-3'>
              <Paragraph>Don't have an account?</Paragraph>
              <Button
                variant={'link'}
                onClick={handleOnClickSignUp}
                className='p-0'
              >
                Sign Up
              </Button>
            </div>
            <div className='flex gap-3'>
              <Button variant={'outline'} className='size-10 rounded-full p-0'>
                <img src={GoogleIcon} className='size-6' />
              </Button>
              <Button variant={'outline'} className='size-10 rounded-full p-0'>
                <img src={FacebookIcon} className='size-6' />
              </Button>
              <Button variant={'outline'} className='size-10 rounded-full p-0'>
                <img src={TwitterIcon} className='size-6' />
              </Button>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
