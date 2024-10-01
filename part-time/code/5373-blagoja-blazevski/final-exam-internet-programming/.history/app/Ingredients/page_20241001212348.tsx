"use client";

import useFetchData from "@/utils/CallAxiosMethod";
import { IIngredient } from "@/utils/CommonInterfaces";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Ingredients = () => {
  const res = useFetchData({ objectName: "ingredients", method: "GET" });

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<IIngredient[]>();

  useEffect(() => {
    if (!res.isLoading) {
      if (res.status === 200) {
        console.log(Math.ceil(res.data.length / 25));
        setData(res.data as IIngredient[]);
      }
    }
  }, [res.isLoading]);

  const renderIngredientsPage = () => {
    return res.data
      .slice((currentPage - 1) * 25, currentPage * 25)
      .map((ingredient: IIngredient) => (
        <div
          key={ingredient.name}
          className="flex items-center justify-between"
        >
          <h1 key={ingredient.name + "_name"}>{ingredient.name}</h1>
        </div>
      ));
  };
  return (
    <main className="flex-1">
      <section className="w-full py-16 lg:py-14">
        {data && renderIngredientsPage()}
      </section>
    </main>
  );
};

export default Ingredients;
