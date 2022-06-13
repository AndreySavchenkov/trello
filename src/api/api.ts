import axios from 'axios';

const instance = axios.create({
  baseURL: `https://custom-trello-api.herokuapp.com`,
  timeout: 6000,
  // headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
  headers: {
    Authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY0OTg0NDcxNX0.IcGjRUwUKo4syLRxBFN8G06jKvI_PNPJSAi6H4DIyq0`,
  },
});

export const userApi = {
  getCurrentUser() {
    return instance.get<CurrenUserResponseT>(`/user`);
  },
  loginUser(email: string, password: string) {
    return instance.post<CurrenUserResponseT>(`/user/login`, { email, password });
  },
  registerUser(username: string, email: string, password: string) {
    return instance.post<CurrenUserResponseT>(`/user/register`, {
      username,
      email,
      password,
    });
  },
  updateUser(username: string, email: string, password: string) {
    return instance.put<CurrenUserResponseT>(`/user`, { username, email, password });
  },
};

export const columnApi = {
  getAllColumnsForUser() {
    return instance.get<Column[]>(`user/columns`);
  },
};

type CurrenUserResponseT = {
  user: {
    id: number;
    email: string;
    username: string;
    password: string;
    token: string;
  };
};
type Column = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};
