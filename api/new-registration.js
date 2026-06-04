import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      athleteName,
      parentName,
      parentPhone,
      parentEmail,
      program,
      trainingDate,
      trainingTime,
      instagram,
      notes,
    } = req.body;

    
     const data = await resend.emails.send({
  from: "ThinkWork Basketball <notifications@thinkworkbasketball.com>",
  to: ["thinkworkbasketball@gmail.com"],

  subject: `New Registration - ${athleteName}`,

  html: `
        <div style="font-family:Arial,sans-serif;padding:30px;background:#02060d;color:white;">
          <div style="max-width:650px;margin:auto;background:#07111d;padding:30px;border-radius:24px;border:1px solid #1f2937;">

            <div style="background:linear-gradient(135deg,#f97316,#0ea5e9);padding:24px;border-radius:18px;text-align:center;margin-bottom:24px;">
              <h1 style="margin:0;color:white;">
                New ThinkWork Registration
              </h1>
            </div>

            <p style="font-size:16px;color:#ffffff;">
              A new athlete registration has been submitted.
            </p>

            <hr style="border:none;border-top:1px solid #334155;margin:24px 0;" />

            <p><strong>Athlete:</strong> ${athleteName || "N/A"}</p>
            <p><strong>Parent:</strong> ${parentName || "N/A"}</p>
            <p><strong>Parent Phone:</strong> ${parentPhone || "N/A"}</p>
            <p><strong>Parent Email:</strong> ${parentEmail || "N/A"}</p>

            <hr style="border:none;border-top:1px solid #334155;margin:24px 0;" />

            <p><strong>Program:</strong> ${program || "N/A"}</p>
            <p><strong>Date:</strong> ${trainingDate || "N/A"}</p>
            <p><strong>Time:</strong> ${trainingTime || "N/A"}</p>
            <p><strong>Location:</strong> Brooklyn Park</p>

            <hr style="border:none;border-top:1px solid #334155;margin:24px 0;" />

            <p><strong>Instagram:</strong> ${
              instagram || "Not Provided"
            }</p>

            <p><strong>Notes:</strong></p>

            <div style="background:#02060d;border:1px solid #1f2937;padding:16px;border-radius:12px;">
              ${notes || "No additional notes submitted."}
            </div>

            <div style="margin-top:30px;padding:18px;border-radius:16px;background:#f9731615;border:1px solid #f9731630;">
              <strong>Status:</strong> Awaiting Payment
            </div>

          </div>
        </div>
      `,
    });

    console.log("New registration email:", data);

    return res.status(200).json({
      success: true,
      resend: data,
    });
  } catch (error) {
    console.error("New registration email error:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}