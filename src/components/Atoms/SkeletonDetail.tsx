import { Skeleton } from "./skeleton";

interface DetailSkeletonProps {}

export const DetailSkeleton: React.FC<DetailSkeletonProps> = () => {
  return (
    <div className="flex flex-col items-center space-x-4">
      <Skeleton className="lg:w-full w-60 md:h-[400px] lg:h-80 rounded-xl" />
      <div className="space-y-2 mt-4">
        <Skeleton className="h-4 w-80" />
        <Skeleton className="h-4 w-80" />
      </div>
    </div>
  );
};
