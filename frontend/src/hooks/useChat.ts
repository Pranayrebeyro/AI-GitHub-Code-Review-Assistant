import { useState } from "react";
import toast from "react-hot-toast";

import { chat } from "../services/chat";

export function useChat() {
  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<
      {
        role: "user" | "assistant";
        text: string;
      }[]
    >([]);

  async function sendMessage(
    owner: string,
    repo: string,
    branch: string,
    question: string
  ) {
    try {
      setLoading(true);

      setMessages((previous) => [
        ...previous,
        {
          role: "user",
          text: question,
        },
      ]);

      const data = await chat(
        owner,
        repo,
        branch,
        question
      );

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: data.answer,
        },
      ]);

      toast.success("AI response received.");
    } catch (error) {
      console.error(error);

      toast.error("Chat request failed.");
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    messages,
    sendMessage,
  };
}