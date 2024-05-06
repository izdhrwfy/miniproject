import React from "react";
import Container from "../Container";
import Link from "next/link";
import Maskot from "../../../../public/assets/maskot.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm ">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            {/* LOGO NAVBAR */}
            <Link href={"/"}>
              <Image src={Maskot} alt="logo" className="w-24" />
            </Link>

            {/* SEARCH BAR */}
            <div className="hidden md:block">SEARCH BAR</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>CARTCOUNT</div>
              <div>USERMENU</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
