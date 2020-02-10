import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component{
	static contextType = LanguageContext;

	render(){
		return(
			<div>
				Select language:
				<i onClick={() => this.context.onLanguageChange('english')} className="flag us" />
				<i onClick={() => this.context.onLanguageChange('greek')} className="flag gr" />
			</div>
		);
	}
}

export default LanguageSelector;