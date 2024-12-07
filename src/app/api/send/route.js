// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
  
//   const { email, subject, message } = await req.json();
//   try {
//     const data = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: [fromEmail, email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     console.log("mesaj gönderilemedi")
//     return NextResponse.json({ error });
//   }
// }

import { NextResponse } from "next/server";
import { Resend } from "resend";
import ReactDOMServer from "react-dom/server";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    // Convert JSX to a string (HTML) for the email body
    const htmlContent = ReactDOMServer.renderToStaticMarkup(
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>{message}</p>
      </>
    );

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // From email (can be replaced with your verified address)
      to: [fromEmail, email], // The recipient emails
      subject: subject, // Subject of the email
      html: htmlContent, // Email body in HTML format
    });

    // Return the response as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.log("Message failed to send", error);
    return NextResponse.json({ error: "Failed to send message" });
  }
}
