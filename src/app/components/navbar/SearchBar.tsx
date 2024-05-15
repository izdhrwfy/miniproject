"use client";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push("/");

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };

  return (
    <div className="flex items-center">
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        placeholder="Search for event, categories, brands ..."
        className="p-2 border border-gray-300 rounded-full focus:outline-none focus:border-[0.5px] focus:border-[#38B6FF] w-80 text-sm"
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className="bg-white hover:opacity-80 text-[#38B6FF] p-2 rounded-full"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
