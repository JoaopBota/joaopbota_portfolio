import Head from "next/head";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import profile_picture from "../public/IMG_6620.jpg";
import snowfall from "../public/snowfall.jpg";
import predicter from "../public/predicter.jpg";
import pointsofinterest from "../public/pointsofinterest.jpg";
import animalrescue from "../public/animalrescue.jpg";
import ChatBotAI from "../public/ChatbotAI.jpg";
import MobileAPP from "../public/MobileAPP.jpg";
import StormAdviceCenter from "../public/StormAdviceCenter.jpg";
import Immersive from "../public/Immersive.jpg";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiPwa } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>João Bota Portfolio</title>
        <meta name="description" content="Joao Bota Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-zinc-800 px- sm:px-40">
        <section className=" bg-zinc-800  font-Varela">
          <nav className="py-8 mb-12 flex justify-between">
            <h1 className=" text-xl font-Varela text-white px-6 sm:px-0">
              Portfolio
            </h1>
            <ul className="flex items-center">
              <div className="text-3xl flex justify-center gap-2 text-white">
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/joaobota/"
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    className="text-3xl flex justify-center gap-2 text-white"
                    target="_blank"
                    href="https://github.com/JoaopBota"
                  >
                    <AiFillGithub />
                  </a>
                </li>
              </div>
              <li>
                <a
                  target="_blank"
                  className=" bg-gradient-to-r from-orange-500 to-pink-600 text-white mr-4 sm:mr-0 px-4 py-1  rounded-xl ml-6"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <section>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
            >
              <div className="p-8">
                <h1 className="font-Varela text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600 text-5xl sm:text-6xl md:text-6xl lg:text-8xl">
                  Welcome To<br></br> My Personal Portfolio{" "}
                </h1>
                <p></p>
              </div>
              <div className="p-8">
                <div className="flex-1">
                  <div className="lg:mx-auto w-2/4 xl:w-96">
                    <Image
                      className="rounded-full shadow-sm"
                      src={profile_picture}
                    />
                  </div>
                  <h2 className="lg:mx-auto text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 lg:text-8xl xl:text-center">
                    João Bota
                  </h2>
                  <h3 className="mx-auto text-4xl py-2 font-Varela text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600 xl:text-center 2xl:w-1/4">
                    Developer
                  </h3>
                </div>
                <p className="text-md py-3 leading-8 font-Varela text-zinc-400 xl:w-2/4 lg:text-center lg:mx-auto text-left">
                  Software Engineer capable of developing efficient scalable
                  full-stack web-based applications, along with critical and
                  problem-solving skills for design and construction of software
                  and work collaboratively on software development.
                </p>
              </div>
            </motion.div>
            <div className="text-zinc-400 p-10">
              <h3 className="2xl:w-1/4 text-5xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-600 py-4 ">
                Projects
              </h3>
              <p className="sm:text-xl p-6">
                Since the beggining of my journey as a{" "}
                <span className="  text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                  Software Engineer
                </span>
                , I've done many projects both for business and consumer use.
              </p>
            </div>
          </section>
        </section>

        <section>
          <div className="sm:grid md:grid-cols-2 2xl:grid-cols-4 2xl:gap-4 m-8 sm:m-0 sm:mt-10">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.35 }}
            >
              <div className="shadow-lg shadow-black rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition pb-10 mb-10 sm:mb-0 ">
                <Image src={snowfall} className="object-cover" />
                <h3 className="text-white text-3xl py-4 text-center">
                  SnowCore
                </h3>
                <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                  Progressive Web Application (PWA) which allows users to see
                  the location, forecast for snowfall in five days, the current
                  weather, snow size, and the website that gathers the snowfall
                  data of each ski resort
                </p>
                <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 text-xl py-4 text-center mx-8">
                  <h4>JavaScript React API Auth</h4>
                </div>
                <div className="text-right mt-5 mr-10">
                  <a
                    target="_blank"
                    className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                    href="https://github.com/JoaopBota/SnowFallData/tree/main/snowfallresort"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.35 }}
            >
              <div className="shadow-lg shadow-black rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition pb-10 mb-10 sm:mb-0">
                <Image src={pointsofinterest} className="object-cover" />
                <h3 className="text-white text-3xl py-4 text-center">
                  Points of Interest
                </h3>
                <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                  Allows the user to view nearby points of interest (POIs). The
                  user can create POIs, view them on a map, and store them in
                  the onboard SQLite database as well as download them from a
                  web API and save them to the web
                </p>
                <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 text-xl py-4 text-center mx-8">
                  <h4>JavaScript MYSQL Express Node</h4>
                </div>
                <div className="text-right mt-5 mr-10">
                  <a
                    target="_blank"
                    className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                    href="https://github.com/JoaopBota/PoisWeb"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.35 }}
            >
              <div className="shadow-lg shadow-black rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition pb-10 mb-10 sm:mb-0 ">
                <Image src={predicter} className="object-cover" />
                <h3 className="text-white text-3xl py-4 text-center">
                  Solfintech
                </h3>
                <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                  With the help of AI (Facebook Prophet), it allows us to
                  predict stock prices on a daily, weekly, monthly, and yearly
                  basis. Display graphical performance, trends graphs, and
                  charts, assisting user forecast investments
                </p>
                <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 text-xl py-4 text-center mx-8">
                  <h4 className=" whitespace-normal">
                    Python Anaconda Prophet Streamlit
                  </h4>
                </div>
                <div className="text-right mt-5 mr-10">
                  <a
                    target="_blank"
                    className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                    href="https://github.com/JoaopBota/StockPredicter"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.35 }}
            >
              <div className="shadow-lg shadow-black rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition pb-10 mb-10 sm:mb-0">
                <Image src={animalrescue} className="object-cover" />
                <h3 className="text-white text-3xl py-4 text-center">
                  Animal Rescue
                </h3>
                <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                  Proof-of-concept data-driven full-stack web application that
                  helps find lost dogs or adopt one. Animal Rescue enables a
                  user to add a post with some information such as Dog’s name,
                  breed, location, and phone number
                </p>
                <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 text-xl py-4 text-center mx-8">
                  <h4>JavaScript MongoDB Express React</h4>
                </div>
                <div className="text-right mt-5 mr-10">
                  <a
                    target="_blank"
                    className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                    href="https://github.com/JoaopBota/ChatBot_w-AI"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section>
          <div className="sm:grid md:grid-cols-2 2xl:grid-cols-4 2xl:gap-4 m-8 sm:m-0 sm:mt-10">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.35 }}
            >
              <div className="shadow-lg shadow-black rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition pb-10 mb-10 sm:mb-0 ">
                <Image src={ChatBotAI} className="object-cover" />
                <h3 className="text-white text-3xl py-4 text-center">
                  ChatBotAI
                </h3>
                <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                  The project is capable of communicating similarly to a human,
                  It answers many questions related to a restaurant
                  establishment. The main use is in customer interaction in a
                  business.
                </p>
                <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 text-xl py-4 text-center mx-8">
                  <h4>Python Numpy NLTK Tkinter</h4>
                </div>
                <div className="text-right mt-5 mr-10">
                  <a
                    target="_blank"
                    className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                    href="https://github.com/JoaopBota/ChatBot_w-AI"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.35 }}
            >
              <div className="shadow-lg shadow-black rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition pb-10 mb-10 sm:mb-0 ">
                <Image src={MobileAPP} className="object-cover" />
                <h3 className="text-white text-3xl py-4 text-center">
                  Mobile Application POIS
                </h3>
                <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                  Android Mobile Application that allows users to view from
                  different data sources, create and store in a ROOM database
                  nearby points of interest, close to the user GPS location, in
                  OpenStreetMap
                </p>
                <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 text-xl py-4 text-center mx-8">
                  <h4 className=" whitespace-normal">Kotlin OSMDROID SQlite</h4>
                </div>
                <div className="text-right mt-5 mr-10">
                  <a
                    target="_blank"
                    className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                    href="https://github.com/JoaopBota/MobileApp"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.35 }}
            >
              <div className="shadow-lg shadow-black rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition pb-10 mb-10 sm:mb-0">
                <Image src={StormAdviceCenter} className="object-cover" />
                <h3 className="text-white text-3xl py-4 text-center">
                  Storm Advice Center
                </h3>
                <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                  Storm Advice Centre keeps track of current storms. It logs a
                  storm's name, the wind speed, and the temperature. This is a
                  prototype/test system, it also covers tornados, hurricanes,
                  and blizzards
                </p>
                <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 text-xl py-4 text-center mx-8">
                  <h4>Java</h4>
                </div>
                <div className="text-right mt-5 mr-10">
                  <a
                    target="_blank"
                    className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                    href="https://github.com/JoaopBota/StormAdviceCenter"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.35 }}
            >
              <div className="shadow-lg shadow-black rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition pb-10 mb-10 sm:mb-0">
                <Image src={Immersive} className="object-cover" />
                <h3 className="text-white text-3xl py-4 text-center">
                  Immersive WebAPP
                </h3>
                <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                  Augmented or Virtual Reality points of interest application,
                  more specifically a mobile AR web app that shows points of
                  interest close to the user, such as bars, cafes, and
                  restaurants.
                </p>
                <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 text-xl py-4 text-center mx-8">
                  <h4>JavaScript Aframe.js Ar.js Aframe </h4>
                </div>
                <div className="text-right mt-5 mr-10">
                  <a
                    target="_blank"
                    className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                    href="https://github.com/JoaopBota/Immersive"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section>
          <div className="p-10">
            <div className="text-zinc-400 ">
              <h3 className="2xl:w-1/4 text-5xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-600 py-4 ">
                Skills
              </h3>
              <p className="sm:text-xl p-6">
                I've worked with a range of technologies in the web app
                development. From{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                  Front-End
                </span>{" "}
                to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                  Back-End
                </span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="sm:bg-origins bg-cover pb-10">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.35 }}
            >
              <div className="sm:flex">
                <div className="sm:my-16 p-8 text-right">
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 text-6xl">
                    Front-End
                  </h4>
                </div>
                <div className="grid grid-cols-3 gap-8 text-white text-2xl p-8 justify-items-center ml-4 mr-4 max-w-3xl shadow-2xl shadow-black rounded-xl ">
                  <div>
                    <SiJavascript className="text-6xl text-yellow-400 mb-2 2xl:text-8xl" />
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <SiReact className="text-6xl text-teal-300 mb-2 2xl:text-8xl" />
                    <p className="text-center">React</p>
                  </div>
                  <div>
                    <SiHtml5 className="text-6xl text-orange-600 mb-2 2xl:text-8xl" />
                    <p p className="text-center">
                      HTML
                    </p>
                  </div>
                  <div>
                    <SiNextdotjs className="text-6xl text-white mb-2 mr-10 2xl:text-8xl" />
                    <p className="2xl:ml-3">Next.js</p>
                  </div>
                  <div>
                    <SiThreedotjs className="text-6xl text-white mb-2 2xl:text-8xl" />
                    <p className="text-center">Three.js</p>
                  </div>
                  <div>
                    <SiNpm className="text-6xl text-red-600 mb-2 2xl:text-8xl" />
                    <p className="text-center">NPM</p>
                  </div>
                  <div>
                    <SiPwa className="text-6xl text-white mb-2 mr-10 2xl:text-8xl" />
                    <p className="2xl:ml-4">PWA</p>
                  </div>
                  <div>
                    <SiTailwindcss className="text-6xl text-cyan-500 mb-2 2xl:text-8xl" />{" "}
                    <p>Tailwind</p>
                  </div>
                  <div>
                    <SiCss3 className="text-6xl text-sky-700 mb-2 2xl:text-8xl" />
                    <p className="text-center">CSS</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.35 }}
            >
              <div className="sm:flex justify-end mt-14">
                <div className="sm:my-16 p-8 text-right">
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 text-6xl">
                    Back-End
                  </h4>
                </div>
                <div className="grid grid-cols-3 gap-8 text-white text-2xl p-8 justify-items-center ml-4 mr-4 max-w-3xl shadow-2xl shadow-black rounded-xl">
                  <div>
                    <SiPython className="text-6xl text-slate-400 mb-2 2xl:text-8xl" />
                    <p className="text-center">Python</p>{" "}
                  </div>
                  <div>
                    <SiJava className="text-6xl mb-2 2xl:text-8xl" />
                    <p className="text-center">Java</p>
                  </div>
                  <div>
                    <SiExpress className="text-6xl text-gray-400 mb-2 2xl:text-8xl" />
                    <p className="text-center">Express.js</p>
                  </div>
                  <div>
                    <SiMongodb className="text-6xl text-green-600 mb-2 mr-10 2xl:text-8xl" />
                    <p>Mongodb</p>
                  </div>
                  <div>
                    <GrMysql className="text-6xl text-sky-800 mb-2 2xl:text-8xl" />
                    <p className="text-center">Mysql</p>
                  </div>
                  <div>
                    <SiSpringboot className="text-6xl text-green-600 mb-2 2xl:text-8xl" />
                    <p className="text-center">Spring Boot</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer>
        <div className="text-3xl flex justify-center gap-2 text-white bg-zinc-900 pt-5 pb-2">
          <a target="_blank" href="https://www.linkedin.com/in/joaobota/">
            <AiFillLinkedin />
          </a>
          <a target="_blank" href="https://github.com/JoaopBota">
            <AiFillGithub />
          </a>
        </div>
        <div className="text-center text-zinc-500 font-Varela font-bold text-xl bg-zinc-900">
          <h1>João Bota ©2022</h1>
        </div>
      </footer>
    </div>
  );
}
