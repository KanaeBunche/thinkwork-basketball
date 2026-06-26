export default function Legal({ legalOpen, setLegalOpen }) {
  if (!legalOpen) return null;

  const titles = {
    privacy: "Privacy Policy",
    refund: "Refund Policy",
      waiver: "Waiver",
    accessibility: "Accessibility Statement",
  };

  const content = {
    privacy: (
      <>
        <p>
          Parent and athlete information is securely stored and used solely for
          registration, scheduling, communication, payments, and training
          purposes.
        </p>

        <p className="mt-4">
          ThinkWork Basketball does not sell, distribute, or share personal
          information with third parties.
        </p>
      </>
    ),

    refund: (
      <>
        <p>
          Training packages become non-refundable once sessions begin.
        </p>

        <p className="mt-4">
          Sessions may be rescheduled with at least 24 hours notice. Missed
          sessions without notice may be forfeited.
        </p>
      </>
    ),
accessibility: (
  <>
    <p>
      ThinkWork Basketball is committed to making this website accessible and usable for all visitors, including people with disabilities.
    </p>

    <p className="mt-4">
      If you experience difficulty accessing any part of this website, please contact us at thinkworkbasketball@gmail.com or (347) 613-7285, and we will make reasonable efforts to assist you.
    </p>
  </>
),
    waiver: (
      <>
        <p>
          Participation in basketball training involves inherent risks,
          including falls, collisions, sprains, fractures, and other injuries.
        </p>

        <p className="mt-4">
          By registering, parents acknowledge these risks and voluntarily allow
          their athlete to participate.
        </p>
      </>
    ),
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md">

      <div className="relative w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#08111c] p-8 shadow-[0_0_80px_rgba(0,132,255,.15)]">

        <button
          onClick={() => setLegalOpen(null)}
          className="absolute right-6 top-5 text-2xl text-white/50 transition hover:text-orange-400"
        >
          ×
        </button>

        <p className="text-[12px] font-black uppercase tracking-[3px] text-orange-500">
          ThinkWork Basketball
        </p>

        <h2 className="mt-3 text-3xl font-black uppercase text-white">
          {titles[legalOpen]}
        </h2>

        <div className="mt-8 text-sm leading-7 text-white/65">
          {content[legalOpen]}
        </div>

      </div>

    </div>
  );
}