"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";
import { IProduct } from "../hooks/getProducts";

const ProductCard = (props: IProduct) => {
      const { Banner, Image1, Image2, Image3, Name, Price, description, id } = props;

      return (
            <div className="relative rounded-2xl border-[1px] border-gray-700 p-2 w-[300px] h-[400px]">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="h-full flex flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                        <div className="h-3/4 rounded-2xl overflow-hidden w-full ">
                              <Image src={Banner} alt={Name} width={600} height={600} className="h-full w-full object-cover" />
                        </div>

                        <div className="h-1/4 flex flex-col gap-2 items-center justify-start">
                              <h3 className="font-sans text-lg md:text-xl font-semibold text-white">
                                    {Name}
                              </h3>
                              <p className="text-sm md:text-base text-white">${Price}</p>
                        </div>
                  </div>
            </div>
      );
};

export default ProductCard;
