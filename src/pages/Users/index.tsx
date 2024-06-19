/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/common/loadingSpinner";
import Pagination from "../../components/common/pagination";
import useAxios from "../../components/hooks/useAxios";
import Usersummary from "../../components/users/userSummary";
import UsersTable from "../../components/users/usersTable";
import { setItem } from "../../utils/helpers";
import { usersUrl } from "../../utils/network";
import { UserProps } from "../../utils/types";
import { useSearch } from "../../components/hooks/SearchContext";

const Users = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allUsers, setAllUsers] = useState<UserProps[]>([]);
  const [displayedUsers, setDisplayedUsers] = useState<UserProps[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [noUserFound, setNoUserFound] = useState<boolean>(false);
  const { debouncedSearch } = useSearch();
  const { axiosHandler } = useAxios();

  const usersPerPage = 9;

  const getUsers = async () => {
    const res = await axiosHandler<UserProps[]>(usersUrl, "GET", null, false);
    if (res) {
      setAllUsers(res);
      paginateData(res, 0);
      setItem("users", res);

      // store each user in the localstorage
      // res.forEach((user) => {
      //   setItem(`user_${user.id}`, user);
      // });
    }
    setIsLoading(false);
  };

  const paginateData = (data: UserProps[], offset: number) => {
    const endOffset = offset + usersPerPage;
    setDisplayedUsers(data.slice(offset, endOffset));
    setTotalPages(Math.ceil(data.length / usersPerPage));
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (allUsers.length > 0) {
      const lowerCaseSearch = debouncedSearch.toLowerCase();
      const filteredUsers = allUsers.filter((user) => {
        return (
          user.userName.toLowerCase().includes(lowerCaseSearch) ||
          user.email.toLowerCase().includes(lowerCaseSearch) ||
          user.orgName.toLowerCase().includes(lowerCaseSearch)
        );
      });

      if (filteredUsers.length === 0) {
        setNoUserFound(true);
      } else {
        setNoUserFound(false);
      }

      paginateData(filteredUsers, 0);
      setCurrentOffset(0);
    }
  }, [debouncedSearch, allUsers]);

  const handlePageChange = (event: { selected: number }) => {
    const newOffset = (event.selected * usersPerPage) % allUsers.length;
    setCurrentOffset(newOffset);
    paginateData(allUsers, newOffset);
  };

  return (
    <section className="user-content">
      <h1>Users</h1>
      <div>
        <Usersummary />
        {isLoading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : noUserFound ? (
          <div className="no-users-found">No users found</div>
        ) : (
          <>
            <UsersTable users={displayedUsers} />
            <div className="paginate">
              <div className="page-vals">
                <p>
                  Showing{" "}
                  <span>
                    {currentOffset + 1}-
                    {Math.min(currentOffset + usersPerPage, allUsers.length)}{" "}
                    <img src="/assets/icons/down-arrow.svg" alt="down arrow" />
                  </span>{" "}
                  out of {allUsers.length}
                </p>
              </div>
              <Pagination
                pageCount={totalPages}
                handlePageClick={handlePageChange}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Users;
