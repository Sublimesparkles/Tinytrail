import Link from "next/link"

export default function SignUp () {
    return <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-8">
            <h1 className="text-4xl font-bold pb-2">Sign Up</h1>
          <p className="text-sm text-center">Create your account</p>
        </div>
        <div className="my-8">
        <form action="" className="flex flex-col gap-5">
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password"/>
            <button className=" w-200  bg-teal-600 text-white font-bold cursor-pointer px-6 py-3 rounded-md">Register</button>

            <Link className="text-sm underline mt-8 text-right" href={"/"}>Already have an account?   <span className="underline font-bold text-orange-800">Login</span></Link>
        </form>
        </div>
    </div>
}