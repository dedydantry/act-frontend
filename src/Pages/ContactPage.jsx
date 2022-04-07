import React, { useEffect, useState } from "react";
import axios from "axios";

import AppButton from "../Components/Elements/AppButton";
import AppTable from "../Components/AppTable";
import { Link } from "react-router-dom";

function ContactPage() {
  var store = require("store");
  const [dataTable, setDataTable] = useState([]);

  useEffect(async () => {
    const id = await store.get("clientId");
    axios
      .get(`http://localhost:8080/api/contacts?id=${id}`)
      .then((res) => setDataTable(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  const column = [
    { heading: "ID", value: "id" },
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "Created At", value: "createdAt" },
  ];

  return (
    <div className="container">
      <div>
        <div className="flex mb-1 sm:mb-0 justify-between w-full column-3">
          <div className="flex-1">
            <h2 className="flex-none text-2xl leading-tight">Contacts</h2>
          </div>
          <Link to="/contacts/add">
            <AppButton children="Add Contacts" color="indigo" size="sm" />
          </Link>
        </div>
        <AppTable data={dataTable} column={column} />
      </div>
    </div>
  );
}

export default ContactPage;
