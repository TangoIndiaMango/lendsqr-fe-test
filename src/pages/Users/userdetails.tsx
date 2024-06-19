import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/common/loadingSpinner";
import useAxios from "../../components/hooks/useAxios";
import useGoBack from "../../components/hooks/useGoback";
import UserDetailsMain from "../../components/users/details";
import UserDetailsHeader from "../../components/users/detailsHeader";
import { usersUrl } from "../../utils/network";
import { UserProps } from "../../utils/types";
import { getItem, setItem } from "../../utils/helpers";

const UserDetails = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userDetail, setUserDetail] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { axiosHandler } = useAxios();
  const { getGoBackButton } = useGoBack();

  const fetchUserDetail = async () => {
    const res = await axiosHandler<UserProps>(
      `${usersUrl}/${userId}`,
      "GET",
      null,
      false
    );
    if (res) {
      setUserDetail(res);
      setItem(`user_${userId}`, res);
    }
  };

  const getUserDetail = async () => {
    const allUser = getItem("users");
    if (allUser) {
      const user = allUser.find((user: UserProps) => user.id === userId);
      setUserDetail(user);
      setIsLoading(false);
    } else {
      fetchUserDetail();
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getUserDetail();
  }, [userId]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="details">
      {getGoBackButton()}

      <div className="details-header">
        <h1>User Details</h1>
        <div>
          <button type="button">blacklist user</button>
          <button type="button">activate user</button>
        </div>
      </div>
      {userDetail && (
        <>
          <UserDetailsHeader user={userDetail} />
          <UserDetailsMain user={userDetail} />
        </>
      )}
    </section>
  );
};

export default UserDetails;
