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

    const data = await resend.emails.send({
      from: "ThinkWork Basketball <onboarding@resend.dev>",

      // TEST MODE:
      // Resend only sends to verified emails until the domain is verified.
      to: ["kanae.bunche@gmail.com"],

      // AFTER DOMAIN VERIFICATION, CHANGE TO:
      // to: [parentEmail, "thinkworkbasketball@gmail.com"],

      subject: "ThinkWork Basketball Training Confirmation",
      html: `
        <div style="margin:0;padding:0;background:#02060d;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
          <div style="max-width:650px;margin:0 auto;padding:40px 18px;">
            <div style="overflow:hidden;border-radius:28px;border:1px solid rgba(255,255,255,0.12);background:#07111d;box-shadow:0 20px 60px rgba(0,0,0,0.35);">
              
              <div style="background:linear-gradient(135deg,#f97316,#0ea5e9);padding:34px 28px;text-align:center;">
                <p style="margin:0 0 10px;font-size:12px;font-weight:900;letter-spacing:4px;text-transform:uppercase;color:#ffffff;">
                  ThinkWork Basketball
                </p>
                <h1 style="margin:0;font-size:32px;line-height:1.05;font-weight:900;text-transform:uppercase;color:#ffffff;">
                  Training Confirmed
                </h1>
              </div>

              <div style="padding:32px 28px;">
                <p style="margin:0 0 18px;font-size:18px;line-height:1.7;color:#ffffff;font-weight:700;">
                  Hi,
                </p>

                <p style="margin:0 0 24px;font-size:15px;line-height:1.8;color:rgba(255,255,255,0.75);">
                  Your ThinkWork Basketball training registration has been confirmed.
                </p>

                <div style="border:1px solid rgba(249,115,22,0.35);background:rgba(249,115,22,0.08);border-radius:22px;padding:22px;margin:26px 0;">
                  <p style="margin:0 0 14px;font-size:12px;font-weight:900;letter-spacing:2px;text-transform:uppercase;color:#fb923c;">
                    Session Details
                  </p>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                    <tr>
                      <td style="padding:10px 0;font-size:13px;color:rgba(255,255,255,0.5);font-weight:700;">
                        Athlete
                      </td>
                      <td style="padding:10px 0;font-size:14px;color:#ffffff;font-weight:800;text-align:right;">
                        ${athleteName || "N/A"}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);font-size:13px;color:rgba(255,255,255,0.5);font-weight:700;">
                        Program
                      </td>
                      <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);font-size:14px;color:#ffffff;font-weight:800;text-align:right;">
                        ${program || "N/A"}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);font-size:13px;color:rgba(255,255,255,0.5);font-weight:700;">
                        Date
                      </td>
                      <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);font-size:14px;color:#ffffff;font-weight:800;text-align:right;">
                        ${trainingDate || "N/A"}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);font-size:13px;color:rgba(255,255,255,0.5);font-weight:700;">
                        Time
                      </td>
                      <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);font-size:14px;color:#fb923c;font-weight:900;text-align:right;">
                        ${trainingTime || "N/A"}
                      </td>
                    </tr>
                    <tr>
  <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);font-size:13px;color:rgba(255,255,255,0.5);font-weight:700;">
    Location
  </td>
  <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);font-size:14px;color:#67e8f9;font-weight:800;text-align:right;">
    ${location || "Brooklyn Park"}
  </td>
</tr>
                  </table>
                </div>

                <div style="border-radius:20px;background:#02060d;border:1px solid rgba(14,165,233,0.25);padding:20px;margin-top:24px;">
                  <p style="margin:0 0 8px;font-size:14px;font-weight:900;color:#67e8f9;text-transform:uppercase;letter-spacing:1.5px;">
                    What To Bring
                  </p>

                  <p style="margin:0;font-size:14px;line-height:1.8;color:rgba(255,255,255,0.7);">
                    Please bring water, basketball shoes, and a strong work ethic. Arrive a few minutes early so you are ready to begin on time.
                  </p>
                </div>

                <p style="margin:26px 0 0;font-size:15px;line-height:1.8;color:rgba(255,255,255,0.78);">
                  If anything changes, please contact Coach Pree directly before your scheduled session.
                </p>

                <p style="margin:28px 0 0;font-size:15px;line-height:1.8;color:#ffffff;font-weight:800;">
                  See you soon,<br />
                  Coach Pree<br />
                  <span style="color:#fb923c;">ThinkWork Basketball</span>
                </p>
              </div>

              <div style="padding:18px 28px;border-top:1px solid rgba(255,255,255,0.08);text-align:center;background:#050b14;">
                <p style="margin:0;font-size:11px;line-height:1.6;color:rgba(255,255,255,0.35);letter-spacing:2px;text-transform:uppercase;">
                  outTHINK. outWORK. outPLAY.
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Resend response:", data);

    return res.status(200).json({
      success: true,
      message: "Confirmation email sent.",
      resend: data,
    });
  } catch (error) {
    console.error("Resend error:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}