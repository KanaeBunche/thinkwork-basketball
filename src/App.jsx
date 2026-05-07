import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  Trophy,
  Users,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

import logo from "./assets/thinkwork-logo.png";
import heroPlayer from "./assets/hero-player.png";
import arenaBg from "./assets/arena-bg.jpg";
import logoWall from "./assets/logo-glow-wall.png";
import programSkill from "./assets/program-skill.jpg";
import paymentShield from "./assets/payment-shield.png";

const navItems = ["Home", "Programs", "About", "Schedule", "Payments", "Contact"];

const programs = [
  {
    title: "Skill Development",
    subtitle: "Elevate your fundamentals and overall game.",
    image: programSkill,
    icon: Trophy,
    bullets: ["Ball handling", "Shooting form", "Footwork", "Game confidence"],
  },
  {
    title: "Group Training",
    subtitle: "Train with intensity. Improve together.",
    image: programSkill,
    icon: Users,
    bullets: ["High energy sessions", "Game-like drills", "Team chemistry", "Compete & improve"],
    featured: true,
  },
  {
    title: "Personal Training",
    subtitle: "1-on-1 training built around your goals.",
    image: arenaBg,
    icon: User,
    bullets: ["Personal plan", "Focused reps", "Coach feedback", "Player growth"],
  },
  {
    title: "Elite Training",
    subtitle: "Advanced training for serious athletes.",
    image: logoWall,
    icon: Star,
    bullets: ["Advanced drills", "Game IQ", "Mental edge", "Next-level pace"],
  },
];

