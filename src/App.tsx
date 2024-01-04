import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import UserProvider from '@/context/AuthContext';

import RootNavigator from '@/navigations';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './store';
import PersistGateLayout from './components/common/PersistGateLayout';
import AuthProvider from '@/context/AuthContext';

const queryClient = new QueryClient();

type AppProps = {
  children: React.ReactNode;
};

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);

    StatusBar.setBackgroundColor('black');
  }

  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGateLayout>
          <QueryClientProvider client={queryClient}>
            {/* <AuthProvider> */}
              <RootNavigator />
            {/* </AuthProvider> */}
          </QueryClientProvider>
        </PersistGateLayout>
      </Provider>
    );
  }
}

export default App;
