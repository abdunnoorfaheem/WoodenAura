import React, { useState } from "react";
import PageHeading from "../components/PageHeading";
import Company from "../components/Company";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const auth = getAuth();

  let navigate = useNavigate();

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleButtonSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setTimeout(() => {
          if (user.user.emailVerified == true) {
            navigate("/");
          } else {
            alert("Verify Your Email!");
          }
        }, 2000);

        // console.log(user);
      })
      .catch((error) => {
        let err = error.code;
        if (err.includes("auth/invalid-email")) {
          setErrorMessage("Email or Password is not valid.");
        }
      });
  };

  return (
    <>
      <PageHeading title="My Account" pageName="My Account" />
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-lg mx-auto">
            <h3 className="text-[32px] font-bold text-center mb-4">Sign in</h3>
            <p className="text-[17px] text-[#9096B2] text-center mb-8">
              Please login using account details below.
            </p>
            <form className="space-y-6">
              <div>
                <input
                  onChange={handleEmail}
                  className="w-full border border-gray-300 outline-none p-3 rounded-md focus:ring-2 focus:ring-[#FB2E86]"
                  placeholder="Email Address"
                  type="email"
                  name="email"
                />
              </div>

              <div>
                <input
                  onChange={handlePassword}
                  className="w-full border border-gray-300 outline-none p-3 rounded-md focus:ring-2 focus:ring-[#FB2E86]"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>

              <div className="text-right">
                <p className="text-[#9096B2] text-[17px] hover:underline cursor-pointer">
                  Forgot your password?
                </p>
              </div>

              <div>
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <button
                  onClick={handleButtonSignin}
                  type="submit"
                  className="w-full bg-[#FB2E86] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e12c78] transition duration-300"
                >
                  Sign In
                </button>
              </div>

              <div className="text-center">
                <p className="text-[#9096B2] text-[17px]">
                  Don’t have an Account?{" "}
                  <Link to="/login">
                    <span className="text-[#FB2E86] font-semibold hover:underline cursor-pointer">
                      Create account
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Company />
    </>
  );
};

export default SignIn;
