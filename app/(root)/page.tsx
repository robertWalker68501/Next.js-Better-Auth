'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { Spinner } from '@/components/ui/spinner';
import { BetterAuthActionButton } from '@/components/auth/BetterAuthActionBtn';

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
            <h1 className='text-3xl font-bold'>
              Welcome {session.user.name ?? 'User'}!
            </h1>
            {/* TODO: Add loading states */}
            <BetterAuthActionButton
              size='lg'
              variant='destructive'
              successMessage='Signed out successfully'
              action={() => authClient.signOut()}
            >
              Sign Out
            </BetterAuthActionButton>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
