import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Crown,
  Flame,
  Mail,
  Menu,
  Phone,
  Play,
  Repeat,
  Rocket,
  Shield,
  Star,
  TrendingUp,
  Trophy,
  X,
} from "lucide-react";
import { useState } from "react";

import logo from "./assets/thinkwork-logo.png";
import heroPlayer from "./assets/hero-player.png";

import image0 from "./assets/images/image0.jpeg";
import image1 from "./assets/images/image1.jpeg";
import image2 from "./assets/images/image2.png";
import image4 from "./assets/images/image4.png";
import image5 from "./assets/images/image5.jpeg";
import image6 from "./assets/images/image6.png";
import image7 from "./assets/images/image7.png";

import vid3 from "./assets/videos/vid3.mp4";
import vid5 from "./assets/videos/vid5.mp4";

const FORMSPREE_SIGNUP_URL = "https://formspree.io/f/xpqnywor";

const navItems = ["Home", "Programs", "About", "Schedule", "Media", "Contact"];

const packageIcons = {
  Starter: Rocket,
  Acceleration: TrendingUp,
  Growth: Trophy,
  Consistency: CalendarDays,
  Foundation: Shield,
  Transformation: Repeat,
  "ThinkWork Pro": Crown,
  "ThinkWork Growth": TrendingUp,
  "ThinkWork Elite": Star,
  "2 Month Summer Monthly Commitment - ThinkWork Exclusive": Flame,
};

const packageGroups = [
  {
    category: "WEEKLY",
    items: [
      {
        title: "Starter",
        desc: "Great for beginner athletes building confidence and fundamentals",
        sessions: "3 Sessions",
        originalPrice: "$120",
        price: "$110",
      },
      {
        title: "Acceleration",
        desc: "More weekly reps focused on skill growth and basketball IQ",
        sessions: "4 Sessions",
        originalPrice: "$160",
        price: "$145",
      },
      {
        title: "Growth",
        desc: "Consistent development with advanced competitive training",
        sessions: "5 Sessions",
        originalPrice: "$200",
        price: "$180",
      },
    ],
  },
  {
    category: "BI WEEKLY",
    items: [
      {
        title: "Consistency",
        desc: "Structured athlete development with consistent weekly reps",
        sessions: "6 Sessions",
        originalPrice: "$240",
        price: "$225",
      },
      {
        title: "Foundation",
        desc: "Strong skill foundation, discipline, and confidence building",
        sessions: "8 Sessions",
        originalPrice: "$320",
        price: "$280",
      },
      {
        title: "Transformation",
        desc: "High-level development focused on competitive growth",
        sessions: "10 Sessions",
        originalPrice: "$400",
        price: "$370",
        bonus: "1 Exclusive outTHINK Bonus Session",
        featured: true,
      },
    ],
  },
  {
    category: "MONTHLY COMMITMENT",
    items: [
      {
        title: "ThinkWork Growth",
        desc: "Advanced training consistency for serious athletes",
        sessions: "12 Sessions",
        originalPrice: "$480",
        price: "$460",
        bonus: "1 Exclusive outTHINK Bonus Session",
      },
      {
        title: "ThinkWork Pro",
        desc: "High-level player development and leadership growth",
        sessions: "16 Sessions",
        originalPrice: "$640",
        price: "$610",
        bonus: "2 Exclusive outWORK Bonus Sessions",
      },
      {
        title: "ThinkWork Elite",
        desc: "Elite commitment focused on complete player development",
        sessions: "20 Sessions",
        originalPrice: "$800",
        price: "$750",
        bonus: "3 Exclusive outPLAY Bonus Sessions",
      },
      {
        title: "2 Month Summer Monthly Commitment - ThinkWork Exclusive",
        desc: "Intensive summer training program for maximum growth",
        sessions: "40 Sessions",
        originalPrice: "$1600",
        price: "$1400",
        featured: true,
      },
    ],
  },
];

const mediaItems = [
  {
    type: "video",
    src: vid3,
    image: image0,
    label: "Training",
    title: "1 On 1 Work",
    desc: "Ball handling & defense",
  },
  {
    type: "video",
    src: vid5,
    image: image7,
    label: "Development",
    title: "Handling Drills",
    desc: "Control. Rhythm. Confidence.",
  },
  {
    type: "image",
    image: image4,
    label: "Leadership",
    title: "Coach Leadership",
    desc: "Mentorship & guidance",
  },
  {
    type: "image",
    image: image5,
    label: "Focus",
    title: "Player Growth",
    desc: "Confidence on and off the court.",
  },
];

