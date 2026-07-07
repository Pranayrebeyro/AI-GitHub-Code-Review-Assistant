import Skeleton from "../ui/Skeleton";

const RepositoryLoading = () => {
  return (
    <div className="space-y-8">

      <Skeleton className="h-10 w-80" />

      <Skeleton className="h-5 w-full" />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

        {[...Array(6)].map((_, index) => (

          <Skeleton
            key={index}
            className="h-20"
          />

        ))}

      </div>

      <div className="grid grid-cols-3 gap-8">

        <Skeleton className="h-[600px]" />

        <Skeleton className="col-span-2 h-[600px]" />

      </div>

    </div>
  );
};

export default RepositoryLoading;