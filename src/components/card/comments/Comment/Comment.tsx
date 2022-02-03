import React, {ChangeEvent, memo, useState} from "react";
import styled from "styled-components";
import {DataT} from "../../../../state/data";


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
    state: DataT,
    cardId: number,
    writer: string,
    nameUser: string,
    columnId: number,
    commentId: number,
    setState: (state: any) => void,
}

export const Comment = memo((props: PropsType) => {


    const [isEdit, setIsEdit] = useState(true);
    const [text, setText] = useState(props.text)


    const clickHandler = () => {
        setIsEdit(!isEdit)
    }
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const blurHandler = () => {
        setIsEdit(true)

        let findColumn = props.state.columns.find(item => item.id === props.columnId);
        //@ts-ignore
        let findCard = findColumn.cards.find(item => item.id === props.cardId);
        //@ts-ignore
        let findComment = findCard.comments.find(item => item.id === props.commentId);
        //@ts-ignore
        findComment.text = text
    }

    const deleteComment = () => {
        let findColumn = props.state.columns.find(item => item.id === props.columnId);
        //@ts-ignore
        let findCard = findColumn.cards.find(item => item.id === props.cardId);
        //@ts-ignore
        let filterComments = findCard.comments.filter(item => item.id !== props.commentId);
        //@ts-ignore
        findCard.comments = filterComments;
        let newColumns = props.state.columns.map(item => item.id === props.columnId ? findColumn : item)
        let newState = {columns: newColumns}
        props.setState(newState)
    }

    return (
        <>
            <CommentWrapper>
                    <Name>{props.writer}</Name>
                    {isEdit ? <Text>{text}</Text> : <EditText type="text"
                                                              value={text}
                                                              onBlur={blurHandler}
                                                              onChange={changeHandler}/>}
            </CommentWrapper>

            <EditWrapper>
                <EditComment onClick={clickHandler}>Изменить</EditComment>
                <DeleteComment onClick={deleteComment}>Удалить</DeleteComment>
            </EditWrapper>

        </>


    )
})