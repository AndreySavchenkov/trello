import React, {FC} from "react";

import {useDispatch} from "react-redux";
import {setIsLogin, setLoginName} from "store/loginSlice";

import styled from "styled-components";
import {Form, Field} from "react-final-form";

type Values = {
    text: string,
}

export const Login: FC = () => {

    const dispatch = useDispatch();

    const onSubmit = (values: Values) => {
        dispatch(setIsLogin({value: true}));
        dispatch(setLoginName({value: values.text, id: Date.now()}));
    }

    return (
        <LoginWrapper>
            <LoginText>Напишите ваше имя: </LoginText>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                          onSubmit={handleSubmit}>
                        <Field
                            name="text"
                            render={({input, meta}) => (
                                <div>
                                    <LoginInput {...input} />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        />
                        <Button style={{width: '100px'}} type="submit">Изменить</Button>
                    </form>
                )}
            />
        </LoginWrapper>
    )
}

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
`
const LoginText = styled.span`
  margin-top: 100px;
  color: #172b4d;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 10px;
`
const LoginInput = styled.input`
  width: 300px;
  margin-top: 30px;
  margin-bottom: 40px;
`
const Button = styled.button`
  padding: 8px 12px;
`