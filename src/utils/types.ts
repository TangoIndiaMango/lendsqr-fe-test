/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export type ImageHolderProps = {
  imageUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

export type DropdownItem = {
  icon: string;
  text: string;
}

export type Profile = {
  avatar?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  bvn: string;
  gender: string;
}

export type Education = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: [string, string];
  loanRepayment: string;
}

export type Socials = {
  twitter: string;
  facebook: string;
  instagram: string;
}

export type Guarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
}
export type UserProps = {
  createdAt: string;
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: Profile;
  email: string;
  accountBalance: string;
  accountNumber: string;
  education: Education;
  socials: Socials;
  guarantor: Guarantor;
  userName: string;
}

export type UsersDetailsProps = {
  user: UserProps;
}



export type Column = {
  key: string;
  header: string;
  isSortable?: boolean;
}

export type Row = {
  id: number;
  [key: string]: string | number | boolean | Date;
}

export type TableProps = {
  columns: Column[];
  rows: Row[] | any;
}

export type PaginationProps = {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
};


export type FilterFormData = {
  organization: string;
  username: string;
  email: string;
  date: string;
  phone: string;
  status: string;
}