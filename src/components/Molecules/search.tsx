import * as React from "react";
import { Input } from "../Atoms/input";
import { Button, buttonVariants } from "../Atoms/button";

export default function Search() {
  return (
    <div className="flex w-full items-center space-x-2 mt-5">
      <Input
        type="text"
        placeholder="Search for Movie, Series, or more..."
        value={""}
      />
      <Button
        type="submit"
        variant={buttonVariants.variant.default}
        size={buttonVariants.size.default}
      >
        Search
      </Button>
    </div>
  );
}
