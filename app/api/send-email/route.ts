import { NextRequest } from "next/server";
import HTML_TEMPLATE from "@/lib/emailTemp";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  try {
    const { email, firstname, lastname, message, subjectLine } =
      await req.json();

    if (!email || !firstname || !lastname || !message || !subjectLine)
      return new Response("Invalid Input", { status: 400 });

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.hostinger.com",
      debug: true,
      secure: true,

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailData = await transporter.sendMail({
      from: process.env.EMAIL,
      to: "info@talk2meinternational.com", // list of receivers
      subject: subjectLine, // Subject line
      html: HTML_TEMPLATE({
        name: `${firstname} ${lastname}`,
        email: email,
        message: message,
        subjectLine: subjectLine,
      }), // html body
    });

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log("Email sent successfully");
    });

    return new Response(JSON.stringify({ message: "Email Sent Sucess" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error, "error");
    return new Response("Could Send Email, Please try Again", {
      status: 500,
    });
  }
};
