import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";



const CommentWrapper = styled.div`
  display: flex;
  width: 90%;
  background: #fff;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;
`
const Name = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #172b4d;
  width: 70px;
`
const Text = styled.span`
  display: block;
  margin-left: 20px;
`
const EditText = styled.input`

`
const EditWrapper = styled.div`
  margin-bottom: 10px;
`
const DeleteComment = styled.span`
  display: inline;
  color: #5e6c84;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
`
const EditComment = styled.span`
  display: inline;
  padding-right: 20px;
  color: #5e6c84;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;

`
type PropsType = {
    text: string,
    writer: string,
    nameUser: string,
}

export const Comment = (props: PropsType) => {

    const [isEdit, setIsEdit] = useState(true);
    const [text, setText] = useState(props.text)

    const clickHandler = () => {
        setIsEdit(!isEdit)
    }
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <>
            <CommentWrapper>
                <Name>{props.writer}</Name>
                {isEdit ?  <Text>{text}</Text> : <EditText value={text} type="text" onChange={changeHandler}/>}
            </CommentWrapper>
            
            <EditWrapper>
                <EditComment onClick={clickHandler}>Изменить</EditComment> 
                <DeleteComment>Удалить</DeleteComment>
            </EditWrapper>

        </>


    )
}