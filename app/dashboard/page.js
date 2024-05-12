"use client";
import React, { useState, useEffect } from "react";
import { createTestUser, fetchTest } from "../lib/data";

export default function Page() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Fetch users when component mounts
  useEffect(() => {
    async function loadData() {
      const fetchedUsers = await fetchTest();
      setUsers(fetchedUsers);
    }
    loadData();
  }, []);

  const handleCreateUser = async () => {
    try {
      const newUser = await createTestUser(firstName, lastName);
      setUsers([...users, newUser]); // Add new user to the state
      setFirstName(""); // Clear the input fields after submission
      setLastName("");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      {users.map((user, id) => (
        <div key={id}>
          {user.first_name} {user.last_name}
        </div>
      ))}
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
}
