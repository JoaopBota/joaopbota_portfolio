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

export default function Home() {
  return (
    <div>
      <Head>
        <title>João Bota Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-zinc-800 px- sm:px-40">
        <section className=" bg-zinc-800 sm:min-h-screen font-Varela">
          <nav className="py-8 mb-12 flex justify-between">
            <h1 className=" text-xl font-Varela text-white px-6 sm:px-0">
              Portfolio
            </h1>
            <ul className="flex items-center">
              <div className="text-3xl flex justify-center gap-2 text-white">
                <li>
                  <AiFillLinkedin />
                </li>
                <li>
                  <AiFillGithub />
                </li>
              </div>
              <li>
                <a
                  className=" bg-gradient-to-r from-orange-500 to-pink-600 text-white mr-4 sm:mr-0 px-4 py-1  rounded-xl ml-6"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <section>
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
            <div className="text-zinc-400 p-10">
              <h3 className="2xl:w-1/4 text-5xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-600 py-4 ">
                Projects
              </h3>
              <p className="sm:text-xl">
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
          <div className="lg:justify-center md:flex p-8 gap-10">
            <div className="shadow-lg shadow-black rounded-xl text-center w-auto 2xl:w-96 overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition mb-20">
              <Image src={snowfall} />
              <h3 className="text-white text-3xl py-4">SnowCore</h3>
              <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                Software Engineer capable of developing efficient scalable
                full-stack web-based applications, along with critical and
                problem-solving
              </p>
              <ul className="text-xl flex justify-center gap-5 py-3 text-white">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <div className="py-5">
                <a
                  className=" bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                  href="#"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="shadow-lg shadow-black rounded-xl text-center w-auto 2xl:w-96 overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition mb-20">
              <Image src={predicter} />
              <h3 className="text-white text-3xl py-4">Solfintech</h3>
              <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                Software Engineer capable of developing efficient scalable
                full-stack web-based applications, along with critical and
                problem-solving
              </p>
              <ul className="text-xl flex justify-center gap-5 py-3 text-white">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <div className="py-5">
                <a
                  className=" bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                  href="#"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="shadow-lg shadow-black rounded-xl text-center w-auto 2xl:w-96 overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition mb-20">
              <Image src={pointsofinterest} />
              <h3 className="text-white text-3xl py-4">Points of Interest</h3>
              <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                Software Engineer capable of developing efficient scalable
                full-stack web-based applications, along with critical and
                problem-solving
              </p>
              <ul className="text-xl flex justify-center gap-5 py-3 text-white">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <div className="py-5">
                <a
                  className=" bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                  href="#"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="shadow-lg shadow-black rounded-xl text-center w-auto 2xl:w-96 overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition mb-20">
              <Image src={animalrescue} />
              <h3 className="text-white text-3xl py-4">Animal Rescue</h3>
              <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                Software Engineer capable of developing efficient scalable
                full-stack web-based applications, along with critical and
                problem-solving
              </p>
              <ul className="text-xl flex justify-center gap-5 py-3 text-white">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <div className="py-5">
                <a
                  className=" bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                  href="#"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="lg:justify-center md:flex p-8 gap-10">
            <div className="shadow-lg shadow-black rounded-xl text-center w-auto 2xl:w-96 overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition mb-20">
              <Image src={ChatBotAI} />
              <h3 className="text-white text-3xl py-4">ChatBotAI</h3>
              <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                Software Engineer capable of developing efficient scalable
                full-stack web-based applications, along with critical and
                problem-solving
              </p>
              <ul className="text-xl flex justify-center gap-5 py-3 text-white">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <div className="py-5">
                <a
                  className=" bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                  href="#"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="shadow-lg shadow-black rounded-xl text-center w-auto 2xl:w-96 overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition mb-20">
              <Image src={MobileAPP} />
              <h3 className="text-white text-3xl py-4">
                Mobile Application POIS
              </h3>
              <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                Software Engineer capable of developing efficient scalable
                full-stack web-based applications, along with critical and
                problem-solving
              </p>
              <ul className="text-xl flex justify-center gap-5 py-3 text-white">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <div className="py-5">
                <a
                  className=" bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                  href="#"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="shadow-lg shadow-black rounded-xl text-center w-auto 2xl:w-96 overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition mb-20">
              <Image src={StormAdviceCenter} />
              <h3 className="text-white text-3xl py-4">Storm Advice Center</h3>
              <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                Software Engineer capable of developing efficient scalable
                full-stack web-based applications, along with critical and
                problem-solving
              </p>
              <ul className="text-xl flex justify-center gap-5 py-3 text-white">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <div className="py-5">
                <a
                  className=" bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                  href="#"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="shadow-lg shadow-black rounded-xl text-center w-auto 2xl:w-96 overflow-hidden hover:shadow-xl hover:scale-105 duration-500 transform transition mb-20">
              <Image src={Immersive} />
              <h3 className="text-white text-3xl py-4">Immersive WebAPP</h3>
              <p className="text-md mx-8 py-3 leading-8 font-Varela text-zinc-400 text-justify">
                Software Engineer capable of developing efficient scalable
                full-stack web-based applications, along with critical and
                problem-solving
              </p>
              <ul className="text-xl flex justify-center gap-5 py-3 text-white">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
              <div className="py-5">
                <a
                  className=" bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1  rounded-xl ml-6 text-xl"
                  href="#"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="p-10">
            <div className="text-zinc-400 ">
              <h3 className="2xl:w-1/4 text-5xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-600 py-4 ">
                Skills
              </h3>
              <p className="sm:text-xl">
                Since the beggining of my journey as a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                  Software Engineer
                </span>
                , I've done many projects both for business and consumer use.
              </p>
              </div>
            </div>
            </section>

            <section >
              <div className="bg-origins bg-cover">
            <div className="sm:flex">
              <div className="sm:my-16 p-8 text-right">
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 text-6xl">Front End</h4>
              </div>


            <div className="grid grid-cols-3 gap-8 text-white text-2xl p-8 justify-items-center ml-4 mr-4 max-w-3xl shadow-2xl shadow-black rounded-xl ">
                <div><SiJavascript className="text-6xl text-yellow-400 mb-2 2xl:text-8xl"/><p>JavaScript</p></div>
                <div><SiReact className="text-6xl text-teal-300 mb-2 2xl:text-8xl"/><p className="text-center">React</p></div>
                <div><SiHtml5 className="text-6xl text-orange-600 mb-2 2xl:text-8xl"/><p>HTML</p></div>
                <div><SiNextdotjs className="text-6xl text-white mb-2 mr-10 2xl:text-8xl"/><p>Next.js</p></div>
                <div><SiThreedotjs className="text-6xl text-white mb-2 2xl:text-8xl"/><p className="text-center">Three.js</p></div>
                <div><SiNpm className="text-6xl text-red-600 mb-2 2xl:text-8xl"/><p className="text-center">NPM</p></div>
                <div><SiPwa className="text-6xl text-white mb-2 mr-10 2xl:text-8xl"/><p className="2xl:ml-4">PWA</p></div>
                <div><SiTailwindcss className="text-6xl text-cyan-500 mb-2 2xl:text-8xl"/> <p>Tailwind</p></div>
                <div><SiCss3 className="text-6xl text-sky-700 mb-2 2xl:text-8xl"/><p className="text-center">CSS</p></div>   
            </div>
            </div>
            <div className="sm:flex justify-end mt-14">
              <div className="sm:my-16 p-8 text-right">
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 text-6xl">Backend</h4>
              </div>


            <div className="grid grid-cols-3 gap-8 text-white text-2xl p-8 justify-items-center ml-4 mr-4 max-w-3xl shadow-2xl shadow-black rounded-xl">
            <div><SiJavascript className="text-6xl text-yellow-400 mb-2 2xl:text-8xl"/><p>JavaScript</p> </div>
            <div><SiReact className="text-6xl text-teal-300 mb-2 2xl:text-8xl"/><p>React</p></div>
            <div><SiHtml5 className="text-6xl text-orange-600 mb-2 2xl:text-8xl"/><p className="text-center">HTML</p></div>
            <div><SiNextdotjs className="text-6xl text-white mb-2 mr-10 2xl:text-8xl"/><p>Next.js</p></div>
            <div><SiThreedotjs className="text-6xl text-white mb-2 2xl:text-8xl"/><p className="text-center">Three.js</p></div>
            <div><SiNpm className="text-6xl text-red-600 mb-2 2xl:text-8xl"/><p className="text-center">NPM</p></div>
            </div>
            </div>
            </div>
   
            </section>
             
      </main>
    </div>
  );
}
