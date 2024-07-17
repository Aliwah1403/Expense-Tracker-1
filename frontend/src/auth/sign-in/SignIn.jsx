import { SignIn } from "@clerk/clerk-react";
import COVER_IMAGE from "../../../public/login-background.jpg";

const SignInPage = () => {
  return (
    // <div className="flex justify-center my-20 items-center">
    //   <SignIn />
    // </div>
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Track your finances with the most ease
          </h1>
          <p className="text-xl text-white font-normal">Start for free</p>
        </div>
        <img src={COVER_IMAGE} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20">
        <div className="w-full flex items-center justify-center">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
