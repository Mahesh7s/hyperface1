import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const PaginatedUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const throttleRef = useRef(null); // For throttling

  useEffect(() => {
    // Throttle to prevent frequent updates
    if (throttleRef.current) {
      clearTimeout(throttleRef.current);
    }

    throttleRef.current = setTimeout(() => {
      fetchUsers();
    }, 500); // 500ms throttle delay

    return () => clearTimeout(throttleRef.current);
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const allUsers = res.data;

      // Pagination logic
      const total = allUsers.length;
      setTotalPages(Math.ceil(total / usersPerPage));

      const startIndex = (currentPage - 1) * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      const paginatedUsers = allUsers.slice(startIndex, endIndex);

      setUsers(paginatedUsers);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  };

  // Render pagination buttons
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
          style={{
            margin: "5px",
            padding: "5px 10px",
            backgroundColor: currentPage === i ? "#007bff" : "#f0f0f0",
            color: currentPage === i ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: currentPage === i ? "default" : "pointer",
          }}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Paginated Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>{renderPageNumbers()}</div>
    </div>
  );
};

export default PaginatedUsers;
