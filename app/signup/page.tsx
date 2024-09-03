'use client';

import { signup } from "../LogInPage/actions";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage () {
    const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Calling the server action directly
    const result = await signup(formData);

    if (result?.error) {
      setError(result.error);
    } else {
      // Redirect to dashboard on success
      window.location.href = "/LogInPage";
    }
  };
    return <div className="flex flex-col items-center justify-center h-screen">
    <div className="mb-8">
        <h1 className="text-4xl font-bold pb-2">Sign Up</h1>
      <p className="text-sm text-center">Create your account</p>
    </div>
    <div className="my-8">
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password"/>
        <button type="submit" className=" w-200  bg-teal-600 text-white font-bold cursor-pointer px-6 py-3 rounded-md">Register</button>

        <Link className="text-sm underline mt-8 text-right" href={"/LogInPage"}>Already have an account?   <span className="underline font-bold text-orange-800">Login</span></Link>
    </form>
    </div>
</div>
}