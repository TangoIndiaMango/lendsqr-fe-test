/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { UsersDetailsProps } from "../../utils/types";

const userNavItems: string[] = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System"
];

const UserDetailsHeader = ({ user }: UsersDetailsProps) => {
    const { profile, accountBalance, accountNumber } = user;

  return (
    <div className="header-detail">
      <div className="header-info">
        <div>
          <div className="avatar">
            <img
              src={profile.avatar || "/assets/avatar.svg"}
              alt="avatar"
            />
          </div>
          <div>
            <p>{`${profile.firstName} ${profile.lastName}`}</p>
            <p>{profile.bvn}</p>
          </div>
        </div>
        <div className="tier">
          <p>User’s Tier</p>
          <div className="star-rating">
            <img src="/assets/icons/star-filled.svg" alt="star" />
            <img src="/assets/icons/star-outline.svg" alt="star" />
            <img src="/assets/icons/star-outline.svg" alt="star" />
          </div>
        </div>
        <div className="balance">
          <p>₦{accountBalance}</p>
          <p>{accountNumber}/Providus Bank</p>
        </div>
      </div>
      <div className="header-nav">
        {userNavItems.map((item, index) => (
          <Link key={index} to="#">
            <div>{item}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserDetailsHeader;
