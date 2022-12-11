import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { UserContext } from './USercontext';

const Flag = () => {
    const[chosenCountry] = useContext(UserContext);
    

    const [image, setImage] = useState();


    useEffect(() => {
        // when page loads, it send undefined initially because country is not chosen
        // console.log(props.chosenCountry)
        if (chosenCountry.length > 0) {

            setImage(chosenCountry);
            
            document.getElementById('nameofflag').innerHTML = "Flag";
        }
        else{
            document.getElementById("nameofflag").innerHTML = "No country chosen";
        }
    },[chosenCountry])
    
    
    return <>
        <h2 id='nameofflag'>Flag:</h2>


            <div id = "all-flags">
        {
            chosenCountry.map((data,done) => {
                return <img id='flags' key={done} src={data.flags.png} alt="flag" />
            })
        }
        </div>

        {chosenCountry.map((data,index) => {
            return (<>
            <div key={index}>
            <h3 >Population of {data.name.common}: {data.population}</h3>
            <h3 >Capital of {data.name.common}: {data.capital}</h3>
            <h3 >Region of {data.name.common}: {data.region}</h3>
            <h3 >Maps of {data.name.common}: <a href= {data.maps.googleMaps} target="blank">{data.maps.googleMaps}</a></h3>
            {
                Object.entries(data.currencies).map((key,project) => {
                    return  <h3 key={project}>Currency of {data.name.common}: {key[1].symbol} </h3>
                })
            }
            </div>
            </>
            )
        } )}

    </>
}

export default Flag