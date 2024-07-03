"use client";

import { ReactNode, useState, useEffect } from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaConciergeBell,
  FaInfoCircle,
  FaHome,
  FaPhotoVideo,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { Ibarra_Real_Nova } from "next/font/google";

const ibarraRealNova = Ibarra_Real_Nova({
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: ReactNode;
}

interface SocialIconProps {
  href: string;
  icon: ReactNode;
}

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

interface ContactFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipCode: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zipCode: "",
        message: "",
      });
      setSuccessMessage("Thank you! Your message has been successfully sent.");
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Error writing document: ", error);
      setSuccessMessage("There was an error sending your message. Please try again.");
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <html lang="en" className={ibarraRealNova.className}>
      <body className="bg-primary">
        <header className="relative flex justify-between items-center px-6 py-6">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src="/ohome-logo.jpeg"
              alt="Logo"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
            <span className="text-3xl ml-6 ibarra-real-nova-regular  text-secondary">
              O'HOME SERVICES
            </span>
            <Image
              src="/shammy.png"
              alt="Shamrock"
              width={40}
              height={40}
              className="ml-1 mt-2"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <button onClick={toggleMenu} className="text-3xl text-secondary">
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </header>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenu}
        />
        <nav
          className={`fixed top-0 right-0 h-full bg-cinco text-secondary w-64 p-4 z-30 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button onClick={toggleMenu} className="text-2xl text-secondary mb-0">
            <AiOutlineClose />
          </button>
          <NavigationLinks
            handleContactClick={handleContactClick}
            closeMenu={closeMenu}
          />
          <div className="mt-8">
            <div className="flex justify-center space-x-4">
              <SocialIcon
                href="https://www.facebook.com/OHomeServices"
                icon={<FaFacebookF />}
              />
              <SocialIcon href="https://x.com/OHomeServices" icon={<FaTwitter />} />
              <SocialIcon
                href="https://www.instagram.com/OHomeServices/"
                icon={<FaInstagram />}
              />
              <SocialIcon
                href="https://www.tiktok.com/@OHomeServices"
                icon={<SiTiktok />}
              />
            </div>
          </div>
        </nav>

        <main className="flex-grow bg-white mt-0 min-h-screen">{children}</main>
        <ContactUsSection
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          successMessage={successMessage}
        />
        <Footer />
      </body>
    </html>
  );
}

function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-secondary">
      {icon}
    </a>
  );
}

function NavigationLinks({
  handleContactClick,
  closeMenu,
}: {
  handleContactClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  closeMenu: () => void;
}) {
  return (
    <nav className="flex flex-col mt-2 space-y-4">
      <NavLink href="/" icon={<FaHome />} label="Home" onClick={closeMenu} />
      <NavLink
        href="/about-us"
        icon={<FaInfoCircle />}
        label="About"
        onClick={closeMenu}
      />
      <NavLink
        href="/services"
        icon={<FaConciergeBell />}
        label="Services"
        onClick={closeMenu}
      />
      <NavLink
        href="/photo-gallery"
        icon={<FaPhotoVideo />}
        label="Gallery"
        onClick={closeMenu}
      />
      <a
        onClick={handleContactClick}
        className="text-lg monoton-regular flex items-center cursor-pointer"
      >
        <FaEnvelope className="mr-2" />
        Contact
      </a>
    </nav>
  );
}

function NavLink({ href, icon, label, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-lg monoton-regular flex items-center"
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Link>
  );
}

function ContactUsSection({
  formData,
  handleChange,
  handleSubmit,
  successMessage,
}: ContactFormProps & { successMessage: string }) {
  return (
    <section id="contact" className="w-full bg-primary py-16">
      <div id="contact" className="max-w-5xl p-8 mx-auto text-center">
        <h2 className="text-4xl font-bold monoton-regular text-secondary text-left mb-12">
          CONTACT US
        </h2>
        {successMessage && (
          <div className="bg-cinco text-secondary p-4 rounded mb-4">{successMessage}</div>
        )}
        <div className="flex flex-col md:flex-row md:justify-between monoton-regular items-center bg-tertiary p-8 rounded-lg shadow-lg">
          <ContactInfo />
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="md:w-1/2 mb-4 md:mb-0">
      <Image
        src="/ohome-logo.jpeg"
        alt="Logo"
        width={100}
        height={100}
        className="mx-auto mb-4 rounded-xl"
      />
      <h3 className="text-2xl monoton-regular mb-4">Get in Touch</h3>
      <p className="text-lg text-gray-700 px-8 py-2 mb-4">
        Fill out this form to request an appointment, schedule a consult, or ask general
        questions.
      </p>
      <div className="text-left">
        <p className="text-lg text-gray-700">
          <span className="font-bold monoton-regular">Phone (Call or Text):</span> (123)
          456-7890 {/* Update the phone number */}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-bold monoton-regular">Email:</span> info@ohomeservices.com{" "}
          {/* Update the email address */}
        </p>
      </div>
    </div>
  );
}

function ContactForm({ formData, handleChange, handleSubmit }: ContactFormProps) {
  return (
    <div className="md:w-1/2">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          className="col-span-2 sm:col-span-1 border border-gray-300 p-2 rounded-lg text-black"
          name="firstName"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="col-span-2 sm:col-span-1 border border-gray-300 p-2 rounded-lg text-black"
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          className="col-span-2 border border-gray-300 p-2 rounded-lg text-black"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="col-span-2 sm:col-span-1 border border-gray-300 p-2 rounded-lg text-black"
          name="phone"
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          className="col-span-2 sm:col-span-1 border border-gray-300 p-2 rounded-lg text-black"
          name="zipCode"
          type="text"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
        <textarea
          className="col-span-2 border border-gray-300 p-2 rounded-lg text-black"
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          className="col-span-2 bg-primary text-secondary p-2 rounded-md hover:bg-tertiary hover:text-secondary transition-colors"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-cinco text-secondary py-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-4 mb-4">
            <SocialIcon
              href="https://www.facebook.com/OHomeServices"
              icon={<FaFacebookF />}
            />
            <SocialIcon href="https://x.com/OHomeServices" icon={<FaTwitter />} />
            <SocialIcon
              href="https://www.instagram.com/OHomeServices/"
              icon={<FaInstagram />}
            />
            <SocialIcon
              href="https://www.tiktok.com/@OHomeServices"
              icon={<SiTiktok />}
            />
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} O'Home Services, Inc. - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
