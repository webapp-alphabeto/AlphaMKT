export const environment = {
  production: true,
  serviceApi: 'http://10.10.0.14:80/v1/'
};

export const TOKEN_STORAGE = 'NOME_CHAVE_TOKEN';
export const PROFILE_STORAGE = 'PROFILE';
export const SCREEN_LOCK = { 'X-PO-Screen-Lock': 'true' };
export const NO_MESSAGE = { 'X-PO-No-Message': 'true' };
export const SCREEN_LOCK_NO_MESSAGE = { 
  'X-PO-Screen-Lock': 'true', 
  'X-PO-No-Message': 'true' 
};

export const CHECK_IN = 'CHECK_IN';

export const SEM_FOTO = 'https://alphastorageshared.blob.core.windows.net/imagens-de-produto/sem-foto.jpg'