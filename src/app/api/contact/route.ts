import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

function buildCorsHeaders(req: NextRequest): HeadersInit {
    const origin = req.headers.get("origin") || "*";
    const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL || origin || "*";
    return {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Accept",
        "Access-Control-Max-Age": "86400",
    };
}

export async function OPTIONS(req: NextRequest) {
    return new NextResponse(null, {
        status: 204,
        headers: buildCorsHeaders(req),
    });
}

export async function POST(req: NextRequest) {
    const { firstname, lastname, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // your email
            pass: process.env.EMAIL_PASS, // your app password (not normal email pass)
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject || "No subject"}`,
        html: `
            <h2>New message from ${firstname} ${lastname}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br/>${message}</p>
        `,
    };

    try {
        // If email credentials are not set, simulate success to avoid 500s locally
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            return NextResponse.json(
                { success: true, message: "Email not configured; simulated success." },
                { headers: buildCorsHeaders(req) }
            );
        }

        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { success: true },
            { headers: buildCorsHeaders(req) }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Failed to send email." },
            { status: 500, headers: buildCorsHeaders(req) }
        );
    }
}
