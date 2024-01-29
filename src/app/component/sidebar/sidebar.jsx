import React from "react";
import Logo from "../../../../public/Vector.png";
import Category from "../../../../public/category.png";
import Image from "next/image";
import Line from "../../../../public/Vector.svg";
import Tend from "../../../../public/trend-up.svg";
import Profile from "../../../../public/profile-2user.svg";
import Box from "../../../../public/box.svg";
import Shape from "../../../../public/discount-shape.svg";
import Circle from "../../../../public/info-circle.svg";
import Bright from "../../../../public/brightness 1.svg";
import Moon from "../../../../public/moon 1.svg";

export default function Sidebar() {
  return (
    <div className="w-[5rem] h-[54.75rem] pt-[1.25rem] pb-[1.25rem]">
      <div className="h-[30.5rem] w-[5rem] flex flex-col gap-[16rem] items-center">
        <div className="h-[30.5rem] w-[5rem] flex flex-col gap-[1.25rem]">
          <div className="flex justify-center items-center p-[]">
            <Image src={Logo} />
          </div>
          <div className="flex flex-col  justify-center gap-[1rem] items-center">
            <div className="flex justify-end items-center gap-[1rem] p-[0.625rem] h-[2.5rem] w-[5rem]">
              <div>
                {" "}
                <Image src={Category} />{" "}
              </div>
              <div>
                <Image src={Line} />
              </div>
            </div>
            <div className="flex justify-center items-center gap-[] p-[0.625rem] h-[2.5rem] w-[5rem]">
              <div>
                <Image src={Tend} />
              </div>
            </div>
            <div className="flex justify-center items-center gap-[] p-[0.625rem] h-[2.5rem] w-[5rem]">
              <div>
                <Image src={Profile} />
              </div>
            </div>
            <div className="flex justify-center items-center gap-[] p-[0.625rem] h-[2.5rem] w-[5rem]">
              <div>
                <Image src={Box} />
              </div>
            </div>
            <div className="flex justify-center items-center gap-[] p-[0.625rem] h-[2.5rem] w-[5rem]">
              <div>
                <Image src={Shape} />
              </div>
            </div>
            <div className="flex justify-center items-center gap-[] p-[0.625rem] h-[2.5rem] w-[5rem]">
              <div>
                <Image src={Circle} />
              </div>
            </div>
            <div className="flex justify-center items-center gap-[0.625rem] h-[5.75rem] w-[5rem] px-[0.625rem]">
              <div className="flex flex-col gap-[0.5rem] items-center rounded-[6.25rem] p-[0.5rem]">
                <div className="flex flex-col justify-center items-center gap-[1rem]">
                  <div className="flex w-[1.875rem] flex-col justify-center items-center gap-[0.58rem] ">
                    <div className="bg-brightness rounded-[5.87rem]  px-[0.46rem] py-[0.41rem]">
                      <Image src={Bright} />
                    </div>
                  </div>
                  <div>
                    <Image src={Moon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
