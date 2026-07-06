import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  review: string;
}

const ReviewPanel = ({ review }: Props) => {
  if (!review) return null;

  return (
    <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-cyan-400">
        🤖 AI Code Review
      </h2>

      <div className="prose prose-invert max-w-none">

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >
          {review}
        </ReactMarkdown>

      </div>

    </div>
  );
};

export default ReviewPanel;