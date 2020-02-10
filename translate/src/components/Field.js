import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
	renderSubmit(language){
		return language === 'english' ? 'Name' : 'Όνομα';
	}

	render(){		
		return(
			<div className="ui field">
				<label>
				<LanguageContext.Consumer>
					{({language})=> this.renderSubmit(language) }
				</LanguageContext.Consumer>
				</label>
				<input />
			</div>
		);
	}
}

export default Field;