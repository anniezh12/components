import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';

const App = () => {
	

	return (
		<div className="ui contaier comments">
		 <div className="comment">
		  <a href="/" className="avatar">
		    <img alt="avatar" src={faker.image.avatar()}/>
		   </a>
		  <div className="content">
		   <a href="/" className="author" >
		    Muhammad
		   </a>
		   <div className="metadata">
		    <span className="data">Today at 6:00 PM</span>
		    </div>
		   <div className="text">Nice blog</div>
		   </div>
		   </div>

	</div>)
}

ReactDom.render(<App />,document.querySelector('#root'));