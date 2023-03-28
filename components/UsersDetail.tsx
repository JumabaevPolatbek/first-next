import React from "react";
import { Users } from "./types";
import Link from "next/link";

export const UsersDetail = ({ data }: { data: Users }) => {
  return (
    <div className="flex flex-col py-4 px-3 bg-slate-400 rounded w-[50%]">
      {data?.map((user) => {
        return (
          <div
            key={user.id}
            className="py-2 px-3 text-[18px] cursor-pointer hover:bg-red-200 hover:text-white transition-all"
          >
            <Link href={`/user/${user.id}`} legacyBehavior>
              <a className="block">{user.name?.firstname}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
