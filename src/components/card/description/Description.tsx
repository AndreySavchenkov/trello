import React, { FC, memo, useState } from 'react';

import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addDescriptionCard } from 'store/columnSlice';
import { required } from 'utils/utils';

type Values = {
  text: string;
};
type Props = {
  cardId: number;
  columnId: number;
  description: string;
};

export const Description: FC<Props> = memo(({ columnId, cardId, ...props }) => {
  const [description, setDescription] = useState(props.description);

  const dispatch = useDispatch();

  const onSubmit = (values: Values): void => {
    dispatch(addDescriptionCard({ columnId, cardId, description: values.text }));
    setDescription(values.text);
    // eslint-disable-next-line no-param-reassign
    values.text = '';
  };

  return (
    <DescriptionWrapper>
      <DescriptionText>
        {description || 'Добавьте более подробной описание...'}
      </DescriptionText>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field<any> name="text" validate={required}>
              {({ input, meta }) => (
                <div style={{ position: 'relative' }}>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <DescriptionInput type="text" {...input} placeholder="Oписание..." />
                  {meta.touched && meta.error && <Error>{meta.error}</Error>}
                </div>
              )}
            </Field>
            <button type="submit">Добавить описание</button>
          </form>
        )}
      />
    </DescriptionWrapper>
  );
});

const DescriptionWrapper = styled.div``;
const DescriptionText = styled.span`
  display: block;
  margin-bottom: 10px;
  overflow: hidden;
`;
const DescriptionInput = styled.textarea`
  width: 90%;
  margin-bottom: 20px;
`;
const Error = styled.span`
  position: absolute;
  display: block;
  bottom: 6px;
  color: darkred;
`;
