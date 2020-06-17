import { initRemover } from './remover.js';

const disposeRemover = initRemover();

setTimeout(() => {
  disposeRemover();
  console.log('remover disposed');
}, 5000);
