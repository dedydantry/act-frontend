import React from "react";
import AppContactList from "../Components/AppContactList";

const contacts = [
  {
    id: "1",
    fullName: "Sergio",
    email: "sergio@importir.co",
    phone: "14045",
    createdAt: "12/03/2020",
    link: "/",
  },
  {
    id: "2",
    fullName: "Dzikra",
    email: "dzikra@importir.co",
    phone: "14046",
    createdAt: "12/03/2020",
    link: "/",
  },
  {
    id: "3",
    fullName: "Fahri",
    email: "fahri@importir.co",
    phone: "14047",
    createdAt: "12/03/2020",
    link: "/",
  },
  {
    id: "4",
    fullName: "Fahri",
    email: "fahri@importir.co",
    phone: "14047",
    createdAt: "12/03/2020",
    link: "/",
  },
  {
    id: "5",
    fullName: "Fahri",
    email: "fahri@importir.co",
    phone: "14047",
    createdAt: "12/03/2020",
    link: "/",
  },
];

function AppList() {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Full Name
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Phone
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Created at
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              ></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((item) => (
              <AppContactList
                fullName={item.fullName}
                email={item.email}
                phone={item.phone}
                createdAt={item.createdAt}
                link={item.link}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppList;
