import React, { useEffect, useState } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredPopulation, setFilteredPopulation] = useState(0);
  const [filterUsers, setFilterUsers] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      const json = await res.json();

      const allCountries = json
        .map(({ name, numericCode, flag, population }) => {
          return {
            id: numericCode,
            name,
            filterName: name.toLowerCase(),
            flag,
            population,
          };
        })
        .sort((a, b) => {
          return a.name.localeCompare(b.name);
        });

      const filteredPopulation = calculateTotalPopulationFrom(allCountries);

      setAllCountries(allCountries);
      setFilteredCountries(Object.assign([], allCountries));
      setFilteredPopulation(filteredPopulation);
    };
    fetchCountries();
  }, []);

  const calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((acc, curr) => {
      return acc + curr.population;
    }, 0);

    return totalPopulation;
  };

  const handleChangeFilter = (newText) => {
    setFilterUsers(newText);

    const filterLowerCase = newText.toLowerCase();

    const filteredCountries = allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase);
    });

    const filteredPopulation = calculateTotalPopulationFrom(filteredCountries);

    setFilteredCountries(filteredCountries);
    setFilteredPopulation(filteredPopulation);
  };

  return (
    <div className="container">
      <h1 style={styles.centeredTitle}> React Countries</h1>
      <Header
        filter={filterUsers}
        countryCount={filteredCountries.length}
        onChangeFilter={handleChangeFilter}
        totalPopulation={filteredPopulation}
      />
      <Countries countries={filteredCountries} />
    </div>
  );
}

const styles = {
  centeredTitle: {
    textAlign: 'center',
  },
};
