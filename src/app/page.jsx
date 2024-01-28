import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-2 grid-rows-2">
      <div className="bg-red-800"> header</div>
      <div className="bg-black">side bar </div>
      <div className="bg-white "> main container </div>
    </main>
  );
}
