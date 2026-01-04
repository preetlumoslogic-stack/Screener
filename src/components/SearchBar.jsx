function SearchBar() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Q Search for a company"
        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>
  )
}

export default SearchBar

