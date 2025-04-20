import Categories from "@/components/catgories";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";

export default async function HomePage() {
  const categories = await prismadb.category.findMany();
  return (
    <div>
      <h1 className="h-full p-4 space-y-2">
        <SearchInput />
        <Categories data={categories} />
      </h1>
    </div>
  );
}
