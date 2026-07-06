import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative mt-8">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

      <input
        type="text"
        placeholder="Search repositories..."
        className="w-full rounded-xl border border-slate-800 bg-slate-900 py-4 pl-12 pr-4 text-white outline-none transition focus:border-indigo-500"
      />
    </div>
  );
};

export default SearchBar;