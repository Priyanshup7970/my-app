// export default function Loading() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-50/50">
//       {/* Spinner */}
//       <div className="relative">
//         <div className="h-12 w-12 rounded-full border-4 border-blue-100 border-t-blue-500 animate-spin" />
//       </div>
      
//       {/* Text */}
//       <p className="text-lg font-medium text-gray-600 animate-pulse">
//         Loading...
//       </p>
//     </div>
//   );
// }
export default function Loading() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      {/* Page Title Skeleton */}
      <div className="h-8 w-48 bg-gray-300 rounded-md mb-8 animate-pulse" />

      {/* Grid of Skeleton Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-32 w-full bg-gray-100 rounded-lg animate-pulse" />
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-4/5 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}