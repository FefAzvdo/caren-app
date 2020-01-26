import { combineReducers } from 'redux';

import contatos from './contatos';
import conversas from './conversas';

export default combineReducers({
  contatos,
  conversas,
});
