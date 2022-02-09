import React, {FC, memo, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {deleteComment, editComment} from "store/columnSlice";
import {AppType} from "store/store";

import styled from "styled-components";

import {Field, Form} from "react-final-form";
import {getIsLogin, getLoginId} from "../../../../store/selectors";



type Values = {
    text: string,
}
type Props = {
    text: string,
    cardId: number,
    writer: string,
    columnId: number,
    commentId: number,
    idWriter: number,
}

export const Comment: FC<Props> = memo(({columnId, cardId, commentId, ...props}) => {

    const loginId = useSelector<AppType>(getLoginId);
    const dispatch = useDispatch();

    const [isEdit, setIsEdit] = useState(true);

    const clickHandler = () => {
        setIsEdit(!isEdit)
    }
    const deleteCommentClick = () => {
        dispatch(deleteComment({columnId, cardId, commentId}))
    }
    const onSubmit = (values: Values) => {
        dispatch(editComment({columnId, cardId, commentId, text: values.text}))
        setIsEdit(true)
        values.text = '';
    }
    const required = (value: Values) => (value ? undefined : 'Напишите что-нибудь...')

    return (
        <>
            <CommentWrapper>
                <Name>{props.writer}</Name>
                {isEdit ? <Text>{props.text}</Text>
                    :
                    <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <Field<any> name="text" validate={required}>
                                    {({input, meta}) => (
                                        <div style={{position: "relative", marginBottom: '20px'}}>
                                            <EditText type="text" {...input} placeholder="Колонка..."/>
                                            {meta.touched && meta.error && <Error>{meta.error}</Error>}
                                        </div>
                                    )}
                                </Field>
                                <button style={{marginBottom: '10px'}} type="submit">Изменить</button>
                            </form>
                        )}
                    />
                }
            </CommentWrapper>
            <EditWrapper>
                {loginId === props.idWriter
                    ? <>
                        <EditComment onClick={clickHandler}>Изменить</EditComment>
                        <DeleteComment onClick={deleteCommentClick}>Удалить</DeleteComment>
                    </> : null}
            </EditWrapper>
        </>
    )
})

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
const EditText = styled.textarea`

`
const Error = styled.span`
  position: absolute;
  display: block;
  bottom: 6px;
  color: darkred;
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