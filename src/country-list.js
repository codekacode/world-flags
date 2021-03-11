import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Country from './country'

const CountryListStyled = styled.div`
  display: grid;
  /* grid-template-columns: 1fr; */
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--background);
  padding: 4em 2em;
`

function CountryList() {
  const [countryList, setCountryList] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      setCountryList(data);
      console.log(data)
    })
    .catch(() => {
      console.log('Hay un error!')
    })

  }, [])
  return (
    <CountryListStyled>
      {
        countryList.map(({name, flag, population, region, capital})=> {
          return (
            <Country 
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
            />
          )
        })
      }            
    </CountryListStyled>
  )
}

export default CountryList;