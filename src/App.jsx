import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Star,
  Trophy,
  Users,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

import logo from "./assets/thinkwork-logo.png";
import heroPlayer from "./assets/hero-player.png";
import logoWall from "./assets/logo-glow-wall.png";

import image0 from "./assets/images/image0.jpeg";
import image1 from "./assets/images/image1.jpeg";
import image2 from "./assets/images/image2.jpeg";
import image3 from "./assets/images/image3.jpeg";
import image4 from "./assets/images/image4.jpeg";
import image5 from "./assets/images/image5.jpeg";


import vid3 from "./assets/videos/vid3.mp4";
import vid5 from "./assets/videos/vid5.mp4";


const FORMSPREE_SIGNUP_URL = "https://formspree.io/f/YOUR_FORM_ID";

const navItems = ["Home", "Programs", "About", "Schedule", "Media", "Contact"];

const packages = [
  {
    title: "Starter",
    category: "Weekly Package",
    sessions: "2 Sessions / Week",
    regular: "$80",
    price: "$70",
    tag: "Great Start",
    icon: Trophy,
    bullets: ["Skill development", "Confidence building", "Fundamentals", "Game reps"],
  },
  {
    title: "Growth",
    category: "Weekly Package",
    sessions: "3 Sessions / Week",
    regular: "$120",
    price: "$100",
    tag: "Most Popular",
    icon: Users,
    featured: true,
    bullets: ["More weekly reps", "Basketball IQ", "Footwork", "Player development"],
  },
  {
    title: "Elite",
    category: "Weekly Package",
    sessions: "5 Sessions / Week",
    regular: "$200",
    price: "$170",
    tag: "High Commitment",
    icon: Star,
    bullets: ["Advanced reps", "Competitive growth", "Decision making", "Game confidence"],
  },
  {
    title: "ThinkWork Pro",
    category: "Monthly Membership",
    sessions: "20 Sessions",
    regular: "$800",
    price: "$650",
    tag: "Best Value",
    icon: User,
    bullets: ["Complete development", "High-level training", "Leadership growth", "Discipline & IQ"],
  },
];

