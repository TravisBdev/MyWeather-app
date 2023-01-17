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
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
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
