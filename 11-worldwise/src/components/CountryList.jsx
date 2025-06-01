import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city in the map." />
    );
    
  const countries = cities.reduce((arr, city) => {
    if(!arr.map(el => el.country).includes(city.country)) {
      return [...arr, {id: city.id, country: city.country, emoji: city.emoji}]
    }
    
    return arr
  }, [])

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
