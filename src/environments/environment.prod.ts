export const environment = {
  production: true,
  serviceApi: 'https://integracao-alphabuyapi.azurewebsites.net/v1/'
};

export const TOKEN_STORAGE = 'NOME_CHAVE_TOKEN';
export const PROFILE_STORAGE = 'PROFILE';
export const USERID_STORAGE = 'USERID';
export const SCREEN_LOCK = { 'X-PO-Screen-Lock': 'true' };
export const NIVEL_DE_ACESSO = 'NIVEL_DE_ACESSO';
export const NO_MESSAGE = { 'X-PO-No-Message': 'true' };
export const SCREEN_LOCK_NO_MESSAGE = { 
  'X-PO-Screen-Lock': 'true', 
  'X-PO-No-Message': 'true' 
};