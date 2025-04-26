import React from "react";

function TableList({ editOpen, clients, handleDelete }) {
  // console.log(clients);
  return (
    <div className="overflow-x-auto min-h-[40vh] shadow-2xl py-8 relative">
      <table className="table w-full ">
        {/* head */}
        <thead className="font-(family-name:--main-font) md:text-[1.5rem]">
          <tr>
            <th className="sm:w-12 w-8"></th>
            <th>Name</th>
            <th className="hidden sm:table-cell">Email</th>
            <th className="hidden md:table-cell">Job</th>
            <th className="hidden lg:table-cell">Rating</th>
            <th className="text-center">Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="font-(family-name:--main-font) font-bold">
          {!clients.length ? (
            <tr>
              <td
                className="text-center absolute top-30 left-[50%] translate-x-[-50%] translate-y-[-50%] font-(family-name:--second-font) text-red-500 text-2xl"
                colSpan={7}
              >
                Not found
              </td>
            </tr>
          ) : (
            clients.map((client, index) => {
              return (
                <tr key={client.id} className="hover:bg-base-300">
                  <th className="index-column">{index + 1}</th>
                  <td>{client.name}</td>
                  <td className="hidden sm:table-cell">{client.email}</td>
                  <td className="hidden md:table-cell">{client.job}</td>
                  <td className="hidden lg:table-cell">{client.rating}</td>
                  <td className="text-center">
                    <button
                      className={`btn cursor-default w-16 text-xs  ${
                        client.isactive ? "btn-success" : "btn-error"
                      }`}
                    >
                      {client.isactive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="flex gap-2 justify-center items-center ">
                    <button
                      className="btn btn-accent btn-sm"
                      onClick={() => editOpen(client)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleDelete(client.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;
