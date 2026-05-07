import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  Star,
  Trophy,
  Users,
  User,
  Zap,
} from "lucide-react";

import logo from "./assets/thinkwork-logo.png";
import heroPlayer from "./assets/hero-player.png";
import arenaBg from "./assets/arena-bg.jpg";
import logoWall from "./assets/logo-glow-wall.png";
import programSkill from "./assets/program-skill.jpg";
import scheduleGlow from "./assets/schedule-glow.png";
import paymentShield from "./assets/payment-shield.png";

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
const paymentCards = ["VISA", "MC", "AMEX", "Pay", "G Pay"];

export default function App() {
  return (
    <main className="min-h-screen bg-[#02060d] text-white selection:bg-orange-500/30">
      {/* NAV */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-400/10 bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-[86px] max-w-[1600px] items-center justify-between px-8 xl:px-28">
          <a href="#home" className="flex items-center gap-4">
            <img src={logo} alt="ThinkWork Basketball" className="h-[76px] w-[76px] object-contain drop-shadow-[0_0_24px_rgba(0,140,255,.8)]" />
          </a>

          <div className="hidden items-center gap-14 text-[13px] font-black uppercase tracking-wide text-white lg:flex">
            {["Home", "Programs", "About", "Schedule", "Payments", "Contact"].map((item, index) => (
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

          <a href="#schedule" className="rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-12 py-4 text-[13px] font-black uppercase tracking-wide shadow-[0_0_30px_rgba(249,115,22,.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(249,115,22,.7)]">
            Sign Up / Apply
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-[500px] overflow-hidden border-b border-cyan-400/10 pt-[86px]">
        <div className="absolute inset-0 bg-[#030814]" />
        <img src={heroPlayer} alt="ThinkWork Basketball athlete" className="absolute inset-0 h-full w-full object-cover object-center opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#02060d_0%,rgba(2,6,13,.86)_18%,rgba(2,6,13,.28)_52%,rgba(2,6,13,.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(0,132,255,.25),transparent_28%),radial-gradient(circle_at_18%_65%,rgba(249,115,22,.18),transparent_24%)]" />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1600px] items-center px-8 xl:px-28">
          <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="max-w-[560px]">
            <h1 className="text-[72px] font-black italic uppercase leading-[.82] tracking-[-3px] sm:text-[96px]">
              <span className="block bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">Think</span>
              <span className="block bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-800 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(0,140,255,.45)]">Work</span>
              <span className="mt-3 block text-[30px] not-italic tracking-[18px] text-orange-500 sm:text-[38px]">Basketball</span>
            </h1>

            <p className="mt-7 max-w-[360px] text-[20px] font-medium leading-8 text-white">Train smarter. Work harder. Become unstoppable.</p>

            <div className="mt-7 flex gap-5">
              <a href="#schedule" className="inline-flex items-center gap-3 rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-10 py-4 text-[13px] font-black uppercase shadow-[0_0_25px_rgba(249,115,22,.45)] transition hover:-translate-y-1">
                Sign Up / Apply
              </a>
              <a href="#programs" className="inline-flex items-center gap-4 rounded-md border border-cyan-200/40 bg-black/30 px-10 py-4 text-[13px] font-black uppercase transition hover:border-orange-400 hover:bg-orange-500/10">
                View Programs <ArrowRight className="h-4 w-4 text-orange-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="relative border-b border-cyan-400/10 bg-[#020812] px-8 py-8 xl:px-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[13px] font-black uppercase text-orange-500">Programs</p>
              <h2 className="mt-1 text-[30px] font-black uppercase leading-none tracking-[-1px]">Training Options</h2>
              <div className="mt-3 h-[2px] w-20 bg-orange-500" />
            </div>
            <a href="#schedule" className="hidden rounded-md border border-cyan-200/50 px-10 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10 md:inline-flex">
              View All Programs <ArrowRight className="ml-3 h-4 w-4 text-orange-500" />
            </a>
          </div>

          <div className="relative flex items-center gap-8">
            <button className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-cyan-400/70 text-cyan-300 shadow-[0_0_25px_rgba(0,140,255,.45)] lg:grid">
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="grid flex-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <article key={program.title} className="group h-[250px] [perspective:1100px]">
                    <div className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${program.featured ? "rotate-[-4deg]" : ""}`}>
                      <div className="absolute inset-0 overflow-hidden rounded-lg border border-white/25 bg-black [backface-visibility:hidden]">
                        <img src={program.image} alt="" className="h-full w-full object-cover opacity-45 grayscale transition duration-500 group-hover:scale-110 group-hover:opacity-70" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                        <div className="relative flex h-full flex-col justify-end p-7">
                          <Icon className="mb-4 h-10 w-10 text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,.8)]" />
                          <h3 className="text-[22px] font-black uppercase leading-none">{program.title}</h3>
                          <p className="mt-3 max-w-[230px] text-sm font-medium leading-6 text-white/85">{program.subtitle}</p>
                          <div className="mt-5 flex items-center justify-between text-[11px] font-black uppercase">
                            <span>View Details <ArrowRight className="ml-2 inline h-3 w-3 text-orange-500" /></span>
                            <ArrowRight className="h-4 w-4 text-white/40" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 flex flex-col justify-center rounded-lg border border-orange-500/60 bg-[#0a0b0d] p-8 shadow-[0_0_30px_rgba(249,115,22,.25)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
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
      <section className="grid border-b border-cyan-400/10 bg-[#020812] lg:grid-cols-3">
        {/* ABOUT */}
        <div id="about" className="relative min-h-[310px] border-b border-cyan-400/10 p-8 lg:border-b-0 lg:border-r xl:p-14">
          <p className="text-[13px] font-black uppercase text-orange-500">About</p>
          <h2 className="mt-2 text-[30px] font-black uppercase leading-none">Who We Are</h2>
          <p className="mt-6 max-w-[420px] text-[15px] font-medium leading-7 text-white/85">ThinkWork Basketball is built on the belief that hard work, discipline, and smart training create confident athletes and better people. We’re here to push your limits and help you reach your full potential.</p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-4 rounded-md border border-cyan-200/50 px-7 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10">Learn More <ArrowRight className="h-4 w-4 text-orange-500" /></a>
          <img src={logoWall} alt="" className="pointer-events-none absolute bottom-5 right-7 hidden h-[230px] w-[230px] rounded-full object-cover opacity-95 drop-shadow-[0_0_40px_rgba(0,140,255,.8)] xl:block" />
        </div>

        {/* SCHEDULE */}
        <div id="schedule" className="min-h-[310px] border-b border-cyan-400/10 p-8 lg:border-b-0 lg:border-r xl:p-14">
          <p className="text-[13px] font-black uppercase text-orange-500">Schedule</p>
          <h2 className="mt-2 text-[30px] font-black uppercase leading-none">Book Your Spot</h2>

          <div className="mt-5 grid gap-5 md:grid-cols-[1fr_100px]">
            <div className="rounded-md border border-white/20 bg-black/40 p-4">
              <div className="mb-3 flex items-center justify-between text-sm font-bold text-white/85">
                <span>‹</span><span>June 2024</span><span>›</span>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-[11px] font-bold text-white/70">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "", "", "", "", "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"].map((d, i) => (
                  <span key={`${d}-${i}`} className={`rounded p-1 ${d === "12" ? "bg-orange-600 text-white" : ""}`}>{d}</span>
                ))}
              </div>
            </div>
            <div className="grid gap-2">
              {times.map((time) => (
                <button key={time} className={`rounded border px-3 py-2 text-sm font-bold ${time === "11:00 AM" ? "border-orange-400 bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,.45)]" : "border-cyan-200/40 bg-black/30"}`}>{time}</button>
              ))}
            </div>
          </div>

          <a href="#contact" className="mt-4 inline-flex items-center gap-4 rounded-md border border-cyan-200/50 px-7 py-3 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10">Book Now <ArrowRight className="h-4 w-4 text-orange-500" /></a>
        </div>

        {/* PAYMENTS */}
        <div id="payments" className="relative min-h-[310px] overflow-hidden p-8 xl:p-14">
          <p className="text-[13px] font-black uppercase text-orange-500">Payments</p>
          <h2 className="mt-2 text-[30px] font-black uppercase leading-none">Simple & Secure</h2>
          <p className="mt-6 max-w-[380px] text-[15px] font-medium leading-7 text-white/85">We make payments easy and secure. Choose your program and checkout in just a few clicks.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {paymentCards.map((card) => (
              <span key={card} className="rounded bg-white px-3 py-1 text-xs font-black text-slate-900">{card}</span>
            ))}
          </div>
          <a href="#contact" className="mt-7 inline-flex items-center gap-4 rounded-md border border-cyan-200/50 px-7 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10">Make A Payment <ArrowRight className="h-4 w-4 text-orange-500" /></a>
          <img src={paymentShield} alt="Secure payment shield" className="pointer-events-none absolute bottom-4 right-8 h-[220px] w-[220px] object-contain drop-shadow-[0_0_35px_rgba(0,140,255,.8)]" />
        </div>
      </section>

      {/* MEDIA SPACE */}
      <section className="border-b border-cyan-400/10 bg-[#020812] px-8 py-14 xl:px-28">
        <div className="mx-auto grid max-w-[1600px] gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/15 bg-black">
            <img src={arenaBg} alt="" className="h-full min-h-[360px] w-full object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            <div className="absolute left-8 top-8 max-w-[420px]">
              <p className="text-[13px] font-black uppercase text-orange-500">Training Videos</p>
              <h2 className="mt-2 text-[34px] font-black uppercase leading-none">Real Clips Will Go Here</h2>
              <p className="mt-4 text-white/75">This section is ready for his real videos, highlights, workouts, and social proof.</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {["Photo Gallery", "Athlete Moments"].map((title) => (
              <div key={title} className="rounded-lg border border-white/15 bg-white/[0.03] p-7">
                <p className="text-[13px] font-black uppercase text-orange-500">Media</p>
                <h3 className="mt-2 text-[26px] font-black uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">Add real photos and videos once he sends the final content.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="bg-[#020812] px-8 py-5 xl:px-28">
        <div className="mx-auto grid max-w-[1600px] items-center gap-6 md:grid-cols-[260px_1fr_220px]">
          <div>
            <p className="text-[13px] font-black uppercase text-orange-500">Contact</p>
            <h2 className="text-[30px] font-black uppercase leading-none">Let’s Connect</h2>
          </div>
          <div className="grid gap-5 text-sm font-medium text-white/90 md:grid-cols-3">
            <span className="flex items-center gap-4"><Phone className="h-7 w-7 rounded-full border border-orange-500/40 p-1.5 text-orange-500" /> (555) 123-4567</span>
            <span className="flex items-center gap-4"><Mail className="h-7 w-7 rounded-full border border-orange-500/40 p-1.5 text-orange-500" /> info@thinkworkbasketball.com</span>
            <span className="flex items-center gap-4"><MapPin className="h-7 w-7 rounded-full border border-orange-500/40 p-1.5 text-orange-500" /> 123 Champions Way</span>
          </div>
          <a href="mailto:info@thinkworkbasketball.com" className="inline-flex items-center justify-center gap-4 rounded-md border border-cyan-200/50 px-8 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10">Send Message <ArrowRight className="h-4 w-4 text-orange-500" /></a>
        </div>
      </footer>
    </main>
  );
}
