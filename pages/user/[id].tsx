import { User } from "@/components/types";
import { useRouter } from "next/router";
import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{ data: User }> = async ({
  query,
}) => {
  const request = await fetch(`https://fakestoreapi.com/users/${query.id}`);
  const data: User = await request.json();
  return {
    props: {
      data,
    },
  };
};

const User = ({ data }: { data: User }) => {
  return (
    <div className="flex flex-col bg-slate-600 py-2 px-3 w-[50%]">
      <Link href="/" legacyBehavior>
        <a className="block py-2 px-3 bg-red-200 rounded text-white self-start">
          Главная страница
        </a>
      </Link>
      <div className="flex justify-between items-center py-2">
        <div>Имя :</div>
        <div className="text-white">
          {data.name?.firstname.toLocaleUpperCase()}
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <div>Фамилия :</div>
        <div className="text-white">
          {data.name?.lastname.toLocaleUpperCase()}
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <div>Город :</div>
        <div className="text-white">{data.address?.city}</div>
      </div>
      <div className="flex justify-between items-center py-2">
        <div>Телефон :</div>
        <div className="text-white">{data.phone}</div>
      </div>
      <div className="flex justify-between items-center py-2">
        <div>Почта :</div>
        <div className="text-white">{data.email}</div>
      </div>
    </div>
  );
};
export default User;
