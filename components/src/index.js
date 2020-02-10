import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">		
			<ApprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()} 
					author={faker.name.firstName()} 
					timeAgo="Today at 6:00PM" 
					content={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()} 
					author={faker.name.firstName()} 
					timeAgo="Today at 5:00PM" 
					content={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()} 
					author={faker.name.firstName()} 
					timeAgo="Today at 4:00PM" 
					content={faker.lorem.sentence()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));