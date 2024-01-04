import {persistor} from '@/store';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

type Props = {
  children: React.ReactNode;
};

function PersistGateLayout({children}: Props) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}

export default PersistGateLayout;
