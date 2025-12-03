import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function POST(request: NextRequest) {
    try {
        const { message, name, email } = await request.json();
    
        if(!message) {
            throw new ApiError(400, "Message is required!")
        }

        const Message = await client.messages.create({
            body: `Message From ${name},
            Full Name: ${name}
            Email: ${email}
            Message: ${message}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: "+919106052826",
        });

        if(!Message) {
            throw new ApiError(500, "Failed to sent message")
        }
        
        return NextResponse.json({
            success: true,
            message: "Message sent successfully"
        })
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}