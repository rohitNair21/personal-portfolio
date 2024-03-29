import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import emailjs from "@emailjs/browser";

import Typical from "react-typical";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Resume from "./Resume";
import { TypeAnimation } from "react-type-animation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdEmail } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiCplusplus, SiFirebase } from "react-icons/si";
import { FaSwift, FaReact, FaJava, FaPython, FaFigma } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io";
import { DiPostgresql, DiJavascript1 } from "react-icons/di";

export default function Home() {
  const form = useRef();
  const aboutSection = useRef(null);
  const projectSection = useRef(null);

  const scrollToAboutMe = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    window.scrollTo({
      top: projectSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollToTestemonials = () => {
    window.scrollTo({
      top: form.current.offsetTop,
      behavior: "smooth",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4riwnal",
        "template_ph52jti",
        form.current,
        "XHofuwgiEHJHAG8QT"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    lazyLoad: true,
    cssEase: "linear",
  };

  const [loading, setLoading] = useState(true);
  const [darkMode, setDark] = useState(false);
  const options = {
    threshold: 0.25,
  };

  const options1 = {
    threshold: 1,
  };

  const [refMinus1, inViewMinus1] = useInView(options);
  const [ref, inView] = useInView(options);
  const [ref2, inView2] = useInView(options);
  const [ref3, inView3] = useInView(options);
  const [ref4, inView4] = useInView(options);
  const [ref5, inView5] = useInView(options);
  const [ref6, inView6] = useInView(options);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rohit Nair Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header class="bg-[#2d3c51] fixed top-0 left-0 right-0 z-50 dark:bg-[#83d2fb]">
        <nav class="flex justify-between items-center w-[72%] h-20 mx-auto">
          <div>
            <h1 className="text-2xl font-semibold rounded-md dark:text-slate-900">
              <div className=" hover:bg-orange-500 transition duration-400 ease-linear rounded-md bg-light z-50">
                Rohit Nair
              </div>
            </h1>
          </div>
          <div class="nav-links md:cursor-pointer cursor-default md:static md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto flex items-center px-5 md:opacity-100 opacity-0">
            <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a
                  class="hover:text-gray-500 font-bold dark:text-slate-900"
                  onClick={scrollToAboutMe}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  class="hover:text-gray-500 font-bold dark:text-slate-900"
                  onClick={scrollToProjects}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  class="hover:text-gray-500 font-bold dark:text-slate-900"
                  onClick={scrollToTestemonials}
                >
                  Contact Me
                </a>{" "}
              </li>
            </ul>
          </div>
          <div class="flex items-center gap-2">
            <label onClick={() => setDark(!darkMode)} className="bg-light z-50">
              <BsSunFill className=" text-2xl px-1 cursor-pointer dark:text-slate-900 rounded-md" />
            </label>

            <Resume />
          </div>
        </nav>
      </header>

      <main
        className={`bg-gray-800 px-4 md:px-6 lg:px-20 flex flex-col justify-center dark:bg-sky-200 min-h-screen mt-16`}
      >
        <section>
          <div className={styles.mainContainer}>
            <div className="text-center p-8">
              <div
                ref={ref6}
                className={`${inView6 ? styles.onScreen : styles.offScreen}`}
              >
                <h2
                  className="text-3xl py-2 text-orange-500 animate-fade 5s md:text-6xl dark:text-slate-900 z-3"
                  ref={aboutSection}
                >
                  <span>
                    <TypeAnimation
                      sequence={[
                        "Hello, I am",
                        2500,
                        "Greetings, I go by",
                        2500,
                        "Hey, it's",
                        2500,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: "1em", display: "inline-block" }}
                      repeat={Infinity}
                    />
                  </span>
                </h2>
                <h3 className="text-3xl mb-4 text-orange-500 animate-fade 5s md:text-6xl dark:text-slate-900 z-3">
                  Rohit Nair 👋🏽
                </h3>
                <div className="w-full flex justify-center items-start z-3">
                  <div className="w-9/12">
                    <Slider
                      {...settings}
                      className="min-w-full z-3 overflow-hidden"
                    >
                      <div>
                        <h3>
                          <Image
                            src={require("../public/images/IMG-3865-modified.png")}
                            className="hover:scale-125 duration-700"
                          />
                        </h3>
                      </div>
                      <div>
                        <h3>
                          <Image
                            src={require("../public/images/unnamed-modified.png")}
                            className="hover:scale-125 duration-700"
                          />
                        </h3>
                      </div>
                      <div>
                        <h3>
                          <Image
                            src={require("../public/images/20210623_185054 (1)-modified.png")}
                            className="hover:scale-125 duration-700"
                          />
                        </h3>
                      </div>
                      <div>
                        <h3>
                          <Image
                            src={require("../public/images/unnamed1-modified.png")}
                            className="hover:scale-125 duration-700"
                          />
                        </h3>
                      </div>
                      <div>
                        <h3>
                          <Image
                            src={require("../public/images/rohit sut-modified.png")}
                            className="hover:scale-125 duration-700"
                          />
                        </h3>
                      </div>
                      <div>
                        <h3>
                          <Image
                            src={require("../public/images/149-891-7382_77xq_89 (1)-modified.png")}
                            className="hover:scale-125 duration-700"
                          />
                        </h3>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl md:text-center dark:text-slate-900">
                COMPUTER SCIENCE STUDENT / INNOVATOR / DEVELOPER
              </h3>
              <div
                className={`${inView5 ? styles.onScreen : styles.offScreen}`}
              >
                <div ref={ref5} className="md:grid md:grid-cols-2">
                  <div>
                    <p className="p-2 md:text-lg dark:text-slate-900 text-center md:text-left">
                      I&apos;m currently enrolled at the{" "}
                      <span className="text-rose-800"> University </span>{" "}
                      <span className="text-amber-500"> of </span>{" "}
                      <span className="text-rose-800"> Calgary </span> where I
                      am studying for my BSc in Computer Science. I am very
                      interested in Human-Computer interactions! I am also
                      exploring:
                    </p>
                    <div className="flex flex-row justify-center md:justify-start md:items-start mt-3">
                      <ul className="p-2 dark:text-slate-900 text-center md:w-1/2 md:text-left">
                        <li>• Working out 💪🏽</li>
                        <li>• Developing personal projects 👨🏽‍💻</li>
                        <li>• Volunteering 🤝</li>
                        <li>• Entrepreneurship and innovation 📈</li>
                        <li>• Blockchain networks ⛓</li>
                      </ul>
                    </div>
                    <div className="px-2 cursor-pointer flex text-6xl justify-center gap-10 mt-10 md:justify-start dark:text-slate-900">
                      <div className="hover:text-orange-500">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/rohit-n-345957192/"
                        >
                          <BsLinkedin className="hover:scale-125 duration-700" />
                        </a>
                      </div>
                      <div className="hover:text-orange-500">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/rohitNair21"
                        >
                          <BsGithub className="hover:scale-125 duration-700" />
                        </a>
                      </div>
                      <div className="hover:text-orange-500">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="mailto:rohit.nair@ucalgary.ca"
                        >
                          <MdEmail className="hover:scale-125 duration-700" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center">
                    <div className="mt-12 md:mt-3">
                      <div className="italic md:text-lg dark:text-slate-900 underline">
                        Languages and Frameworks
                      </div>
                      <div className="grid md:gap-x-32 gap-x-16 md:gap-y-6 gap-y-6 grid-cols-3">
                        <div>
                          <FaJava className="text-8xl p-1.5 text-red-500 hover:bg-orange-500 transition duration-400 ease-linear rounded-md dark:text-slate-900" />
                        </div>
                        <div>
                          <FaPython className="text-8xl p-1.5 text-yellow-500 hover:bg-orange-500 transition duration-400 ease-linear rounded-md dark:text-slate-900" />
                        </div>
                        <div>
                          <FaReact className="text-8xl p-1.5 text-blue-400 hover:bg-orange-500 transition duration-400 ease-linear rounded-md dark:text-slate-900" />
                        </div>
                        <div>
                          <FaSwift className="text-8xl p-1.5 text-orange-700 hover:bg-orange-500 transition duration-400 ease-linear rounded-md dark:text-slate-900" />
                        </div>
                        <div>
                          <SiCplusplus className="text-8xl p-1.5 text-blue-500 hover:bg-orange-500 transition duration-400 ease-linear rounded-md dark:text-slate-900" />
                        </div>
                        <div>
                          <DiJavascript1 className="text-8xl p-1.5 text-yellow-300 hover:bg-orange-500 transition duration-400 ease-linear rounded-md dark:text-slate-900" />
                        </div>
                        <div>
                          <DiPostgresql className="text-8xl p-1.5 text-blue-700 hover:bg-orange-500 transition duration-400 ease-linear rounded-md dark:text-slate-900" />
                        </div>
                        <div>
                          <SiFirebase className="text-8xl p-1.5 text-orange-300 hover:bg-orange-500 transition duration-400 ease-linear rounded-md dark:text-slate-900" />
                        </div>
                        <div>
                          <FaFigma className="text-8xl 0 p-1.5 text-pink-500 hover:bg-orange-500 transition duration-400 ease-linear rounded-md dark:text-slate-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mainContainer}>
          <div className={`${inView4 ? styles.onScreen : styles.offScreen}`}>
            <h4
              ref={ref4}
              className="font-semibold text-2xl md:text-3xl dark:text-slate-900 md:mt-16 mt-12 text-orange-500 underline text-center"
            >
              Portfolio
            </h4>
            <p
              className="text-lg dark:text-slate-900 text-center"
              ref={projectSection}
            >
              Check out some of the personal projects I have been working on!
            </p>
          </div>
          <div className={`${inView3 ? styles.onScreen : styles.offScreen}`}>
            <div
              ref={ref3}
              className="grid md:grid-cols-2 gap-4 mt-5 place-items-center shadow-md shadow-black md:shadow-none"
            >
              <div className="text-center dark:text-slate-900 rounded-lg p-6 shadow-md shadow-black flex flex-col items-center">
                <h5 className="text-white dark:text-slate-900 text-2xl font-semibold mb-4">
                  SafeSpace 🔒
                </h5>
                <p>
                  An outreach application prototype designed using{" "}
                  <span className="font-bold">
                    {" "}
                    Flutter with a Firebase and the Google API{" "}
                  </span>
                  that provides domestic violence victims a 1-on-1 live chat
                  with multi-language support.
                </p>
                <div className="text-2xl mt-5 hover:text-orange-500">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/rohitNair21/outreachAppFInal"
                  >
                    <BsGithub className="hover:scale-125 duration-700" />
                  </a>
                </div>
              </div>
              <div className="text-center dark:text-slate-900 rounded-lg p-6 shadow-md shadow-black">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h6 className="font-bold italic underline">
                      iPhone 14 (French)
                    </h6>
                    <Image
                      src={require("../public/images/SimSS1.png")}
                      className="rounded-lg hover:scale-125 duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h7 className="font-bold italic underline">
                      iPhone SE (English){" "}
                    </h7>
                    <Image
                      src={require("../public/images/SimSS2.png")}
                      className="rounded-lg hover:scale-125 duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-1">
            <div className={`${inView2 ? styles.onScreen : styles.offScreen}`}>
              <div
                ref={ref2}
                className="grid md:grid-cols-2 gap-4 mt-5 place-items-center shadow-md shadow-black md:shadow-none"
              >
                <div className="text-center dark:text-white rounded-lg p-6 shadow-md shadow-black order-last md:order-first">
                  <Image
                    src={require("../public/images/uTrack.gif")}
                    className="rounded-lg hover:scale-125 duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="text-center dark:text-slate-900 rounded-lg p-6 shadow-md shadow-black flex flex-col items-center order-first md:order-last">
                  <h5 className="text-white dark:text-slate-900 text-2xl font-semibold mb-4">
                    uTrack 🏃🏻🏃🏼🏃🏽🏃🏾🏃🏿
                  </h5>
                  <p>
                    A live gym tracker constructed using
                    <span className="font-bold">
                      {" "}
                      Django, React, and PostgreSQL{" "}
                    </span>
                    that uses a unique system to help student athletes and other
                    interested individuals verify their usage of University of
                    Calgary athletic services.
                  </p>
                  <div className="text-2xl mt-5 hover:text-orange-500">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Abhay-Chopra/uTrack"
                    >
                      <BsGithub className="hover:scale-125 duration-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-1">
            <div className={`${inView ? styles.onScreen : styles.offScreen}`}>
              <div
                ref={ref}
                className="grid md:grid-cols-2 gap-4 mt-5 place-items-center shadow-md shadow-black md:shadow-none"
              >
                <div className="text-center dark:text-slate-900 rounded-lg p-6 shadow-md shadow-black flex flex-col items-center">
                  <h5 className="text-white dark:text-slate-900 text-2xl font-semibold mb-4">
                    CampusFire (
                    <span className="italic">
                      contributing developer, in progress
                    </span>
                    ) 🔥
                  </h5>
                  <p>
                    A unique social media platform designed in
                    <span className="font-bold"> Swift and hosted on AWS </span>
                    that allows for University of Calgary students to connect
                    with peers.
                  </p>
                  <div className="text-2xl mt-5 hover:text-orange-500">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/rohitNair21/outreachAppFInal"
                    >
                      <BsGithub className="hover:scale-125 duration-700" />
                    </a>
                  </div>
                </div>
                <div
                  className={`text-center dark:text-slate-900 rounded-lg p-6 shadow-md shadow-black`}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <h6 className="font-bold italic underline ">
                        iPhone XR (browsing profiles)
                      </h6>
                      <Image
                        src={require("../public/images/IMG_6043(a).png")}
                        className="rounded-lg hover:scale-125 duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h7 className="font-bold italic underline">
                        iPhone XR (my profile){" "}
                      </h7>
                      <Image
                        src={require("../public/images/IMG_6045(a).png")}
                        className="rounded-lg hover:scale-125 duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${inViewMinus1 ? styles.onScreen : styles.offScreen}`}
          ref={refMinus1}
        >
          <h4 className="font-semibold text-2xl md:text-3xl dark:text-slate-900 md:mt-16 mt-12 text-orange-500 underline text-center">
            Contact Me
          </h4>
          <p className="text-lg dark:text-slate-900 text-center">
            If you have any questions or want to speak further, write me an
            email and I will get back to you!
          </p>
          <div className="w-full flex justify-center items-center mt-5">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="max-w-md w-full dark:text-slate-900 rounded-lg p-6 shadow-md shadow-black"
            >
              <div className="mb-4">
                <label
                  className="block dark:text-slate-900 text-orange-500 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block dark:text-slate-900 text-orange-500 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block dark:text-slate-900 text-orange-500 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <input
                  className="bg-orange-400 hover:bg-orange-500 duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </section>
        <footer className="flex justify-center items-center mt-10">
          <p className="text-gray-400 text-sm dark:text-white">
            Designed by Rohit Nair © 2023
          </p>
        </footer>
      </main>
    </div>
  );
}
