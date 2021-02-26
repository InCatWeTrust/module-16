let nextId = 1;
const getDate = () => {
  const currentDate = new Date();
  const date = currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
  return date; 
};

// action creators

export const addComment = (newName, newComment) => {
  return {
    type: 'ADD_COMMENT',
    id: nextId++,
    name: newName,
    comment: newComment,
    date: getDate()
  }
}

export const removeComment = (id) => {
  return {
    type: 'REMOVE_COMMENT',
    id: id
  }
}