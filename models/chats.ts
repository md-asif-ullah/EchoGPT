import mongoose, { Schema, Document } from "mongoose";

interface IMessage {
  role: "user" | "assistant";
  content: string;
}

interface IChat extends Document {
  userId: string;
  messages: IMessage[];
  createdAt: Date;
  id: string;
  chatModel: string;
}

const chatSchema = new Schema<IChat>(
  {
    userId: { type: String, required: true },
    id: { type: String, required: true },
    chatModel: { type: String, required: true },
    messages: [
      {
        role: { type: String, enum: ["user", "assistant"], required: true },
        content: { type: String, required: true },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const ChatSchema =
  mongoose.models.Chat || mongoose.model<IChat>("Chat", chatSchema);

export default ChatSchema;
