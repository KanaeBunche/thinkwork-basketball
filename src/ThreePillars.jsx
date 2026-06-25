import { motion } from "framer-motion";
import pillarBasketball from "./assets/pillar-basketball.png";
import pillarOffcourt from "./assets/pillar-offcourt.png";
import pillarDiscipleship from "./assets/pillar-discipleship.png";

const pillars = [
  {
    image: pillarBasketball,
    title: "ThinkWork Basketball",
    subtitle: "The Game",
    desc: "Developing players through skill development, basketball IQ, court awareness, discipline, confidence, and competitive growth.",
    bullets: [
      "Basketball IQ & Court Awareness",
      "Skill Development & Game Strategy",
      "Offensive & Defensive Principles",
      "Situational Basketball & Game Strategy",
      "Confidence & Competitive Growth",
    ],
  },
  {
    image: pillarOffcourt,
    title: "ThinkWork Off-Court",
    subtitle: "The Blueprint & Playbook",
    desc: "Equipping players with the knowledge, habits and systems to elevate their game and their life.",
    bullets: [
      "Strategy, Development & Execution",
      "Personal Growth & Development",
      "Life Skills & Goal Setting",
      "Mental Performance & Focus",
      "Winning the 'Mindset' on and off the Court",
    ],
  },
  {
    image: pillarDiscipleship,
    title: "ThinkWork Discipleship",
    subtitle: "Truth in Mind • Christ in Heart • Faith in Action",
    desc: "Building disciples who lead with integrity, serve others and fulfill their God-given purpose.",
    bullets: [
      "Biblical Truth & Sound Doctrine",
      "Prayer & Spiritual Growth",
      "Christ-Centered Life Coaching",
      "Character & Integrity",
      "Growing in Wisdom, Maturity & Purpose",
    ],
  },
];

export default function ThreePillars() {
  return (
<section id="three-pillars" className="relative overflow-hidden border-b border-cyan-400/10 bg-[#020812] px-4 py-24 sm:px-6 lg:px-8 xl:px-28">      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,132,255,.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="mb-16 text-center">
          <p className="text-[13px] font-black uppercase tracking-[4px] text-orange-500">
            ThinkWork Basketball
          </p>
          <h2 className="mt-3 text-[42px] font-black uppercase leading-none tracking-[-2px] text-white sm:text-[58px]">
            The Three Pillars
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-base font-medium leading-8 text-white/65 sm:text-lg">
            One Foundation. One Vision. The Game. The Mind. The Mission.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Embedded Logo */}
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full bg-[#020812] blur-xl scale-110" />
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 25px rgba(0,132,255,0.2)",
                      "0 0 55px rgba(0,132,255,0.45)",
                      "0 0 25px rgba(0,132,255,0.2)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className="relative z-10 h-[220px] w-[220px] rounded-full overflow-hidden bg-black"
                >
                  <motion.img
                    src={pillar.image}
                    alt={pillar.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative w-full rounded-[28px] bg-[linear-gradient(180deg,#07111d_0%,#020812_100%)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(0,132,255,.08),transparent_55%)]" />

                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[3px] text-orange-400">
                    {pillar.subtitle}
                  </p>
                  <h3 className="mt-2 text-[22px] font-black uppercase leading-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-[300px] text-sm leading-7 text-white/60">
                    {pillar.desc}
                  </p>

                  <div className="mt-6 h-[1px] w-full bg-white/10" />

                  <ul className="mt-5 grid gap-2 text-left">
                    {pillar.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}