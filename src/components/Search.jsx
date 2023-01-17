import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { API_URL, geoCitiesOptions } from "../api";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  function loadOptions(inputValue) {
    return fetch(
      `${API_URL}/cities?minPopulation=20000&namePrefix=${inputValue}`,
      geoCitiesOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  function handleChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <AsyncPaginate
      placeholder="Search City"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
}
