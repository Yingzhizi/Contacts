import axios from 'axios';

const BASE_URI = 'https://jsonplaceholder.typicode.com';

const client = axios.create({
	baseURL: BASE_URI,
	json: true
});

class APIClient {
	getAllClients(){
		return this.perform('get', '/users');
	}

	async perform (method, resource, data) {
		return client({
			 method,
			 url: resource,
			 data,
			 headers: {
				 'Accept': 'application/json',
			     'Content-Type': 'application/json',
			 },
		}).then(resp => {
		 	return resp.data ? resp.data : [];
		});
	}
}

export default APIClient;
