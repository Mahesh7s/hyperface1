import axios from "axios";

const API_URL= 'http://localhost:7077/api';
const api = axios.create({
	baseURL:API_URL,
})

api.interceptors.request.use((config)=>{
	const token = localStorage.getItem('token')
	if(token){
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
},
(error)=>{
	return Promise.reject(error);
}
)


export const authAPI = {
	register:(userData)=>api.post('/auth/register',userData),
	login:(credentials)=>api.post('/auth/login',credentials),
	getMe:()=>api.get("/auth/Me"),

}


export const booksAPI = {
	create:(bookData)=>api.post("/books",bookData),
	update:(id,bookData)=>api.put(`/books/${id}`,bookData),
	delete:(id)=>api.delete(`/books/${id}`)
}

export default api;