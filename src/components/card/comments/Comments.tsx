import React, {FC, memo} from "react";
import styled from "styled-components";
import {Comment} from "./Comment/Comment";
import {useDispatch, useSelector} from "react-redux";
import {AppType} from "../../../store/store";
import {addComment, CommentsT} from "../../../store/columnSlice";
import {Field, Form} from "react-final-form";


type Values = {
    text: string,
}
type PropsType = {
    cardId: number,
    columnId: number,
    comments: CommentsT,
}

export const Comments: FC<PropsType> = memo(({columnId, cardId, ...props}) => {

    const loginName = useSelector<AppType>(state => state.login.loginData.name);
    const dispatch = useDispatch();
    
    const onSubmit = (values: Values) => {
        dispatch(addComment({columnId, cardId, comment: values.text, loginName}))
        values.text = '';
    }
    const required = (value: Values) => (value ? undefined : 'Напишите что-нибудь...')

    return (
        <CommentsWrapper>
            Напишите комментарий:
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Field<any> name="text" validate={required}>
                            {({input, meta}) => (
                                <div style={{position: "relative"}}>
                                    <CommentInput type="text" {...input} placeholder="Комментарий..."/>
                                    {meta.touched && meta.error && <Error>{meta.error}</Error>}
                                </div>
                            )}
                        </Field>
                        <button style={{marginBottom: '30px'}} type="submit">Добавить комментарий</button>
                    </form>
                )}
            />
            { props.comments.map(item => <Comment key={item.id}
                                                  text={item.text}
                                                  commentId={item.id}
                                                  writer={item.writer}
                                                  cardId={cardId}
                                                  columnId={columnId}/>) }
        </CommentsWrapper>
    )
})

const CommentsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`
const CommentInput = styled.textarea`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 20px;
`
const Error = styled.span`
  position: absolute;
  display: block;
  bottom: 6px;
  color: darkred;
`