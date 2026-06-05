import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function Dashboard() {
  const [signups, setSignups] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSignups = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("signups")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Could not load signups.");
    } else {
      setSignups(data);
    }

    setLoading(false);
  };

 const markPaid = async (signup) => {
  const location = prompt(
    "Enter session location:",
    "Location will be provided by Coach Pree"
  );

  if (!location) return;

  try {
    const emailResponse = await fetch("/api/send-confirmation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parentEmail: signup.email,
        athleteName: `${signup.athlete_first_name} ${signup.athlete_last_name}`,
        program: signup.selected_program,
        trainingDate: signup.training_date,
        trainingTime: signup.training_time,
        location,
      }),
    });

    if (!emailResponse.ok) {
      alert("Email failed to send.");
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
      alert("Payment update failed.");
      return;
    }

    fetchSignups();

    alert("Confirmation email sent successfully.");
  } catch (err) {
    console.error(err);
    alert("Something went wrong sending the confirmation.");
  }
};

  useEffect(() => {
    fetchSignups();
  }, []);

  return (
    <main className="min-h-screen bg-[#02060d] px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl border border-white/10 bg-[#08111c] p-6">
          <p className="text-sm font-black uppercase tracking-[3px] text-orange-500">
            Owner Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-black uppercase">
            ThinkWork Signups
          </h1>

          <button
            onClick={fetchSignups}
            className="mt-5 rounded-xl border border-orange-500 px-5 py-3 text-xs font-black uppercase"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : signups.length === 0 ? (
          <p>No signups yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#08111c]">
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead className="bg-black/40 text-xs uppercase text-white/50">
                <tr>
                  <th className="p-4">Athlete</th>
                  <th className="p-4">Parent</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Program</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Time</th>
                  <th className="p-4">Payment</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {signups.map((signup) => (
                  <tr key={signup.id} className="border-t border-white/10">
                    <td className="p-4">
                      {signup.athlete_first_name} {signup.athlete_last_name}
                      <p className="text-xs text-white/40">
                        Age: {signup.athlete_age}
                      </p>
                    </td>

                    <td className="p-4">{signup.parent_guardian_name}</td>

                    <td className="p-4">
                      {signup.phone}
                      <p className="text-xs text-white/40">{signup.email}</p>
                    </td>

                    <td className="p-4">
                      <span className="font-bold text-orange-300">
                        {signup.selected_program}
                      </span>
                      <p className="text-xs text-white/40">
                        {signup.program_sessions} • {signup.program_price}
                      </p>
                    </td>

                    <td className="p-4">{signup.training_date}</td>
                    <td className="p-4">{signup.training_time}</td>

                    <td className="p-4">
                      <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-black uppercase text-orange-300">
                        {signup.payment_status}
                      </span>
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => markPaid(signup)}
                        disabled={signup.payment_status === "Paid"}
                        className="rounded-xl bg-orange-600 px-4 py-3 text-xs font-black uppercase disabled:opacity-40"
                      >
                        {signup.payment_status === "Paid"
                          ? "Paid"
                          : "Mark Paid"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}