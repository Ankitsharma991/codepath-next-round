import Link from "next/link";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <NavBar />

      <Link className="h-screen flex-1 flex-col items-center mt-[45vh]" href="/add-job">
        <div className="h-full flex flex-col justify-center items-center">
          <button className="bg-blue-500 text-white px-4 py-2">Add Job</button>
        </div>
      </Link>
    </div>
  );
}
