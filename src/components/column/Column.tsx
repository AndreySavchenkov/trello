import React, {FC, memo, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppType} from "store/store";
import {addCard, Cards, editColumnName} from "store/columnSlice";

import styled from "styled-components";

import {Card} from "components";

import {Field, Form} from "react-final-form";
import {getLoginName} from "../../store/selectors";




type Values = {
    text: string,
}
type Props = {
    name: string,
    cards: Cards,
    columnId: number,
}

export const Column: FC<Props> = memo(({columnId, ...props}) => {

    const loginName = useSelector<AppType>(getLoginName);
    const dispatch = useDispatch();

    const [isEdit, setIsEdit] = useState(false);

    const clickHandler = () => {
        dispatch(addCard({columnId, loginName}))
    }
    const changeColumnName = () => {
        setIsEdit(true)
    }
    const onSubmit = (values: Values) => {
        dispatch(editColumnName({columnId, nameChangeColumn:values.text}))
        values.text = '';
        setIsEdit(false);
    }
    const required = (value: Values) => (value ? undefined : 'Напишите что-нибудь...')

    return (
        <WrapperColumn>
            {!isEdit ? <ColumnName onClick={changeColumnName}>{props.name}</ColumnName>
                :
                <Form
                    onSubmit={onSubmit}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <Field<any> name="text" validate={required}>
                                {({input, meta}) => (
                                    <div style={{position: "relative", marginBottom: '20px'}}>
                                        <EditColumnName type="text" {...input} placeholder="Колонка..."/>
                                        {meta.touched && meta.error && <Error>{meta.error}</Error>}
                                    </div>
                                )}
                            </Field>
                            <button style={{marginBottom: '10px'}} type="submit">Изменить</button>
                        </form>
                    )}
                />
            }
            <ListCards>
                { props.cards.map(item => <Card key={item.id}
                                                cardId={item.id}
                                                columnId={columnId}
                                                cardName={item.title}
                                                columnName={props.name}
                                                writerCard={item.writer}
                                                comments={item.comments}
                                                description={item.description}/>) }
            </ListCards>
            <Button onClick={clickHandler}>Добавить</Button>
        </WrapperColumn>
    )
})

const WrapperColumn = styled.div`
  padding: 5px;
  border: 1px solid black;
  border-radius: 3px;
  width: 272px;
  height: 100%;
  overflow: hidden;
  background: #e3dfdf;
`
const ColumnName = styled.span`
  color: #172b4d;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 10px;
`
const ListCards = styled.div`
  display: flex;
  flex-direction: column;
`
const Button = styled.button`

`
const EditColumnName = styled.input`

`
const Error = styled.span`
  position: absolute;
  display: block;
  top: 20px;
  color: darkred;
`