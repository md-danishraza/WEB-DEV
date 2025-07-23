import React from 'react'
import { fetchUsers } from '@/utils/actions'
import DeleteBtn from './DeleteBtn';
async function UsersList() {
const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => (
            <h4 key={user.id} className="capitalize text-lg flex justify-between mb-2 ">
              {user.firstName} {user.lastName}
              <DeleteBtn id={user.id } />
            </h4>
          ))}
        </div>
      ) : (
        <p>No users found...</p>
      )}
    </div>
  );
}

export default UsersList

