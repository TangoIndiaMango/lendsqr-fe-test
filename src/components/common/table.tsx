/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import { dropdownItems } from "../../utils/constants";
import InfoDropDown from "../users/dropDown";
import FilterForm from "./filterUserForm";
import { TableProps } from "../../utils/types";
import { formatDate } from "../../utils/helpers";


const DataTable = ({ columns, rows }: TableProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState<number | null>(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState<number | null>(null);
  const [userStatus, setUserStatus] = useState<{ [key: string]: string }>({});

  const handleDropdownAction = (userId, action) => {
    if (action === "Activate User") {
      setUserStatus((prev) => ({ ...prev, [userId]: "active" }));
    } else if (action === "Blacklist User") {
      setUserStatus((prev) => ({ ...prev, [userId]: "inactive" }));
    }
    setIsOptionsOpen(null);
  };

  return (
    <div className="data-table" data-testid="data-table">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>
                <div>
                  <span>{column.header}</span>
                  {column.isSortable && (
                    <img
                      src="/assets/icons/filter-icon.svg"
                      alt="filter-icon"
                      onClick={() =>
                        isFilterOpen === index
                          ? setIsFilterOpen(null)
                          : setIsFilterOpen(index)
                      }
                    />
                  )}
                </div>
                {isFilterOpen === index && <FilterForm />}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.key === "orgName" ? (
                    <Link to={`/user-details/${row.id}`}>
                      {row[column.key]}
                    </Link>
                  ) : column.key === "createdAt" ? (
                    <span>{formatDate(row[column.key])}</span>
                  ) : (
                    <span>{row[column.key]}</span>
                  )}
                </td>
              ))}
              <td key={`status-${row.id}`}>
                <span className={`status ${userStatus[row.id] || "active"}`}>
                  {userStatus[row.id] === "inactive" ? "Blacklisted" : "Active"}
                </span>
              </td>
              <td key={`more-${row.id}`}>
                <img
                  src="/assets/icons/more-icon.svg"
                  alt="more"
                  onClick={() =>
                    isOptionsOpen === row.id
                      ? setIsOptionsOpen(null)
                      : setIsOptionsOpen(row.id)
                  }
                />
                {isOptionsOpen === row.id && (
                  <InfoDropDown
                    items={dropdownItems}
                    onItemClick={(action) =>
                      handleDropdownAction(row.id, action)
                    }
                    userId={row.id}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
