"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(false);
    console.log(email, password);

    router.push("/");
  }
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-1/2 bg-green-800">
        <div className="flex flex-col h-full items-center justify-center">
          <div className="flex gap-5 items-center mb-10 px-5">
            <Image
              src={"/icons/firstaid.svg"}
              alt="first aid"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="font-semibold text-3xl hidden lg:block">
              MedKitPOS
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-5 items-center mb-10 px-5">
              <Image
                src={"/icons/firstaid.svg"}
                alt="first aid"
                width={30}
                height={30}
                className="object-contain"
              />
              <span className="font-semibold text-xl hidden lg:block">
                MedKitPOS
              </span>
            </div>
            {type === "sign in" ? (
              <>
                <h1 className="font-bold text-20">Sign In</h1>
              </>
            ) : (
              <>
                <h1 className="font-bold text-20">Sign Up</h1>
              </>
            )}
          </div>
          <form
            onSubmit={onSubmit}
            method="POST"
            className="mt-8 space-y-6 w-full"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm">
              <input
                id="email"
                type="email"
                value={email}
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full appearance-none rounded-md border-2 border-gray-300 px-3 py-2 pr-10 text-gray-900 placeholder-gray-500 focus:border-green-800 focus:outline-none focus:ring-green-800 sm:text-sm"
              />
            </div>
            <div>
              <input
                id="password"
                type="text"
                value={password}
                name="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full appearance-none rounded-md border-2 border-gray-300 px-3 py-2 pr-10 text-gray-900 placeholder-gray-500 focus:border-green-800 focus:outline-none focus:ring-green-800 sm:text-sm"
              />
            </div>

            <>
              {type === "sign up" && (
                <>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      name="cinfirmPassword"
                      placeholder="Confirm Password"
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pr-10 text-gray-900 placeholder-gray-500 focus:border-green-800 focus:outline-none focus:ring-green-800 sm:text-sm"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                      )}
                    </button>
                  </div>
                </>
              )}
            </>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-800 px-4 py-2 text-sm font-bold text-white hover:bg-green-800/95 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="mr-3 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
              Submit
            </button>
          </form>

          <div className="flex justify-center">
            {type === "sign in" ? (
              <>
                <p>
                  Don&apos;t have an account?{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() => router.push("/sign-up")}
                  >
                    Sign Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <p>
                  Have an account?{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() => router.push("/sign-in")}
                  >
                    Sign In
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
