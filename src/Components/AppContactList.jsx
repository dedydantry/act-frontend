import React from "react";
import { Link } from "react-router-dom";

function AppContactList(props) {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex">
          <p className="text-gray-900 whitespace-no-wrap">{props.fullName}</p>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{props.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{props.phone}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative">{props.createdAt}</span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={props.link} className="text-indigo-600 hover:text-indigo-900">
          Edit
        </Link>
      </td>
    </tr>
  );
}

export default AppContactList;
