import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";

const CommentsWrapper = styled.div`
      display: flex;
      flex-direction: column;
    `
const CommentInput = styled.input`

    `
const Comment = styled.span`

    `

export const Comments = () => {

    const[comment,setComment] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.currentTarget.value)
    }

    return (
        <CommentsWrapper>
            Напишите комментарий:
            <CommentInput type={'text'}
                          value={comment}
                          placeholder={'Комментарий...'}
                          onChange={changeHandler}/>
            {comment}
            <Comment>1ый коммент</Comment>
            <Comment>2ый коммент</Comment>
            <Comment>3ый коммент</Comment>
        </CommentsWrapper>
    )
}