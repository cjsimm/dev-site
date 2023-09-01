import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

//hide these variables in a local env file 
const user_email = process.env.CONTACT_EMAIL;
const user_pw = process.env.CONTACT_EMAIL_PASS;
export async function POST(req: Request,) {
    const payload = await req.json();
    console.log(payload);
    //add message validation code here 
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user_email,
            pass: user_pw,
        },
    });
    try {
        const mail = await transporter.sendMail({
            from: user_email,
            to: user_email,
            replyTo: payload.email, //the submitted email on the form
            subject: payload.subject,
            html: `
            <p>From: ${payload.email}</p>
            <h1>Message</h1>
            <p>${payload.message}</p>
            `,
        });
        console.log(mail.response);
        console.log(mail.messageId);
        return NextResponse.json(
            { message: "Message successfully sent." },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {}, 
            {   status: 500, 
                statusText: "Something went wrong when sending your message. Message not sent."
            }
        );       
    }
}