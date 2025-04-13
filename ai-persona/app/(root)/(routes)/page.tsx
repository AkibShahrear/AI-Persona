import SearchInput from "@/components/search-input";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <h1 className="h-full p-4 space-y-2">
        <SearchInput />
      </h1>
    </div>
  );
}
