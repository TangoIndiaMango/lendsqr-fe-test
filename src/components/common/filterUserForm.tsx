import { useForm } from "react-hook-form";
import { getItem } from "../../utils/helpers";
import { useEffect, useState } from "react";

interface FilterFormData {
  organization: string;
  username: string;
  email: string;
  date: string;
  phone: string;
  status: string;
}

const FilterForm = () => {
  const [orgData, setOrgData] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FilterFormData>({
    defaultValues: {
      organization: "",
      username: "",
      email: "",
      date: "",
      phone: "",
      status: ""
    },
    mode: "onSubmit" // Validate on form submit
  });

  const onSubmit = (data: FilterFormData) => {
    // Handle form submission
    console.log(data);
    console.log(errors);
  };

  const getOrgData = () => {
    const data = getItem("users");
    const orgNames = data.map((item) => item.orgName);
    setOrgData(orgNames);
  };

  useEffect(() => {
    getOrgData();
  }, []);
  return (
    <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="organization">Organization</label>
        <select {...register("organization")}>
          <option value="">Select</option>
          {orgData &&
            orgData.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" {...register("username")} placeholder="User" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" {...register("email")} placeholder="Email" />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input type="date" {...register("date")} placeholder="Date" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" {...register("phone")} placeholder="Phone Number" />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select {...register("status")}>
          {/* options active and blackliste */}
          <option value="active">Active</option>
          <option value="blacklisted">Blacklisted</option>
        </select>
      </div>
      <div>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <button type="submit">Filter</button>
      </div>
    </form>
  );
};

export default FilterForm;
