'use client';

import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { Button } from '@/components/ui/button';
import { LoadingSwap } from '@/components/ui/loading-swap';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const signUpSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email().min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignUpForm = z.infer<typeof signUpSchema>;

const SignUpTab = () => {
  const router = useRouter();

  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { isSubmitting } = form.formState;

  const handleSignup = async (data: SignUpForm) => {
    await authClient.signUp.email(
      { ...data, callbackURL: '/' },
      {
        onError: (error) => {
          toast.error(error.error.message || 'Something went wrong');
        },
        onSuccess: () => {
          toast.success('Account created successfully');
          router.push('/');
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form
        className='space-y-4'
        onSubmit={form.handleSubmit(handleSignup)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='mt-2 w-full sm:cursor-pointer'
          disabled={isSubmitting}
        >
          <LoadingSwap isLoading={isSubmitting}>Sign Up</LoadingSwap>
        </Button>
      </form>
    </Form>
  );
};

export default SignUpTab;
