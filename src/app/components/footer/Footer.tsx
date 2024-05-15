import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-cyan-600 text-slate-200 text-sm mt-16 ">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb=2">Customer Service</h3>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Terms & Condition</Link>
            <Link href={"#"}>Payment Confirmation</Link>
            <Link href={"#"}>FAQs</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb=2">Product Categories</h3>
            <Link href={"#"}>Concert</Link>
            <Link href={"#"}>Musical</Link>
            <Link href={"#"}>Classic</Link>
            <Link href={"#"}>Comedy</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb=2">About Us</h3>
            <h2 className="mb-2">
              EventPark, The no. 1 ticket platform in Indonesia offering you a
              wide range of concerts, fan-meetings, musicals, classics, sports
              and more
            </h2>
            <h2>
              &copy; {new Date().getFullYear()} EventPark. All rights reserved
            </h2>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb=2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href={"#"}>
                <MdFacebook size={24} />
              </Link>
              <Link href={"#"}>
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href={"#"}>
                <BsYoutube size={24} />
              </Link>
              <Link href={"#"}>
                <BsInstagram size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
