import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { RiMoonFoggyFill } from "react-icons/ri";
import { BsSunFill } from "react-icons/bs";
import { myLogo } from "../public/images/myName.png";
import { mySelf } from "../public/images/IMG-3865-modified.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./index.module.scss";
import Typical from "react-typical";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [darkMode, setDark] = useState(false)
  const [active, setActive] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rohit Nair Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-800 px-10 md:px-20 lg:px-40 dark:bg-sky-200">
        <div>
          <section className="min-h-screen">
            <nav className="p-10 mb-12 flex justify-between">
              <h1 className="text-2xl font-semibold p-1.5 hover:bg-orange-500 transition duration-400 ease-linear rounded-md dark:text-slate-900">
                  Rohit Nair
              </h1>
              <ul className="flex items-center">
                <li>
                <BsSunFill className="text-2xl px-1"/>
                </li>
                <li>
                  <label onClick={() => setDark(!darkMode)}>
                    
                  </label>
                </li>
                <li>
                </li>
                <li>
                  <a className="font-roboto bg-orange-500 text-white px-4 py-2 rounded-md ml-5 dark:text-slate-900">
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-8">
              <h2 className="text-4xl py-2 text-orange-500 animate-fade 5s md:text-6xl dark:text-orange-500">
                <span>
                  <Typical
                    steps={[
                      "Hello, I am",
                      2000,
                      "Greetings, I am",
                      2000,
                      "Hey, I am",
                      2000,
                    ]}
                    wrapper="p"
                    loop={Infinity}
                  />
                </span>
                Rohit Nair
              </h2>
              <h3 className="text-2xl md:text-3xl dark:text-slate-900">
                COMPUTER SCIENCE STUDENT / INNOVATOR / DEVELOPER
              </h3>
              <p className="p-4 md:text-lg dark:text-slate-900">
                I'm currently enrolled at the{" "}
                <span className="text-rose-800"> University </span>{" "}
                <span className="text-amber-500"> of </span>{" "}
                <span className="text-rose-800"> Calgary </span> where I am
                studying for my BSc in Computer Science. I am very interested in
                Human-Computer interactions! I am also interested in:
              </p>
              <ul className="dark:text-slate-900">
                <li>•Working out 💪🏽</li>
                <li>•Developing personal projects 👨🏽‍💻</li>
                <li>•Volunteering 🤝</li>
                <li>•Entrepreneurship and innovation 📈</li>
                <li>•Blockchain networks ⛓</li>
              </ul>
            </div>
            <div className="cursor-pointer flex text-5xl justify-center gap-5 dark:text-slate-900">
              <div className="hover:text-orange-500">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rohit-n-345957192/">
                  <BsLinkedin className="hover:scale-125 duration-700"/>
                </a>
              </div>
              <div className="hover:text-orange-500">
                <a target="_blank" rel="noreferrer" href="https://github.com/rohitNair21">
                  <BsGithub className="hover:scale-125 duration-700"/>
                </a>
              </div>
              <div className="hover:text-orange-500">
              <a target="_blank" rel="noreferrer" href="mailto:rohit.nair@ucalgary.ca">
                  <MdEmail className="hover:scale-125 duration-700"/>
              </a>
              </div>
            </div>
            <div>
              <Image
                src={require("../public/images/IMG-3865-modified.png")}
                className="relative mx-auto w-1/2 p-10 hover:scale-125 duration-700"
              />
            </div>
          </section>
          <section>
            <h4 className="font-semibold text-2xl py-1 md:text-3xl dark:text-slate-900">
              What have I worked with!
            </h4>
            <p className="md:text-lg dark:text-slate-900">
              I enjoy learning new things about the software world everyday!
              Below are some of the current have skills and expertise I have:
            </p>
            <div className="gap-2">
              <div className="text-center shadow-white shadow-xl rounded-lg p-3 my-4 flex-grow md:text-lg dark:text-slate-900">
                <h5 className="text-orange-500 text-xl font-semibold">
                  Languages
                </h5>
                <ul>
                  <li>•Java</li>
                  <li>•Python</li>
                  <li>•C</li>
                  <li>•CSS</li>
                  <li>•HTML</li>
                  <li>•Solidity</li>
                  <li>•Bash</li>
                  <li>•ARM x86 Assembly</li>
                </ul>
              </div>
              <div className="text-center shadow-white shadow-xl rounded-lg p-3 my-4 flex-grow md:text-lg dark:text-slate-900">
                <h6 className="text-orange-500 text-xl font-semibold">
                  Frameworks and Libraries
                </h6>
                <ul>
                  <li>•Tailwind</li>
                  <li>•Chakra UI</li>
                  <li>•React</li>
                  <li>•Jupyter</li>
                  <li>•Tesseract</li>
                  <li>•Pygame</li>
                  <li>•BeautifulSoup</li>
                  <li>•Apache POI</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
