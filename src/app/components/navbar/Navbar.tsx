import React from "react";
import Container from "../Container";
import Link from "next/link";
import Maskot from "../../../../public/assets/maskot.png";
import Image from "next/image";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import getCurrentUser from "../../../action/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="sticky top-0 w-full bg-white z-30 shadow-sm ">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            {/* LOGO NAVBAR */}
            <Link href={"/"}>
              <Image src={Maskot} alt="logo" className="w-24" />
            </Link>

            {/* SEARCH BAR */}
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
