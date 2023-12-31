import * as React from "react";
import { Input } from "../Atoms/input";
import { RiSearchEyeLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { MdFavorite } from "react-icons/md";
import { Button, buttonVariants } from "../Atoms/button";
import { useRouter } from "next/router";
import { fetchDataSearch } from "@/src/stores/reducers/searchSlice";
import { useAppDispatch } from "@/src/stores/store";
import AutoComplateContainer from "../Atoms/containers/autocomplate-container";
import { useSelector } from "react-redux";
import { resultsFetching } from "@/src/utils/types";

export default function SearchBar() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data, loading } = useSelector((state: any) => state.search);

  const [value, setValue] = React.useState<string>("");
  const [textPlaceholder, setTextPlaceholder] = React.useState<string>("");

  let visible: string = "";
  if (data.results !== undefined && data.results.length !== 0) {
    visible = "border border-slate-200";
  }
  // debounce and AutoComplate for handle much fetch API
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

  // handle search for fetch data search
  const handleSearch = (value: any) => {
    dispatch(
      fetchDataSearch(
        `search/keyword?query=${value.toLowerCase()}&include_adult=false&language=en-US&page=1`
      )
    );
  };

  const debouncedSearch = debounce(handleSearch, 300);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  };

  return (
    <nav className="w-full">
      <div className="flex w-full items-center space-x-2 mt-5">
        {/* earch bar input */}
        <Input
          className={
            textPlaceholder != ""
              ? "placeholder:text-[#45474b] rounded-full"
              : "rounded-full"
          }
          type="text"
          placeholder={
            textPlaceholder != ""
              ? textPlaceholder
              : `Search for Movie, Series, or more...`
          }
          value={value}
          onChange={handleChange}
        />
        {/* BUtton for Search bar */}
        <Button
          className="rounded-full"
          type="submit"
          variant={buttonVariants.variant.default}
          size={buttonVariants.size.default}
          onClick={() => {
            setValue(""),
              setTextPlaceholder(value),
              dispatch(
                fetchDataSearch(
                  `search/movie?query=${value.toLowerCase()}&include_adult=false&language=en-US&page=1`
                )
              );
            router.push(`/${value.toLowerCase()}`);
          }}
        >
          <RiSearchEyeLine className="md:text-[1.2rem] mr-1" />
          Search
        </Button>

        {/* Button for Home */}
        <Button
          className="rounded-full py-1 px-[0.7rem]"
          type="submit"
          variant={buttonVariants.variant.default}
          size={buttonVariants.size.default}
          onClick={() => router.push(`/`)}
        >
          <GoHome className="text-lg md:text-xl" />
        </Button>

        {/* Button for Favorite */}
        <Button
          className="rounded-full py-1 px-[0.7rem]"
          type="submit"
          variant={buttonVariants.variant.default}
          size={buttonVariants.size.default}
          onClick={() => router.push(`/favorite`)}
        >
          <MdFavorite className="text-lg text-red-500 md:text-xl" />
        </Button>
      </div>

      {/* Autocomplate comp */}

      {value == "" ? (
        ""
      ) : (
        <div className="relative w-full">
          <AutoComplateContainer visible={visible} value={value}>
            {loading ? (
              <li>Loading....</li>
            ) : (
              data.results?.map((result: any, index: number) => (
                <li
                  className="cursor-pointer hover:bg-slate-400 hover:bg-opacity-30 rounded-sm p-1"
                  key={index}
                  onClick={() => {
                    setValue(""),
                      setTextPlaceholder(result?.name),
                      dispatch(
                        fetchDataSearch(
                          `search/movie?query=${result?.name.toLowerCase()}&include_adult=false&language=en-US&page=1`
                        )
                      );
                    router.push(`/${result?.name.toLowerCase()}`);
                  }}
                >
                  {result?.name}
                </li>
              ))
            )}
          </AutoComplateContainer>
        </div>
      )}
    </nav>
  );
}
