import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      parentEmail,
      athleteName,
      program,
      trainingDate,
      trainingTime,
      location,
    } = req.body;

    await resend.emails.send({
      from: "ThinkWork Basketball <onboarding@resend.dev>",
      to: [parentEmail, "thinkworkbasketball@gmail.com"],
      subject: "ThinkWork Basketball Training Confirmation",
      html: `
        <div style="font-family:Arial,sans-serif;background:#02060d;padding:40px;">
          <div style="max-width:650px;margin:auto;background:#07111d;border-radius:24px;overflow:hidden;border:1px solid #1f2937;">
            
            <div style="background:linear-gradient(135deg,#f97316,#0ea5e9);padding:30px;text-align:center;">
              <h1 style="color:white;margin:0;">
                Training Confirmed
              </h1>
            </div>

            <div style="padding:30px;color:white;">
              <h2>${athleteName}</h2>

              <p>
                Your ThinkWork Basketball session has been confirmed.
              </p>

              <hr style="border:none;border-top:1px solid #334155;margin:25px 0;" />

              <p><strong>Program:</strong> ${program}</p>
              <p><strong>Date:</strong> ${trainingDate}</p>
              <p><strong>Time:</strong> ${trainingTime}</p>
              <p><strong>Location:</strong> ${location}</p>

              <hr style="border:none;border-top:1px solid #334155;margin:25px 0;" />

              <p>
                Please arrive a few minutes early and bring water, basketball shoes, and a great attitude.
              </p>

              <p>
                We look forward to seeing you.
              </p>

              <p style="margin-top:30px;">
                Coach Pree<br/>
                ThinkWork Basketball
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}