import React from "react";
import AppButton from "./Elements/AppButton";

function AppTable({ data, column, detail }) {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              {column.map((item, index) => (
                <TableHead key={index} item={item} />
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow key={index} item={item} column={column} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const TableHead = ({ item }) => (
  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
    {item.heading}
  </th>
);

const TableRow = ({ item, column, detail }) => (
  <tr>
    {column.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split(".");
        return (
          <td
            key={index}
            className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
          >
            <span className="relative">{item[itemSplit[0]][itemSplit[1]]}</span>
          </td>
        );
      }
      return (
        <td
          key={index}
          className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
        >
          <span className="relative">{item[`${columnItem.value}`]}</span>
        </td>
      );
    })}
    <td>
      <AppButton children="Detail" size="sm" color="indigo" onClick={detail} />
    </td>
  </tr>
);

export default AppTable;
