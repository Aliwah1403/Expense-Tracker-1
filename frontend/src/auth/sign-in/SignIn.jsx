import { SignIn } from "@clerk/clerk-react";
import COVER_IMAGE from "../../../public/login-background.jpg";
import LOGO_IMG from "/assets/logos/logo.svg";

const SIGNUP_URL = import.meta.env.VITE_CLERK_SIGN_UP_URL;

const SignInPage = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <img src={LOGO_IMG} className="absolute top-5 left-5" />
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Track your finances with the most ease
          </h1>
          <p className="text-xl text-white font-normal">
            Log in to your account
          </p>
        </div>
        <img src={COVER_IMAGE} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20">
        <div className="w-full flex items-center justify-center">
          <SignIn signUpUrl={SIGNUP_URL} />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
