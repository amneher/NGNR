// Needs an Action, some way to call it properly.

export default function SearchBox() {
    return (
        <input
            type="text"
            name="search"
            aria-label="search-box"
            placeholder="Search"
            className="input input-bordered w-auto rounded-full"
          />
    )
}