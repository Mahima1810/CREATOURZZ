export default function Loading() {
  return (
    <div className="pt-[4.5rem]">
      <div className="shell py-16 lg:py-24">
        <div className="skeleton h-5 w-40 rounded-full" />
        <div className="mt-6 skeleton h-12 w-full max-w-xl rounded-2xl" />
        <div className="mt-4 skeleton h-5 w-full max-w-md rounded-full" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="skeleton h-80 rounded-3xl" />
          ))}
        </div>
        <span className="sr-only" role="status">
          Loading
        </span>
      </div>
    </div>
  );
}
