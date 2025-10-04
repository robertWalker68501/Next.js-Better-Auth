import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SignUpTab from '@/components/auth/SignUpTab';
import SignInTab from '@/components/auth/SignInTab';

const LoginPage = () => {
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
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginPage;
