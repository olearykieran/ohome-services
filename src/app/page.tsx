"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import "./globals.css";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>O'Home Services, Inc. - Professional Construction and Renovation</title>
        <meta
          name="description"
          content="O'Home Services, Inc. provides top-notch construction, demolition, and renovation services. Contact us for professional and reliable home improvement solutions."
        />
        <meta
          name="keywords"
          content="construction, demolition, renovation, home improvement, professional services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="O'Home Services, Inc. - Professional Construction and Renovation"
        />
        <meta
          property="og:description"
          content="O'Home Services, Inc. provides top-notch construction, demolition, and renovation services. Contact us for professional and reliable home improvement solutions."
        />
        <meta property="og:url" content="https://ohomeservices.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="O'Home Services, Inc. - Professional Construction and Renovation"
        />
        <meta
          name="twitter:description"
          content="O'Home Services, Inc. provides top-notch construction, demolition, and renovation services. Contact us for professional and reliable home improvement solutions."
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16633623489"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16633623489');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col items-center justify-center bg-primary min-h-screen px-0">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/irish-flag.jpeg" // Replace with your Irish flag image path
            alt="Irish Flag"
            fill
            priority
            className="object-cover absolute inset-0 "
          />
          <div className="absolute inset-0 flex items-center justify-start fade-in-section opacity-0 transition-opacity duration-1000 p-4 sm:p-8 md:p-16 lg:p-24">
            <div className="bg-black bg-opacity-50 rounded-md p-4 sm:p-8 md:p-12 lg:p-16 text-left w-full sm:w-3/4 md:w-2/3 lg:max-w-[50%]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary monoton-regular">
                Top-notch construction and renovation services across Long Island.
              </h1>
            </div>
          </div>
        </div>

        {/* Mission Statement Section */}
        <section className="w-full bg-primary py-12 sm:py-16 md:py-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center fade-in-section opacity-0 transition-opacity duration-1000">
            <div className="w-full md:w-1/2 md:pr-8 text-left mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary monoton-regular mb-4">
                ABOUT US
              </h2>
              <p className="text-xl sm:text-xl md:text-xl lg:text-xl text-secondary italic">
                From Simple Repairs To Grand Renovations, We Do It All! <br />
              </p>
              <p className="text-base sm:text-xl text-secondary  monoton-regular mb-4 sm:mb-6">
                <br />
                At O'Home Services, we specialize in professional construction,
                demolition, and renovation services. Whether it's a small task like floor
                cleaning or birdhouse installation, or a major project like full floor
                renovations and garage installations, we do it all.
              </p>
              <p className="text-base sm:text-xl text-secondary  monoton-regular mb-6 sm:mb-8">
                From initial consultation to project completion, we ensure every step is
                handled with precision and care, transforming your vision into reality.
              </p>
              <Link href="/about-us" passHref>
                <div className="inline-block text-base sm:text-lg bg-quart text-secondary  py-2 px-6 rounded monoton-regular hover:bg-tertiary hover:text-quart transition-colors cursor-pointer">
                  READ MORE
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="max-w-lg mx-auto">
                <Image
                  src="/house-frame.jpeg" // Replace with your image path
                  alt="About Us Image"
                  width={500}
                  height={500}
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full bg-cinco py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold monoton-regular text-secondary mb-12 text-left">
              OUR SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/ohome-house-2.jpg" // Replace with your image path
                  alt="Renovation Service"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-2xl text-secondary font-semibold mt-4">Renovation</p>
                <p className="text-lg m-2 text-center text-secondary">
                  Transformative renovation services to enhance your living space.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/ohome-house-1.jpg" // Replace with your image path
                  alt="Remodeling Service"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-2xl text-secondary font-semibold mt-4">Remodeling</p>
                <p className="text-lg m-2 text-center text-secondary">
                  Comprehensive remodeling services for a fresh, new look.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/ohome-house-3.jpg" // Replace with your image path
                  alt="Repair Service"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-2xl text-secondary font-semibold mt-4">Repairs</p>
                <p className="text-lg m-2 text-center text-secondary">
                  Expert repair services to restore and maintain your property.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/services" passHref>
                <div className="text-lg rounded-md bg-quart text-secondary py-2 px-6 monoton-regular hover:bg-tertiary hover:text-quart transition-colors cursor-pointer">
                  VIEW ALL SERVICES
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
