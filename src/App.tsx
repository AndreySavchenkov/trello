import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { columnApi } from 'api/api';
import { Login, Column } from 'components';
import { User } from 'components/user/User';
import { Columns, ColumnType, getAllColumns } from 'store/columnSlice';
import { getCurrentUser } from 'store/loginSlice';
import { getCorrectUser, getIsLogin } from 'store/selectors';
import { AppType } from 'store/store';

const App: FC = () => {
  const [columnsInServer, setColumnsInServer] = useState();

  const dispatch = useDispatch();

  const isLogin = useSelector<AppType>(getIsLogin);
  const user = useSelector<AppType>(getCorrectUser);

  const fetchColumns = async () => {
    const { data } = await columnApi.getAllColumnsForUser();
    setColumnsInServer(data);
  };

  useEffect(() => {
    fetchColumns();
  }, []);

  return (
    <AppWrapper>
      {!isLogin ? <Login /> : null}
      {/* <Login/> */}
      <User username={user.username} email={user.email} />
      {/* <ColumnWrapper> */}
      {/*  {stateColumn.map((item: ColumnType) => ( */}
      {/*    <Column key={item.id} name={item.title} cards={item.cards} columnId={item.id} /> */}
      {/*  ))} */}
      {/* </ColumnWrapper> */}
      <ColumnWrapper>
        {columnsInServer?.map((item: ColumnType) => (
          <Column
            key={item.id}
            name={item.title}
            // cards={item.cards}
            columnId={item.id}
          />
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
