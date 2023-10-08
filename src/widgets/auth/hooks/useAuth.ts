import {useEffect, useState} from 'react';
import {redirect} from 'react-router-dom';

import {useLogin} from '../../../shared/services/auth/hooks';

export const useAuth = (isExpired: boolean) => {
  const { handleLogin } = useLogin();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!isExpired) {
      redirect('/dashboard')
    }
  }, [isExpired]);
  const onLogin = async () => {
    try {
      if (loading) {
        return;
      }
      setLoading(true);
      const {success, error } = await handleLogin(login, password)
      setSuccess(success);
      if (!success && error) {
        setError(error);
        const timeoutId = setTimeout(() => {
          setError('');
          clearTimeout(timeoutId);
        }, 3000);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return {
    login,
    password,
    success,
    error,
    loading,
    setLogin,
    setPassword,
    onLogin,
  }
}
