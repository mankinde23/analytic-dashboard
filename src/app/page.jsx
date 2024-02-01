import Image from "next/image";
import Sidebar from "./component/sidebar/sidebar";
import Search from "../../public/Icon - Search.svg";
import Calender from "../../public/solar_calendar-linear.svg";
import Bell from "../../public/solar_bell-outline.svg";
import Profile from "../../public/Rectangle 1061.png";
import Arrow from "../../public/Arrow - Down 2.svg";
import BarChat from "./component/barchart/barchat";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="h-[67.5rem] bg-main ml-[1.25rem]">
          <div className="h-[5.5rem] flex gap-[1.125rem] pt-[1.125rem]">
            <div className="flex justify-between items-center">
              <div className="flex w-[50.62rem] justify-between items-center">
                <h1 className=" text-[1.25rem] font-semibold leading-[1.75rem] text-text-h">
                  Dashboard
                </h1>
                <div className="flex items-start w-[21.81rem] rounded-[1.5rem] border-2 border-border">
                  <div className="flex h-[3rem] pl-[1rem] items-center gap-[0.5rem]  rounded-[1.5rem] w-[20.8rem] bg-white">
                    <Image src={Search} />
                    <div className="flex items-start h-[1.5rem] w-[4.1rem]">
                      <p className="text-search text-[1rem] font-normal leading-[1.5rem]">
                        Search
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[1.25rem] h-[3.25rem]">
                <div className="flex justify-end items-center gap-[1.25rem]">
                  <div className="flex h-[2.5rem] py-[0.75rem] px-[1rem] justify-center items-center gap-[0.5rem] rounded-[1.25rem]">
                    <div className="flex justify-center items-center gap-[0.625rem] h-[1.375rem]">
                      <Image src={Calender} />
                      <p className="text-[0.875rem] font-medium leading-[1.375rem] text-text-h">
                        November 15, 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex w-[2.5rem] h-[2.5rem] p-[0.68rem] gap-[0.375rem] justify-center items-center rounded-[1.68rem] border-2 border-border">
                    <Image src={Bell} />
                  </div>
                  <div className="h-[3.25rem] flex px-[0.5rem] py-[0.37rem] justify-center items-center gap-[0.75rem] rounded-[1.75rem] border-2 border-border">
                    <div className="flex items-center gap-[0.5rem] h-[2.5rem]">
                      <Image src={Profile} />
                      <div className="flex flex-col items-end gap-[0.25rem]">
                        <p className="text-[1rem] font-normal text-text-h text-right">
                          Justin Bergson
                        </p>
                        <p className="text-[0.875rem] font-normal text-email text-right">
                          Justin@gmail.com
                        </p>
                      </div>
                      <Image src={Arrow} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="flex flex-col ">
              <div className="h-[23.375rem] w-[50.375rem] bg-white p-[1.25rem] rounded-[0.875rem] border-2 border-border">
                <div className="flex justify-between items-center w-[47.875rem]">
                  <p className="text-[1.125rem] font-semibold leading-[1.625rem] text-text-h">
                    Sales Trends
                  </p>
                  <div className="flex h-[2.312rem] items-center gap-[0.625rem]">
                    <p className="text-[0.875rem] font-medium leading-[1.375rem] text-sort">
                      Short by :{" "}
                    </p>
                    <div className="h-[2rem] w-[6rem] py-[0.375rem] px-[0.75rem] flex items-center gap-[0.625rem] rounded-[1.25rem] bg-white border-2 border-border">
                      <div className="flex justify-center items-center gap-[0.625rem]">
                        <p className="text-[0.75rem] font-normal leading-[1rem]  text-sort">
                          Weekly
                        </p>
                        <Image src={Arrow} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <BarChat />
                </div>
              </div>
              <div></div>
            </div>
            {/* main container */}
          </div>
        </div>
      </div>
    </>
  );
}
