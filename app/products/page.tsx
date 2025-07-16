"use client";

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";
import React from "react";
import { getProducts } from "./hooks/getProducts";
import ProductCard from "./components/product-card";

const Product = () => {
      const { data, error, isLoading, isValidating, mutate } = getProducts();

      return (
            <section className="w-full h-full overflow-hidden">
                  <header className="h-fit py-5 flex items-center justify-center">
                        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Create a Product
                              </span>
                        </button>
                        {/* <LampContainer className="h-full">
                              <motion.h1
                                    initial={{ opacity: 0.5, y: "250px" }}
                                    whileInView={{ opacity: 1, y: "120px" }}
                                    transition={{
                                          delay: 0.3,
                                          duration: 0.8,
                                          ease: "easeInOut",
                                    }}
                                    className=" bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                              >
                                    Products List
                              </motion.h1>
                        </LampContainer> */}
                  </header>
                  <main className="h-full w-full flex items-center justify-center flex-wrap overflow-x-auto gap-3">
                        {data && !isLoading && data.map((product) => <ProductCard key={product.id} {...product} />)}
                  </main>
            </section>
      );
};

export default Product;
