export const USERNAMES = {
  Jerry: 'Jerry',
  Rick: 'Rick',
  Morty: 'Morty'
};
export const EMAILS = {
  Jerry: 'jerry.smith',
  Rick: 'rick.sanchez',
  Morty: 'morty.smith'
};
export const EMAIL_DOMAIN = '@email.com';
export const PASSWORDS = {
  Jerry: 'Jerry123',
  Rick: 'Rick1234',
  Morty: 'Morty123'
};

export const DEFAULT_URL = '/';
export const HOME_URL = DEFAULT_URL;
export const LOGIN_URL = '/login';
export const REGISTER_URL = '/register';
export const SETTINGS_URL = '/settings';
export const EDITOR_URL = '/editor';
const PROFILE_URL = '/profile/:username';
export const buildProfileUrl = username => PROFILE_URL.replace(':username', username.toLowerCase());
