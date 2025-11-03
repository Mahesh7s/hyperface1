import React from "react";
import { createContext } from "react";
import { authAPI } from "../services/api";
import { useContext } from "react";
import { useEffect } from "react";
import { Children } from "react";

const AuthContext = createContext();
export const useAuth = ()=>{
	const context = useContext(AuthContext);
	if(!context){
		throw new Error ("Context error")
	}
	return context
};


export const AuthProvider = ({childeren})=>{
	const [user,setUser] = ueState(null);
	const [laoding,setLoading] = useState(true);
	useEffect(()=>{
		const token = localStorage.getItem(token);
		if(token){
			checkAuth();
		}else{
			setLoading(false);
		}
	},[]);
	const checkAuth = async()=>{
		try{
			const response = await authAPI.getMe();
			setUser(response.data.user);
		}
		catch(err){
			localStorage.removeItem('token';)
		}
		finally{
			setLoading(false);
		}
	}


const login = async(credentilas)=>{
	const response = await authAPI.login(credentilas);
	const {token,user} = response.data;
	localStorage.setItem('token',token);
	setUser(user);
	return response.data;
}

const register = async(userData) =>{
	const response = await authAPI.register(userData);
	const {token,user} = response.data
;
localStorage.setItem('token',token);
setUser(user);
	return response.data;

}


const logout = ()=>{
	localStorage.removeItem('token');
	setUser(null)
}
const isAdmin = ()=>{
	return user?.role==='admin'
}


const value = {user,login,register,logout,isAdmin,loading}


return(
	<AuthContext.Provider value={value}>
		{Children}
	</AuthContext.Provider>
)

}