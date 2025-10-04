'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import SignUpTab from '@/components/auth/SignUpTab';
import SignInTab from '@/components/auth/SignInTab';
import { Separator } from '@/components/ui/separator';
import { SocialAuthButtons } from '@/components/auth/SocialAuthBtns';
import { useEffect } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    authClient.getSession().then((session) => {
      if (session.data != null) router.push('/');
    });
  }, [router]);

  return (
    <Tabs
      defaultValue='signin'
      className='mx-auto my-6 w-full max-w-xl px-4'
    >
      <TabsList>
        <TabsTrigger value='signin'>Sign In</TabsTrigger>
        <TabsTrigger value='signup'>Sign Up</TabsTrigger>
      </TabsList>

      <TabsContent value='signin'>
        <Card>
          <CardHeader className='text-2xl font-bold'>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <SignInTab />
          </CardContent>

          <Separator />
          <CardFooter className='grid grid-cols-2 gap-3'>
            <SocialAuthButtons />
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value='signup'>
        <Card>
          <CardHeader className='text-2xl font-bold'>
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <SignUpTab />
          </CardContent>

          <Separator />
          <CardFooter className='grid grid-cols-2 gap-3'>
            <SocialAuthButtons />
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginPage;
