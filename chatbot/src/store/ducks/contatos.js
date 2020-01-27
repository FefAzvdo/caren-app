// Types
export const Types = {
  ADD_NEW_CONTACT: 'contato/ADD_NEW_CONTACT',
  DELETE_CONTACT: 'contato/DELETE_CONTACT',
};


// Actions
// REQUEST -> SAGA -> CHAMADA API -> SUCCESS
export const Creators = {
  adicionarContato: (name) => ({
    type: Types.ADD_NEW_CONTACT,
    payload: { name },
  }),
  deletarContato: (id) => ({
    type: Types.DELETE_CONTACT,
    payload: { id },
  }),
};


// Reducer
// Irá ser as PROPS do meu COMPONENTE
// Acessar via: this.props.characters
// characters poder ser qualquer nome que dermos no mapStateToProps
const INITIAL_STATE = {
  loading: false,
  error: null,
  id: 0,
  contatos: [],
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_NEW_CONTACT:
      return {
        ...state,
        contatos: [...state.contatos, { name: action.payload.name, id: state.id }],
        id: state.id + 1,
      };
    case Types.DELETE_CONTACT:
      return {
        ...state,
        contatos: state.contatos.filter((contato) => contato.id !== action.payload.id),
      };

    default:
      return { ...state };
  }
}
