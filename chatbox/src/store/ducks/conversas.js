// Types
export const Types = {
  ADD_NEW_CHAT: 'contato/ADD_NEW_CHAT',
  ADD_NEW_MESSAGE: 'contato/ADD_NEW_MESSAGE',
};


// Actions
// REQUEST -> SAGA -> CHAMADA API -> SUCCESS
export const Creators = {
  addChat: (id, bot) => ({
    type: Types.ADD_NEW_CHAT,
    payload: { bot, id },
  }),
  addMessage: (id, sender, message) => ({
    type: Types.ADD_NEW_MESSAGE,
    payload: { id, sender, message },
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
  chats: [
    // {
    //   id: 0,
    //   bot: 'Fernando',
    //   messages: [
    //     {
    //       sender: 'User',
    //       message: 'Lorem ipsum dolor sit amet.',
    //     },
    //   ],
    // },
    // {
    //   id: 1,
    //   bot: 'Fulano',
    //   messages: [
    //     {
    //       sender: 'User',
    //       message: 'Lorem ipsum dolor sit amet.',
    //     },
    //   ],
    // },
  ],
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_NEW_CHAT:
      return {
        ...state,
        chats: [...state.chats, { id: action.payload.id, bot: action.payload.bot, messages: [] }],
        id: state.id + 1,
      };
    case Types.ADD_NEW_MESSAGE:
      return {
        ...state,
        chats: [...state.chats, state.chats.map((chat) => {
          if (chat.id === action.payload.id) {
            chat.message.push({ sender: action.payload.sender, message: action.payload.message });
          }
        })],
      };
    default:
      return { ...state };
  }
}


// {
//   id: Math.random(),
//   bot: 'Felipe',
//   message: [
//     'Lorem ipsum dolor sit amet.',
//     'Lorem ipsum dolor sit amet.',
//     'Lorem ipsum dolor sit amet.',
//     'Lorem ipsum dolor sit amet.',
//   ],
// },
