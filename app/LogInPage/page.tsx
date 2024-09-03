'use client';

import { login } from "./actions";
import Link from "next/link";
//import { useState } from "react";

export default function LogInPage() {
  //const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Calling the server action directly
    const result = await login(formData);

    // if (result?.error) {
    //   setError(result.error);
    // } else {
    //   // Redirect to dashboard on success
    //   window.location.href = "/dashboard";
    // }
  };
  return (
    <main className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="text-sm text-center">
            Enter your credentials for login
          </p>
        </div>
        <div className="my-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit" className="bg-teal-600 text-white font-bold cursor-pointer px-6 py-3 rounded-md">
              Login Now
            </button>

            <Link
              className="text-sm underline mt-8 text-right"
              href={"/signup"}
            >
              Don&apos;t have an account?{" "}
              <span className="underline font-bold text-orange-800">
                Sign Up
              </span>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
