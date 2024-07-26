import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

const FetchDataButton = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getToken();
        console.log("JWT Token:", token);
      } catch (error) {
        console.error("Failed to get token:", error);
      }
    };

    fetchToken();
  }, [getToken]);

  return <button className="bg-red-400">fETCH</button>;
};

export default FetchDataButton;
