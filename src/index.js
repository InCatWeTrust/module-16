import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './style.css'

if (localStorage.length == 0) {
	localStorage.setItem('comments', JSON.stringify([]));
}

class CommentsVidget extends React.Component {

	constructor() {
		super();

		this.state = {
			comments: JSON.parse(localStorage.getItem('comments')),

			newName: '',

			newComment: ''
		}
	}

	addComment(ev) {
		ev.preventDefault();
		if (this.state.newName && this.state.newComment) {
			const name = this.state.newName;
			const comment = this.state.newComment;
			const date = new Date();
			const currentDate = date.getDay() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
			const comments = this.state.comments;
			comments.push({
				name: name,
				text: comment,
				date: currentDate,
			});
			this.setState({
				comments,
				newName: '',
				newComment: ''
			});
			localStorage.setItem('comments', JSON.stringify(this.state.comments));
		};
	};

	removeComment(key) {
		this.state.comments.map((comment, i) => {
			if (i === key) {
				this.state.comments.splice(i, 1);
				const comments = this.state.comments;
				this.setState({ comments });
				localStorage.setItem('comments', JSON.stringify(this.state.comments));
			};
		});
	};

	getStorage() {
		const comments = JSON.parse(localStorage.getItem('comments'));
		this.setState({ comments });
	};

	render() {
		return (

		<div>
			
			<h2>Комментарии:</h2>

			<div
			className={"container"}
			>

				<ol>
					{

						this.state.comments.map((comment, i) => {
							const className = 'comments__comment';

							return (
								<li
									key={i}
									className={className}
								>

									<span
										className="comments__comment-name"
									>
										{comment.name}
									</span>

									<button
										className="comments__comment-button"
										onClick={ev => {this.removeComment(i)}}
									>
									</button>

									<div
										className="comments__comment-text"
									>
										{comment.text}
									</div>

									<span
										className="comments__comment-date"
									>
										{comment.date}
									</span>

								</li>
							)
						})

					}
				</ol>	
		
			</div>

			<div
				className={'form-container'}
			>

				<h2>Добавить комментарий:</h2>

				<form
					className={"form"}
				>

					<label
						htmlFor="name"
						className="form__name"
					>
						Имя:
					</label>
					<input
						id="name"
						className="form__name-input"
						placeholder="Введите имя"
						required={true}
						value={this.state.newName}
						onChange={ev => this.setState({ newName: ev.target.value })}
					>
					</input>

					<label
						htmlFor="comment"
						className="form__comment"
					>
						Комментарий:
					</label>
					<textarea
						id="comment"
						className="form__comment-input"
						placeholder="Введите комментарий"
						required={true}
						value={this.state.newComment}
						onChange={ev => this.setState({ newComment: ev.target.value })}
					>
					</textarea>
					<button
						className={'form__btn'}
						onClick={ev => this.addComment(ev)}
					>
						Добавить комментарий
					</button>
					
				</form>

			</div>

		</div>

		);
	};

};

ReactDOM.render(
	<CommentsVidget />,
	document.getElementById('app')
);