const testimonials = [
  {
    quote:
      "I am so glad we met  Coach Pree.  He has made such an  impact  on my son’s development . My son has been training with Coach Pree for almost a year and  We noticed significant improvement within just the first three sessions of training with him.\n\nI attended the first few sessions and it  was evident  that he possess a unique talent for coaching and development. His knowledge and passion for the game are clear, but what truly sets him apart is how he connects with young athletes to promote emotional growth as well.  He doesn't  just focus on the  physical aspect of training . He also focuses on mindset  individuality,  as well as development life stages of the athlete. By doing so, he is able to  teach and  reinforce skills that apply both on and off the court, Coach Pree met my son where he was and helped him reach his goals.\n\nI especially appreciate Coach Pree's professionalism and energy. He is  always punctual, prepared, and actively engaged, moving right alongside his athletes throughout every session.\n\nIt has been a pleasure to watch my son grow in the sport he loves. Thanks to Coach Pree's training, he has gained invaluable skills, techniques, and, most importantly, a stronger sense of confidence.",
    name: "MO’NIQUE",
    role: "Dakari’s Mom",
    closing: "forever grateful",
  },
  {
    quote:
      "Coach Pree has helped me grow so much in basketball and as a person. He always pushes me to work hard, stay confident, and improve every day. I’ve learned so much from him, both on and off the court, and I’m grateful for all the time and effort he puts into helping me become a better player.",
    name: "EMILY",
  },
  {
    quote:
      "I am deeply grateful to have the privilege of working with Dupree as my son's basketball 🏀 coach. His qualifications, broad knowledge, and coaching philosophy are truly exceptional.  From the moment my son began training under coach pree guidance, it was evident that my son is the hands of a professional expert in basketball. Coach pree provides the most valuable support in recovery phases and for developing the mindset essential for handling pressure during intense competitions.",
    name: "NANA",
  },
  {
    quote:
      "self - confidence  on and off the court. He is extremely responsive to my life needs and other necessary adaptions as they arose and built a program that fit my abilities and lifestyle. What I like about coach pree is his consistency with objectives, challenges, and clear with training skills. I recommend coach pree to any baller looking to take their game to the next level.",
    name: "ZEKE",
  },
  {
    quote:
      "Coach pree has been absolutely instrumental in my son's basketball  journey. Not only is he a great coach; he is a mentor whose love for the game, helps builds character. Zeke has not only improved his skills shooting the ball and defenses movements, he has become more confident on and off the court. Coach pree creates a positive and encouraging environment where everyone feels valued and supported.i highly recommend him to any parent seeking a coach who cares about the development of a young althelete.",
    name: "PAPA WINSLOW",
  },
];

function SchedulePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#02060d] px-6 text-white">
      <div className="max-w-2xl rounded-3xl border border-white/10 bg-[#08111c] p-10 text-center">
        <p className="font-black uppercase tracking-[3px] text-orange-500">
          Registration Complete
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Schedule Your Training
        </h1>

        <p className="mt-6 leading-7 text-white/65">
          Your registration has been submitted successfully. Click below to
          choose your official training date and time.
        </p>

        <a
          href="https://calendar.app.google/PJf4yAtk6BqMYMqa8"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-b from-orange-500 to-orange-700 px-8 py-5 text-sm font-black uppercase"
        >
          Open Scheduling
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </main>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [expandedTestimonials, setExpandedTestimonials] = useState({});

  const openSignup = (program = null) => {
    setSelectedProgram(program);
    setShowSignupModal(true);
    setMenuOpen(false);
  };

  const openFreeSession = () => {
    openSignup({
      title: "Claim Your Free Session",
      sessions: "1 First-Time Session With Coach Pree",
      price: "Free",
      note: "Only for first-time sessions with Coach Pree.",
    });
  };

  const closeSignup = () => setShowSignupModal(false);

  if (window.location.pathname === "/schedule") {
    return <SchedulePage />;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#02060d] text-white selection:bg-orange-500/30">
      {/* NAV */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-400/10 bg-black/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:h-[86px] xl:px-28">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-cyan-300/40 bg-black shadow-[0_0_24px_rgba(0,140,255,.55)] sm:h-16 sm:w-16">
              <img
                src={logo}
                alt="ThinkWork Basketball"
                className="h-full w-full scale-[1.18] rounded-full object-cover"
              />
            </span>

            <span className="hidden sm:block">
              <span className="block text-sm font-black uppercase leading-none tracking-[2px] text-white">
                ThinkWork
              </span>
              <span className="mt-1 block text-[10px] font-black uppercase tracking-[4px] text-orange-500">
                Basketball
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-10 text-[13px] font-black uppercase tracking-wide text-white lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative transition hover:text-orange-400 ${
                  index === 0 ? "text-orange-400" : ""
                }`}
              >
                {item}
                {index === 0 && (
                  <span className="absolute -bottom-3 left-0 h-[2px] w-full bg-orange-500" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openSignup()}
              className="rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-3 text-[11px] font-black uppercase tracking-wide shadow-[0_0_22px_rgba(249,115,22,.35)] transition hover:-translate-y-0.5 sm:px-7 lg:px-12 lg:text-[13px]"
            >
              Join Now
            </button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/5 lg:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-4 py-4 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-black uppercase tracking-wide text-white/90"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[720px] overflow-hidden border-b border-cyan-400/10 pt-[72px] lg:min-h-[640px] lg:pt-[86px]"
      >
        <div className="absolute inset-0 bg-[#030814]" />

        <img
          src={heroPlayer}
          alt="ThinkWork Basketball athlete"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-85 sm:object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,13,.18)_0%,rgba(2,6,13,.45)_35%,#02060d_100%)] lg:bg-[linear-gradient(90deg,#02060d_0%,rgba(2,6,13,.86)_18%,rgba(2,6,13,.28)_52%,rgba(2,6,13,.88)_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(0,132,255,.28),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(249,115,22,.2),transparent_28%)]" />

        <div className="relative z-10 mx-auto flex min-h-[648px] max-w-[1600px] items-end px-4 pb-12 sm:px-6 lg:min-h-[554px] lg:items-center lg:px-8 lg:pb-0 xl:px-28">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[680px]"
          >
            <p className="mb-4 text-[13px] font-black tracking-[4px] text-white">
              out<span className="text-cyan-400 uppercase">THINK</span>.{" "}
              out<span className="text-cyan-400 uppercase">WORK</span>.{" "}
              out<span className="text-cyan-400 uppercase">PLAY</span>.
            </p>

            <h1 className="text-[48px] font-black italic uppercase leading-[.85] tracking-[-2px] sm:text-[64px] md:text-[78px] lg:text-[96px]">
              <span className="block bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                Think
              </span>
              <span className="block bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-800 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(0,140,255,.45)]">
                Work
              </span>
              <span className="mt-3 block text-[20px] not-italic tracking-[8px] text-orange-500 sm:text-[26px] sm:tracking-[12px] md:text-[32px] lg:text-[38px] lg:tracking-[18px]">
                Basketball
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] font-medium leading-7 text-white sm:text-[20px] sm:leading-8">
              Elite basketball development focused on skill, basketball IQ,
              discipline, confidence, leadership, and competitive growth.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <button
                onClick={() => openSignup()}
                className="inline-flex items-center justify-center gap-3 rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-8 py-4 text-[12px] font-black uppercase shadow-[0_0_25px_rgba(249,115,22,.45)] transition hover:-translate-y-1 sm:px-10 sm:text-[13px]"
              >
                Join Training
              </button>

              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-4 rounded-md border border-cyan-200/40 bg-black/40 px-8 py-4 text-[12px] font-black uppercase transition hover:border-orange-400 hover:bg-orange-500/10 sm:px-10 sm:text-[13px]"
              >
                View Packages <ArrowRight className="h-4 w-4 text-orange-500" />
              </a>
            </div>

           <button
  type="button"
  onClick={openFreeSession}
  className="group relative mt-7 overflow-hidden rounded-2xl border border-orange-500/25 bg-[linear-gradient(135deg,rgba(249,115,22,.12),rgba(0,0,0,.45))] px-6 py-5 shadow-[0_0_30px_rgba(249,115,22,.10)] transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-[0_0_45px_rgba(249,115,22,.18)]"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,.18),transparent_40%)]" />

  <div className="relative z-10 flex items-center justify-between gap-6">
    <div className="text-left">
      <p className="text-[10px] font-black uppercase tracking-[3px] text-orange-300">
        First-Time Offer
      </p>

      <h3 className="mt-1 text-[22px] font-black uppercase leading-none text-white">
        Claim Your Free Session
      </h3>

      <p className="mt-2 text-[11px] font-bold uppercase tracking-[2px] text-white/50">
        With Coach Pree
      </p>
    </div>

    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-400/30 bg-orange-500/10 text-orange-300 transition group-hover:bg-orange-500/20">
      <ArrowRight className="h-5 w-5" />
    </div>
  </div>
</button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative overflow-hidden border-b border-cyan-400/10 bg-[#020812] px-4 py-16 sm:px-6 lg:px-8 xl:px-28"
      >
        <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-[13px] font-black uppercase tracking-[3px] text-orange-500">
              Meet The Founder
            </p>

            <h2 className="mt-3 text-[42px] font-black uppercase leading-none tracking-[-2px] text-white sm:text-[58px] lg:text-[76px]">
              Coach Pree
            </h2>
<div className="mt-8 max-w-4xl space-y-6 text-[16px] font-semibold leading-8 text-white/75 sm:text-[18px] sm:leading-9">
  <p>
    I’m Dupree “Coach Pree” McCullen, founder of{" "}
    <span className="font-black text-orange-500">
      ThinkWork Basketball.
    </span>{" "}
    
  </p>

  <p>
    Our commitment is to establish intelligent, confident, disciplined athletes 
    by combining skill development, basketball IQ, mentorship, faith and
    intentional work ethic. We aim to help players grow not only in
    performance, but in mindset, character, leadership, and understanding of
    the game — teaching athletes how to make outTHINK, outWORK, and outPLAY
    come to life.
  </p>

  <p>
    Players & families choose{" "}
    <span className="font-black text-orange-500">
      ThinkWork Basketball
    </span>{" "}
    for detailed development, patience, high energy, safe environment and a
    genuine commitment to helping every athlete grow on and off the court.
  </p>
</div>


<p className="mt-8 max-w-3xl text-[16px] font-extrabold italic tracking-[2px] text-cyan-300 sm:text-[20px]">
  “DEVELOP YOUR THINKSET AS WELL AS YOUR SKILLSET.” - COACH PREE
</p>


          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-[32px] border border-orange-500/30 bg-black shadow-[0_0_45px_rgba(249,115,22,.18)]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent" />

              <img
                src={image1}
                alt="Coach Dupree"
                className="h-[420px] w-[320px] object-cover sm:h-[520px] sm:w-[420px]"
              />

              
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section
        id="media"
        className="relative overflow-hidden border-b border-cyan-400/10 bg-[#020812] px-4 py-20 sm:px-6 lg:px-8 xl:px-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,132,255,.16),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,.12),transparent_30%)]" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="text-[13px] font-black uppercase tracking-[4px] text-orange-500">
              Media & Gallery
            </p>

            <h2 className="mt-3 text-[38px] font-black uppercase leading-none tracking-[-1px] text-white sm:text-[54px] lg:text-[70px]">
              Training. Moments. Commitment.
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-base font-medium leading-7 text-white/70 sm:text-lg">
              A look inside the work we put in every day. Real training, real
              moments, real results.
            </p>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-[32px] border border-white/10 sm:h-[520px]">
            <img
              src={image6}
              alt="ThinkWork training session"
              className="absolute inset-0 h-full w-full object-cover object-top opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="absolute left-6 top-6 z-20 rounded-md border border-orange-500 bg-orange-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[2px] text-orange-400">
              Featured
            </div>

            <div className="absolute bottom-8 left-6 z-20 max-w-[520px] sm:left-10">
              <p className="text-[12px] font-black uppercase tracking-[3px] text-orange-400">
                ThinkWork Basketball
              </p>

              <h3 className="mt-2 text-[38px] font-black uppercase leading-none text-white sm:text-[56px]">
                Training In Action
              </h3>

              <p className="mt-3 text-sm font-semibold text-white/70 sm:text-base">
                A preview of the discipline, energy, and player development
                behind the work.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mediaItems.map((item, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#07111d] shadow-[0_0_28px_rgba(0,132,255,.1)]"
              >
                <div className="relative h-[300px] overflow-hidden bg-black">
                  {activeVideo === index && item.type === "video" ? (
                    <video
                      src={item.src}
                      autoPlay
                      controls
                      playsInline
                      className="h-full w-full bg-black object-contain"
                    />
                  ) : (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full bg-black object-contain opacity-90 transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {item.type === "video" && (
                        <button
                          type="button"
                          onClick={() => setActiveVideo(index)}
                          className="absolute inset-0 grid place-items-center"
                        >
                          <span className="grid h-14 w-14 place-items-center rounded-full border border-white/40 bg-black/55 transition group-hover:border-orange-500 group-hover:bg-orange-500/20">
                            <Play className="ml-1 h-6 w-6 fill-white text-white" />
                          </span>
                        </button>
                      )}
                    </>
                  )}
                </div>

                <div className="border-t border-white/10 bg-[#08111c] p-5">
                  <p className="text-[11px] font-black uppercase tracking-[2px] text-orange-400">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-[15px] font-black uppercase text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-white/60">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-2xl font-black uppercase text-white">
                See More Content
              </p>
              <p className="mt-2 max-w-[620px] text-sm font-medium leading-6 text-white/60">
                Follow the journey and stay updated on training sessions,
                highlights, and more.
              </p>
            </div>

            <a
              href="https://www.instagram.com/thinkworkbasketball"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-4 rounded-lg border border-orange-500 px-7 py-4 text-[12px] font-black uppercase tracking-wide text-white transition hover:bg-orange-500/10"
            >
              View Instagram <ArrowRight className="h-4 w-4 text-orange-500" />
            </a>
          </div>
        </div>
      </section>

      {/* CORE VALUES PLACEHOLDER */}
      {/* THINKWORK DNA */}
<section className="relative overflow-hidden border-b border-cyan-400/10 bg-[#020812] px-4 py-20 sm:px-6 lg:px-8 xl:px-28">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,.10),transparent_34%)]" />

  <div className="relative z-10 mx-auto max-w-[1450px]">
    <div className="mb-12 text-center">
      <p className="text-[13px] font-black uppercase tracking-[4px] text-orange-500">
        ThinkWork Basketball
      </p>

      <h2 className="mt-3 text-[42px] font-black uppercase leading-none tracking-[-2px] text-white sm:text-[58px]">
        ThinkWork DNA 🧬
      </h2>

      <p className="mx-auto mt-5 max-w-[760px] text-base font-medium leading-8 text-white/65 sm:text-lg">
        The core values that shape every athlete inside the ThinkWork
        Basketball program.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {[
        {
          title: "Faith",
          desc: "Honor God through character, purpose, humility, and leadership.",
        },
        {
          title: "Intelligence",
          desc: "Learn the game beyond talent and develop a high basketball IQ.",
        },
        {
          title: "Discipline",
          desc: "Build consistent habits, focus, and accountability.",
        },
        {
          title: "Work Ethic",
          desc: "Embrace purposeful reps and relentless improvement.",
        },
        {
          title: "Confidence",
          desc: "Develop belief through preparation and growth.",
        },
        {
          title: "Leadership",
          desc: "Lead through attitude, effort, and character.",
        },
        {
          title: "Mentorship",
          desc: "Grow on and off the court through guidance and support.",
        },
        {
          title: "Competitive Growth",
          desc: "Commit to outTHINK, outWORK, and outPLAY into your DNA.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,#07111d_0%,#02060d_100%)] p-7 shadow-[0_0_35px_rgba(0,132,255,.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_45px_rgba(249,115,22,.14)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,132,255,.10),transparent_38%)]" />

          <div className="relative z-10">
            <p className="text-[12px] font-black uppercase tracking-[3px] text-orange-400">
              {item.title}
            </p>

            <div className="mt-5 h-[1px] w-14 bg-orange-500" />

            <p className="mt-5 text-[15px] font-medium leading-7 text-white/70">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* PROGRAMS */}
      <section
        id="programs"
        className="relative overflow-hidden border-b border-cyan-400/10 bg-[#010814] px-4 py-16 sm:px-6 lg:px-8 xl:px-28"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,.10),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,132,255,.12),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,.02),transparent)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px]">
          <div className="mb-10">
            <p className="text-[13px] font-black uppercase tracking-[4px] text-orange-500">
              Training Packages
            </p>

            <h2 className="mt-2 text-[42px] font-black uppercase leading-none tracking-[-2px] text-white sm:text-[58px]">
              Choose Your Work
            </h2>

            <div className="mt-5 h-[2px] w-24 bg-orange-500" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packageGroups.map((group) => {
              const GroupIcon =
                group.category === "WEEKLY"
                  ? CalendarDays
                  : group.category === "BI WEEKLY"
                  ? Repeat
                  : Crown;

              return (
                <div
                  key={group.category}
                  className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#020b18_0%,#01060f_100%)] p-6 shadow-[0_0_40px_rgba(0,0,0,.45)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,140,255,.08),transparent_45%)]" />

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-3">
                      <GroupIcon className="h-5 w-5 text-orange-500" />

                      <h3 className="text-[12px] font-black uppercase tracking-[4px] text-orange-400">
                        {group.category}
                      </h3>
                    </div>

                    <div className="space-y-5">
                      {group.items.map(
                        ({
                          title,
                          desc,
                          sessions,
                          price,
                          originalPrice,
                          bonus,
                          featured,
                        }) => {
                          const PackageIcon = packageIcons[title] || Star;

                          return (
                            <button
                              key={title}
                              type="button"
                              onClick={() =>
                                openSignup({
                                  title,
                                  sessions,
                                  price,
                                })
                              }
                              className={`group relative w-full overflow-hidden rounded-[28px] border p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_45px_rgba(249,115,22,.12)] ${
                                featured
                                  ? "border-orange-500/50 bg-[linear-gradient(180deg,#07111d_0%,#02060d_100%)] shadow-[0_0_35px_rgba(249,115,22,.16)]"
                                  : title.includes("Summer")
                                  ? "border-white/20 border-dashed bg-[linear-gradient(180deg,#07111d_0%,#02060d_100%)]"
                                  : "border-white/10 bg-[linear-gradient(180deg,#050d18_0%,#02060d_100%)]"
                              }`}
                            >
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,255,.10),transparent_35%)]" />

                              <div className="relative z-10">
                                <div className="mb-5 flex justify-end">
                                  {featured && (
                                    <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[2px] text-orange-300 backdrop-blur-md">
                                      Featured
                                    </span>
                                  )}
                                </div>

                                <div className="flex items-start gap-4">
                                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-orange-500/30 bg-white/[0.03] text-orange-500">
                                    <PackageIcon className="h-7 w-7" />
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <h4 className="text-[20px] font-black uppercase leading-tight text-white">
                                      {title}
                                    </h4>

                                    <p className="mt-3 max-w-[260px] text-sm leading-7 text-white/50">
                                      {desc}
                                    </p>
                                  </div>
                                </div>

                                <div className="mt-7 flex items-end justify-between gap-4">
                                  <div>
                                    <p className="text-sm font-semibold uppercase tracking-[1px] text-white/65">
                                      {sessions}
                                    </p>

                                    <p className="mt-3 text-[11px] font-black uppercase tracking-[3px] text-white/20 transition group-hover:text-orange-300">
                                      Tap To View Details
                                    </p>
                                  </div>

                                  <div className="text-right">
                                    {originalPrice && (
                                      <p className="text-lg font-black text-white/30 line-through">
                                        {originalPrice}
                                      </p>
                                    )}

                                    <p className="text-[42px] font-black leading-none tracking-[-2px] text-orange-400">
                                      {price}
                                    </p>

                                    {bonus && (
                                      <p className="mt-2 max-w-[190px] text-right text-[11px] font-black uppercase leading-5 tracking-[1px] text-cyan-300">
                                        {bonus}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </button>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ADDITIONAL OPTIONS */}
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Individual Single Sessions",
                sessions: "$40 / Hour",
                desc: "Focused one-on-one skill development",
              },
              {
                title: "Partner Sessions",
                sessions: "$30 Per Athlete / Hour",
                desc: "Train with a partner and build together",
              },
              {
                title: "Small Group Sessions",
                sessions: "$25 Per Athlete",
                desc: "3-5 Athletes",
              },
            ].map((option) => (
              <button
                key={option.title}
                type="button"
                onClick={() =>
                  openSignup({
                    title: option.title,
                    sessions: option.desc,
                    price: option.sessions,
                  })
                }
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#050d18_0%,#02060d_100%)] p-6 text-left shadow-[0_0_30px_rgba(0,132,255,.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_45px_rgba(249,115,22,.14)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,255,.12),transparent_38%)]" />

                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[3px] text-orange-400">
                    Additional Option
                  </p>

                  <h4 className="mt-4 text-[18px] font-black uppercase leading-tight text-white">
                    {option.title}
                  </h4>

                  <p className="mt-4 text-[11px] font-black uppercase tracking-[1px] text-orange-400 transition group-hover:text-orange-300">
  {option.sessions}
</p>

                  <p className="mt-5 text-[15px] font-bold leading-6 text-white">
                    {option.desc}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-[11px] font-black uppercase tracking-[3px] text-white/25 transition group-hover:text-orange-300">
                      Tap To View Details
                    </p>

                   
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE + JOIN FLOW */}
      <section className="border-b border-cyan-400/10 bg-[#020812] px-4 py-16 sm:px-6 lg:px-8 xl:px-28">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2">
          <div
            id="schedule"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10"
          >
            <p className="text-[13px] font-black uppercase text-orange-500">
              Schedule
            </p>

            <h2 className="mt-2 text-[34px] font-black uppercase leading-none sm:text-[44px]">
              Book Your Spot
            </h2>

            <p className="mt-6 max-w-[520px] text-[16px] font-medium leading-8 text-white/75">
              Players can choose their program, preferred training days, and
              preferred times during sign-up.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Private Training",
                "Partner Workouts",
                "Small Group Training",
                "Monthly Commitment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-sm font-bold text-white/85"
                >
                  <Check className="h-4 w-4 text-orange-500" />
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={() => openSignup()}
              className="mt-8 inline-flex items-center gap-4 rounded-xl border border-cyan-200/50 px-8 py-5 text-[12px] font-black uppercase tracking-[2px] transition hover:border-orange-500 hover:bg-orange-500/10"
            >
              Start Sign-Up <ArrowRight className="h-4 w-4 text-orange-500" />
            </button>
          </div>

          <div
            id="payments"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10"
          >
            <p className="text-[13px] font-black uppercase text-orange-500">
              Join Flow
            </p>

            <h2 className="mt-2 text-[34px] font-black uppercase leading-none sm:text-[44px]">
              Simple Process
            </h2>

            <div className="mt-8 grid gap-4 text-sm font-bold text-white/85">
              {[
                "Player information",
                "Parent contact",
                "Program selection",
                "Preferred days/times",
                "Payment confirmation",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/30 px-5 py-4"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange-600 text-xs font-black">
                    {index + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>

            <button
              onClick={() => openSignup()}
              className="mt-8 inline-flex items-center gap-4 rounded-xl border border-cyan-200/50 px-8 py-5 text-[12px] font-black uppercase tracking-[2px] transition hover:border-orange-500 hover:bg-orange-500/10"
            >
              Join Now <ArrowRight className="h-4 w-4 text-orange-500" />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-cyan-400/10 bg-[#020812] px-4 py-20 sm:px-6 lg:px-8 xl:px-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 text-center">
            <p className="text-[13px] font-black uppercase tracking-[4px] text-orange-500">
              Testimonials
            </p>

            <h2 className="mt-3 text-[40px] font-black uppercase leading-none tracking-[-2px] text-white sm:text-[58px]">
              What Families Are Saying
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-base font-medium leading-7 text-white/60">
              Real feedback from athletes and families who have trained with
              ThinkWork Basketball.
            </p>
          </div>

         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#07111d_0%,#02060d_100%)] p-8 shadow-[0_0_35px_rgba(0,132,255,.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_45px_rgba(249,115,22,.14)] md:col-span-1 xl:col-span-2 ${
  index === 3 ? "xl:col-start-2" : ""
}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,132,255,.10),transparent_38%)]" />

                <div className="relative z-10">
                  <div className="mb-6 text-5xl font-black leading-none text-orange-500">
                    “
                  </div>

<p className="text-[15px] italic leading-8 text-white/85">  {expandedTestimonials[index]
    ? item.quote
    : `${item.quote.slice(0, 170)}...`}
</p>

<button
  type="button"
  onClick={() =>
    setExpandedTestimonials((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }
  className="mt-5 text-[11px] font-black uppercase tracking-[2px] text-cyan-300 transition hover:text-orange-400"
>
  {expandedTestimonials[index] ? "Read Less" : "Read More"}
</button>
                  

                  <div className="mt-8 h-[1px] w-full bg-white/10" />

                  <div className="mt-5">
                    <p className="text-[12px] font-black uppercase tracking-[3px] text-cyan-300">
                      {item.name}
                    </p>

                    {item.role && (
                      <p className="mt-1 text-xs font-bold uppercase tracking-[2px] text-white/35">
                        {item.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE PHOTO */}
      <section className="border-b border-cyan-400/10 bg-[#020812] px-4 py-20 sm:px-6 lg:px-8 xl:px-28">
        <div className="mx-auto max-w-[1450px] overflow-hidden rounded-[36px] border border-white/10 bg-black shadow-[0_0_50px_rgba(0,132,255,.14)]">
          <div className="relative h-[420px] sm:h-[560px] lg:h-[700px]">
            <img
              src={image2}
              alt="ThinkWork Basketball player development"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-85"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-6 right-6 z-10 max-w-4xl sm:bottom-14 sm:left-14">
              <p className="text-[12px] font-black uppercase tracking-[4px] text-orange-400">
                ThinkWork Basketball
              </p>

              <h2 className="mt-4 text-[40px] font-black uppercase leading-none text-white sm:text-[64px] lg:text-[86px]">
                Built Through Work.
                <br />
                Developed Through Thinkset.
              </h2>

              <p className="mt-6 max-w-[700px] text-base font-semibold leading-7 text-white/70 sm:text-lg">
                More than basketball training — ThinkWork Basketball focuses on
                confidence, discipline, leadership, and complete athlete
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="bg-[#020812] px-4 py-10 sm:px-6 lg:px-8 xl:px-28"
      >
        <div className="mx-auto grid max-w-[1600px] items-center gap-7 md:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr_220px]">
          <div>
            <p className="text-[13px] font-black uppercase text-orange-500">
              Contact
            </p>

            <h2 className="text-[28px] font-black uppercase leading-none sm:text-[30px]">
              Let’s Connect
            </h2>
          </div>

          <div className="grid gap-5 text-sm font-medium text-white/90 lg:grid-cols-3">
            <a
              href="tel:3476137285"
              className="flex items-center gap-4 transition hover:text-orange-400"
            >
              <Phone className="h-7 w-7 shrink-0 rounded-full border border-orange-500/40 p-1.5 text-orange-500" />
              (347) 613-7285
            </a>

            <a
              href="mailto:thinkworkbasketball@gmail.com"
              className="flex items-center gap-4 break-all transition hover:text-orange-400"
            >
              <Mail className="h-7 w-7 shrink-0 rounded-full border border-orange-500/40 p-1.5 text-orange-500" />
              thinkworkbasketball@gmail.com
            </a>

            <a
              href="https://www.instagram.com/thinkworkbasketball"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 transition hover:text-orange-400"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-500/40 text-orange-500">
                IG
              </div>
              @thinkworkbasketball
            </a>
          </div>

          <a
            href="mailto:thinkworkbasketball@gmail.com"
            className="inline-flex items-center justify-center gap-4 rounded-md border border-cyan-200/50 px-8 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10 md:col-span-2 xl:col-span-1"
          >
            Send Message <ArrowRight className="h-4 w-4 text-orange-500" />
          </a>
        </div>

        {/* Footer Credit */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs font-medium tracking-wide text-white/35">
            Website by{" "}
            <a
              href="https://www.kodedbykanae.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-300 transition hover:text-orange-400"
            >
              Koded by Kanae
            </a>
          </p>
        </div>
      </footer>

      {/* SIGNUP MODAL */}
      {showSignupModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#050b14] shadow-[0_0_80px_rgba(0,132,255,.2)]">
            <button
              onClick={closeSignup}
              className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-orange-500/20"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            <div className="p-6 sm:p-10">
              <p className="text-[12px] font-black uppercase tracking-[3px] text-orange-500">
                Start Sign-Up
              </p>

              <h2 className="mt-2 text-[34px] font-black leading-none text-white sm:text-[52px]">
                Join ThinkWork Basketball
              </h2>

              <p className="mt-4 max-w-[580px] text-sm leading-7 text-white/65 sm:text-base">
                Fill out the form below and ThinkWork Basketball will follow up
                with you to get started.
              </p>

              <div className="mt-8 rounded-3xl border border-orange-500/30 bg-[#08111c] p-5 shadow-[0_0_30px_rgba(249,115,22,.15)]">
                <p className="text-[12px] font-black uppercase tracking-[2px] text-white/45">
                  Selected Program
                </p>

                {selectedProgram ? (
                  <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-[28px] font-black text-white">
                        {selectedProgram.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-white/60">
                        {selectedProgram.sessions}
                      </p>

                      {selectedProgram.note && (
                        <p className="mt-3 max-w-[360px] rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[2px] text-orange-300">
                          {selectedProgram.note}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProgram(null)}
                        className="mt-4 text-[11px] font-black uppercase tracking-[2px] text-cyan-300 transition hover:text-orange-400"
                      >
                        Change Program
                      </button>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-[42px] font-black leading-none text-orange-400">
                        {selectedProgram.price}
                      </p>
                      <p className="mt-1 text-[11px] font-black uppercase tracking-wide text-white/40">
                        Selected Price
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5">
                    <p className="text-sm font-bold text-white">
                      Choose the training option that fits best.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {packageGroups.flatMap((group) =>
                        group.items.map((program) => (
                          <button
                            key={`${program.title}-${program.sessions}`}
                            type="button"
                            onClick={() => setSelectedProgram(program)}
                            className="rounded-2xl border border-white/10 bg-black/30 p-4 text-left transition hover:border-orange-500 hover:bg-orange-500/10"
                          >
                            <p className="text-base font-black uppercase text-white">
                              {program.title}
                            </p>

                            <p className="mt-1 text-sm text-white/55">
                              {program.sessions}
                            </p>

                            <p className="mt-3 text-2xl font-black text-orange-400">
                              {program.price}
                            </p>
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>

              <form
                className="mt-8 grid gap-5"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  await fetch(FORMSPREE_SIGNUP_URL, {
                    method: "POST",
                    body: formData,
                    headers: {
                      Accept: "application/json",
                    },
                  });

                  window.location.href =
                    "https://calendar.app.google/PJf4yAtk6BqMYMqa8";
                }}
              >
                <input
                  type="hidden"
                  name="Form Type"
                  value="New Athlete Sign-Up"
                />
                <input
                  type="hidden"
                  name="Selected Program"
                  value={selectedProgram?.title || "Not selected"}
                />
                <input
                  type="hidden"
                  name="Program Sessions"
                  value={selectedProgram?.sessions || ""}
                />
                <input
                  type="hidden"
                  name="Program Price"
                  value={selectedProgram?.price || ""}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                      Athlete First Name
                    </label>
                    <input
                      name="Athlete First Name"
                      required
                      placeholder="Enter first name"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                      Athlete Last Name
                    </label>
                    <input
                      name="Athlete Last Name"
                      required
                      placeholder="Enter last name"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                      Athlete Age
                    </label>
                    <input
                      type="number"
                      name="Athlete Age"
                      required
                      placeholder="Enter age"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                      Parent/Guardian Name
                    </label>
                    <input
                      name="Parent Guardian Name"
                      required
                      placeholder="Enter parent name"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="Phone"
                      required
                      placeholder="Enter phone number"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      placeholder="Enter email address"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                    />

                  </div>


                  <div>
  <label className="mb-2 block text-sm font-bold text-white">
    Instagram (Optional)
  </label>

  <input
    type="text"
    name="Instagram"
    placeholder="@instagramhandle"
    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
  />
</div>
                </div>

                {!selectedProgram && (
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                      Program Interest
                    </label>

                    <select
                      name="Program Interest"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#08111c] px-5 py-4 text-sm text-white outline-none focus:border-orange-500"
                    >
                      <option value="">Choose a program</option>
                      {packageGroups.flatMap((group) =>
                        group.items.map((program) => (
                          <option
                            key={`${program.title}-option`}
                            value={`${program.title} - ${program.sessions} - ${program.price}`}
                          >
                            {program.title} - {program.sessions} -{" "}
                            {program.price}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                )}

                <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5">
                  <p className="text-sm font-bold text-white">
                    Training Scheduling
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    After submitting this form, you’ll automatically be
                    redirected to our live scheduling system to select your
                    official training date and time.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-white">
                    Additional Notes
                  </label>

                  <textarea
                    name="Additional Notes"
                    rows="4"
                    placeholder="Anything else we should know?"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-3 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-orange-500 to-orange-700 px-8 py-5 text-[13px] font-black uppercase tracking-wide text-white shadow-[0_0_35px_rgba(249,115,22,.4)] transition hover:-translate-y-1"
                >
                  Submit & Continue To Scheduling
                  <ArrowRight className="h-5 w-5" />
                </button>

                <p className="text-center text-xs text-white/35">
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}