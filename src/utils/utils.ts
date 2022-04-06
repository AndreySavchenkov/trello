type Values = {
  text: string;
};

export const required = (value: Values): undefined | string =>
  value ? undefined : 'Напишите что-нибудь...';
