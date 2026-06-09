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
import { useEffect, useMemo, useState } from "react";
import { supabase } from "./supabaseClient";

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

const navItems = ["Home", "Programs", "About", "Schedule", "Media", "Contact"];

const DASHBOARD_PASSWORD = "ThinkWork123";

const weekdayTimes = [
  { value: "9:00 AM", label: "9:00 AM - 10:00 AM" },
  { value: "10:30 AM", label: "10:30 AM - 11:30 AM" },
  { value: "12:00 PM", label: "12:00 PM - 1:00 PM" },
  { value: "1:30 PM", label: "1:30 PM - 2:30 PM" },
  { value: "3:00 PM", label: "3:00 PM - 4:00 PM" },
  { value: "4:30 PM", label: "4:30 PM - 5:30 PM" },
];

const saturdayTimes = [
  { value: "8:00 AM", label: "8:00 AM - 9:00 AM" },
  { value: "9:30 AM", label: "9:30 AM - 10:30 AM" },
];



const getDayName = (dateValue) => {
  if (!dateValue) return "";

  const [year, month, day] = dateValue.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("en-US", { weekday: "long" });
};

const getTimesForDate = (dateValue) => {
  const dayName = getDayName(dateValue);

  if (
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(dayName)
  ) {
    return weekdayTimes;
  }

  if (dayName === "Saturday") {
    return saturdayTimes;
  }

  return [];
};

const formatDateValue = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatDisplayDate = (dateValue) => {
  if (!dateValue) return "";

  const [year, month, day] = dateValue.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getProgramScheduleMeta = (programTitle = "") => {
  const title = programTitle || "";

  if (title === "Starter") {
    return { slotsPerWeek: 3, weeks: 1, totalSessions: 3, label: "3 sessions • 1 week" };
  }

  if (title === "Acceleration") {
    return { slotsPerWeek: 4, weeks: 1, totalSessions: 4, label: "4 sessions • 1 week" };
  }

  if (title === "Growth") {
    return { slotsPerWeek: 5, weeks: 1, totalSessions: 5, label: "5 sessions  • 1 week" };
  }

  if (title === "Consistency") {
    return { slotsPerWeek: 3, weeks: 2, totalSessions: 6, label: "3 sessions per week • 2 weeks" };
  }

  if (title === "Foundation") {
    return { slotsPerWeek: 4, weeks: 2, totalSessions: 8, label: "4 sessions per week • 2 weeks" };
  }

  if (title === "Transformation") {
    return { slotsPerWeek: 5, weeks: 2, totalSessions: 10, label: "5 sessions per week • 2 weeks" };
  }

  if (title === "ThinkWork Growth") {
    return { slotsPerWeek: 3, weeks: 4, totalSessions: 12, label: "3 sessions per week • 4 weeks" };
  }

  if (title === "ThinkWork Pro") {
    return { slotsPerWeek: 4, weeks: 4, totalSessions: 16, label: "4 sessions per week • 4 weeks" };
  }

  if (title === "ThinkWork Elite") {
    return { slotsPerWeek: 5, weeks: 4, totalSessions: 20, label: "5 sessions per week • 4 weeks" };
  }

  if (title.includes("2 Month Summer")) {
    return { slotsPerWeek: 5, weeks: 8, totalSessions: 40, label: "5 sessions per week • 8 weeks" };
  }

  return { slotsPerWeek: 1, weeks: 1, totalSessions: 1, label: "1 session" };
};

const buildRecurringBookings = (weeklySelections, weeks) => {
  return weeklySelections.flatMap((selection) => {
    const [year, month, day] = selection.date.split("-").map(Number);
    const firstDate = new Date(year, month - 1, day);

    return Array.from({ length: weeks }, (_, weekIndex) => {
      const sessionDate = new Date(firstDate);
      sessionDate.setDate(firstDate.getDate() + weekIndex * 7);

      return {
        training_date: formatDateValue(sessionDate),
        training_time: selection.time,
        weekly_day: getDayName(selection.date),
      };
    });
  });
};

const summarizeWeeklySchedule = (weeklySelections) => {
  return weeklySelections
    .filter((selection) => selection.date && selection.time)
    .map((selection) => `${getDayName(selection.date)} • ${selection.time}`)
    .join("\n");
};
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
        scheduleLabel: "3 sessions per week",
        originalPrice: "$120",
        price: "$110",
      },
      {
        title: "Acceleration",
        desc: "More weekly reps focused on skill growth and basketball IQ",
        sessions: "4 Sessions",
        scheduleLabel: "4 sessions per week",
        originalPrice: "$160",
        price: "$145",
      },
      {
        title: "Growth",
        desc: "Consistent development with advanced competitive training",
        sessions: "5 Sessions",
        scheduleLabel: "5 sessions per week",
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
        scheduleLabel: "3 sessions per week • 2 weeks",
        originalPrice: "$240",
        price: "$225",
      },
      {
        title: "Foundation",
        desc: "Strong skill foundation, discipline, and confidence building",
        sessions: "8 Sessions",
        scheduleLabel: "4 sessions per week • 2 weeks",
        originalPrice: "$320",
        price: "$280",
      },
      {
        title: "Transformation",
        desc: "High-level development focused on competitive growth",
        sessions: "10 Sessions",
        scheduleLabel: "5 sessions per week • 2 weeks",
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
        scheduleLabel: "3 sessions per week • 4 weeks",
        originalPrice: "$480",
        price: "$460",
        bonus: "1 Exclusive outTHINK Bonus Session",
      },
      {
        title: "ThinkWork Pro",
        desc: "High-level player development and leadership growth",
        sessions: "16 Sessions",
        scheduleLabel: "4 sessions per week • 4 weeks",
        originalPrice: "$640",
        price: "$610",
        bonus: "2 Exclusive outWORK Bonus Sessions",
      },
      {
        title: "ThinkWork Elite",
        desc: "Elite commitment focused on complete player development",
        sessions: "20 Sessions",
        scheduleLabel: "5 sessions per week • 4 weeks",
        originalPrice: "$800",
        price: "$750",
        bonus: "3 Exclusive outPLAY Bonus Sessions",
      },
      {
        title: "2 Month Summer Monthly Commitment - ThinkWork Exclusive",
        desc: "Intensive summer training program for maximum growth",
        sessions: "40 Sessions",
        scheduleLabel: "5 sessions per week • 8 weeks",
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
          Your registration and training time have been submitted successfully.
          Coach Pree will review your registration and follow up with payment
          and confirmation details.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-b from-orange-500 to-orange-700 px-8 py-5 text-sm font-black uppercase"
        >
          Back To Home
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </main>
  );
}


