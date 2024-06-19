import { UsersDetailsProps } from "../../utils/types";

const UserDetailsMain = ({ user }: UsersDetailsProps) => {
  const { profile, email, education, socials, guarantor } = user;

  return (
    <div className="user-details-main">
      <section className="user-info-card">
        <h2>Personal Information</h2>
        <div className="user-info-main">
          <div>
            <p>Full Name</p>
            <p>{`${profile.firstName} ${profile.lastName}`}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{profile.phoneNumber}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>{email}</p>
          </div>
          <div>
            <p>BVN</p>
            <p>{profile.bvn}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{profile.gender}</p>
          </div>
          <div>
            <p>Marital Status</p>
            <p>Single</p>
          </div>
          <div>
            <p>Children</p>
            <p>None</p>
          </div>
          <div>
            <p>Type of Residence</p>
            <p>Parent’s Apartment</p>
          </div>
        </div>
      </section>

      <section className="user-info-card">
        <h2>Education and Employment</h2>
        <div className="user-info-main">
          <div>
            <p>Level of Education</p>
            <p>{education.level}</p>
          </div>
          <div>
            <p>Employment Status</p>
            <p>{education.employmentStatus}</p>
          </div>
          <div>
            <p>Sector of Employment</p>
            <p>{education.sector}</p>
          </div>
          <div>
            <p>Duration of Employment</p>
            <p>{education.duration}</p>
          </div>
          <div>
            <p>Office Email</p>
            <p>{education.officeEmail}</p>
          </div>
          <div>
            <p>Monthly Income</p>
            <p>{`₦${education.monthlyIncome[0]} to ₦${education.monthlyIncome[1]}`}</p>
          </div>
          <div>
            <p>Loan Repayment</p>
            <p>{education.loanRepayment}</p>
          </div>
        </div>
      </section>

      <section className="user-info-card">
        <h2>Socials</h2>
        <div className="user-info-main">
          <div>
            <p>Twitter</p>
            <p>{socials.twitter}</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>{socials.facebook}</p>
          </div>
          <div>
            <p>Instagram</p>
            <p>{socials.instagram}</p>
          </div>
        </div>
      </section>

      <section className="user-info-card">
        <h2>Guarantor</h2>
        <div className="user-info-main">
          <div>
            <p>Full Name</p>
            <p>{`${guarantor.firstName} ${guarantor.lastName}`}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{guarantor.phoneNumber}</p>
          </div>
          <div>
            <p>Address</p>
            <p>{guarantor.address}</p>
          </div>
          <div>
            <p>Relationship</p>
            <p>Sister</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDetailsMain;
