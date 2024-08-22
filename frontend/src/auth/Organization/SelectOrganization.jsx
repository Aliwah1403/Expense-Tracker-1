import React from "react";
import { useOrganizationList, OrganizationSwitcher } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const SelectOrganization = () => {
  const { isLoaded, setActive } = useOrganizationList();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Select an Organization</h1>
      <OrganizationSwitcher
        hidePersonal
        afterCreateOrganizationUrl="/dashboard"
        afterSelectOrganizationUrl="/dashboard"
      />
    </div>
  );
};

export default SelectOrganization;
