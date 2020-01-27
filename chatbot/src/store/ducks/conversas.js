export const Types = {
  ADD_NEW_CHAT: 'conversa/ADD_NEW_CHAT',
  ADD_NEW_MESSAGE: 'conversa/ADD_NEW_MESSAGE',
};

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

const INITIAL_STATE = {
  loading: false,
  error: null,
  id: 0,
  chats: [],
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
            return (
              chat.message.push({ sender: action.payload.sender, message: action.payload.message })
            );
          }
        })],
      };
    default:
      return { ...state };
  }
}
