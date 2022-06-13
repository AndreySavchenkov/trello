import React, { FC, useState } from 'react';

import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { loginUser, setIsLogin } from 'store/loginSlice';

type Values = {
  email: string;
  password: string;
};

export const Login: FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (values: Values): void => {
    // dispatch(setIsLogin({ value: true }));
    // dispatch(setLoginName({ value: values.email, id: Date.now() }));
    dispatch(loginUser({email: values.email, password: values.password}));
  };

  return (
    <LoginWrapper>
      {isRegister ?
        (
          <div>
            Регистрация
            <span onClick={()=>{setIsRegister(false)}}>Логинизация</span>
          </div>
        )
        :
        (
          <>
          <LoginText>Логинизация</LoginText>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <form
              style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
              onSubmit={handleSubmit}
            >
              <Field
                name="email"
                render={({input, meta}) => (
                  <>
                    <FormItemContainer>
                      <FormItem>Email:</FormItem>
                      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                      <LoginInput {...input} />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </FormItemContainer>
                  </>
                )}
              />
              <Field
                name="password"
                render={({input, meta}) => (
                  <>
                    <FormItemContainer>
                      <FormItem>Password:</FormItem>
                      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                      <LoginInput {...input} />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </FormItemContainer>
                  </>
                )}
              />
              <Button style={{width: '100px'}} type="submit">
                Отправить
              </Button>
            </form>
          )}
        />
        <span onClick={() => setIsRegister(true)}>Регистрация</span>
      </>)
      }

    </LoginWrapper>
  );
};

const FormItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FormItem = styled.span`
  margin-right: 20px;
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  min-height: 400px;
  background: #e3dfdf;

  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;
const LoginText = styled.span`
  margin-top: 100px;
  color: #172b4d;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 10px;
`;
const LoginInput = styled.input`
  width: 200px;
  margin-top: 30px;
  margin-bottom: 40px;
`;
const Button = styled.button`
  padding: 8px 12px;
`;
