import React, { useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from './USercontext';

const Countries = () => {

    const [message, setMessage] = useState([]);
    const [chosenCountry,setChosenCountry] = useContext(UserContext);
    const [dataForApi, setDataForApi] = useState([]);
    

    const handleChooseCountry =  async (message) => {
        
        try{
        const response = await axios.get(`https://restcountries.com/v3.1/name/${message}`);
        setChosenCountry(response.data);
        console.log(chosenCountry,"country");
         document.getElementById("flags").style.display = "block";
        
        const dataToBeSaved = response.data.map((val) => {
            return {
                name: val.name.common,
                flag: val.flags.png,
                population: val.population,
                capital: val.capital,
                region: val.region,
                maps: val.maps.googleMaps
            
                
            }
            document.getElementById("flags").style.display = "block";
        });

        

   
        setDataForApi(dataToBeSaved);
        
        const data = await axios.post('/', {
            data: dataToBeSaved
        }); 

       
        document.getElementById("datasaved").innerHTML = "Data saved";
        
        }
        
        catch(error){ document.getElementById("nameofflag").innerHTML = "No country chosen";
        
        
    }
    
}

    const handleChange = event => {
        setMessage(event.target.value);
        console.log(message)
        
        
      };

      

    return <>
            <h2><b>Selected Country:{message} </b></h2>
            
            
            <h3>Choose a country:</h3> 
            <div id = "search-container">
            <input type="text" placeholder="Search for a country" value={message} onChange={handleChange} /> 
            <button onClick={() => {handleChooseCountry(message)}}>Search</button> 
            </div>
            <h2 id='datasaved'>No data saved yet.</h2>
            
            
        </>
}

export default Countries