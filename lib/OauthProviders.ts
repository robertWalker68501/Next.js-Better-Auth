import { ComponentProps, ElementType } from 'react';
import {
  DiscordIcon,
  GoogleIcon,
  GitHubIcon,
} from '@/components/auth/OauthIcons';

export const SUPPORTED_OAUTH_PROVIDERS = ['github', 'discord', 'google'];
export type SupportedOauthProviders =
  (typeof SUPPORTED_OAUTH_PROVIDERS)[number];

export const SUPPORTED_PROVIDER_DETAILS: Record<
  SupportedOauthProviders,
  { name: string; Icon: ElementType<ComponentProps<'svg'>> }
> = {
  discord: { name: 'Discord', Icon: DiscordIcon },
  github: { name: 'Github', Icon: GitHubIcon },
  google: { name: 'Google', Icon: GoogleIcon },
};
