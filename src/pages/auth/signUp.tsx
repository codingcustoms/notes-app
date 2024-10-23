import {
  Button,
  Card,
  CardContent,
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
import { SIGN_UP_FORM_SCHEMA } from '@/constants';
import { useAppNavigate, useSignUp } from '@/hooks';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/routes/appRoutes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signUpSchema } from './validations';
import { useEffect } from 'react';
import { buildAppRoutes, getErrorResponseMessage } from '@/lib/utils';

const { EMAIL, PASSWORD, FIRST_NAME, LAST_NAME, USERNAME } =
  SIGN_UP_FORM_SCHEMA;
type FormInput = TZodInfer<typeof signUpSchema>;

export const SignUp = () => {
  const { navigateTo } = useAppNavigate();

  const form = useForm<FormInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      [FIRST_NAME.key]: '',
      [LAST_NAME.key]: '',
      [USERNAME.key]: '',
      [EMAIL.key]: '',
      [PASSWORD.key]: '',
    },
  });

  const { data, isPending, isSuccess, isError, error, mutate } = useSignUp();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Account Created Successfully');
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

  const handleOnClickSignIn = () => navigateTo(PUBLIC_ROUTES.SIGN_IN);

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Sign up</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=''>
          <CardContent className='grid grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name={FIRST_NAME.key}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{FIRST_NAME.title}</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter first name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={LAST_NAME.key}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{LAST_NAME.title}</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter last name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={USERNAME.key}
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>{USERNAME.title}</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter username' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={EMAIL.key}
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>{EMAIL.title}</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='willsmith@example.com'
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
                <FormItem className='col-span-2'>
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
              {isPending && <Spinner />} Sign Up
            </Button>
            <div className='flex gap-2 justify-center items-center my-3'>
              <Paragraph>Already have an account?</Paragraph>
              <Button
                onClick={handleOnClickSignIn}
                variant='link'
                className='p-0'
              >
                Sign In
              </Button>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
