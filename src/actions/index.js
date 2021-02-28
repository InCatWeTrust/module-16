import  { v4 } from 'uuid';
const getDate = () => {
  const currentDate = new Date();
  const date = currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
  return date; 
};

// action creators

export const addComment = (newName, newComment) => {
  return {
    type: 'ADD_COMMENT',
    id: v4(),
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