'use client'
import React from 'react'
import { deleteUser,removeUser } from '@/utils/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from './Form';
function DeleteBtn({id}:{id:string}) {
    const removeUserWithId = removeUser.bind(null,id);
    const [message, formAction] = useFormState(removeUserWithId, null);
    return (
        <form action={formAction}>
            <p>{message && message}</p>
           
          <button
            type="submit"
            className="bg-red-500 text-white text-xs rounded p-2"
          
          >
          </button>
           <SubmitButton type='delete' />
        </form>
      );
}

export default DeleteBtn
