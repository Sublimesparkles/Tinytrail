'use client';
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="flex flex-col mx-6">
        <header className="header flex items-center justify-between mx-4 my-8">
          <div>
            <h1 className="scissor text-2xl font-black italic ">Scissor</h1>
          </div>
          <nav>
            <ul className="breadcrumb flex justify-between">
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#login">Login</Link>
              </li>
              <li>
                <Link href="#signup">Sign Up</Link>
              </li>
              <li>
                <Link href="#contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="bgimage flex flex-col items-center  justify-center w-400 h-screen my-12 mx-20  bg-[url('/url_shortener.JPG')] rounded-lg bg-cover bg-center">
          <h1 className="shortener text-5xl font-bold font-black pb-4">URL Shortener</h1>
          <p className="font-bold text-lg pb-7">Paste your link below to shorten it</p>
          <div className="relative">
            <input type="url" className="input h-14 bg-white"/>
            <button className="inputbutton w-50 py-2 px-3 rounded-lg text-white font-bold absolute bottom-2 right-2 bg-teal-500">Shorten</button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-300 mb-20">
          <h2 className="text-teal-800 font-bold text-3xl mb-2">
            A simple but powerful tool for <span className="text-teal-400">Everyone</span>.
          </h2>
          <p className="description w-96 text-lg text-teal-800 font-bold">
            With the help of this tool, you can effortlessly track your audience
            with short, memorable yet powerful URLs, and give your clients a
            distinctive, personalized experience.
          </p>
        </div>

        <div>
          <div>
            <h1 className="text-3xl text-center mb-12">
              <span id="features" className="font-bold">Features</span>
              -What We Offer
            </h1>
          </div>
          <div className="feature flex items-center justify-between gap-32 mx-16">
          <div className="p-5 bg-white rounded-2xl mb-4">
            <div className="flex">
              <FaLink size={30}/><h1 className="font-bold text-2xl pb-3 pl-4">Custom URLs</h1></div>
            <p className="font-bold">
              Scissor allows users to customize their shortened URLs.In order to
              represent their brand or content,users can personalize the URL and
              select their own domain name.This feature is handy for individuals
              or small businesses looking to establish branded links for their
              websites.
            </p>
          </div>
          <div className="p-5 bg-teal-600 rounded-2xl mb-4">
          <div className="flex">
          <FaChartLine size={30} color='white'/><h1 className="font-bold text-2xl pb-3 pl-4 text-white">Link Analytics</h1></div>
            <p className="font-bold text-white">
              Scissor gives users access to basic analytics so they can monitor
              the performance of their shortened URLs. Users are able to view
              the number of clicks and the origin of clicks on their shortened
              URLs.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl mb-4">
          <div className="flex">
          <FaQrcode size={30}/><h1 className="font-bold text-2xl pb-3 pl-4">QR Code Generation</h1></div>
            <p className="font-bold">
              Scissor also allows users to generate QR codes for their shortened
              URLs. The QR code image can be downloaded by users and used on
              their website or in promotional materials.
            </p>
          </div>
          </div>
          <Link href="/signup">
          <button className="block mx-auto my-6 bg-white py-5 px-10 rounded-3xl text-xl text-teal-800 font-bold transition">
            Sign Up
          </button>
        </Link>
          <div id="contact" className="flex items-center justify-center">
            <p className="text-3xl font-bold">Contact Us:</p>
       <div className="flex"><FaFacebook size={30} style={{ margin: '10px'}}/> <FaInstagram size={30} style={{ margin: '10px'}}/> <FaTwitter size={30} style={{ margin: '10px'}}/></div>
          </div>
        </div>
    </div>
  );
}
