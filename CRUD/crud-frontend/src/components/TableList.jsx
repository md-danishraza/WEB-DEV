import React from "react";

function TableList({ editOpen }) {
  const clients = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      job: "Software Engineer",
      rating: 4.5,
      status: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      job: "Product Manager",
      rating: 4.8,
      status: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      job: "UI/UX Designer",
      rating: 4.2,
      status: true,
    },
  ];
  return (
    <div className="overflow-x-auto mt-8 shadow-2xl py-8">
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
          {clients.map((client, index) => {
            return (
              <tr key={client.id} className="hover:bg-base-300">
                <th>{index + 1}</th>
                <td>{client.name}</td>
                <td className="hidden sm:table-cell">{client.email}</td>
                <td className="hidden md:table-cell">{client.job}</td>
                <td className="hidden lg:table-cell">{client.rating}</td>
                <td className="text-center">
                  <button
                    className={`btn rounded-full w-16 text-xs  ${
                      client.status ? "btn-success" : "btn-error"
                    }`}
                  >
                    {client.status ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="flex gap-2 justify-center items-center ">
                  <button
                    className="btn btn-accent btn-sm"
                    onClick={() => editOpen(client)}
                  >
                    Update
                  </button>
                  <button className="btn btn-warning btn-sm">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;
