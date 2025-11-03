import React from "react";

import {Link,useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = ()=>{
	const {user,logout,isAdmin} = useAuth();

	const navigate = useNavigate();

	const handleLogout = ()=>{
		logout();
		navigate("/login");
	}

	return(
		<>

		<nav>
<div>
	<Link to="/books">Books</Link>
     <div>
		{ user?(
			<>
			<Link to="/books">Books</Link>
			{
				isAdmin() && (
					<Link to="/books/new">Add Book</Link>
				
)}

			<span>Welcome {user.username}</span>

<button onClick={handleLogout}>Logout</button>

			</>
	):(<>

	<Link to="/login">Login</Link>
	<Link to="/register">Registern</Link>
	</>

	)
	}
		
		
	 </div>
</div>

		</nav>
		</>
	)
}

export default Navbar;