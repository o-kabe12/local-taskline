export default function FilterBar() {
  return (
    <div className="flex gap-4 items-center">
      <span>Filter:　<input className="border-1 border-gray-300 rounded-md p-1" type="text" /></span>
      <span>Sort:　<select name="sort" id="sort" className="border-1 border-gray-300 rounded-md p-1">
        <option value="newest">新着順</option>
        <option value="oldest">古い順</option>
        <option value="a-z">期限昇順</option>
        <option value="z-a">期限降順</option>
      </select></span>
    </div>
  );
}