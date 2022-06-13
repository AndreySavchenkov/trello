import React, { FC, memo, useEffect, useState } from 'react';

import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Card } from 'components';
import { addCard, Cards, editColumnName, getAllColumns } from 'store/columnSlice';
import { getCurrentUser, User } from 'store/loginSlice';
import { getCorrectUser } from 'store/selectors';
import { AppType } from 'store/store';
import { required } from 'utils/utils';

type Values = {
  text: string;
};
type Props = {
  name: string;
  // cards: Cards;
  columnId: number;
};

export const Column: FC<Props> = memo(({ columnId, ...props }) => {
  const [isEdit, setIsEdit] = useState(false);

  const user = useSelector<AppType>(getCorrectUser);
  const dispatch = useDispatch();

  const onButtonClick = (): void => {
    user.username && dispatch(addCard({ columnId, username: user.username }));
  };

  const onColumnNameClick = (): void => {
    setIsEdit(true);
  };

  const onSubmit = (values: Values): void => {
    dispatch(editColumnName({ columnId, nameChangeColumn: values.text }));
    // eslint-disable-next-line no-param-reassign
    values.text = '';
    setIsEdit(false);
  };

  return (
    <WrapperColumn>
      {!isEdit ? (
        <ColumnName onClick={onColumnNameClick}>{props.name}</ColumnName>
      ) : (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field<any> name="text" validate={required}>
                {({ input, meta }) => (
                  <div style={{ position: 'relative', marginBottom: '20px' }}>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <EditColumnName type="text" {...input} placeholder="Колонка..." />
                    {meta.touched && meta.error && <Error>{meta.error}</Error>}
                  </div>
                )}
              </Field>
              <button style={{ marginBottom: '10px' }} type="submit">
                Изменить
              </button>
            </form>
          )}
        />
      )}
      <ListCards>
        {/*{props.cards.map(item => (*/}
        {/*  <Card*/}
        {/*    key={item.id}*/}
        {/*    cardId={item.id}*/}
        {/*    columnId={columnId}*/}
        {/*    cardName={item.title}*/}
        {/*    columnName={props.name}*/}
        {/*    writerCard={item.writer}*/}
        {/*    comments={item.comments}*/}
        {/*    description={item.description}*/}
        {/*  />*/}
        {/*))}*/}
      </ListCards>
      <Button onClick={onButtonClick}>Добавить</Button>
    </WrapperColumn>
  );
});

const WrapperColumn = styled.div`
  padding: 5px;
  border: 1px solid black;
  border-radius: 3px;
  width: 272px;
  height: 100%;
  overflow: hidden;
  background: #e3dfdf;
`;
const ColumnName = styled.span`
  color: #172b4d;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 10px;
`;
const ListCards = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button``;
const EditColumnName = styled.input``;
const Error = styled.span`
  position: absolute;
  display: block;
  top: 20px;
  color: darkred;
`;
