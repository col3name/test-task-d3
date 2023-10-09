import React, {FormEvent} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

import Title from 'shared/ui/Title/Title';
import TextInput from 'shared/ui/TextInput';
import Button from 'shared/ui/Button';

import styles from './Login.module.css'

import {useAuth} from 'widgets/auth/hooks/useAuth';
import {TitleAlign, TitleSize} from 'shared/ui/Title/Title.props';
import Colors from 'shared/styles/colors';

export type LoginProps = {
  isExpired: boolean,
}

const Login: React.FC<LoginProps> = ({
  isExpired,
}) => {
  const location = useLocation();
  const {
    loading,
    success,
    error,
    login,
    password,
    onLogin,
    setLogin,
    setPassword,
  } = useAuth(isExpired);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onLogin();
  };

  if (success) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      { error && (error)}
      <Title align={TitleAlign.Center}>Вход</Title>
      <Title align={TitleAlign.Center} size={TitleSize.Medium} color={Colors.black}>
        Уникальная технология доступная для вашего бизнеса уже сейчас
        (Логин/Пароль UserOne/pass)
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