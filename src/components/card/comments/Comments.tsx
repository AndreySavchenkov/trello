import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {CommentsT, DataT} from "../../../state/data";
import {Comment} from "./Comment/Comment";

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const CommentInput = styled.input`
  width: 200px;
`

type PropsType = {
    state: DataT,
    cardId: number,
    nameUser: string,
    columnId: number,
    comments: CommentsT,
    setState: (state: any) => void,
}

export const Comments = (props: PropsType) => {

    const [comment, setComment] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.currentTarget.value)
    }

const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value = '';

    let findColumn = props.state.columns.find(item => item.id === props.columnId);
    //@ts-ignore
    let findCard = findColumn.cards.find(item => item.id === props.cardId);
    // @ts-ignore
    findCard.comments = [...findCard.comments,{id:3, text:comment, writer: props.nameUser}]
    let newColumns = props.state.columns.map(item => item.id === props.columnId ? findColumn : item)
    let newState = {columns: newColumns}
    props.setState(newState)
}





    let showComments = props.comments.map(item => <Comment key={item.id}
                                                           text={item.text}
                                                           writer={item.writer}
                                                           nameUser={props.nameUser}/>)

    return (
        <CommentsWrapper>
            Напишите комментарий:
            <CommentInput type={'text'}
                          value={comment}
                          onBlur={blurHandler}
                          onChange={changeHandler}
                          placeholder={'Комментарий...'}/>

            {showComments}
        </CommentsWrapper>
    )
}