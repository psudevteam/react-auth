'use client';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import type { FC, PropsWithChildren, ReactElement } from 'react';

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const client = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } },
  });
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export const AuthProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return <SessionProvider>{children}</SessionProvider>;
};
