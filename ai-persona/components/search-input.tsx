"use client";
import { use, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import queryString from "query-string";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [searchTerm, setSearchTerm] = useState(name || "");

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const debouncedValue = useDebounce(searchTerm, 500);

  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryId: categoryId,
    };
    const url = queryString.stringifyUrl(
      { url: window.location.href, query },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router, categoryId]);

  return (
    <div className="relative">
      <Search className="absolute h-4 w-4 top-2.5 left-4 text-muted-foreground" />
      <Input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        className="pl-10 bg-primary/10"
      />
    </div>
  );
};

export default SearchInput;
