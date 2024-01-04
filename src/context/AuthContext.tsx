import Axios from '@/libs/axios';
import React, {createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '@/components/common/types';
import SplashScreen from 'react-native-splash-screen';

type LoginDataType = {
  email: string;
  password: string;
};

interface IAuthContext {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  revalidate: () => void;
  login: (data: LoginDataType) => void;
  logout: () => void;
}

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

class AuthProvider extends React.Component<Props, IAuthContext> {
  constructor(props: Props) {
    super(props);

    this.state = {
      user: null,
      isLoggedIn: false,
      loading: true,
      revalidate: this.revalidate,
      login: this.login,
      logout: this.logout,
    };
  }

  componentDidMount() {
    this.revalidate();
  }

  revalidate = async () => {
    try {
      const _user = await AsyncStorage.getItem('user');

      if (_user !== null) {
        const user = JSON.parse(_user);
        console.log('user', user);

        this.setState({
          user: user,
          loading: false,
          isLoggedIn: true,
        });
      }
    } catch (e) {
      // console.log(e);
      this.setState({
        loading: false,
      });
    }
  };
  login = async (data: LoginDataType) => {
    try {
      const {data: user} = await Axios.post('/users/login', data);
      await AsyncStorage.setItem('access_token', user.tokens.access_token);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      this.setState({
        user,
        loading: false,
        isLoggedIn: true,
      });
    } catch (e) {
      console.log(e);
      this.setState({
        loading: false,
      });
    }
  };
  logout = async () => {
    try {
      await AsyncStorage.removeItem('access_token');
      await AsyncStorage.removeItem('user');
      this.setState({
        user: null,
        isLoggedIn: false,
        loading: false,
      });
    } catch (e) {
      await AsyncStorage.removeItem('access_token');
    }
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
