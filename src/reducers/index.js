const comments = (state = [], action) => {

  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        { id: action.id, name: action.name, comment: action.comment, date: action.date },
      ]

    case 'REMOVE_COMMENT':
      return state.filter((comment) => comment.id !== action.id)

    default:
      return state;
  };
};
  
  export default comments;