import { cn } from '../../lib/utils';

const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200", className)}
      {...props}
    />
  );
};

// Gallery Skeleton
export const GallerySkeleton = () => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="break-inside-avoid"
          style={{ height: `${200 + (index % 3) * 50}px` }}
        >
          <Skeleton className="w-full h-full rounded-2xl" />
        </div>
      ))}
    </div>
  );
};

// Project Card Skeleton
export const ProjectCardSkeleton = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      <Skeleton className="w-full h-64" />
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex space-x-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
        <Skeleton className="h-10 w-full rounded-xl" />
      </div>
    </div>
  );
};

// Testimonial Skeleton
export const TestimonialSkeleton = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <Skeleton className="h-96 lg:h-auto" />
        <div className="p-8 lg:p-12 space-y-6">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-3">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-4/5" />
            <Skeleton className="h-6 w-3/4" />
          </div>
          <div className="flex items-center space-x-4 pt-6">
            <Skeleton className="h-16 w-16 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats Skeleton
export const StatsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl">
          <Skeleton className="h-20 w-20 rounded-full mx-auto mb-6" />
          <Skeleton className="h-12 w-24 mx-auto mb-4" />
          <Skeleton className="h-6 w-32 mx-auto mb-3" />
          <Skeleton className="h-4 w-40 mx-auto" />
        </div>
      ))}
    </div>
  );
};

// List View Skeleton
export const ListViewSkeleton = () => {
  return (
    <div className="space-y-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <Skeleton className="md:w-1/3 h-64 md:h-auto" />
            <div className="flex-1 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-16" />
              </div>
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
