const comments = (state = [], action) => {

  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        { id: action.id, name: action.name, comment: action.comment, date: action.date }
      ]

    case 'REMOVE_COMMENT':
      return state.map(comment => {
        if (comment.id === action.id) {
          return state.splice(comment.id, 1);
        };
        return comment;
      });
    default:
      return state;
  };
};
  
  export default comments;