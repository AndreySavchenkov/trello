import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components";
import closeImage from "./../../assets/image/close.png";
import deleteImage from "./../../assets/image/trash.png";
import comment from "./../../assets/image/comment.png";
import {Description} from "./description/Description";
import {Comments} from "./comments/Comments";
import {CommentsT, DataT} from "../../state/data";
import {useDispatch} from "react-redux";
import {deleteCard} from "../../store/columnSlice";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 400px;
  min-height: 50%;
  position: absolute;
  background: #e3dfdf;
  z-index: 1;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  border-radius: 4px;
`
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const ImageClose = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`

const CardName = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #172b4d;
`
const ColumnName = styled.span`
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 400;
  color: #5e6c84;
`
const Name = styled.div`
  max-width: 245px;
  width: 100%;
  cursor: pointer;
  display: block;
  padding: 4px;
  overflow: hidden;
  position: relative;
`
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;
  margin-bottom: 8px;
  min-height: 20px;
`
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const CommentCountContainer = styled.div`
  padding-left: 4px;
  display: flex;
  align-items: center;
`
const CommentCount = styled.span`
  font-size: 10px;
  padding-left: 4px;
`
const CommentIcon = styled.img`
  width: 10px;
  height: 10px;
`
const DeleteImage = styled.img`
  padding-right: 3px;
  width: 14px;
  height: 14px;
  cursor: pointer;
`
const InputText = styled.input`

`
const WriterCardBlock = styled.div`
  margin-top: 40px;
`
const WriterCard = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #172b4d;
`

type PropsType = {
    // state: DataT,
    cardId: number,
    cardName: string,
    columnId: number,
    // nameUser: string,
    writerCard: string,
    columnName: string,
    description: string,
    comments: CommentsT,
    nameChangeCard: string,
    // setState: (state: any) => void,
}

export const Card = (props: PropsType) => {

    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [cardName, setCardName] = useState(props.cardName)


    const clickHandler = () => {
        setIsOpen(!isOpen)
    }

    const changeInput = () => {
        setIsEdit(true)
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCardName(e.currentTarget.value)
    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>): void => {
        if (e.key === "Escape") {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        //@ts-ignore
        document.body.addEventListener('keydown', keyDownHandler);
        return () => {
            //@ts-ignore
            document.body.removeEventListener('keydown', keyDownHandler);
        }
    }, []);

    const blurHandler = () => {
        setIsEdit(false)
    }

    const deleteCardClick = () => {
        dispatch(deleteCard({columnId: props.columnId, cardId: props.cardId}))
    }

    return (
        <>
            <NameContainer>
                <MainContainer>
                    <Name onClick={clickHandler}>{cardName}</Name>
                    <DeleteImage onClick={deleteCardClick} src={deleteImage}/>
                </MainContainer>
                <CommentCountContainer>
                    <CommentIcon src={comment} alt={"count comments"}/>
                    <CommentCount>{props.comments.length}</CommentCount>
                </CommentCountContainer>
            </NameContainer>

            {isOpen ?
                <CardWrapper onKeyDown={keyDownHandler}>

                    <TopContainer>
                        {!isEdit ? <CardName onDoubleClick={changeInput}>{cardName}</CardName>
                            : <InputText type='text' value={cardName} onChange={changeHandler} onBlur={blurHandler}/>}
                        <ImageClose onClick={clickHandler} src={closeImage} alt="close"/>
                    </TopContainer>

                    <ColumnName>из колонки {props.nameChangeCard}</ColumnName>


                    <Description state={props.state}
                                 cardId={props.cardId}
                                 setState={props.setState}
                                 columnId={props.columnId}
                                 description={props.description}/>

                    <Comments cardId={props.cardId}
                              columnId={props.columnId}
                              comments={props.comments}
                    />

                    <WriterCardBlock>
                        <WriterCard>{props.writerCard}</WriterCard> создал(а) карточку
                    </WriterCardBlock>

                </CardWrapper> : null}
        </>

    )
}



