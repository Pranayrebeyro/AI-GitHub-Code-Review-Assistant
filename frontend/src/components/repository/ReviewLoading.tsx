import Skeleton from "../ui/Skeleton";

const ReviewLoading = () => {
  return (
    <div className="space-y-4 rounded-xl bg-slate-900 p-6">

      <Skeleton className="h-8 w-56" />

      {[...Array(8)].map((_, index) => (

        <Skeleton
          key={index}
          className="h-5 w-full"
        />

      ))}

    </div>
  );
};

export default ReviewLoading;