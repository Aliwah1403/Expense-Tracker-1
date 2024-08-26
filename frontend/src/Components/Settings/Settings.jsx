import { UserProfile } from "@clerk/clerk-react";
import React from "react";

const Settings = () => {
  return <UserProfile path="/settings" />;
};

export default Settings;
