import axios from 'axios';

const KEY = 'AIzaSyBwdBJaD7GBrWJ7qMRcid8lGsrXLsBw0RQ';

// npm install axios@0.18.1

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}	
});

// key: `${KEY}`