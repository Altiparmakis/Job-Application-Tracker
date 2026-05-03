import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import LandingAuthActions from "./components/LandingAuthActions";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/applications");
  }

  return (
    <main className="flex flex-1 bg-[radial-gradient(circle_at_top,#dff7f2_0,#f8fafc_34rem)]">
      <section className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mx-auto inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-medium text-teal-800 shadow-sm">
            A focused workspace for your job search
          </p>
          <h1 className="mt-7 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            Track every job application in one organized place.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Save opportunities, monitor your progress, and stay focused
            throughout your job search.
          </p>

          <LandingAuthActions />
        </div>
      </section>
    </main>
  );
}
