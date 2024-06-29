import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function SearchOrder() {
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    Navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Search Order ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
