import { createUser } from "@/actions/actions";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
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
        <div className="max-w-md w-full text-gray-600 space-y-2 shadow-sm rounded px-12 py-4 bg-gray-100">
          <div className="text-center">
            <div className="">
              <h3 className="text-gray-800 text-sm font-bold sm:text-xl">
                Inscription
              </h3>
            </div>
          </div>
          <form className="space-y-5" action={createUser}>
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g John Gabin"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="e.g: example@mail.com"
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
            <div>
              <label className="font-medium">Profection</label>
              <select
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                name="domaine"
                required
              >
                <option disabled selected>
                  Pick your profection
                </option>
                <option value="doctor">Docteur</option>
                <option value="developper">Developper</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Sign Up
            </button>
          </form>
          <p className="text-center">
            {"Don't have an account? "}
            <Link
              href="/signin"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
