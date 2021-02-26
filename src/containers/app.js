import React from 'react';
import { connect } from 'react-redux';

import CommentsList from '../components/comments-list';
import AddComment from '../components/add-comment';

import { addComment, removeComment } from '../actions';

let App = (props) => {
    const {
        comments, addComment, removeComment
    } = props;

    return (
        <div>
            <CommentsList comments={comments} removeComment={removeComment} />
            <AddComment addComment={addComment} />
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    comments: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (newName, newComment) => dispatch(addComment(newName, newComment)),
    removeComment: (id) => dispatch(removeComment(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;