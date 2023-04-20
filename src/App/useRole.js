import { useState } from 'react';

export default function useRole() {
  const getRole = () => {
    const userRole = sessionStorage.getItem('role');
    return userRole
  };

  const [role, setRole] = useState(getRole());

  const saveRole = userRole => {
    sessionStorage.setItem('role', userRole);
    setRole(userRole);
  };

  return {
    setRole: saveRole,
    role
  }
};
