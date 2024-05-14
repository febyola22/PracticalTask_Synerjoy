import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../redux/slices/userSlice';

function UserComponent() {
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const containerStyle = {
    paddingLeft: '20px',
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  if (isLoading) {
    return <div style={containerStyle}>Loading...</div>;
  }

  return (
    <div style={containerStyle}>
      <h2>User Details</h2>
      {userData?.map((item) => (
        <div key={item.id} style={rowStyle}>
          <span>Name: {item.name}</span>
          <span> - </span>
          <span>Email: {item.email}</span>
        </div>
      ))}
    </div>
  );
}

export default UserComponent;
