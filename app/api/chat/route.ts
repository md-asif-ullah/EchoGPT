import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import ChatSchema from "@/models/chats";
import connectToDB from "@/lib/connectToDB";

export async function POST(req: NextRequest) {
  await connectToDB();
  try {
    const body = await req.json();
    const { messages, chatModel, userId, id } = body;

    if (!userId || !id || !chatModel) {
      return NextResponse.json(
        { error: "Missing userId or pageId" },
        { status: 400 }
      );
    }

    const response = await axios.post(
      "https://api.echogpt.live/v1/chat/completions",
      { messages, model: chatModel },
      { headers: { "x-api-key": process.env.ECHO_GPT_API_KEY } }
    );

    const botMessage =
      response.data.choices[0]?.message?.content || "No response from API";

    await ChatSchema.findOneAndUpdate(
      { userId, id, chatModel },
      {
        $push: {
          messages: {
            role: "user",
            content: messages[messages.length - 1].content,
          },
        },
      },
      { upsert: true, new: true }
    );

    await ChatSchema.findOneAndUpdate(
      { userId, id, chatModel },
      { $push: { messages: { role: "assistant", content: botMessage } } }
    );

    return NextResponse.json({ content: botMessage });
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: error.response?.data?.error?.message || "Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectToDB();
  try {
    const chats = await ChatSchema.find();

    return NextResponse.json(chats);
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch history" }), {
      status: 500,
    });
  }
}
