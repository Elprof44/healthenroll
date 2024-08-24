import { authenticate } from "@/actions/actions";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center">
        <div className="w-full h-1/4 flex flex-col justify-evenly p-2 gap-2">
          <Image
            src={"logo.svg"}
            width={250}
            height={112}
            className="mx-auto"
            alt={"logo"}
          />
        </div>
        <div className="max-w-md w-full text-gray-600 space-y-2 shadow-sm rounded px-12 py-0 bg-gray-100">
          <div className="text-center">
            <div className="my-2">
              <h3 className="text-gray-800 text-xl font-bold sm:text-xl">
                Sign In to your account
              </h3>
            </div>
          </div>
          <form className="space-y-5" action={authenticate}>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Sign in
            </button>
          </form>
          <p className="text-center">
            {"Don't have an account? "}
            <Link
              href="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
