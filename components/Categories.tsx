"use client"

import { CategoryNames } from "@/constants";
import { CategoryProps } from "@/types";
import React from "react";

const Categories = ({ query, setQuery }: CategoryProps) => {
  return (
    <div>
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex gap-6 py-4">
          {CategoryNames.map((item) => {
            const IsActive = query === item.name

            return (
            <div
              key={item._id}
              className={IsActive ? `category-button ${"!bg-green-600 !text-white"}`: "category-button"}
              onClick={() => setQuery(item.name)}
            >
              {item.name}
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default Categories;
