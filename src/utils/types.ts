/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export type ImageHolderProps = {
    imageUrl?: string;
    className?: string;
    children?: React.ReactNode;
}

export interface DropdownItem {
    icon: string;
    text: string;
}

export interface Profile {
    avatar?: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    bvn: string;
    gender: string;
  }
  
  export interface Education {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: [string, string];
    loanRepayment: string;
  }
  
  export interface Socials {
    twitter: string;
    facebook: string;
    instagram: string;
  }
  
  export interface Guarantor {
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
//   export interface User {
//     profile: Profile;
//     email: string;
//     accountBalance: string;
//     accountNumber: string;
//     education: Education;
//     socials: Socials;
//     guarantor: Guarantor;
//   }
  
  export interface UsersDetailsProps {
    user: UserProps;
  }
  