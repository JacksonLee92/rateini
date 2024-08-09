"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-200 w-full h-56 flex items-center justify-center text-3xl rounded-md">
        100% <span className="font-bold uppercase pl-2"> Authenticated</span>
      </div>
      <div className="text-center my-12">
        <h1 className="font-semibold text-3xl mb-4 ">
          Ethiopian University Rankings as decided by students
        </h1>
        <p className="w-8/12 m-auto">
          We understand that when it comes to finding real information about Ethiopian Universities,
          10 year old youtube video and vauge world rankings just do not cut it. With RateMyUni you
          can gain access to 100% authenticated reviews from real students. Make your university
          choice based on real student reviews!
        </p>
      </div>
      <div className="bg-slate-200 w-full p-6">
        <h1 className="font-semibold text-2xl  mb-4 ">Review Your University</h1>
        <p>Share Your University Experience And Rate!</p>
        <div className="">
          <Link href="/add" className="underline mt-14">
            {" "}
            Rate Your Uni
          </Link>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center flex-row mt-24 gap-12">
          <div className="relative">
            <Image src="/image/business-man.png" alt="review " width={240} height={240} />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">100% Authenticated</h2>
            <p className="w-60 m-auto">
              Each review must be made with a verified email, and each email can only be used once
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-row mt-24 gap-12">
          <div>
            <h2 className="text-xl font-bold mb-4">Anonymous</h2>
            <p className="w-60 m-auto">Every review will always be displayed anonymously</p>
          </div>
          <div className="relative">
            <Image src="/image/review.png" alt="review " width={240} height={240} />
          </div>
        </div>
      </div>
    </main>
  );
}
