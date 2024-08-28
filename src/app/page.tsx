"use client"; 
import RegisterForm from "./home/page";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center" style={{ backgroundImage: "url('/bgt.jpg')" }}>
      <Navbar />
      <RegisterForm />
    </main>
  );
}
