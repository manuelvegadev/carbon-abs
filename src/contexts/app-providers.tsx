import React from 'react';
import { ConfirmContextProvider, ModalContextProvider } from '~/contexts';

interface IAppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<IAppProvidersProps> = ({ children }) => (
  <ConfirmContextProvider>
    <ModalContextProvider>{children}</ModalContextProvider>
  </ConfirmContextProvider>
);
