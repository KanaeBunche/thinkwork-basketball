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
      price,
      weeklySchedule,
      scheduleLabel,
    } = req.body;

    const scheduleLines = weeklySchedule
      ? weeklySchedule
          .split("\n")
          .filter(Boolean)
          .map(
            (item) => `
              <div style="padding:10px 0;border-top:1px solid rgba(255,255,255,.08);font-size:14px;color:#ffffff;font-weight:800;">
                ${item}
              </div>
            `
          )
          .join("")
      : "";

    const data = await resend.emails.send({
      from: "ThinkWork Basketball <notifications@thinkworkbasketball.com>",
      to: [parentEmail],
      subject: "ThinkWork Basketball Registration Received",

      html: `
        <div style="margin:0;padding:0;background:#02060d;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
          <div style="max-width:650px;margin:0 auto;padding:40px 18px;">
            <div style="overflow:hidden;border-radius:28px;background:#07111d;border:1px solid rgba(255,255,255,.12);">

              <div style="background:linear-gradient(135deg,#f97316,#0ea5e9);padding:32px;text-align:center;">
                <p style="margin:0 0 10px;font-size:12px;font-weight:900;letter-spacing:4px;text-transform:uppercase;color:#ffffff;">
                  ThinkWork Basketball
                </p>
                <h1 style="margin:0;font-size:30px;font-weight:900;text-transform:uppercase;color:#ffffff;">
                  Registration Received
                </h1>
              </div>

              <div style="padding:30px;">
                <p style="font-size:16px;line-height:1.8;color:#ffffff;font-weight:700;">
                  Thank you for registering with ThinkWork Basketball!
                </p>

                <p style="font-size:15px;line-height:1.8;color:rgba(255,255,255,.75);">
                  Your athlete's registration has been received. To reserve the selected training schedule, payment must be submitted before the first session.
                </p>

                <div style="margin:24px 0;padding:22px;border-radius:18px;background:rgba(14,165,233,.07);border:1px solid rgba(14,165,233,.25);">
                  <p style="margin:0 0 12px;font-size:13px;font-weight:900;letter-spacing:2px;text-transform:uppercase;color:#67e8f9;">
                    Registration Details
                  </p>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                    <tr>
                      <td style="padding:9px 0;font-size:13px;color:rgba(255,255,255,.5);font-weight:700;">
                        Athlete
                      </td>
                      <td style="padding:9px 0;font-size:14px;color:#ffffff;font-weight:800;text-align:right;">
                        ${athleteName || "N/A"}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:9px 0;border-top:1px solid rgba(255,255,255,.08);font-size:13px;color:rgba(255,255,255,.5);font-weight:700;">
                        Program
                      </td>
                      <td style="padding:9px 0;border-top:1px solid rgba(255,255,255,.08);font-size:14px;color:#ffffff;font-weight:800;text-align:right;">
                        ${program || "N/A"}
                      </td>
                    </tr>

                    ${
                      scheduleLabel
                        ? `
                    <tr>
                      <td style="padding:9px 0;border-top:1px solid rgba(255,255,255,.08);font-size:13px;color:rgba(255,255,255,.5);font-weight:700;">
                        Schedule
                      </td>
                      <td style="padding:9px 0;border-top:1px solid rgba(255,255,255,.08);font-size:14px;color:#67e8f9;font-weight:900;text-align:right;">
                        ${scheduleLabel}
                      </td>
                    </tr>
                    `
                        : ""
                    }
                  </table>
                </div>

                ${
                  weeklySchedule
                    ? `
                <div style="margin:24px 0;padding:22px;border-radius:18px;background:#02060d;border:1px solid rgba(255,255,255,.10);">
                  <p style="margin:0 0 12px;font-size:13px;font-weight:900;letter-spacing:2px;text-transform:uppercase;color:#fb923c;">
                    Selected Training Days
                  </p>

                  ${scheduleLines}

                  <p style="margin:16px 0 0;font-size:13px;line-height:1.7;color:rgba(255,255,255,.6);">
                    These selected days and times will repeat for the duration of the selected package.
                  </p>
                </div>
                `
                    : ""
                }

                <div style="margin:28px 0;padding:22px;border-radius:18px;background:rgba(249,115,22,.10);border:1px solid rgba(249,115,22,.35);">
                  <p style="margin:0 0 10px;font-size:13px;font-weight:900;letter-spacing:2px;text-transform:uppercase;color:#fb923c;">
                    Payment Required
                  </p>

                  <p style="margin:0 0 12px;font-size:15px;line-height:1.8;color:#ffffff;">
                    To reserve your athlete's training schedule, please send payment of:
                  </p>

                  <p style="margin:0 0 16px;font-size:32px;font-weight:900;color:#67e8f9;">
                    ${price || "N/A"}
                  </p>

                  <div style="padding:16px;background:#02060d;border:1px solid rgba(255,255,255,.12);border-radius:14px;">
                    <p style="margin:0 0 8px;font-size:14px;color:rgba(255,255,255,.75);font-weight:700;">
                      Venmo:
                      <span style="color:#ffffff;font-weight:900;"> @thinkworkbasketball</span>
                    </p>

                    <p style="margin:0;font-size:14px;color:rgba(255,255,255,.75);font-weight:700;">
                      Zelle:
                      <span style="color:#ffffff;font-weight:900;"> thinkworkbasketball@gmail.com</span>
                    </p>
                  </div>

                  <p style="margin:16px 0 10px;font-size:14px;color:rgba(255,255,255,.75);">
                    Please include this memo:
                  </p>

                  <div style="padding:14px;background:#02060d;border:1px solid rgba(255,255,255,.12);border-radius:12px;font-weight:800;color:#67e8f9;">
                    ${athleteName || "Athlete"} - ${program || "Program"}
                  </div>

                  <p style="margin:16px 0 0;font-size:13px;line-height:1.7;color:rgba(255,255,255,.65);">
                    Once payment has been verified, you will receive a separate <strong>Training Confirmed</strong> email.
                  </p>
                </div>

                <p style="font-size:15px;line-height:1.8;color:rgba(255,255,255,.75);">
                  Your selected schedule will be reserved once payment has been confirmed.
                </p>

                <p style="margin-top:24px;font-size:15px;font-weight:800;color:#ffffff;">
                  Thank you,<br />
                  Coach Pree<br />
                  <span style="color:#fb923c;">ThinkWork Basketball</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Payment instructions sent:", data);

    return res.status(200).json({
      success: true,
      resend: data,
    });
  } catch (error) {
    console.error("Payment instructions error:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}