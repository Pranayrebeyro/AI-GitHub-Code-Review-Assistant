import MarkdownRenderer from "../common/MarkdownRenderer";
import EmptyState from "../ui/EmptyState";
import ReviewLoading from "./ReviewLoading";

interface Props {
  review: string;
  loading: boolean;
}

const RepositoryReview = ({
  review,
  loading,
}: Props) => {
  if (loading) {
    return <ReviewLoading />;
  }

  if (!review) {
    return (
      <EmptyState
        icon="🤖"
        title="No Review Available"
        description="Generate an AI repository review to see insights and recommendations."
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-xl bg-slate-900 p-6">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold text-white sm:text-2xl">
          🤖 AI Repository Review
        </h2>

      </div>

      <MarkdownRenderer content={review} />

    </div>
  );
};

export default RepositoryReview;