import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Login, Column } from 'components';
import { Columns, ColumnType } from 'store/columnSlice';
import { getAllColumns, getIsLogin } from 'store/selectors';
import { AppType } from 'store/store';

const App: FC = () => {
  const stateColumn = useSelector<AppType>(getAllColumns) as Columns;
  const isLogin = useSelector<AppType>(getIsLogin);

  return (
    <AppWrapper>
      {!isLogin ? <Login /> : null}
      <ColumnWrapper>
        {stateColumn.map((item: ColumnType) => (
          <Column key={item.id} name={item.title} cards={item.cards} columnId={item.id} />
        ))}
      </ColumnWrapper>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.main`
  width: 100%;
`;
const ColumnWrapper = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-around;
`;
