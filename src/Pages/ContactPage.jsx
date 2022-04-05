import React from "react";

import AppContactList from "../Components/AppContactList";
import AppList from "../Components/AppList";
import AppButton from "../Components/Elements/AppButton";

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
];

function ContactPage() {
  return (
    <div className="container">
      <div>
        <div className="flex mb-1 sm:mb-0 justify-between w-full column-3">
          <div className="flex-1">
            <h2 className="flex-none text-2xl leading-tight">Contacts</h2>
          </div>
          <AppButton size="sm" color="indigo" children="Add Contacts" />
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="name"
                />
              </div>
              <AppButton
                size="sm"
                color="indigo"
                children="Filter"
                type="submit"
              />
            </form>
          </div>
        </div>
        <AppList />
      </div>
    </div>
  );
}

export default ContactPage;