const memberships = [
  ["Consistency", "4 Sessions", "$145"],
  ["Acceleration", "6 Sessions", "$210"],
  ["Transformation", "10 Sessions", "$350"],
  ["Foundation", "8 Sessions", "$275"],
  ["Advanced", "12 Sessions", "$400"],
  ["ThinkWork Pro", "20 Sessions", "$650"],
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
    image: image1,
    label: "Training",
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
    label: "Culture",
    title: "Player Growth",
    desc: "Confidence on and off the court.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openSignup = (program = null) => {
    setSelectedProgram(program);
    setShowSignupModal(true);
    setMenuOpen(false);
  };

  const closeSignup = () => setShowSignupModal(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#02060d] text-white selection:bg-orange-500/30">
      {/* NAV */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-400/10 bg-black/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:h-[86px] xl:px-28">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-cyan-300/40 bg-black shadow-[0_0_24px_rgba(0,140,255,.55)] sm:h-16 sm:w-16">
              <img src={logo} alt="ThinkWork Basketball" className="h-full w-full scale-[1.18] rounded-full object-cover" />
            </span>

            <span className="hidden sm:block">
              <span className="block text-sm font-black uppercase leading-none tracking-[2px] text-white">ThinkWork</span>
              <span className="mt-1 block text-[10px] font-black uppercase tracking-[4px] text-orange-500">Basketball</span>
            </span>
          </a>

          <div className="hidden items-center gap-10 text-[13px] font-black uppercase tracking-wide text-white lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative transition hover:text-orange-400 ${index === 0 ? "text-orange-400" : ""}`}
              >
                {item}
                {index === 0 && <span className="absolute -bottom-3 left-0 h-[2px] w-full bg-orange-500" />}
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
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
      <section id="home" className="relative min-h-[720px] overflow-hidden border-b border-cyan-400/10 pt-[72px] lg:min-h-[640px] lg:pt-[86px]">
        <div className="absolute inset-0 bg-[#030814]" />
        <img src={heroPlayer} alt="ThinkWork Basketball athlete" className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-85 sm:object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,13,.18)_0%,rgba(2,6,13,.45)_35%,#02060d_100%)] lg:bg-[linear-gradient(90deg,#02060d_0%,rgba(2,6,13,.86)_18%,rgba(2,6,13,.28)_52%,rgba(2,6,13,.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(0,132,255,.28),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(249,115,22,.2),transparent_28%)]" />

        <div className="relative z-10 mx-auto flex min-h-[648px] max-w-[1600px] items-end px-4 pb-12 sm:px-6 lg:min-h-[554px] lg:items-center lg:px-8 lg:pb-0 xl:px-28">
          <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="max-w-[680px]">
            <p className="mb-4 text-[12px] font-black uppercase tracking-[5px] text-orange-500">OutTHINK. OutWORK. OutPLAY.</p>

            <h1 className="text-[48px] font-black italic uppercase leading-[.85] tracking-[-2px] sm:text-[64px] md:text-[78px] lg:text-[96px]">
              <span className="block bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">Think</span>
              <span className="block bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-800 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(0,140,255,.45)]">Work</span>
              <span className="mt-3 block text-[20px] not-italic tracking-[8px] text-orange-500 sm:text-[26px] sm:tracking-[12px] md:text-[32px] lg:text-[38px] lg:tracking-[18px]">Basketball</span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[17px] font-medium leading-7 text-white sm:text-[20px] sm:leading-8">
              Elite basketball development focused on skill, basketball IQ, discipline, confidence, leadership, and competitive growth.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <button
                onClick={() => openSignup()}
                className="inline-flex items-center justify-center gap-3 rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-8 py-4 text-[12px] font-black uppercase shadow-[0_0_25px_rgba(249,115,22,.45)] transition hover:-translate-y-1 sm:px-10 sm:text-[13px]"
              >
                Join Training
              </button>

              <a href="#programs" className="inline-flex items-center justify-center gap-4 rounded-md border border-cyan-200/40 bg-black/40 px-8 py-4 text-[12px] font-black uppercase transition hover:border-orange-400 hover:bg-orange-500/10 sm:px-10 sm:text-[13px]">
                View Packages <ArrowRight className="h-4 w-4 text-orange-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden border-b border-cyan-400/10 bg-[#020812] px-4 py-16 sm:px-6 lg:px-8 xl:px-28">
        <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-[13px] font-black uppercase tracking-[3px] text-orange-500">
              Meet The Founder
            </p>

            <h2 className="mt-3 text-[42px] font-black uppercase leading-none tracking-[-2px] text-white sm:text-[58px] lg:text-[76px]">
              Coach Dupree
            </h2>

            <div className="mt-8 max-w-4xl text-[16px] font-semibold leading-8 text-white/75 sm:text-[18px] sm:leading-9">
              <p>
                I’m Dupree “Coach Duree” McCullen, founder of ThinkWork Basketball — a program built to develop high-IQ players through skill work, discipline, confidence, and game understanding.
              </p>

              {aboutExpanded && (
                <p className="mt-6">
                  With a passion for teaching and mentorship, I help athletes improve not only their game, but their mindset, leadership, and work ethic. Players and families choose ThinkWork Basketball for detailed development, energy, patience, and a genuine commitment to helping every athlete grow on and off the court.
                </p>
              )}
            </div>

            <button
              onClick={() => setAboutExpanded((prev) => !prev)}
              className="mt-8 rounded-xl border border-cyan-200/40 bg-black/30 px-7 py-4 text-[12px] font-black uppercase tracking-[2px] text-white transition hover:border-orange-500 hover:bg-orange-500/10"
            >
              {aboutExpanded ? "Show Less" : "Read More"}
            </button>

            <p className="mt-8 max-w-3xl text-[15px] font-black uppercase tracking-[6px] text-cyan-300 sm:text-[18px]">
              Develop the THINKSET as much as the skillset.
            </p>
          </div>
<div className="flex justify-center lg:justify-end">
  <div className="relative overflow-hidden rounded-[32px] border border-orange-500/30 bg-black shadow-[0_0_45px_rgba(249,115,22,.18)]">
    
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

    <img
      src={image1}
      alt="Coach Dupree"
      className="h-[420px] w-[320px] object-cover sm:h-[520px] sm:w-[420px]"
    />

    <div className="absolute bottom-0 left-0 z-20 p-6">
      <p className="text-[11px] font-black uppercase tracking-[3px] text-orange-400">
        ThinkWork Basketball
      </p>

      <h3 className="mt-2 text-[32px] font-black uppercase leading-none text-white">
        Coach Dupree
      </h3>

      <p className="mt-2 text-sm font-semibold text-white/70">
        Skill Development • Leadership • Basketball IQ
      </p>
    </div>
  </div>
</div>
        
        </div>
      </section>

      {/* MEDIA */}
      <section id="media" className="relative overflow-hidden border-b border-cyan-400/10 bg-[#020812] px-4 py-20 sm:px-6 lg:px-8 xl:px-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,132,255,.16),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,.12),transparent_30%)]" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="text-[13px] font-black uppercase tracking-[4px] text-orange-500">
              Media & Gallery
            </p>

            <h2 className="mt-3 text-[38px] font-black uppercase leading-none tracking-[-1px] text-white sm:text-[54px] lg:text-[70px]">
              Training. Moments. Culture.
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-base font-medium leading-7 text-white/70 sm:text-lg">
              A look inside the work we put in every day. Real training, real moments, real results.
            </p>
          </div>

          {/* FEATURED VIDEO */}
        <div className="relative h-[360px] overflow-hidden sm:h-[520px]">
  <img
    src={image0}
    alt="ThinkWork training session"
    className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
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
      A preview of the discipline, energy, and player development behind the work.
    </p>
  </div>
</div>

          {/* MEDIA GRID */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mediaItems.map((item, index) => (
              <article key={index} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#07111d] shadow-[0_0_28px_rgba(0,132,255,.1)]">
                <div className="relative h-[230px] overflow-hidden bg-black">
                  {activeVideo === index && item.type === "video" ? (
                    <video src={item.src} autoPlay controls playsInline className="h-full w-full bg-black object-contain" />
                  ) : (
                    <>
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {item.type === "video" && (
                        <button type="button" onClick={() => setActiveVideo(index)} className="absolute inset-0 grid place-items-center">
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
              <p className="text-2xl font-black uppercase text-white">See More Content</p>
              <p className="mt-2 max-w-[620px] text-sm font-medium leading-6 text-white/60">
                Follow the journey and stay updated on training sessions, highlights, and more.
              </p>
            </div>

            <a href="https://www.instagram.com/thinkworkbasketball" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-4 rounded-lg border border-orange-500 px-7 py-4 text-[12px] font-black uppercase tracking-wide text-white transition hover:bg-orange-500/10">
              View Instagram <ArrowRight className="h-4 w-4 text-orange-500" />
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="relative border-b border-cyan-400/10 bg-[#020812] px-4 py-14 sm:px-6 lg:px-8 xl:px-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[13px] font-black uppercase text-orange-500">Training Packages</p>
              <h2 className="mt-1 text-[32px] font-black uppercase leading-none tracking-[-1px] sm:text-[42px]">Choose Your Work</h2>
              <div className="mt-3 h-[2px] w-20 bg-orange-500" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {packages.map((program) => {
              const Icon = program.icon;

              return (
                <article key={program.title} className="h-[340px] [perspective:1100px]">
                  <div className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${activeCard === program.title ? "[transform:rotateY(180deg)]" : ""}`}>
                    <button
                      type="button"
                      onClick={() => setActiveCard(program.title)}
                      className={`absolute inset-0 overflow-hidden rounded-3xl border bg-black p-7 text-left [backface-visibility:hidden] ${
                        program.featured ? "border-orange-500/70 shadow-[0_0_35px_rgba(249,115,22,.3)]" : "border-white/15"
                      }`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,132,255,.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,.18),transparent_35%)]" />

                      <div className="relative z-10 flex h-full flex-col">
                        <div className="flex items-start justify-between gap-4">
                          <Icon className="h-10 w-10 text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,.8)]" />
                          <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[10px] font-black uppercase text-orange-300">{program.tag}</span>
                        </div>

                        <p className="mt-7 text-[11px] font-black uppercase tracking-[3px] text-cyan-300">{program.category}</p>
                        <h3 className="mt-2 text-[30px] font-black uppercase leading-none text-white">{program.title}</h3>
                        <p className="mt-3 text-sm font-semibold text-white/75">{program.sessions}</p>

                        <div className="mt-auto">
                          <p className="text-sm font-bold text-white/45 line-through">{program.regular}</p>
                          <p className="text-[46px] font-black leading-none text-white">{program.price}</p>
                          <p className="mt-2 text-[11px] font-black uppercase tracking-[2px] text-white/50">Tap to view details</p>
                        </div>
                      </div>
                    </button>

                    <div className="absolute inset-0 z-20 flex flex-col justify-center rounded-3xl border border-orange-500/60 bg-[#0a0b0d] p-7 shadow-[0_0_30px_rgba(249,115,22,.25)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCard(null);
                        }}
                        className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10"
                      >
                        <X className="h-4 w-4" />
                      </button>

                      <p className="text-[14px] font-black uppercase text-orange-500">What You Get</p>

                      <ul className="mt-5 space-y-3 text-sm font-semibold text-white/85">
                        {program.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-3">
                            <Check className="h-4 w-4 text-orange-500" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openSignup(program);
                        }}
                        className="mt-7 inline-flex w-fit rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-7 py-3 text-[12px] font-black uppercase shadow-[0_0_22px_rgba(249,115,22,.45)] transition hover:-translate-y-0.5"
                      >
                        Join Now
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2 lg:grid-cols-3">
            {memberships.map(([name, sessions, price]) => (
              <button
                key={name}
                onClick={() => openSignup({ title: name, sessions, price })}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-left transition hover:border-orange-500/60 hover:bg-orange-500/10"
              >
                <div>
                  <p className="font-black uppercase">{name}</p>
                  <p className="text-sm text-white/55">{sessions}</p>
                </div>
                <p className="text-xl font-black text-orange-400">{price}</p>
              </button>
            ))}
          </div>

          <p className="mt-5 text-sm font-semibold text-white/65">
            Extras: Single Session $40/hour • Partner Workout $25 per athlete • Small Groups $20–$30 per athlete • Sibling Discount 10% off second athlete monthly package
          </p>
        </div>
      </section>

      {/* SCHEDULE + JOIN FLOW */}
      <section className="border-b border-cyan-400/10 bg-[#020812] px-4 py-16 sm:px-6 lg:px-8 xl:px-28">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2">
          <div id="schedule" className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
            <p className="text-[13px] font-black uppercase text-orange-500">Schedule</p>
            <h2 className="mt-2 text-[34px] font-black uppercase leading-none sm:text-[44px]">Book Your Spot</h2>

            <p className="mt-6 max-w-[520px] text-[16px] font-medium leading-8 text-white/75">
              Players can choose their program, preferred training days, and preferred times during sign-up.
            </p>

            <div className="mt-8 grid gap-4">
              {["Private Training", "Partner Workouts", "Small Group Training", "Monthly Memberships"].map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-sm font-bold text-white/85">
                  <Check className="h-4 w-4 text-orange-500" />
                  {item}
                </div>
              ))}
            </div>

            <button onClick={() => openSignup()} className="mt-8 inline-flex items-center gap-4 rounded-xl border border-cyan-200/50 px-8 py-5 text-[12px] font-black uppercase tracking-[2px] transition hover:border-orange-500 hover:bg-orange-500/10">
              Start Sign-Up <ArrowRight className="h-4 w-4 text-orange-500" />
            </button>
          </div>

          <div id="payments" className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
            <p className="text-[13px] font-black uppercase text-orange-500">Join Flow</p>
            <h2 className="mt-2 text-[34px] font-black uppercase leading-none sm:text-[44px]">Simple Process</h2>

            <div className="mt-8 grid gap-4 text-sm font-bold text-white/85">
              {["Player information", "Parent contact", "Program selection", "Preferred days/times", "Payment confirmation"].map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/30 px-5 py-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange-600 text-xs font-black">{index + 1}</span>
                  {step}
                </div>
              ))}
            </div>

            <button onClick={() => openSignup()} className="mt-8 inline-flex items-center gap-4 rounded-xl border border-cyan-200/50 px-8 py-5 text-[12px] font-black uppercase tracking-[2px] transition hover:border-orange-500 hover:bg-orange-500/10">
              Join Now <ArrowRight className="h-4 w-4 text-orange-500" />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="bg-[#020812] px-4 py-10 sm:px-6 lg:px-8 xl:px-28">
        <div className="mx-auto grid max-w-[1600px] items-center gap-7 md:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr_220px]">
          <div>
            <p className="text-[13px] font-black uppercase text-orange-500">Contact</p>
            <h2 className="text-[28px] font-black uppercase leading-none sm:text-[30px]">Let’s Connect</h2>
          </div>

          <div className="grid gap-5 text-sm font-medium text-white/90 lg:grid-cols-3">
            <span className="flex items-center gap-4">
              <Phone className="h-7 w-7 shrink-0 rounded-full border border-orange-500/40 p-1.5 text-orange-500" />
              Add Phone
            </span>

            <a href="mailto:thinkworkbasketball@gmail.com" className="flex items-center gap-4 break-all transition hover:text-orange-400">
              <Mail className="h-7 w-7 shrink-0 rounded-full border border-orange-500/40 p-1.5 text-orange-500" />
              thinkworkbasketball@gmail.com
            </a>

            <a href="https://www.instagram.com/thinkworkbasketball" target="_blank" rel="noreferrer" className="flex items-center gap-4 transition hover:text-orange-400">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-500/40 text-orange-500">IG</div>
              @thinkworkbasketball
            </a>
          </div>

          <a href="mailto:thinkworkbasketball@gmail.com" className="inline-flex items-center justify-center gap-4 rounded-md border border-cyan-200/50 px-8 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10 md:col-span-2 xl:col-span-1">
            Send Message <ArrowRight className="h-4 w-4 text-orange-500" />
          </a>
        </div>
      </footer>

      {/* SIGNUP MODAL */}
      {showSignupModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#050b14] shadow-[0_0_80px_rgba(0,132,255,.2)]">
            <button onClick={closeSignup} className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-orange-500/20">
              <X className="h-5 w-5 text-white" />
            </button>

            <div className="p-6 sm:p-10">
              <p className="text-[12px] font-black uppercase tracking-[3px] text-orange-500">Start Sign-Up</p>
              <h2 className="mt-2 text-[34px] font-black leading-none text-white sm:text-[52px]">Join ThinkWork Basketball</h2>
              <p className="mt-4 max-w-[580px] text-sm leading-7 text-white/65 sm:text-base">
                Fill out the form below and ThinkWork Basketball will follow up with you to get started.
              </p>

              <div className="mt-8 rounded-3xl border border-orange-500/30 bg-[#08111c] p-5 shadow-[0_0_30px_rgba(249,115,22,.15)]">
                <p className="text-[12px] font-black uppercase tracking-[2px] text-white/45">Selected Program</p>

                {selectedProgram ? (
                  <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-[28px] font-black text-white">{selectedProgram.title}</h3>
                      <p className="mt-1 text-sm font-medium text-white/60">{selectedProgram.sessions}</p>

                      <button type="button" onClick={() => setSelectedProgram(null)} className="mt-4 text-[11px] font-black uppercase tracking-[2px] text-cyan-300 transition hover:text-orange-400">
                        Change Program
                      </button>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-[42px] font-black leading-none text-orange-400">{selectedProgram.price}</p>
                      <p className="mt-1 text-[11px] font-black uppercase tracking-wide text-white/40">Selected Price</p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5">
                    <p className="text-sm font-bold text-white">Choose the training option that fits best.</p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {[
                        ...packages.filter((program) => program.title !== "ThinkWork Pro"),
                        ...memberships.map(([title, sessions, price]) => ({ title, sessions, price })),
                      ].map((program) => (
                        <button key={`${program.title}-${program.sessions}`} type="button" onClick={() => setSelectedProgram(program)} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-left transition hover:border-orange-500 hover:bg-orange-500/10">
                          <p className="text-base font-black uppercase text-white">{program.title}</p>
                          <p className="mt-1 text-sm text-white/55">{program.sessions}</p>
                          <p className="mt-3 text-2xl font-black text-orange-400">{program.price}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <form action={FORMSPREE_SIGNUP_URL} method="POST" className="mt-8 grid gap-5">
                <input type="hidden" name="_next" value="https://calendly.com/YOUR-CALENDLY-LINK" />
                <input type="hidden" name="Form Type" value="New Athlete Sign-Up" />
                <input type="hidden" name="Selected Program" value={selectedProgram?.title || "Not selected"} />
                <input type="hidden" name="Program Sessions" value={selectedProgram?.sessions || ""} />
                <input type="hidden" name="Program Price" value={selectedProgram?.price || ""} />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">Athlete First Name</label>
                    <input name="Athlete First Name" required placeholder="Enter first name" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">Athlete Last Name</label>
                    <input name="Athlete Last Name" required placeholder="Enter last name" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">Athlete Age</label>
                    <input type="number" name="Athlete Age" required placeholder="Enter age" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">Parent/Guardian Name</label>
                    <input name="Parent Guardian Name" required placeholder="Enter parent name" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">Phone Number</label>
                    <input type="tel" name="Phone" required placeholder="Enter phone number" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">Email Address</label>
                    <input type="email" name="Email" required placeholder="Enter email address" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500" />
                  </div>
                </div>

                {!selectedProgram && (
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">Program Interest</label>
                    <select name="Program Interest" required className="w-full rounded-2xl border border-white/10 bg-[#08111c] px-5 py-4 text-sm text-white outline-none focus:border-orange-500">
                      <option value="">Choose a program</option>
                      <option>Starter - 2 Sessions / Week - $70</option>
                      <option>Growth - 3 Sessions / Week - $100</option>
                      <option>Elite - 5 Sessions / Week - $170</option>
                      <option>ThinkWork Pro - 20 Sessions - $650</option>
                      <option>Private Training</option>
                      <option>Partner Workout</option>
                      <option>Small Group Training</option>
                    </select>
                  </div>
                )}

                <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5">
                  <p className="text-sm font-bold text-white">Training Scheduling</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    After submitting this form, you’ll automatically be redirected to our live scheduling system to select your official training date and time.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-white">Additional Notes</label>
                  <textarea name="Additional Notes" rows="4" placeholder="Anything else we should know?" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500" />
                </div>

                <button type="submit" className="mt-3 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-orange-500 to-orange-700 px-8 py-5 text-[13px] font-black uppercase tracking-wide text-white shadow-[0_0_35px_rgba(249,115,22,.4)] transition hover:-translate-y-1">
                  Continue To Scheduling <ArrowRight className="h-5 w-5" />
                </button>

                <p className="text-center text-xs text-white/35">Your information is secure and will never be shared.</p>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}