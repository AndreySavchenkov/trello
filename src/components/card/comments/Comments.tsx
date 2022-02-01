import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {CommentsT} from "../../../state/data";
import {Comment} from "./Comment/Comment";

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const CommentInput = styled.input`

`

type PropsType = {
    comments: CommentsT,
}

export const Comments = (props: PropsType) => {

    const [comment, setComment] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.currentTarget.value)
    }

    let showComments = props.comments.map(item => <Comment key={item.id} writer={item.writer} text={item.text}/>)

    return (
        <CommentsWrapper>
            Напишите комментарий:
            <CommentInput type={'text'}
                          value={comment}
                          onChange={changeHandler}
                          placeholder={'Комментарий...'}/>

            {showComments}
        </CommentsWrapper>
    )
}