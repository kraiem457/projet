"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './re.css';
import 'bootstrap/dist/css/bootstrap.css';
import { SizeExample } from "../../src/components/popup";

const Signin = () => {
  const [keywords, setKeywords] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [initialResults, setInitialResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/getData');
      const data = response.data;
      setSearchResults(data);
      setInitialResults(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données ', error);
    }
  };

  const userSignin = (keywords) => {
    const filteredResults = initialResults.filter((item) =>
      item.companyName.toLowerCase().includes(keywords.toLowerCase()) ||
      item.country.toLowerCase().includes(keywords.toLowerCase()) ||
      item.locality.toLowerCase().includes(keywords.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setKeywords(value);

    if (value.trim() === '') {
      setSearchResults(initialResults);
    } else {
      userSignin(value);
    }
  };

  return (
    <div>
      <div className='container' 
>
        <input
          name='q'
          type='text'
          value={keywords}
          onChange={handleInputChange}
          placeholder='Recherchez par société, pays ou localité'
        />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/ab/LOGO_NOZ.png'
          style={{ width: '0px' }}
          alt='Logo'
        />
        <p className='p1'>Vous cherchez une société ? Introduisez vos mots-clés</p>
      </div>
      <table className='table'>
        <thead>
        <tr>
            <th scope='col'>#</th>
            <th scope='col'>Société</th>
            <th scope='col'>Pays</th>
            <th scope='col'>Localité</th>
            <th scope='col'>SARL</th>
            <th scope='col'>Ap</th>
            <th scope='col'>Date de début</th>
            <th scope='col'>Date de fin</th>
            <th scope='col'>NIdentifiant</th>
            <th scope='col'>Numéro Siret</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <tr key={result._id}>
                <th scope='row'>{index + 1}</th>
                <td>{result.companyName}</td>
                <td>{result.country}</td>
                <td>{result.locality}</td>
                <td>{result.SARL}</td>
                <td>{result.Ap}</td>
                <td>{result.StartDate}</td>
                <td>{result.EndDate}</td>
                <td>{result.NIdentifiant}</td>
                <td>{result.NumeroSiret}</td>
                <td>
                  <SizeExample data={result} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='10'>Aucun résultat n'a été trouvé.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Signin;
