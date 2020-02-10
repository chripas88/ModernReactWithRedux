import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 36d3992951f8b467b1b3da0480f4f812baed996842d4c866e73c47d868030c2f'
	}		
});