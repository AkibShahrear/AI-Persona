import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        <UserButton afterSignOutUrl="/" />
      </h1>
    </div>
  );
}
