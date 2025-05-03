import { useState, useEffect } from 'react';
import { userService } from '../services/api';

// Custom hook for fetching users
export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await userService.getUsers();
      setUsers(response.data);
      return response.data;
    } catch (err) {
      setError('Failed to fetch users');
      console.error('Error fetching users:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, error, refetch: fetchUsers };
};

// You can add more custom hooks for other API endpoints
