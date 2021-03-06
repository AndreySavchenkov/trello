import React, { FC, memo } from 'react';

import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Comment } from 'components';
import { addComment, CommentsType } from 'store/columnSlice';
import { getLoginId, getLoginName } from 'store/selectors';
import { AppType } from 'store/store';
import { required } from 'utils/utils';

type Values = {
  text: string;
};
type PropsType = {
  cardId: number;
  columnId: number;
  comments: CommentsType;
};

export const Comments: FC<PropsType> = memo(({ columnId, cardId, ...props }) => {
  const loginName = useSelector<AppType>(getLoginName);
  const loginId = useSelector<AppType>(getLoginId);
  const dispatch = useDispatch();

  const onSubmit = (values: Values): void => {
    dispatch(
      addComment({
        columnId,
        cardId,
        comment: values.text,
        loginName,
        idWriter: loginId,
      }),
    );
    // eslint-disable-next-line no-param-reassign
    values.text = '';
  };

  return (
    <CommentsWrapper>
      Напишите комментарий:
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field<any> name="text" validate={required}>
              {({ input, meta }) => (
                <div style={{ position: 'relative' }}>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <CommentInput type="text" {...input} placeholder="Комментарий..." />
                  {meta.touched && meta.error && <Error>{meta.error}</Error>}
                </div>
              )}
            </Field>
            <button style={{ marginBottom: '30px' }} type="submit">
              Добавить комментарий
            </button>
          </form>
        )}
      />
      {props.comments.map(item => (
        <Comment
          key={item.id}
          idWriter={item.idWriter}
          text={item.text}
          commentId={item.id}
          writer={item.writer}
          cardId={cardId}
          columnId={columnId}
        />
      ))}
    </CommentsWrapper>
  );
});

const CommentsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
const CommentInput = styled.textarea`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Error = styled.span`
  position: absolute;
  display: block;
  bottom: 6px;
  color: darkred;
`;
