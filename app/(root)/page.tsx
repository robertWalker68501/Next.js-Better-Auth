'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { Spinner } from '@/components/ui/spinner';

const Home = () => {
  const { data: session, isPending: loading } = authClient.useSession();

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='mx-auto my-6 max-w-md px-4'>
      <div className='space-y-6 text-center'>
        {session == null ? (
          <>
            <h1 className='text-3xl font-bold'>Welcome to Our App</h1>
            <Button
              asChild
              size='lg'
            >
              <Link href='/login'>Sign In / Sign Up</Link>
            </Button>
          </>
        ) : (
          <>
            <h1 className='text-3xl font-bold'>Welcome {session.user.name}!</h1>
            {/* TODO: Add loading states */}
            <Button
              size='lg'
              variant='destructive'
              className='sm:cursor-pointer'
              onClick={() => authClient.signOut()}
            >
              Sign Out
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
