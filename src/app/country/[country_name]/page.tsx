import React from "react";
import { country_data } from "../../../../constant/data";

function DynamicCountryPage({ params }: any) {
  if (params.country_name == "canada") {
    return (
      <>
        <h1> This is a Dynamic country page</h1>
        <h2>Name:{params.country_name}</h2>
        <h2>Population: {country_data.canada.Population}</h2>
        <h2>Capital: {country_data.canada.capital}</h2>
      </>
    );
  }
  else if (params.country_name == "china") {
    return (
      <>
        <h1> This is a Dynamic country page</h1>
        <h2>Name:{params.country_name}</h2>
        <h2>Population: {country_data.china.Population}</h2>
        <h2>Capital: {country_data.china.capital}</h2>
      </>
    );
  }
  else if (params.country_name == "japan") {
    return (
      <>
        <h1> This is a Dynamic country page</h1>
        <h2>Name:{params.country_name}</h2>
        <h2>Population: {country_data.japan.Population}</h2>
        <h2>Capital: {country_data.japan.capital}</h2>
      </>
    );
  }
  else if (params.country_name == "pakistan") {
    return (
      <>
        <h1> This is a Dynamic country page</h1>
        <h2>Name:{params.country_name}</h2>
        <h2>Population: {country_data.pakistan.Population}</h2>
        <h2>Capital: {country_data.pakistan.capital}</h2>
      </>
    );
  }
  else if (params.country_name == "india") {
    return (
      <>
        <h1> This is a Dynamic country page</h1>
        <h2>Name:{params.country_name}</h2>
        <h2>Population: {country_data.india.Population}</h2>
        <h2>Capital: {country_data.india.capital}</h2>
      </>
    );
  }else {
    return <h1>⚠ country not found 🌐</h1>
  }
}
export default DynamicCountryPage;