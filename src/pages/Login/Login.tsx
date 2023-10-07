import React, {FormEvent, useEffect, useState} from 'react';
import {Navigate, redirect, useLocation} from 'react-router-dom';

import styles from './Login.module.css'

import Title from "../../shared/ui/Title/Title";
import {TitleAlign, TitleSize} from "../../shared/ui/Title/Title.props";
import Colors from "../../shared/styles/colors";
import TextInput from "../../shared/ui/TextInput";
import Button from "../../shared/ui/Button";
import {useLogin} from "../../shared/services/auth/hooks";

export type LoginProps = {
  isExpired: boolean,
}
const Login: React.FC<LoginProps> = ({
  isExpired,
}) => {
  const { handleLogin } = useLogin();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const location = useLocation();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!isExpired) {
      redirect('/dashboard')
    }
  }, []);
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
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onLogin()
  };
  if (success) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return (
    <form  onSubmit={onSubmit} className={styles.container}>
      { error && (error)}
      <Title align={TitleAlign.Center}>Вход</Title>
      <Title align={TitleAlign.Center} size={TitleSize.Medium} color={Colors.black}>
        Уникальная технология доступная для вашего бизнеса уже сейчас
      </Title>
      <TextInput
        value={login}
        onChange={ (e) => { setLogin(e.target.value) }}
        placeholder="Логин"
      />
      <TextInput
        type="password"
        value={password}
        onChange={ (e) => { setPassword(e.target.value) }}
        placeholder="Пароль"
      />
      <Button type="submit" disabled={loading} onClick={ onLogin }>
        Войти
      </Button>
    </form>
  )
}

export default Login;