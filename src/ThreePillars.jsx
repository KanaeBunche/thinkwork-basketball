import { motion } from "framer-motion";
import ecosystem from "./assets/ecosystem.png";
import pillarBasketball from "./assets/pillar-basketball.png";
import pillarOffcourt from "./assets/pillar-offcourt.png";
import pillarDiscipleship from "./assets/pillar-discipleship.png";

const pillars = [
  {
    image: pillarBasketball,
    title: "ThinkWork Basketball",
    subtitle: "The Game",
    number: "01",
    accent: "blue",
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
    subtitle: "The Mind",
    number: "02",
    accent: "blue",
    bullets: [
      "Strategy, Development & Execution",
      "Personal Growth & Development",
      "Life Skills & Goal Setting",
      "Mental Performance & Focus",
      "Winning the Mindset on and off the Court",
    ],
  },
  {
    image: pillarDiscipleship,
    title: "ThinkWork Discipleship",
    subtitle: "The Mission",
    number: "03",
    accent: "orange",
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
    <section
  id="the-ecosystem"
  className="relative overflow-hidden border-b border-cyan-400/10 bg-[#020611] px-4 py-24 sm:px-6 lg:px-8 xl:px-24"
>
       <div className="relative z-10 mx-auto mb-12 max-w-[1500px] text-center">

  <div className="mb-3 flex items-center justify-center gap-5">
    <div className="h-px w-20 bg-cyan-400/60" />

    <p className="text-[12px] font-black uppercase tracking-[8px] text-orange-500">
      ThinkWork Basketball
    </p>

    <div className="h-px w-20 bg-orange-500/60" />
  </div>

  <h2 className="text-[52px] font-black uppercase leading-none tracking-[-3px] text-white drop-shadow-[0_0_30px_rgba(255,255,255,.18)] sm:text-[78px] lg:text-[92px]">
    The Ecosystem
  </h2>
<p className="mt-4 text-[12px] font-black uppercase tracking-[7px] text-white/55 sm:text-sm">
    One Foundation. One Vision.
  </p>

</div>
         
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(0,132,255,.18),transparent_40%),radial-gradient(circle_at_80%_45%,rgba(255,106,0,.13),transparent_35%),radial-gradient(circle_at_20%_45%,rgba(0,132,255,.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        
              {/* Top Ecosystem Image */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_90px_rgba(0,132,255,.2)]"
        >
          <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top,rgba(0,132,255,.25),transparent_55%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

          <img
            src={ecosystem}
            alt="ThinkWork Ecosystem"
            className="relative z-10 w-full rounded-[26px] object-cover"
          />
        </motion.div>

        {/* Title Under Image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto mt-10 max-w-[1000px] text-center"
        >
         
        </motion.div>

        {/* Three Pillar Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const isOrange = pillar.accent === "orange";

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`group relative min-h-[330px] overflow-hidden rounded-[28px] border bg-[#06101d]/90 p-7 backdrop-blur-xl ${
                  isOrange
                    ? "border-orange-500/35 shadow-[0_0_55px_rgba(255,106,0,.1)]"
                    : "border-cyan-400/25 shadow-[0_0_55px_rgba(0,132,255,.1)]"
                }`}
              >
                <div
                  className={`absolute inset-0 opacity-80 ${
                    isOrange
                      ? "bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,.16),transparent_52%)]"
                      : "bg-[radial-gradient(circle_at_top_left,rgba(0,132,255,.16),transparent_52%)]"
                  }`}
                />

                

                <p className="absolute bottom-5 right-7 text-[84px] font-black leading-none text-white/[0.04]">
                  {pillar.number}
                </p>

                <div className="relative z-10">
                  <div className="flex items-start gap-5">
                    <motion.img
                      src={pillar.image}
                      alt={pillar.title}
                      whileHover={{ scale: 1.08, rotate: 2 }}
                      transition={{ duration: 0.35 }}
                      className={`h-[96px] w-[96px] shrink-0 rounded-full object-cover ${
                        isOrange
                          ? "shadow-[0_0_45px_rgba(255,106,0,.45)]"
                          : "shadow-[0_0_45px_rgba(0,132,255,.45)]"
                      }`}
                    />

                    <div className="pt-2">
                      <p
                        className={`text-[10px] font-black uppercase tracking-[4px] ${
                          isOrange ? "text-orange-400" : "text-cyan-400"
                        }`}
                      >
                        {pillar.subtitle}
                      </p>

                      <h3 className="mt-2 text-[23px] font-black uppercase leading-tight text-white sm:text-[25px]">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-8 grid gap-3">
                    {pillar.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm leading-6 text-white/72"
                      >
                        <span
                          className={`mt-1 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border text-[10px] ${
                            isOrange
                              ? "border-orange-500 text-orange-400 shadow-[0_0_12px_rgba(255,106,0,.3)]"
                              : "border-cyan-400 text-cyan-400 shadow-[0_0_12px_rgba(0,132,255,.3)]"
                          }`}
                        >
                          ✓
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Line */}
        <div className="mt-8 flex items-center gap-6 rounded-[22px] border border-white/10 bg-white/[0.03] px-8 py-6">
          <div className="h-px flex-1 bg-cyan-400/45" />
          <p className="hidden text-center text-[12px] font-black uppercase tracking-[8px] text-white/50 sm:block">
            One Foundation. One Vision.
          </p>
          <div className="h-px flex-1 bg-orange-500/45" />
        </div>
      </div>
    </section>
  );
}