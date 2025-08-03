export default function FilterBar({ 
  filterText, 
  setFilterText, 
  sortOrder, 
  setSortOrder 
}:{ 
  filterText: string, 
  setFilterText: (text: string) => void, 
  sortOrder: string, setSortOrder: (order: string) => void 
}){
  return (
    <div className="flex gap-4 items-center">
      <span>Filter:　<input className="border-1 border-gray-300 rounded-md p-1" type="text" value={filterText} onChange={(e) => setFilterText(e.target.value)}/></span>
      <span>Sort:　<select name="sort" id="sort" className="border-1 border-gray-300 rounded-md p-1 md:cursor-pointer" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="newest">新着順</option>
        <option value="oldest">古い順</option>
        <option value="a-z">期限昇順</option>
        <option value="z-a">期限降順</option>
      </select></span>
    </div>
  );
}