import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Country from './country'
import {useSelector, useDispatch} from 'react-redux'

const CountryListStyled = styled.div`
  display: grid;
  /* grid-template-columns: 1fr; */
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--background);
  padding: 4em 2em;
`

function CountryList() {
  const dispatch = useDispatch()
  const countryList = useSelector((state) => state.countryList);
  console.log("estado", countryList)
  // const [countryList, setCountryList] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      return response.json()
    })
    .then((list) => {
      dispatch({
        type: 'SET_COUNTRY_LIST',
        payload: list
      })
      console.log(list.length);
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
            key={name}
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