const getPurchasedSessionCount = (sessionsText, programName) => {
  const program = programName || "";

  if (
    program.includes("Individual") ||
    program.includes("Partner") ||
    program.includes("Small Group") ||
    program.includes("Free Session") ||
    sessionsText?.includes("Hour")
  ) {
    return 1;
  }

  const match = sessionsText?.match(/\d+/);
  return match ? Math.max(1, Number(match[0])) : 1;
};

const getCompletedSessionCount = (signup) => {
  const completed = Number(signup.sessions_completed || 0);
  return Number.isNaN(completed) ? 0 : completed;
};

const getDashboardScheduleSummary = (signup) => {
  const notes = signup.additional_notes || "";
  const marker = "Weekly training schedule:";
  const index = notes.indexOf(marker);

  if (index !== -1) {
    return notes
      .slice(index + marker.length)
      .split("\n\n")[0]
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }

  if (signup.training_date && signup.training_time) {
    return [`${getDayName(signup.training_date)} • ${signup.training_time}`];
  }

  return [];
};

function DashboardPasswordPage({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === DASHBOARD_PASSWORD) {
      localStorage.setItem("thinkwork_dashboard_unlocked", "true");
      setError("");
      onUnlock();
      return;
    }

    setError("Incorrect password. Please try again.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#02060d] px-6 text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-[32px] border border-white/10 bg-[#08111c] p-8 shadow-[0_0_60px_rgba(0,132,255,.14)]"
      >
        <p className="text-[12px] font-black uppercase tracking-[3px] text-orange-500">
          Owner Access
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase leading-none">
          Dashboard Login
        </h1>

        <p className="mt-4 text-sm leading-6 text-white/55">
          Enter the dashboard password to view registrations and manage sessions.
        </p>

        <div className="mt-7">
          <label className="mb-2 block text-sm font-bold text-white">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter dashboard password"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
          />
        </div>

        {error && (
          <p className="mt-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="mt-6 w-full rounded-2xl bg-gradient-to-b from-orange-500 to-orange-700 px-6 py-4 text-[12px] font-black uppercase tracking-[2px] text-white shadow-[0_0_35px_rgba(249,115,22,.25)] transition hover:-translate-y-0.5"
        >
          Open Dashboard
        </button>
      </form>
    </main>
  );
}

function DashboardPage() {
  const emptyManualSignup = {
    athleteFirstName: "",
    athleteLastName: "",
    athleteAge: "",
    parentName: "",
    athletePhone: "",
    parentPhone: "",
    parentEmail: "",
    instagram: "",
    program: "",
    programSessions: "",
    programPrice: "",
    trainingDate: "",
    trainingTime: "",
    notes: "",
    paymentStatus: "Not Paid",
  };

  const [signups, setSignups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddSignup, setShowAddSignup] = useState(false);
  const [manualSignup, setManualSignup] = useState(emptyManualSignup);
  const [manualSubmitting, setManualSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSignups = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("signups")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Could not load dashboard.");
      setLoading(false);
      return;
    }

    setSignups(data || []);
    setLoading(false);
  };

  const updateManualSignup = (field, value) => {
    setManualSignup((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addManualSignup = async (e) => {
    e.preventDefault();

    if (!manualSignup.athleteFirstName || !manualSignup.parentName) {
      alert("Please add at least the athlete first name and parent name.");
      return;
    }

    setManualSubmitting(true);

    const selectedProgramInfo = packageGroups
      .flatMap((group) => group.items)
      .find((program) => program.title === manualSignup.program);

    const { error } = await supabase.from("signups").insert({
      athlete_first_name: manualSignup.athleteFirstName,
      athlete_last_name: manualSignup.athleteLastName,
      athlete_age: manualSignup.athleteAge,
      parent_guardian_name: manualSignup.parentName,
      phone: manualSignup.athletePhone,
      parent_phone: manualSignup.parentPhone,
      email: manualSignup.parentEmail,
      instagram: manualSignup.instagram,
      selected_program: manualSignup.program,
      program_sessions:
        manualSignup.programSessions || selectedProgramInfo?.sessions || "",
      program_price: manualSignup.programPrice || selectedProgramInfo?.price || "",
      training_date: manualSignup.trainingDate,
      training_time: manualSignup.trainingTime,
      additional_notes: manualSignup.notes,
      payment_status: manualSignup.paymentStatus || "Not Paid",
      confirmation_status:
        manualSignup.paymentStatus === "Paid"
          ? "Manual Entry"
          : "Not Sent",
      sessions_completed: 0,
    });

    if (error) {
      console.error(error);
      alert("Could not add registration.");
      setManualSubmitting(false);
      return;
    }

    setManualSignup(emptyManualSignup);
    setShowAddSignup(false);
    setManualSubmitting(false);
    await fetchSignups();
    alert("Manual registration added.");
  };

  const deleteSignup = async (id) => {
    const confirmed = window.confirm(
      "Delete this registration? This cannot be undone."
    );

    if (!confirmed) return;

    const { data, error } = await supabase
      .from("signups")
      .delete()
      .eq("id", id)
      .select("id");

    if (error) {
      console.error("Delete error:", error);
      alert(`Could not delete registration: ${error.message}`);
      return;
    }

    if (!data || data.length === 0) {
      alert(
        "Delete did not go through. Check the Supabase DELETE policy for the signups table."
      );
      return;
    }

    await fetchSignups();
    alert("Registration deleted.");
  };

  const updateCompletedSessions = async (signup, change) => {
    const purchased = getPurchasedSessionCount(
      signup.program_sessions,
      signup.selected_program
    );

    const currentCompleted = getCompletedSessionCount(signup);

    const nextCompleted = Math.max(
      0,
      Math.min(purchased, currentCompleted + change)
    );

    const { error } = await supabase
      .from("signups")
      .update({
        sessions_completed: nextCompleted,
      })
      .eq("id", signup.id);

    if (error) {
      console.error("Session update error:", error);
      alert(`Could not update sessions: ${error.message}`);
      return;
    }

    await fetchSignups();
  };

 const markPaid = async (signup) => {
    const confirmed = window.confirm(
      "Mark this registration as PAID and send the confirmation email?"
    );

    if (!confirmed) return;

   const emailResponse = await fetch("/api/send-confirmation", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    parentEmail: signup.email,
    athleteName: `${signup.athlete_first_name || ""} ${
      signup.athlete_last_name || ""
    }`.trim(),
    program: signup.selected_program,
    trainingDate: signup.training_date,
    trainingTime: signup.training_time,

    weeklySchedule: getDashboardScheduleSummary(signup).join("\n"),
    scheduleLabel: signup.program_sessions || "",
  }),
});

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json().catch(() => null);
      console.error(errorData);
      alert("Payment was not updated because the confirmation email failed.");
      return;
    }

    const { error } = await supabase
      .from("signups")
      .update({
        payment_status: "Paid",
        confirmation_status: "Confirmation Sent",
      })
      .eq("id", signup.id);

    if (error) {
      console.error(error);
      alert("Email sent, but payment status could not be updated.");
      return;
    }

    await fetchSignups();

    alert("Payment marked as PAID. Confirmation email sent.");
  };

  const filteredSignups = signups.filter((signup) => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) return true;

    const purchased = getPurchasedSessionCount(
      signup.program_sessions,
      signup.selected_program
    );
    const completed = getCompletedSessionCount(signup);
    const remaining = Math.max(0, purchased - completed);

    return [
      signup.athlete_first_name,
      signup.athlete_last_name,
      `${signup.athlete_first_name || ""} ${signup.athlete_last_name || ""}`,
      signup.parent_guardian_name,
      signup.phone,
      signup.parent_phone,
      signup.email,
      signup.instagram,
      signup.selected_program,
      signup.program_sessions,
      signup.program_price,
      signup.training_date,
      signup.training_time,
      signup.payment_status,
      signup.confirmation_status,
      `bought ${purchased}`,
      `done ${completed}`,
      `left ${remaining}`,
      String(purchased),
      String(completed),
      String(remaining),
    ]
      .filter(Boolean)
      .some((value) => String(value).toLowerCase().includes(search));
  });

  useEffect(() => {
    fetchSignups();
  }, []);

  return (
    <main className="min-h-screen bg-[#02060d] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-8 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[#08111c] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[3px] text-orange-500">
              Owner Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
              ThinkWork Signups
            </h1>
            <p className="mt-2 text-sm text-white/50">
              View registrations, selected training dates, times, and payment status.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search name, parent, phone, email, program, sessions..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500 lg:w-[360px]"
            />

            <button
              onClick={() => setShowAddSignup((prev) => !prev)}
              className="rounded-2xl border border-cyan-400/40 px-6 py-4 text-[12px] font-black uppercase tracking-[2px] text-cyan-200 transition hover:bg-cyan-400/10"
            >
              {showAddSignup ? "Close Add Form" : "Add Signup"}
            </button>

            <button
              onClick={fetchSignups}
              className="rounded-2xl border border-orange-500/40 px-6 py-4 text-[12px] font-black uppercase tracking-[2px] transition hover:bg-orange-500/10"
            >
              Refresh
            </button>
          </div>
        </div>

        {showAddSignup && (
          <form
            onSubmit={addManualSignup}
            className="mb-8 rounded-[28px] border border-cyan-400/20 bg-[#08111c] p-6 shadow-[0_0_35px_rgba(34,211,238,.08)]"
          >
            <div className="mb-6">
              <p className="text-[12px] font-black uppercase tracking-[3px] text-cyan-300">
                Manual Entry
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase">
                Add Registration
              </h2>
              <p className="mt-2 text-sm text-white/45">
                Use this when Coach Pree gets a signup outside the website.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Athlete First Name
                </label>
                <input
                  value={manualSignup.athleteFirstName}
                  onChange={(e) =>
                    updateManualSignup("athleteFirstName", e.target.value)
                  }
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="First name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Athlete Last Name
                </label>
                <input
                  value={manualSignup.athleteLastName}
                  onChange={(e) =>
                    updateManualSignup("athleteLastName", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="Last name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Athlete Age
                </label>
                <input
                  type="number"
                  value={manualSignup.athleteAge}
                  onChange={(e) =>
                    updateManualSignup("athleteAge", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="Age"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Parent/Guardian Name
                </label>
                <input
                  value={manualSignup.parentName}
                  onChange={(e) =>
                    updateManualSignup("parentName", e.target.value)
                  }
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="Parent name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Athlete Phone
                </label>
                <input
                  type="tel"
                  value={manualSignup.athletePhone}
                  onChange={(e) =>
                    updateManualSignup("athletePhone", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Parent Phone
                </label>
                <input
                  type="tel"
                  value={manualSignup.parentPhone}
                  onChange={(e) =>
                    updateManualSignup("parentPhone", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="Parent phone"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Parent Email
                </label>
                <input
                  type="email"
                  value={manualSignup.parentEmail}
                  onChange={(e) =>
                    updateManualSignup("parentEmail", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Instagram
                </label>
                <input
                  value={manualSignup.instagram}
                  onChange={(e) =>
                    updateManualSignup("instagram", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="@handle"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Program
                </label>
                <select
                  value={manualSignup.program}
                  onChange={(e) =>
                    updateManualSignup("program", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#08111c] px-5 py-4 text-sm text-white outline-none focus:border-orange-500"
                >
                  <option value="">Choose a program</option>
                  {packageGroups.flatMap((group) =>
                    group.items.map((program) => (
                      <option key={`manual-${program.title}`} value={program.title}>
                        {program.title} - {program.sessions} - {program.price}
                      </option>
                    ))
                  )}
                  <option value="Individual Single Sessions">
                    Individual Single Sessions
                  </option>
                  <option value="Partner Sessions">Partner Sessions</option>
                  <option value="Small Group Sessions">
                    Small Group Sessions
                  </option>
                  <option value="Claim Your Free Session">
                    Claim Your Free Session
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Program Sessions
                </label>
                <input
                  value={manualSignup.programSessions}
                  onChange={(e) =>
                    updateManualSignup("programSessions", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="Optional override"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Program Price
                </label>
                <input
                  value={manualSignup.programPrice}
                  onChange={(e) =>
                    updateManualSignup("programPrice", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="$"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Payment Status
                </label>
                <select
                  value={manualSignup.paymentStatus}
                  onChange={(e) =>
                    updateManualSignup("paymentStatus", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#08111c] px-5 py-4 text-sm text-white outline-none focus:border-orange-500"
                >
                  <option value="Not Paid">Not Paid</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Training Date
                </label>
                <input
                  type="date"
                  value={manualSignup.trainingDate}
                  onChange={(e) =>
                    updateManualSignup("trainingDate", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Training Time
                </label>
                <input
                  value={manualSignup.trainingTime}
                  onChange={(e) =>
                    updateManualSignup("trainingTime", e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="9:00 AM - 10:00 AM"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-white">
                  Notes
                </label>
                <input
                  value={manualSignup.notes}
                  onChange={(e) => updateManualSignup("notes", e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
                  placeholder="Optional notes"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={manualSubmitting}
                className="rounded-2xl bg-gradient-to-b from-orange-500 to-orange-700 px-6 py-4 text-[12px] font-black uppercase tracking-[2px] text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {manualSubmitting ? "Adding..." : "Add Registration"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setManualSignup(emptyManualSignup);
                  setShowAddSignup(false);
                }}
                className="rounded-2xl border border-white/10 px-6 py-4 text-[12px] font-black uppercase tracking-[2px] text-white/70 hover:bg-white/5"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {loading ? (
          <p className="text-white/60">Loading signups...</p>
        ) : signups.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <p className="text-lg font-bold text-white/70">No signups yet.</p>
          </div>
        ) : filteredSignups.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <p className="text-lg font-bold text-white/70">No matching registrations found.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-4 lg:hidden">
              {filteredSignups.map((signup) => {
                const purchased = getPurchasedSessionCount(
                  signup.program_sessions,
                  signup.selected_program
                );
                const completed = getCompletedSessionCount(signup);
                const remaining = Math.max(0, purchased - completed);

                return (
                  <article
                    key={`mobile-${signup.id}`}
                    className="rounded-[26px] border border-white/10 bg-[#08111c] p-5 shadow-[0_0_30px_rgba(0,132,255,.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-black text-white">
                          {signup.athlete_first_name} {signup.athlete_last_name}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white/45">
                          Age: {signup.athlete_age || "N/A"}
                        </p>
                      </div>

                      <span
                        className={`inline-flex min-w-[78px] justify-center whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[1px] ${
                          signup.payment_status === "Paid"
                            ? "bg-green-500/15 text-green-300"
                            : "bg-orange-500/15 text-orange-300"
                        }`}
                      >
                        {signup.payment_status || "Not Paid"}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-3 text-sm text-white/65">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[2px] text-white/35">
                          Parent
                        </p>
                        <p className="mt-1 font-semibold text-white/80">
                          {signup.parent_guardian_name || "N/A"}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[2px] text-white/35">
                          Contact
                        </p>
                        <p className="mt-1">Athlete: {signup.phone || "N/A"}</p>
                        <p>Parent: {signup.parent_phone || "N/A"}</p>
                        <p className="break-all text-xs text-white/45">
                          {signup.email || "No email"}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[2px] text-white/35">
                          Program
                        </p>
                        <p className="mt-1 font-black text-orange-300">
                          {signup.selected_program || "Not selected"}
                        </p>
                        <p className="text-xs text-white/45">
                          {signup.program_sessions} • {signup.program_price}
                        </p>

                        {getDashboardScheduleSummary(signup).length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {getDashboardScheduleSummary(signup).map((item) => (
                              <span
                                key={`${signup.id}-${item}`}
                                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[1px] text-cyan-300"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[2px] text-white/35">
                            Date
                          </p>
                          <p className="mt-1 font-semibold text-white/80">
                            {signup.training_date || "N/A"}
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[2px] text-white/35">
                            Time
                          </p>
                          <p className="mt-1 font-semibold text-white/80">
                            {signup.training_time || "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto mt-5 max-w-[260px]">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
                          <p className="text-[9px] font-black uppercase text-white/35">
                            Bought
                          </p>
                          <p className="mt-1 text-base font-black text-white">
                            {purchased}
                          </p>
                        </div>

                        <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-3 py-3">
                          <p className="text-[9px] font-black uppercase text-green-300/70">
                            Done
                          </p>
                          <p className="mt-1 text-base font-black text-green-300">
                            {completed}
                          </p>
                        </div>

                        <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 px-3 py-3">
                          <p className="text-[9px] font-black uppercase text-orange-300/70">
                            Left
                          </p>
                          <p className="mt-1 text-base font-black text-orange-300">
                            {remaining}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 flex justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateCompletedSessions(signup, -1)}
                          disabled={completed <= 0}
                          className="w-14 rounded-lg border border-white/10 px-3 py-2 text-[11px] font-black text-white/70 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          -
                        </button>

                        <button
                          type="button"
                          onClick={() => updateCompletedSessions(signup, 1)}
                          disabled={completed >= purchased}
                          className="w-14 rounded-lg border border-cyan-400/30 px-3 py-2 text-[11px] font-black text-cyan-300 hover:bg-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => markPaid(signup)}
                        disabled={signup.payment_status === "Paid"}
                        className="rounded-xl bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-3 text-[11px] font-black uppercase tracking-[1px] text-white disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {signup.payment_status === "Paid" ? "Paid" : "Mark Paid"}
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteSignup(signup.id)}
                        className="rounded-xl border border-red-500/40 px-4 py-3 text-[11px] font-black uppercase tracking-[1px] text-red-300 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="hidden overflow-hidden rounded-[28px] border border-white/10 bg-[#08111c] lg:block">
              <div className="overflow-x-auto pb-3">
                <table className="w-full min-w-[1240px] text-left text-sm">
                <thead className="border-b border-white/10 bg-black/35 text-[11px] uppercase tracking-[2px] text-white/45">
                  <tr>
                    <th className="px-5 py-4">Athlete</th>
                    <th className="px-5 py-4">Parent</th>
                    <th className="px-5 py-4">Contact</th>
                    <th className="px-5 py-4">Program</th>
                    <th className="px-5 py-4 text-center">Sessions</th>
                    <th className="px-5 py-4">Date</th>
                    <th className="px-5 py-4">Time</th>
                    <th className="px-5 py-4 text-center">Payment</th>
                    <th className="px-5 py-4">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredSignups.map((signup) => (
                    <tr
                      key={signup.id}
                      className="border-b border-white/10 align-top last:border-b-0"
                    >
                      <td className="px-5 py-5">
                        <p className="font-black text-white">
                          {signup.athlete_first_name} {signup.athlete_last_name}
                        </p>
                        <p className="mt-1 text-xs text-white/45">
                          Age: {signup.athlete_age || "N/A"}
                        </p>
                      </td>

                      <td className="px-5 py-5 text-white/75">
                        {signup.parent_guardian_name || "N/A"}
                      </td>

                      <td className="px-5 py-5">
                        <p className="text-white/75">
                          Athlete: {signup.phone || "N/A"}
                        </p>
                        <p className="mt-1 text-white/75">
                          Parent: {signup.parent_phone || "N/A"}
                        </p>
                        <p className="mt-1 text-xs text-white/45">
                          {signup.email || "No email"}
                        </p>
                      </td>

                      <td className="px-5 py-5">
                        <p className="font-bold text-orange-300">
                          {signup.selected_program || "Not selected"}
                        </p>
                        <p className="mt-1 text-xs text-white/45">
                          {signup.program_sessions} • {signup.program_price}
                        </p>

                        {getDashboardScheduleSummary(signup).length > 0 && (
                          <div className="mt-3 flex max-w-[220px] flex-wrap gap-2">
                            {getDashboardScheduleSummary(signup).map((item) => (
                              <span
                                key={`${signup.id}-${item}`}
                                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[1px] text-cyan-300"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>

                      <td className="px-5 py-5 text-center">
                        {(() => {
                          const purchased = getPurchasedSessionCount(
                            signup.program_sessions,
                            signup.selected_program
                          );
                          const completed = getCompletedSessionCount(signup);
                          const remaining = Math.max(0, purchased - completed);

                          return (
                            <div className="mx-auto min-w-[190px] max-w-[210px]">
                              <div className="grid grid-cols-3 gap-2 text-center">
                                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2">
                                  <p className="text-[10px] font-black uppercase text-white/35">
                                    Bought
                                  </p>
                                  <p className="mt-1 text-sm font-black text-white">
                                    {purchased}
                                  </p>
                                </div>

                                <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-2 py-2">
                                  <p className="text-[10px] font-black uppercase text-green-300/70">
                                    Done
                                  </p>
                                  <p className="mt-1 text-sm font-black text-green-300">
                                    {completed}
                                  </p>
                                </div>

                                <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 px-2 py-2">
                                  <p className="text-[10px] font-black uppercase text-orange-300/70">
                                    Left
                                  </p>
                                  <p className="mt-1 text-sm font-black text-orange-300">
                                    {remaining}
                                  </p>
                                </div>
                              </div>

                              <div className="mt-2 flex justify-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => updateCompletedSessions(signup, -1)}
                                  disabled={completed <= 0}
                                  className="w-12 rounded-lg border border-white/10 px-3 py-2 text-[11px] font-black text-white/70 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                  -
                                </button>

                                <button
                                  type="button"
                                  onClick={() => updateCompletedSessions(signup, 1)}
                                  disabled={completed >= purchased}
                                  className="w-12 rounded-lg border border-cyan-400/30 px-3 py-2 text-[11px] font-black text-cyan-300 hover:bg-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          );
                        })()}
                      </td>

                      <td className="px-5 py-5 text-white/75">
                        {signup.training_date || "N/A"}
                      </td>

                      <td className="px-5 py-5 text-white/75">
                        {signup.training_time || "N/A"}
                      </td>

                      <td className="px-5 py-5 text-center">
                        <span
                          className={`inline-flex min-w-[78px] justify-center whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[1px] ${
                            signup.payment_status === "Paid"
                              ? "bg-green-500/15 text-green-300"
                              : "bg-orange-500/15 text-orange-300"
                          }`}
                        >
                          {signup.payment_status || "Not Paid"}
                        </span>
                      </td>

                      <td className="px-5 py-5">
                        <div className="flex min-w-[112px] flex-col gap-2">
                          <button
                            type="button"
                            onClick={() => markPaid(signup)}
                            disabled={signup.payment_status === "Paid"}
                            className="rounded-xl bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-3 text-[11px] font-black uppercase tracking-[1px] text-white disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            {signup.payment_status === "Paid"
                              ? "Paid"
                              : "Mark Paid"}
                          </button>

                          <button
  type="button"
  onClick={() => deleteSignup(signup.id)}
  className="rounded-xl border border-red-500/40 px-4 py-3 text-[11px] font-black uppercase tracking-[1px] text-red-300 hover:bg-red-500/10"
>
  Delete
</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </>
        )}

        <p className="mt-6 text-center text-xs text-white/35">
          Preview dashboard. Add owner login before final public launch.
        </p>
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
  const [trainingDate, setTrainingDate] = useState("");
const [trainingTime, setTrainingTime] = useState("");
const [startWeekDate, setStartWeekDate] = useState("");
const [weeklySelections, setWeeklySelections] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [dashboardUnlocked, setDashboardUnlocked] = useState(() => {
    return localStorage.getItem("thinkwork_dashboard_unlocked") === "true";
  });

const selectedScheduleMeta = getProgramScheduleMeta(selectedProgram?.title);

const openSignup = (program = null) => {
  setSelectedProgram(program);
  setTrainingDate("");
  setTrainingTime("");
  setStartWeekDate("");
  setWeeklySelections([]);
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

 const availableTimes = useMemo(() => {
  const timesForDate = getTimesForDate(trainingDate);

  return timesForDate.map((slot) => {
    const isBooked = bookedSlots.some(
      (booked) =>
        booked.training_date === trainingDate &&
        (booked.training_time === slot.label ||
          booked.training_time === slot.value)
    );

    return {
      ...slot,
      isBooked,
    };
  });
}, [trainingDate, bookedSlots]);

 useEffect(() => {
  setStartWeekDate("");
  setWeeklySelections([]);
  setTrainingDate("");
  setTrainingTime("");
}, [selectedProgram]);

 

  const getAvailableTimesForSelection = (dateValue) => {
    return getTimesForDate(dateValue).map((slot) => {
      const isBooked = bookedSlots.some(
        (booked) =>
          booked.training_date === dateValue &&
          (booked.training_time === slot.label ||
            booked.training_time === slot.value)
      );

      return { ...slot, isBooked };
    });
  };
  const getWeekDates = (startDate) => {
  const [year, month, day] = startDate.split("-").map(Number);
  const start = new Date(year, month - 1, day);

  return Array.from({ length: 7 }, (_, i) => {
    const current = new Date(start);
    current.setDate(start.getDate() + i);

    const value = formatDateValue(current);

    return {
      date: value,
      displayDate: formatDisplayDate(value),
      dayName: getDayName(value),
    };
  });
};

const toggleWeeklyDay = (date) => {
  setWeeklySelections((prev) => {
    const exists = prev.find((item) => item.date === date);

    if (exists) {
      return prev.filter((item) => item.date !== date);
    }

    if (prev.length >= selectedScheduleMeta.slotsPerWeek) {
      return prev;
    }

    return [...prev, { date, time: "" }];
  });
};

const updateWeeklySelectionTime = (date, time) => {
  setWeeklySelections((prev) =>
    prev.map((item) =>
      item.date === date ? { ...item, time } : item
    )
  );
};

  useEffect(() => {
    const fetchBookedSlots = async () => {
      const { data, error } = await supabase
  .from("signups")
  .select("training_date, training_time")
        .not("training_date", "is", null)
        .not("training_time", "is", null);

      if (error) {
        console.error(error);
        return;
      }
      console.log("Booked slots loaded:", data);
      setBookedSlots(data || []);
    };

    fetchBookedSlots();
  }, []);

  if (window.location.pathname === "/dashboard") {
    return dashboardUnlocked ? (
      <DashboardPage />
    ) : (
      <DashboardPasswordPage onUnlock={() => setDashboardUnlocked(true)} />
    );
  }

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



<p className="mt-8 max-w-3xl text-[16px] font-extrabold italic uppercase tracking-[2px] text-cyan-300 sm:text-[20px]">
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
                          scheduleLabel,
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
                                  scheduleLabel,
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

                                    {scheduleLabel && (
                                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[1px] text-cyan-300/80">
                                        {scheduleLabel}
                                      </p>
                                    )}

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
                note: "Requires exactly 2 athletes",
              },
              {
                title: "Small Group Sessions",
                sessions: "$25 Per Athlete",
                desc: "3-5 Athletes",
                note: "Minimum 3 athletes • Maximum 5",
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
                    note: option.note,
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

                  {option.note && (
                    <p className="mt-3 text-[10px] font-black uppercase tracking-[1px] text-cyan-300/80">
                      {option.note}
                    </p>
                  )}

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-[11px] font-black uppercase tracking-[3px] text-white/25 transition group-hover:text-orange-300">
                      Tap To View Details
                    </p>

                   
                  </div>
                </div>
              </button>
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] italic tracking-wide text-white/45">
  * Individual Single Sessions, Partner Sessions, and Small Group Sessions are only offered to athletes under 21 years old. Clients over 21 years old may book Individual Training Sessions for <span className="font-semibold text-orange-400">$50/hour</span>.
</p>
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

                      {selectedProgram.scheduleLabel && (
                        <p className="mt-1 text-xs font-bold uppercase tracking-[1px] text-cyan-300/80">
                          {selectedProgram.scheduleLabel}
                        </p>
                      )}

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

                            {program.scheduleLabel && (
                              <p className="mt-1 text-[10px] font-bold uppercase tracking-[1px] text-cyan-300/80">
                                {program.scheduleLabel}
                              </p>
                            )}

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

                  const scheduleMeta = getProgramScheduleMeta(selectedProgram?.title);
                  const isMultiSessionSchedule = scheduleMeta.slotsPerWeek > 1;
                 const completedSelections =
  weeklySelections.filter(
    (selection) => selection.date && selection.time
  );

                  if (completedSelections.length !== selectedScheduleMeta.slotsPerWeek) {
  alert(
    `Please choose ${selectedScheduleMeta.slotsPerWeek} training days and times.`
  );
  return;
}

                  const selectedSlotKeys = completedSelections.map(
                    (selection) => `${selection.date}-${selection.time}`
                  );

                  if (new Set(selectedSlotKeys).size !== selectedSlotKeys.length) {
                    alert("Please choose different days/times for each training slot.");
                    return;
                  }

                  setSubmitting(true);

                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const previousAthlete = formData.get("Previous Athlete");
                  const primaryTrainingDate = completedSelections[0]?.date || "";
                  const primaryTrainingTime = completedSelections[0]?.time || "";
                  const weeklyScheduleSummary = summarizeWeeklySchedule(
                    completedSelections
                  );

                  const isFreeSession =
                    selectedProgram?.title === "Claim Your Free Session" ||
                    selectedProgram?.price === "Free";

                  if (isFreeSession && previousAthlete === "Yes") {
                    alert(
                      "Free sessions are only available for athletes who have never trained with Coach Pree and have never received a free ThinkWork Basketball session before."
                    );
                    setSubmitting(false);
                    return;
                  }

                  const notesWithPreviousAthlete = [
                    `Previously trained with ThinkWork Basketball: ${
                      previousAthlete || "Not answered"
                    }`,
                    weeklyScheduleSummary
                      ? `Weekly training schedule:
${weeklyScheduleSummary}`
                      : null,
                    formData.get("Additional Notes"),
                  ]
                    .filter(Boolean)
                    .join("\n\n");

                  const recurringBookings = buildRecurringBookings(
                    completedSelections,
                    scheduleMeta.weeks
                  ).map((booking, index) => ({
                    ...booking,
                    session_number: index + 1,
                  }));

                  const bookingDates = [
                    ...new Set(
                      recurringBookings.map((booking) => booking.training_date)
                    ),
                  ];  console.log("Checking:", trainingDate, trainingTime);
                  const { data: existingBooking, error: checkError } = await supabase
                    .from("session_bookings")
                    .select("training_date, training_time")
                    .in("training_date", bookingDates);

                  if (checkError) {
                    console.error(checkError);
                    alert("Could not check booking availability.");
                    setSubmitting(false);
                    return;
                  }
                  console.log("Recurring bookings checking:", recurringBookings);
                  console.log("Existing bookings found:", existingBooking);
                  const hasConflict = existingBooking?.some((booked) =>
                    recurringBookings.some(
                      (booking) =>
                        booking.training_date === booked.training_date &&
                        booking.training_time === booked.training_time
                    )
                  );

                  if (hasConflict) {
                    alert(
                      "One of those recurring dates/times is already booked. Please choose another schedule."
                    );
                    setSubmitting(false);
                    return;
                  }

                  const { data: insertedSignup, error } = await supabase
                    .from("signups")
                    .insert({
                    athlete_first_name: formData.get("Athlete First Name"),
                    athlete_last_name: formData.get("Athlete Last Name"),
                    athlete_age: formData.get("Athlete Age"),
                    parent_guardian_name: formData.get("Parent Guardian Name"),
                    phone: formData.get("Phone"),
                    parent_phone: formData.get("Parent Phone"),
                    email: formData.get("Email"),
                    instagram: formData.get("Instagram"),
                    selected_program:
                      selectedProgram?.title || formData.get("Program Interest"),
                    program_sessions: selectedProgram?.sessions || "",
                    program_price: selectedProgram?.price || "",
                    training_date: primaryTrainingDate,
                    training_time: primaryTrainingTime,
                    additional_notes: notesWithPreviousAthlete,
                    payment_status: isFreeSession ? "Paid" : "Not Paid",
confirmation_status: isFreeSession ? "Confirmation Sent" : "Not Sent",
                    sessions_completed: 0,
                  })
                  .select("id")
                  .single();

                  if (error) {
                    console.error(error);
                    alert("Something went wrong. Please try again.");
                    setSubmitting(false);
                    return;
                  }

                  const bookingRows = recurringBookings.map((booking) => ({
                    signup_id: insertedSignup.id,
                    athlete_name: `${formData.get("Athlete First Name") || ""} ${
                      formData.get("Athlete Last Name") || ""
                    }`.trim(),
                    parent_email: formData.get("Email"),
                    training_date: booking.training_date,
                    training_time: booking.training_time,
                    session_number: booking.session_number,
                  }));

                  const { error: bookingInsertError } = await supabase
                    .from("session_bookings")
                    .insert(bookingRows);

                  if (bookingInsertError) {
                    console.error(bookingInsertError);
                    alert("Registration saved, but the training sessions could not be reserved.");
                    setSubmitting(false);
                    return;
                  }
await fetch("/api/new-registration", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    athleteName: `${formData.get("Athlete First Name") || ""} ${
      formData.get("Athlete Last Name") || ""
    }`.trim(),
    parentName: formData.get("Parent Guardian Name"),
    parentPhone: formData.get("Parent Phone"),
    parentEmail: formData.get("Email"),
    program: selectedProgram?.title || formData.get("Program Interest"),
    trainingDate: primaryTrainingDate,
    trainingTime: primaryTrainingTime,
    weeklySchedule: weeklyScheduleSummary,
    scheduleLabel: selectedProgram?.scheduleLabel || scheduleMeta.label,
    instagram: formData.get("Instagram"),
    notes: notesWithPreviousAthlete,
  }),
});


if (!isFreeSession) {
  await fetch("/api/send-payment-instructions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
  parentEmail: formData.get("Email"),
  athleteName: `${formData.get("Athlete First Name") || ""} ${
    formData.get("Athlete Last Name") || ""
  }`.trim(),
  program: selectedProgram?.title || formData.get("Program Interest"),
  price: selectedProgram?.price || "",

  weeklySchedule: weeklyScheduleSummary,
  scheduleLabel: selectedProgram?.scheduleLabel || "",
}),
  });
}    
if (isFreeSession) {
  await fetch("/api/send-confirmation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
  parentEmail: formData.get("Email"),
  athleteName: `${formData.get("Athlete First Name") || ""} ${
    formData.get("Athlete Last Name") || ""
  }`.trim(),
  program: selectedProgram?.title || formData.get("Program Interest"),
  price: selectedProgram?.price || "",
  weeklySchedule: weeklyScheduleSummary,
  scheduleLabel: selectedProgram?.scheduleLabel || scheduleMeta.label,
}),
  });
}        
                  setSubmitting(false);
                  window.location.href = "/schedule";
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
      type="text"
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
      type="text"
      name="Athlete Last Name"
      required
      placeholder="Enter last name"
      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-bold text-white">
      Athlete Age
    </label>
    <input
      type="number"
      name="Athlete Age"
      required
      placeholder="Enter athlete age"
      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-bold text-white">
      Parent/Guardian Name
    </label>
    <input
      type="text"
      name="Parent Guardian Name"
      required
      placeholder="Enter parent/guardian name"
      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-bold text-white">
      Athlete Phone Number (Optional)
    </label>
    <input
      type="tel"
      name="Phone"
      placeholder="Enter athlete phone number"
      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-bold text-white">
      Parent/Guardian Phone Number
    </label>
    <input
      type="tel"
      name="Parent Phone"
      required
      placeholder="Enter parent/guardian phone number"
      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-orange-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-bold text-white">
      Parent Email Address
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

  <div>
{selectedProgram?.title === "Claim Your Free Session" && (
  <div>
    <label className="mb-2 block text-sm font-bold text-white">
      Has this athlete previously trained with Coach Pree?
    </label>

    <select
      name="Previous Athlete"
      required
      className="w-full rounded-2xl border border-white/10 bg-[#08111c] px-5 py-4 text-sm text-white outline-none focus:border-orange-500"
    >
      <option value="">Select an option</option>
      <option value="No">No — First Time Athlete</option>
      <option value="Yes">Yes — Returning Athlete</option>
    </select>
  </div>
)}
  </div>

  {selectedProgram?.price === "Free" && (
    <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 px-5 py-4 sm:col-span-2">
      <p className="text-sm leading-7 text-white/70">
        Complimentary sessions are reserved for first-time ThinkWork Basketball
        athletes and may only be redeemed once.
      </p>
    </div>
  )}
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
<div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-5">
  <p className="text-[12px] font-black uppercase tracking-[3px] text-orange-400">
    Training Selection
  </p>
<h3 className="mt-2 text-2xl font-black text-white">
  Build Your Weekly Training Schedule
</h3>

<p className="mt-3 text-sm leading-7 text-white/60">
  Choose your first training week, then select{" "}
  {selectedScheduleMeta.slotsPerWeek} different training days. One time per
  day. This schedule repeats for {selectedScheduleMeta.weeks}{" "}
  {selectedScheduleMeta.weeks === 1 ? "week" : "weeks"}.
</p>

<div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
  <label className="mb-2 block text-sm font-bold text-white">
    Start Week
  </label>

 <input
  type="date"
  required
  value={startWeekDate}
  min={formatDateValue(new Date())}
  onChange={(e) => {
    setStartWeekDate(e.target.value);
    setWeeklySelections([]);
  }}
  className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#08111c] px-4 py-3 text-sm text-white outline-none focus:border-orange-500"
/>

  <p className="mt-2 text-xs font-semibold text-white/45">
    This date begins the week your recurring schedule will start.
  </p>
</div>

{startWeekDate && (
  <div className="mt-5 grid gap-3">
    {getWeekDates(startWeekDate).map((day) => {
      const selectedDay = weeklySelections.find(
        (selection) => selection.date === day.date
      );
const availableSelectionTimes =
  getAvailableTimesForSelection(day.date);
     
      const isDaySelected = Boolean(selectedDay);
      const isAtLimit =
        weeklySelections.length >= selectedScheduleMeta.slotsPerWeek &&
        !isDaySelected;


      
      return (
        <div
          key={day.date}
          className={`rounded-2xl border p-4 transition ${
            isDaySelected
              ? "border-orange-500/50 bg-orange-500/10"
              : "border-white/10 bg-black/25"
          }`}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              disabled={isAtLimit}
              onClick={() => toggleWeeklyDay(day.date)}
              className="flex items-center gap-3 text-left disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span
                className={`grid h-7 w-7 place-items-center rounded-lg border text-xs font-black ${
                  isDaySelected
                    ? "border-orange-500 bg-orange-500 text-white"
                    : "border-white/20 bg-white/[0.03] text-white/40"
                }`}
              >
                {isDaySelected ? "✓" : ""}
              </span>

              <span>
                <span className="block text-sm font-black uppercase text-white">
                  {day.dayName}
                </span>
                <span className="text-xs font-semibold text-white/40">
                  {day.displayDate}
                </span>
              </span>
            </button>

            <select
              disabled={!isDaySelected}
              value={selectedDay?.time || ""}
              onChange={(e) => updateWeeklySelectionTime(day.date, e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#08111c] px-4 py-3 text-sm font-bold text-white outline-none focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-40 sm:w-[240px]"
            >
              <option value="">Select time</option>
              {availableSelectionTimes.map(({ label, isBooked }) => (
                <option key={label} value={label} disabled={isBooked}>
                  {isBooked ? `${label} — Booked` : label}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    })}
  </div>
)}

{weeklySelections.length > 0 && (
  <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
    <p className="text-[11px] font-black uppercase tracking-[2px] text-cyan-300">
      Your Weekly Schedule
    </p>

    <div className="mt-4 grid gap-2">
      {weeklySelections.map((selection) => (
        <div
          key={selection.date}
          className="flex items-center justify-between gap-4 rounded-xl bg-black/25 px-4 py-3"
        >
          <p className="text-sm font-black text-white">
            {getDayName(selection.date)}
          </p>
          <p className="text-sm font-bold text-orange-300">
            {selection.time || "Select time"}
          </p>
        </div>
      ))}
    </div>

    <p className="mt-4 text-xs font-semibold leading-6 text-white/50">
      {weeklySelections.length} of {selectedScheduleMeta.slotsPerWeek} days
      selected. This schedule will repeat automatically.
    </p>
  </div>
)}

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

                {/* PACKAGES */}
<div className="grid gap-8 md:grid-cols-3">
  {/* package cards here */}
</div>

{/* PAYMENT + TRAVEL NOTICE */}
<div className="mt-8 grid gap-4 sm:grid-cols-2">
 

  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
    <p className="text-sm italic leading-7 text-white/70">
      <span className="font-semibold text-white">
        Special Travel Requests:
      </span>{" "}
      Pricing may vary for private locations, residential gyms,
      or requested off-site facilities.
    </p>
  </div>
</div>

{/* CONTINUE BUTTON / REGISTRATION */}
<div className="mt-10">
  {/* buttons */}
</div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-3 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-orange-500 to-orange-700 px-8 py-5 text-[13px] font-black uppercase tracking-wide text-white shadow-[0_0_35px_rgba(249,115,22,.4)] transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Registration"}
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