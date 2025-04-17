export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <br />
      <h1 className="text-2xl font-bold mb-4 font-mono">Loading... Please wait...</h1>
      <div className="flex gap-4">
        <div className="loader"></div>
      </div>
    </main>
  );
}