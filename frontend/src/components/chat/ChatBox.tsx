import { useState } from "react";

import Message from "./Message";
import EmptyState from "../ui/EmptyState";
import { useChat } from "../../hooks/useChat";

interface Props {
  owner: string;
  repo: string;
  branch: string;
}

const ChatBox = ({
  owner,
  repo,
  branch,
}: Props) => {
  const {
    messages,
    loading,
    sendMessage,
  } = useChat();

  const [question, setQuestion] =
    useState("");

  async function handleSend() {
    if (!question.trim()) return;

    await sendMessage(
      owner,
      repo,
      branch,
      question
    );

    setQuestion("");
  }

  return (
    <div className="rounded-xl bg-slate-900 p-6">

      <h2 className="mb-5 text-2xl font-bold text-white">
        🤖 Repository Chat
      </h2>

      <div className="mb-5 h-96 overflow-y-auto rounded bg-slate-950 p-4">

        {messages.length === 0 ? (

          <EmptyState
            icon="💬"
            title="Start a Conversation"
            description="Ask any question about this repository and the AI assistant will answer using the repository context."
          />

        ) : (

          <div className="space-y-4">

            {messages.map((message, index) => (

              <Message
                key={index}
                role={message.role}
                text={message.text}
              />

            ))}

          </div>

        )}

        {loading && (

          <div className="mt-4 text-slate-400">
            🤖 DevPilot AI is thinking...
          </div>

        )}

      </div>

      <div className="flex gap-3">

        <input
          value={question}
          onChange={(event) =>
            setQuestion(event.target.value)
          }
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask anything about this repository..."
          className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Send"}
        </button>

      </div>

    </div>
  );
};

export default ChatBox;