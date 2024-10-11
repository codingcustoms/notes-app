export const SIGN_IN_FORM_SCHEMA = {
  EMAIL: { key: 'email', title: 'Email' } as TOptions,
  PASSWORD: { key: 'password', title: 'Password' } as TOptions,
};

export const SIGN_UP_FORM_SCHEMA = {
  ...SIGN_IN_FORM_SCHEMA,
  USERNAME: { key: 'username', title: 'Username' } as TOptions,
  FIRST_NAME: { key: 'firstName', title: 'First Name' } as TOptions,
  LAST_NAME: { key: 'lastName', title: 'Last Name' } as TOptions,
};
