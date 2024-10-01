import { useSearchParams } from "next/navigation";
import React from "react";
const RecipeEdit = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const id = useSearchParams().get("id") || params.id;

  return <div>page</div>;
};

export default RecipeEdit;
