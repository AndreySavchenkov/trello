import React from 'react';

import styled from 'styled-components';

type Props = {
  username: string;
  email: string;
};

export const User = ({ username, email }: Props) => (
  <UserContainer>
    <span>Username: {username}</span>
    <span>Email: {email}</span>
  </UserContainer>
);

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid black;
  border-radius: 3px;
  min-width: 250px;
  height: 100%;
  overflow: hidden;
  background: #e3dfdf;
`;
