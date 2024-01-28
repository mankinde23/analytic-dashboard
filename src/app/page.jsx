import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-2 grid-rows-2">
      <div className="bg-red-800 col-start-2 col-end-3  row-start-1 row-end-3">
        {" "}
        header
      </div>
      <div className="bg-black col-start-1 col-end-2 row-start-1 row-end-3 w-full">
        side bar{" "}
      </div>
      <div className="bg-white col-start-2 col-end-3  row-start-2 row-end-3">
        {" "}
        main container{" "}
      </div>
    </main>
  );
}
