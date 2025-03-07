import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, model } = body;

    const response = await axios.post(
      "https://api.echogpt.live/v1/chat/completions",
      { messages, model },
      { headers: { "x-api-key": process.env.ECHO_GPT_API_KEY } }
    );

    const botMessage =
      response.data.choices[0]?.message?.content || "No response from API";

    return NextResponse.json({ content: botMessage });
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: error.response?.data?.error?.message || "Server Error" },
      { status: 500 }
    );
  }
}
