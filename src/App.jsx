import { motion } from "framer-motion";
import {
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
import logoWall from "./assets/logo-glow-wall.png";

import image0 from "./assets/images/image0.jpeg";
import image1 from "./assets/images/image1.jpeg";
import image2 from "./assets/images/image2.jpeg";
import image3 from "./assets/images/image3.jpeg";
import image4 from "./assets/images/image4.jpeg";

import trainingVideo from "./assets/videos/IMG_1193.mp4";

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

const galleryImages = [image0, image1, image2, image3, image4];

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
            <a
              href="#schedule"
              className="rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-3 text-[11px] font-black uppercase tracking-wide shadow-[0_0_22px_rgba(249,115,22,.35)] transition hover:-translate-y-0.5 sm:px-7 lg:px-12 lg:text-[13px]"
            >
              Join Now
            </a>

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
              <a href="#schedule" className="inline-flex items-center justify-center gap-3 rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-8 py-4 text-[12px] font-black uppercase shadow-[0_0_25px_rgba(249,115,22,.45)] transition hover:-translate-y-1 sm:px-10 sm:text-[13px]">
                Join Training
              </a>

              <a href="#programs" className="inline-flex items-center justify-center gap-4 rounded-md border border-cyan-200/40 bg-black/40 px-8 py-4 text-[12px] font-black uppercase transition hover:border-orange-400 hover:bg-orange-500/10 sm:px-10 sm:text-[13px]">
                View Packages <ArrowRight className="h-4 w-4 text-orange-500" />
              </a>
            </div>
          </motion.div>
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
                <article
                  key={program.title}
                  onClick={() => setActiveCard(activeCard === program.title ? null : program.title)}
                  className="h-[340px] cursor-pointer [perspective:1100px]"
                >
                  <div
                    className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
                      activeCard === program.title ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 overflow-hidden rounded-3xl border bg-black p-7 [backface-visibility:hidden] ${
                        program.featured ? "border-orange-500/70 shadow-[0_0_35px_rgba(249,115,22,.3)]" : "border-white/15"
                      }`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,132,255,.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,.18),transparent_35%)]" />

                      <div className="relative z-10 flex h-full flex-col">
                        <div className="flex items-start justify-between gap-4">
                          <Icon className="h-10 w-10 text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,.8)]" />
                          <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[10px] font-black uppercase text-orange-300">
                            {program.tag}
                          </span>
                        </div>

                        <p className="mt-7 text-[11px] font-black uppercase tracking-[3px] text-cyan-300">{program.category}</p>
                        <h3 className="mt-2 text-[30px] font-black uppercase leading-none">{program.title}</h3>
                        <p className="mt-3 text-sm font-semibold text-white/75">{program.sessions}</p>

                        <div className="mt-auto">
                          <p className="text-sm font-bold text-white/45 line-through">{program.regular}</p>
                          <p className="text-[46px] font-black leading-none text-white">{program.price}</p>
                          <p className="mt-2 text-[11px] font-black uppercase tracking-[2px] text-white/50">Deal Price</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-center rounded-3xl border border-orange-500/60 bg-[#0a0b0d] p-7 shadow-[0_0_30px_rgba(249,115,22,.25)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <p className="text-[14px] font-black uppercase text-orange-500">What You Get</p>

                      <ul className="mt-5 space-y-3 text-sm font-semibold text-white/85">
                        {program.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-3">
                            <Check className="h-4 w-4 text-orange-500" /> {bullet}
                          </li>
                        ))}
                      </ul>

                      <a href="#schedule" className="mt-7 inline-flex w-fit rounded-md bg-gradient-to-b from-orange-500 to-orange-700 px-7 py-3 text-[12px] font-black uppercase shadow-[0_0_22px_rgba(249,115,22,.45)]">
                        Join Now
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2 lg:grid-cols-3">
            {memberships.map(([name, sessions, price]) => (
              <div key={name} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                <div>
                  <p className="font-black uppercase">{name}</p>
                  <p className="text-sm text-white/55">{sessions}</p>
                </div>
                <p className="text-xl font-black text-orange-400">{price}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm font-semibold text-white/65">
            Extras: Single Session $40/hour • Partner Workout $25 per athlete • Small Groups $20–$30 per athlete • Sibling Discount 10% off second athlete monthly package
          </p>
        </div>
      </section>

      {/* ABOUT / SCHEDULE / PAYMENTS */}
      <section className="grid grid-cols-1 border-b border-cyan-400/10 bg-[#020812] lg:grid-cols-3">
        <div id="about" className="relative min-h-[420px] overflow-hidden border-b border-cyan-400/10 p-6 sm:p-8 lg:border-b-0 lg:border-r xl:p-14">
          <p className="text-[13px] font-black uppercase text-orange-500">Who We Are</p>
          <h2 className="mt-2 text-[30px] font-black uppercase leading-none sm:text-[38px]">More Than Skill</h2>
          <p className="mt-6 max-w-[480px] text-[15px] font-medium leading-7 text-white/85">
            At ThinkWork Basketball, we believe basketball is more than skill — it’s mindset, discipline, intelligence, and purpose.
          </p>
          <p className="mt-4 max-w-[480px] text-[15px] font-medium leading-7 text-white/75">
            We help athletes outTHINK, outWORK, and outPLAY through high-level skill development, basketball IQ training, mentorship, and competitive growth.
          </p>
          <p className="mt-5 text-[14px] font-black uppercase tracking-[3px] text-cyan-300">
            Develop the THINKSET as much as the skillset.
          </p>
          <img src={logoWall} alt="" className="pointer-events-none absolute bottom-4 right-4 hidden h-[170px] w-[170px] rounded-full object-cover opacity-50 drop-shadow-[0_0_40px_rgba(0,140,255,.8)] sm:block" />
        </div>

        <div id="schedule" className="min-h-[420px] border-b border-cyan-400/10 p-6 sm:p-8 lg:border-b-0 lg:border-r xl:p-14">
          <p className="text-[13px] font-black uppercase text-orange-500">Schedule</p>
          <h2 className="mt-2 text-[30px] font-black uppercase leading-none sm:text-[38px]">Book Your Spot</h2>
          <p className="mt-6 text-[15px] font-medium leading-7 text-white/75">
            Players can choose their program, preferred training days, and preferred times during sign-up.
          </p>

          <div className="mt-6 grid gap-3">
            {["Private Training", "Partner Workouts", "Small Group Training", "Monthly Memberships"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-bold text-white/85">
                <Check className="h-4 w-4 text-orange-500" /> {item}
              </div>
            ))}
          </div>

          <a href="#contact" className="mt-7 inline-flex items-center gap-4 rounded-md border border-cyan-200/50 px-7 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10">
            Start Sign-Up <ArrowRight className="h-4 w-4 text-orange-500" />
          </a>
        </div>

        <div id="payments" className="relative min-h-[420px] overflow-hidden p-6 sm:p-8 xl:p-14">
          <p className="text-[13px] font-black uppercase text-orange-500">Join Flow</p>
          <h2 className="mt-2 text-[30px] font-black uppercase leading-none sm:text-[38px]">Simple Process</h2>

          <div className="mt-6 grid max-w-[360px] gap-3 text-sm font-bold text-white/85">
            {["Player information", "Parent contact", "Program selection", "Preferred days/times", "Payment confirmation"].map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-orange-600 text-xs font-black">{index + 1}</span>
                {step}
              </div>
            ))}
          </div>

          <a href="#contact" className="mt-7 inline-flex items-center gap-4 rounded-md border border-cyan-200/50 px-7 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10">
            Join Now <ArrowRight className="h-4 w-4 text-orange-500" />
          </a>
        </div>
      </section>

   {/* MEDIA */}
<section
  id="media"
  className="relative overflow-hidden border-b border-cyan-400/10 bg-[#020812] px-4 py-16 sm:px-6 lg:px-8 xl:px-28"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,132,255,.16),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,.12),transparent_30%)]" />

  <div className="relative z-10 mx-auto max-w-[1600px]">
    <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-[13px] font-black uppercase text-orange-500">
          Media
        </p>

        <h2 className="mt-2 text-[38px] font-black uppercase leading-none tracking-[-1px] text-white sm:text-[54px] lg:text-[62px]">
          Training In Action
        </h2>

        <div className="mt-5 h-[2px] w-20 bg-orange-500" />

        <p className="mt-5 max-w-[560px] text-base font-medium leading-7 text-white/75 sm:text-lg">
          Real work. Real athletes. Real results. See training sessions,
          behind-the-scenes moments, and player development in action.
        </p>
      </div>

      <a
        href="#contact"
        className="inline-flex w-fit items-center justify-center gap-4 rounded-lg border border-orange-500 px-7 py-4 text-[12px] font-black uppercase tracking-wide text-white transition hover:bg-orange-500/10 sm:px-9"
      >
        View All Media <ArrowRight className="h-4 w-4 text-orange-500" />
      </a>
    </div>

    <div className="grid gap-6 xl:grid-cols-[1.05fr_1.45fr]">
      {/* FEATURE VIDEO */}
      <div className="overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_0_45px_rgba(0,132,255,.16)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          className="h-[300px] w-full bg-black object-contain sm:h-[460px] xl:h-[690px]"
        >
          <source src={trainingVideo} type="video/mp4" />
        </video>
      </div>

      {/* PHOTO CARDS */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((img, index) => {
          const cards = [
            ["1 ON 1 WORK", "Ball handling & defense"],
            ["COACH LEADERSHIP", "Mentorship & guidance"],
            ["BEHIND THE SCENES", "The work off the court"],
            ["SKILL DEVELOPMENT", "Footwork & fundamentals"],
            ["PLAYER GROWTH", "Progress every day"],
          ];

          return (
            <article
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#07111d] shadow-[0_0_28px_rgba(0,132,255,.1)]"
            >
              <div className="h-[220px] bg-black sm:h-[250px]">
                <img
                  src={img}
                  alt={cards[index]?.[0] || "ThinkWork Basketball media"}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="border-t border-white/10 bg-[#08111c] p-5">
                <p className="text-[14px] font-black uppercase text-white">
                  {cards[index]?.[0]}
                </p>

                <p className="mt-1 text-sm font-medium text-white/65">
                  {cards[index]?.[1]}
                </p>
              </div>
            </article>
          );
        })}
      </div>
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
              <Phone className="h-7 w-7 shrink-0 rounded-full border border-orange-500/40 p-1.5 text-orange-500" /> Add Phone
            </span>

            <span className="flex items-center gap-4 break-all">
              <Mail className="h-7 w-7 shrink-0 rounded-full border border-orange-500/40 p-1.5 text-orange-500" /> thinkworkbasketball@gmail.com
            </span>

            <span className="flex items-center gap-4">
              <MapPin className="h-7 w-7 shrink-0 rounded-full border border-orange-500/40 p-1.5 text-orange-500" /> Add Location
            </span>
          </div>

          <a href="mailto:thinkworkbasketball@gmail.com" className="inline-flex items-center justify-center gap-4 rounded-md border border-cyan-200/50 px-8 py-4 text-[12px] font-black uppercase transition hover:border-orange-500 hover:bg-orange-500/10 md:col-span-2 xl:col-span-1">
            Send Message <ArrowRight className="h-4 w-4 text-orange-500" />
          </a>
        </div>
      </footer>
    </main>
  );
}