import Link from "next/link"

export default function LogInPage () {
    return <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-8">
            <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="text-sm text-center">Enter your credentials for login</p>
        </div>
        <div className="my-8">
        <form action="" className="flex flex-col gap-5">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password"/>
            <button className="bg-teal-600 text-white font-bold cursor-pointer px-6 py-3 rounded-md">Login Now</button>

            <Link className="text-sm underline mt-8 text-right" href={"/signup"}>Don&apos;t have an account? <span className="underline font-bold text-orange-800">Sign Up</span></Link>
        </form>
        </div>
    </div>
}