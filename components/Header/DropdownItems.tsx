import Image from "next/image";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
export const DropdownItems = async () => {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }
  return (
    <>
      <span className="hidden text-right lg:block">
        <span className="block text-sm font-medium text-black dark:text-white">
          {session.user?.email}
        </span>
        <span className="block text-xs"> {session.user?.name}</span>
      </span>

      <span className="h-12 w-12 rounded-full">
        <Image
          width={112}
          height={112}
          src={"/images/user/user-01.png"}
          style={{
            width: "auto",
            height: "auto",
          }}
          alt="User"
        />
      </span>
    </>
  );
};
