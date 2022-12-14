import React, { useState } from 'react';
import { Input } from "@components/Input"
import { Button } from '@components/Button';
import { KeyboardAvoidingView, Platform }  from 'react-native'

import { useAuth } from '@hooks/auth'

import { 
  Container , 
  Content, 
  Title, 
  Brand, 
  ForgotPassword, 
  ForgotPasswordLabel 
} from './styles';

import brandingImg from '@assets/brand.png'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn, isLogging } = useAuth();

  function handleSignIn() {
    signIn(email, password);
  }

  return (
  <Container>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
      <Content>
        <Brand source={brandingImg} />

        <Title>Login</Title>

        <Input 
          placeholder='E-mail'
          type='secondary'
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setEmail}
        />

        <Input 
          placeholder='Senha'
          type='secondary'
          secureTextEntry
          onChangeText={setPassword}
        />
        
        <ForgotPassword>
          <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
        </ForgotPassword>
        
        <Button
          title="Entrar"
          type="secondary"
          onPress={handleSignIn}
          isLoading={isLogging}
        />
        
      </Content>
    </KeyboardAvoidingView>
  </Container>
  )
}
