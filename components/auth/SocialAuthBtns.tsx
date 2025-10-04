'use client';

import { BetterAuthActionButton } from '@/components/auth/BetterAuthActionBtn';
import { authClient } from '@/lib/auth-client';
import {
  SUPPORTED_PROVIDER_DETAILS,
  SUPPORTED_OAUTH_PROVIDERS,
} from '@/lib/OauthProviders';

export function SocialAuthButtons() {
  return SUPPORTED_OAUTH_PROVIDERS.map((provider) => {
    const Icon = SUPPORTED_PROVIDER_DETAILS[provider].Icon;

    return (
      <BetterAuthActionButton
        variant='outline'
        key={provider}
        action={() => {
          return authClient.signIn.social({
            provider,
            callbackURL: '/',
          });
        }}
      >
        <Icon />
        {SUPPORTED_PROVIDER_DETAILS[provider].name}
      </BetterAuthActionButton>
    );
  });
}
