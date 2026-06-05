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
} = req.body;

    const data = await resend.emails.send({
      from: "ThinkWork Basketball <notifications@thinkworkbasketball.com>",

      // Parent only
      to: [parentEmail],
      cc: ["thinkworkbasketball@gmail.com"],

      subject: "ThinkWork Basketball Registration Received",

      html: `
        <div style="margin:0;padding:0;background:#02060d;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
          <div style="max-width:650px;margin:0 auto;padding:40px 18px;">

            <div style="overflow:hidden;border-radius:28px;background:#07111d;border:1px solid rgba(255,255,255,.12);">

              <div style="background:linear-gradient(135deg,#f97316,#0ea5e9);padding:32px;text-align:center;">
                <h1 style="margin:0;font-size:30px;font-weight:900;text-transform:uppercase;color:#ffffff;">
                  Registration Received
                </h1>
              </div>

              <div style="padding:30px;">

                <p style="font-size:16px;line-height:1.8;color:#ffffff;">
                  Thank you for registering with ThinkWork Basketball!
                </p>

                <p style="font-size:15px;line-height:1.8;color:rgba(255,255,255,.75);">
                  To reserve your athlete's spot, payment must be received before the training session begins.
                </p>
<div style="margin:28px 0;padding:22px;border-radius:18px;background:rgba(249,115,22,.10);border:1px solid rgba(249,115,22,.35);">

  <p style="margin:0 0 10px;font-size:13px;font-weight:900;letter-spacing:2px;text-transform:uppercase;color:#fb923c;">
    Payment Required
  </p>

  <p style="margin:0 0 12px;font-size:15px;line-height:1.8;color:#ffffff;">
    To reserve your athlete's training session, please send a Zelle payment of:
  </p>

  <p style="margin:0 0 14px;font-size:32px;font-weight:900;color:#67e8f9;">
    ${price}
  </p>

  <p style="margin:0 0 8px;font-size:15px;color:#ffffff;">
    Send payment via Zelle to:
  </p>

  <p style="margin:0 0 18px;font-size:22px;font-weight:900;color:#ffffff;">
    (347) 613-7285
  </p>

  <p style="margin:0 0 10px;font-size:14px;color:rgba(255,255,255,.75);">
    Please copy and paste the following memo:
  </p>

  <div style="padding:14px;background:#02060d;border:1px solid rgba(255,255,255,.12);border-radius:12px;font-weight:800;color:#67e8f9;">
    ${athleteName} - ${program}
  </div>

  <p style="margin:16px 0 0;font-size:13px;line-height:1.7;color:rgba(255,255,255,.65);">
    Payment must be received before the training session begins. Once payment has been verified, you will receive a separate <strong>Training Confirmed</strong> email.
  </p>

</div>

                <p style="font-size:15px;line-height:1.8;color:rgba(255,255,255,.75);">
                  Once payment has been received and verified, you will automatically receive a separate <strong>Training Confirmed</strong> email with your session details.
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