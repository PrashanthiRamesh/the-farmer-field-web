import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className="relative bg-seasalt flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Intro />
      </div>
    </main>
  );
}
