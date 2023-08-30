import * as React from "react";
import { Input } from "../Atoms/input";
import { Button, buttonVariants } from "../Atoms/button";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { fetchDataSearch } from "@/src/stores/reducers/searchSlice";
import { useAppDispatch } from "@/src/stores/store";

export default function Search() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<string>("");
  const [results, setResults] = React.useState<string[]>([]);

  const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = (value: any) => {
    dispatch(
      fetchDataSearch(
        `search/movie?query=${value.toLowerCase()}&include_adult=false&language=en-US&page=1`
      )
    );
    // router.push(`/${value.toLowerCase()}`);
  };

  const debouncedSearch = debounce(handleSearch, 300);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  };

  return (
    <div className="flex w-full items-center space-x-2 mt-5">
      <Input
        type="text"
        placeholder="Search for Movie, Series, or more..."
        value={value}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant={buttonVariants.variant.default}
        size={buttonVariants.size.default}
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
}
