import { LuSearch } from "react-icons/lu";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function SearchBar({ placeholder, value, onChange, onSearch }: SearchBarProps) {
  return (
    <div className="flex justify-center py-8 max-md:py-4 w-full md:w-full">
      <form className="flex w-full" onSubmit={onSearch}>
        <div className="flex-1 flex items-center gap-1 bg-white rounded px-4 py-2 text-[12px]">
          <LuSearch className="text-gray-500 text-[18px] cursor-pointer" />
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="flex-1 px-4 py-2 focus:outline-none text-[12px] bg-transparent"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-2 rounded text-[14px] cursor-pointer max-md:hidden"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
} 