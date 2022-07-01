import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AuthService } from '../services/api/auth/AuthService';

interface IAuthContextData {
  isAuthenticated: boolean;
  logout: () => void;
  login: (email: string, password: string) => Promise<string | void>;
}

const AuthContext = createContext({} as IAuthContextData);

interface IAuthProviderProps {
  children: React.ReactNode;
}

const LOCAL_STORAGE_ACCESS_TOKEN = 'app_access_token';

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | undefined>();

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);

    if (accessToken) {
      setAccessToken(JSON.parse(accessToken));
    } else {
      setAccessToken(undefined);
    }
  }, []);

  const handleLogin = useCallback(async (email: string, password: string) => {
    const result = await AuthService.auth(email, password);
    if (result instanceof Error) {
      return result.message;
    } else {
      setAccessToken(result.accessToken);

      localStorage.setItem(
        LOCAL_STORAGE_ACCESS_TOKEN,
        JSON.stringify(result.accessToken)
      );
    }
  }, []);

  const handleLogout = useCallback(() => {
    setAccessToken(undefined);

    localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN);
  }, []);

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

// funções useCallbacks que são repassadas por contexto otimizam a aplicação
// '!!accessToken' é o mesmo que 'accessToken === undefined'
