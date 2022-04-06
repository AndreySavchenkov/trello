import React, { FC, memo, useState } from 'react';

import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { deleteComment, editComment } from 'store/columnSlice';
import { getLoginId } from 'store/selectors';
import { AppType } from 'store/store';
import { required } from 'utils/utils';

type Values = {
  text: string;
};
type Props = {
  text: string;
  cardId: number;
  writer: string;
  columnId: number;
  commentId: number;
  idWriter: number;
};

export const Comment: FC<Props> = memo(({ columnId, cardId, commentId, ...props }) => {
  const [isEdit, setIsEdit] = useState(true);

  const loginId = useSelector<AppType>(getLoginId);
  const dispatch = useDispatch();

  const onEditCommentClick = (): void => {
    setIsEdit(!isEdit);
  };

  const onDeleteCommentClick = (): void => {
    dispatch(deleteComment({ columnId, cardId, commentId }));
  };

  const onSubmit = (values: Values): void => {
    dispatch(editComment({ columnId, cardId, commentId, text: values.text }));
    setIsEdit(true);
    // eslint-disable-next-line no-param-reassign
    values.text = '';
  };

  return (
    <>
      <CommentWrapper>
        <Name>{props.writer}</Name>
        {isEdit ? (
          <Text>{props.text}</Text>
        ) : (
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field<any> name="text" validate={required}>
                  {({ input, meta }) => (
                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                      <EditText type="text" {...input} placeholder="Колонка..." />
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
      </CommentWrapper>
      <EditWrapper>
        {loginId === props.idWriter ? (
          <>
            <EditComment onClick={onEditCommentClick}>Изменить</EditComment>
            <DeleteComment onClick={onDeleteCommentClick}>Удалить</DeleteComment>
          </>
        ) : null}
      </EditWrapper>
    </>
  );
});

const CommentWrapper = styled.div`
  display: flex;
  width: 90%;
  background: #fff;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;
`;
const Name = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #172b4d;
  width: 70px;
`;
const Text = styled.span`
  display: block;
  margin-left: 20px;
`;
const EditText = styled.textarea``;
const Error = styled.span`
  position: absolute;
  display: block;
  bottom: 6px;
  color: darkred;
`;
const EditWrapper = styled.div`
  margin-bottom: 10px;
`;
const DeleteComment = styled.span`
  display: inline;
  color: #5e6c84;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
`;
const EditComment = styled.span`
  display: inline;
  padding-right: 20px;
  color: #5e6c84;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
`;