const times = ["9:00 AM", "11:00 AM", "1:00 PM", "4:00 PM", "6:00 PM"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

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
                className="h-full w-full rounded-full object-cover scale-[1.18]"
              />
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-black uppercase leading-none tracking-[2px] text-white">ThinkWork</span>
              <span className="mt-1 block text-[10px] font-black uppercase tracking-[4px] text-orange-500">Basketball</span>
            </span>
          </a>

          <div className="hidden items-center gap-14 text-[13px] font-black uppercase tracking-wide text-white lg:flex">
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
            <a
              href="#schedule"
              className="rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-3 text-[11px] font-black uppercase tracking-wide shadow-[0_0_22px_rgba(249,115,22,.35)] transition hover:-translate-y-0.5 sm:px-7 lg:px-12 lg:text-[13px]"
            >
              Sign Up
            </a>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/5 lg:hidden"
              aria-label="Toggle mobile menu"
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
      <section id="home" className="relative min-h-[720px] overflow-hidden border-b border-cyan-400/10 pt-[72px] lg:min-h-[500px] lg:pt-[86px]">
        <div className="absolute inset-0 bg-[#030814]" />
        <img
          src={heroPlayer}
          alt="ThinkWork Basketball athlete"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-85 sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,13,.18)_0%,rgba(2,6,13,.45)_35%,#02060d_100%)] lg:bg-[linear-gradient(90deg,#02060d_0%,rgba(2,6,13,.86)_18%,rgba(2,6,13,.28)_52%,rgba(2,6,13,.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(0,132,255,.28),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(249,115,22,.2),transparent_28%)]" />

        <div className="relative z-10 mx-auto flex min-h-[648px] max-w-[1600px] items-end px-4 pb-12 sm:px-6 lg:min-h-[500px] lg:items-center lg:px-8 lg:pb-0 xl:px-28">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[560px]"
          >
            <h1 className="text-[48px] font-black italic uppercase leading-[.85] tracking-[-2px] sm:text-[64px] md:text-[78px] lg:text-[96px]">
              <span className="block bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">Think</span>
              <span className="block bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-800 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(0,140,255,.45)]">Work</span>
              <span className="mt-3 block text-[20px] not-italic tracking-[8px] text-orange-500 sm:text-[26px] sm:tracking-[12px] md:text-[32px] lg:text-[38px] lg:tracking-[18px]">Basketball</span>
            </h1>

            <p className="mt-6 max-w-[360px] text-[17px] font-medium leading-7 text-white sm:text-[20px] sm:leading-8">Train smarter. Work harder. Become unstoppable.</p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <a href="#schedule" className="inline-flex items-center justify-center gap-3 rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-8 py-4 text-[12px] font-black uppercase shadow-[0_0_25px_rgba(249,115,22,.45)] transition hover:-translate-y-1 sm:px-10 sm:text-[13px]">
                Sign Up / Apply
              </a>
              <a href="#programs" className="inline-flex items-center justify-center gap-4 rounded-md border border-cyan-200/40 bg-black/40 px-8 py-4 text-[12px] font-black uppercase transition hover:border-orange-400 hover:bg-orange-500/10 sm:px-10 sm:text-[13px]">
                View Programs <ArrowRight className="h-4 w-4 text-orange-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="relative border-b border-cyan-400/10 bg-[#020812] px-4 py-12 sm:px-6 lg:px-8 lg:py-8 xl:px-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[13px] font-black uppercase text-orange-500">Programs</p>
              <h2 className="mt-1 text-[28px] font-black uppercase leading-none tracking-[-1px] sm:text-[30px]">Training Options</h2>
              <div className="mt-3 h-[2px] w-20 bg-orange-500" />
            </div>
            <a href="#schedule" className="w-fit rounded-md border border-cyan-200/50 px-7 py-3 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10 sm:px-10 sm:py-4">
              View All Programs <ArrowRight className="ml-3 inline h-4 w-4 text-orange-500" />
            </a>
          </div>

          <div className="relative flex items-center gap-8">
            <button className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-cyan-400/70 text-cyan-300 shadow-[0_0_25px_rgba(0,140,255,.45)] lg:grid">
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <article
                    key={program.title}
                    onClick={() => setActiveCard(activeCard === program.title ? null : program.title)}
                    className="group h-[270px] cursor-pointer [perspective:1100px] sm:h-[250px]"
                  >
                    <div
                      className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${activeCard === program.title ? "[transform:rotateY(180deg)]" : ""} ${program.featured ? "sm:rotate-[-4deg]" : ""}`}
                    >
                      <div className="absolute inset-0 overflow-hidden rounded-lg border border-white/25 bg-black [backface-visibility:hidden]">
                        <img src={program.image} alt="" className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-110 group-hover:opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                        <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
                          <Icon className="mb-4 h-10 w-10 text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,.8)]" />
                          <h3 className="text-[21px] font-black uppercase leading-none sm:text-[22px]">{program.title}</h3>
                          <p className="mt-3 max-w-[230px] text-sm font-medium leading-6 text-white/85">{program.subtitle}</p>
                          <div className="mt-5 flex items-center justify-between text-[11px] font-black uppercase">
                            <span className="hidden sm:inline">Hover For Details <ArrowRight className="ml-2 inline h-3 w-3 text-orange-500" /></span>
                            <span className="sm:hidden">Tap For Details <ArrowRight className="ml-2 inline h-3 w-3 text-orange-500" /></span>
                            <ArrowRight className="h-4 w-4 text-white/40" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 flex flex-col justify-center rounded-lg border border-orange-500/60 bg-[#0a0b0d] p-7 shadow-[0_0_30px_rgba(249,115,22,.25)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-8">
                        <p className="text-[14px] font-black uppercase text-orange-500">What You Get</p>
                        <ul className="mt-5 space-y-3 text-sm font-semibold text-white/85">
                          {program.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-center gap-3"><Check className="h-4 w-4 text-orange-500" /> {bullet}</li>
                          ))}
                        </ul>
                        <a href="#schedule" className="mt-6 inline-flex w-fit rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-7 py-3 text-[12px] font-black uppercase shadow-[0_0_22px_rgba(249,115,22,.45)]">Join Now</a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <button className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-cyan-400/70 text-cyan-300 shadow-[0_0_25px_rgba(0,140,255,.45)] lg:grid">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* INFO GRID */}
      <section className="grid grid-cols-1 border-b border-cyan-400/10 bg-[#020812] lg:grid-cols-3">
        {/* ABOUT */}
        <div id="about" className="relative min-h-[310px] overflow-hidden border-b border-cyan-400/10 p-6 sm:p-8 lg:border-b-0 lg:border-r xl:p-14">
          <p className="text-[13px] font-black uppercase text-orange-500">About</p>
          <h2 className="mt-2 text-[28px] font-black uppercase leading-none sm:text-[30px]">Who We Are</h2>
          <p className="mt-6 max-w-[420px] text-[15px] font-medium leading-7 text-white/85">ThinkWork Basketball is built on the belief that hard work, discipline, and smart training create confident athletes and better people. We’re here to push your limits and help you reach your full potential.</p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-4 rounded-md border border-cyan-200/50 px-7 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10">Learn More <ArrowRight className="h-4 w-4 text-orange-500" /></a>
          <img
            src={logoWall}
            alt=""
            className="pointer-events-none absolute bottom-4 right-4 hidden h-[180px] w-[180px] rounded-full object-cover opacity-70 drop-shadow-[0_0_40px_rgba(0,140,255,.8)] sm:block xl:h-[220px] xl:w-[220px]"
          />
        </div>

        {/* SCHEDULE */}
        <div id="schedule" className="min-h-[310px] border-b border-cyan-400/10 p-6 sm:p-8 lg:border-b-0 lg:border-r xl:p-14">
          <p className="text-[13px] font-black uppercase text-orange-500">Schedule</p>
          <h2 className="mt-2 text-[28px] font-black uppercase leading-none sm:text-[30px]">Book Your Spot</h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_110px]">
            <div className="rounded-md border border-white/20 bg-black/40 p-3 sm:p-4">
              <div className="mb-3 flex items-center justify-between text-sm font-bold text-white/85">
                <span>‹</span><span>June 2024</span><span>›</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-white/70 sm:gap-2 sm:text-[11px]">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "", "", "", "", "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"].map((d, i) => (
                  <span key={`${d}-${i}`} className={`rounded p-1 ${d === "12" ? "bg-orange-600 text-white" : ""}`}>{d}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
              {times.map((time) => (
                <button key={time} className={`rounded border px-3 py-2 text-sm font-bold ${time === "11:00 AM" ? "border-orange-400 bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,.45)]" : "border-cyan-200/40 bg-black/30"}`}>{time}</button>
              ))}
            </div>
          </div>

          <a href="#contact" className="mt-4 inline-flex items-center gap-4 rounded-md border border-cyan-200/50 px-7 py-3 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10">Book Now <ArrowRight className="h-4 w-4 text-orange-500" /></a>
        </div>

        {/* PAYMENTS */}
        <div id="payments" className="relative min-h-[310px] overflow-hidden p-6 sm:p-8 xl:p-14">
          <p className="text-[13px] font-black uppercase text-orange-500">Payments</p>
          <h2 className="mt-2 text-[28px] font-black uppercase leading-none sm:text-[30px]">Simple & Secure</h2>
          <p className="mt-6 max-w-[380px] text-[15px] font-medium leading-7 text-white/85">Payment setup comes after the final sign-up and booking flow is approved.</p>
          <div className="mt-6 grid max-w-[330px] gap-3 text-sm font-bold text-white/85">
            {[
              "Apply or sign up first",
              "Choose a program",
              "Book a training time",
              "Pay after confirmation",
            ].map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-orange-600 text-xs font-black">{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
          <a href="#contact" className="mt-7 inline-flex items-center gap-4 rounded-md border border-cyan-200/50 px-7 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10">Payment After Approval <ArrowRight className="h-4 w-4 text-orange-500" /></a>
          <img
            src={paymentShield}
            alt="Secure payment shield"
            className="pointer-events-none absolute bottom-4 right-4 hidden h-[160px] w-[160px] object-contain opacity-60 drop-shadow-[0_0_35px_rgba(0,140,255,.8)] sm:block xl:h-[200px] xl:w-[200px]"
          />
        </div>
      </section>

      {/* MEDIA SPACE */}
      <section className="border-b border-cyan-400/10 bg-[#020812] px-4 py-12 sm:px-6 lg:px-8 lg:py-14 xl:px-28">
        <div className="mx-auto grid max-w-[1600px] gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/15 bg-black sm:min-h-[360px]">
            <img src={arenaBg} alt="" className="h-full min-h-[420px] w-full object-cover opacity-55 sm:min-h-[360px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent sm:bg-gradient-to-r sm:from-black/80 sm:via-black/20 sm:to-transparent" />
            <div className="absolute bottom-8 left-6 right-6 max-w-[420px] sm:left-8 sm:right-auto sm:top-8">
              <p className="text-[13px] font-black uppercase text-orange-500">Training Videos</p>
              <h2 className="mt-2 text-[28px] font-black uppercase leading-none sm:text-[34px]">Real Clips Will Go Here</h2>
              <p className="mt-4 text-white/75">This section is ready for his real videos, highlights, workouts, and social proof.</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {["Photo Gallery", "Athlete Moments"].map((title) => (
              <div key={title} className="rounded-lg border border-white/15 bg-white/[0.03] p-6 sm:p-7">
                <p className="text-[13px] font-black uppercase text-orange-500">Media</p>
                <h3 className="mt-2 text-[24px] font-black uppercase sm:text-[26px]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">Add real photos and videos once he sends the final content.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="bg-[#020812] px-4 py-8 sm:px-6 lg:px-8 xl:px-28">
        <div className="mx-auto grid max-w-[1600px] items-center gap-7 md:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr_220px]">
          <div>
            <p className="text-[13px] font-black uppercase text-orange-500">Contact</p>
            <h2 className="text-[28px] font-black uppercase leading-none sm:text-[30px]">Let’s Connect</h2>
          </div>
          <div className="grid gap-5 text-sm font-medium text-white/90 lg:grid-cols-3">
            <span className="flex items-center gap-4"><Phone className="h-7 w-7 shrink-0 rounded-full border border-orange-500/40 p-1.5 text-orange-500" /> (555) 123-4567</span>
            <span className="flex items-center gap-4 break-all"><Mail className="h-7 w-7 shrink-0 rounded-full border border-orange-500/40 p-1.5 text-orange-500" /> info@thinkworkbasketball.com</span>
            <span className="flex items-center gap-4"><MapPin className="h-7 w-7 shrink-0 rounded-full border border-orange-500/40 p-1.5 text-orange-500" /> 123 Champions Way</span>
          </div>
          <a href="mailto:info@thinkworkbasketball.com" className="inline-flex items-center justify-center gap-4 rounded-md border border-cyan-200/50 px-8 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10 md:col-span-2 xl:col-span-1">Send Message <ArrowRight className="h-4 w-4 text-orange-500" /></a>
        </div>
      </footer>
    </main>
  );
}
