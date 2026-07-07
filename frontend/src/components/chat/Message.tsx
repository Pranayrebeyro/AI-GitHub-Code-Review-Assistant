import MarkdownRenderer from "../common/MarkdownRenderer";

interface Props {
    role: "user" | "assistant";
    text: string;
}

const Message = ({
    role,
    text,
}: Props) => {
    const isUser = role === "user";

    return (
        <div
            className={`flex ${isUser
                    ? "justify-end"
                    : "justify-start"
                }`}
        >
            <div
                className={`max-w-[80%] rounded-xl p-4 whitespace-pre-wrap ${isUser
                        ? "bg-cyan-600 text-white"
                        : "bg-slate-800 text-slate-100"
                    }`}
            >
                <div className="mb-2 text-xs font-semibold opacity-70">
                    {isUser ? "You" : "DevPilot AI"}
                </div>

                <MarkdownRenderer
                    content={text}
                />
            </div>
        </div>
    );
};

export default Message;