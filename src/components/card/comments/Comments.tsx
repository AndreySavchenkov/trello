import React, {ChangeEvent, FC, memo, useState} from "react";
import styled from "styled-components";

import {Comment} from "./Comment/Comment";
import {useDispatch, useSelector} from "react-redux";
import {AppType} from "../../../store/store";
import {addComment, CommentsT} from "../../../store/columnSlice";

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

type PropsType = {
    cardId: number,
    columnId: number,
    comments: CommentsT,
}

export const Comments: FC<PropsType> = memo(({columnId, cardId, ...props}) => {

    const loginName = useSelector<AppType>(state => state.login.loginName);
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.currentTarget.value)
    }

    const blurHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(addComment({columnId, cardId, comment, loginName}))
        e.currentTarget.value = '';
    }

    const showComments = props.comments.map(item => <Comment key={item.id}
                                                             text={item.text}
                                                             commentId={item.id}
                                                             writer={item.writer}
                                                             cardId={cardId}
                                                             columnId={columnId}
    />)

    return (
        <CommentsWrapper>
            Напишите комментарий:
            <CommentInput onBlur={blurHandler}
                          onChange={changeHandler}
                          placeholder={'Комментарий...'}/>

            {showComments}
        </CommentsWrapper>
    )
})