import React, {ChangeEvent, FC} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setIsLogin, setLoginName} from "../../store/loginSlice";
import {AppType} from "../../store/store";


type PropsType = {}

export const Login: FC<PropsType> = () => {

    const loginName = useSelector<AppType>(state => state.login.loginData.name)
    const dispatch = useDispatch();

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setLoginName({value: e.currentTarget.value, id: Date.now()}))
    }

    const clickHandler = () => {
        //@ts-ignore
        localStorage.setItem('nameUser', loginName)
        dispatch(setIsLogin({value: true}))
    }

    return (
        <LoginWrapper>
            <LoginText>Напишите ваше имя: </LoginText>
            <LoginInput placeholder={'Имя...'}
                        onChange={changeHandler}/>
            <Button onClick={clickHandler}>Это я</Button>
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