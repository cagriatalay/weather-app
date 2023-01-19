import Card from "./Card";
import Empty from "./Empty";
import API_KEY from "./key";

import { useEffect, useState } from "react";

const Data = () => {

    const [backGr, setBackGr] = useState('./main.jpg');

    const [bool, setBool] = useState(false);
    const [city, setCity] = useState('');
    const [getCity, setGetCity] = useState('');
    const [temp, setTemp] = useState('');
    const [tempMin, setTempMin] = useState('');
    const [tempMax, setTempMax] = useState('');
    const [humidity, setHumidity] = useState('');
    const [status, setStatus] = useState('');
    const [descStatus, setDescStatus] = useState('');

    const key = API_KEY;

    const handleSubmit = (e) =>{
        e.preventDefault();
        
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res);

                if(city === ''){
                    setBool(false);
                    setBackGr('./main.jpg');
                }else{
                    setBool(true);
                }

                if(city === '' && status !== ''){
                  setBackGr('./main.jpg');
                  setStatus('');
                }

                setCity('');
                setGetCity(res.name); 
                setTemp(res.main.temp);
                setTempMax(res.main.temp_max);
                setTempMin(res.main.temp_min);
                setHumidity(res.main.humidity);
                setStatus(res.weather[0].main);
                setDescStatus(res.weather[0].description);                             

            })
            .catch((err) =>{
                console.log(err);
                console.log("Error! Errrooooooor!");
                setBool(false);
            })
    }

    const handleChange = (event) =>{
        setCity(event.target.value);
    }

    useEffect(() => {
        switch(status) {
            case 'Clear':
              console.log("Clear");
              setBackGr('./clear.jpg')
              break;
            case 'Clouds':
              setBackGr('./cloudy.jpg');
              break;
              case 'Rain':
              setBackGr('./rainy.jpg');
              break;
              case 'Snow':
                setBackGr('./snowy.jpg');
              break;
              case 'Drizzle':
                setBackGr('./rainy.jpg');
              break;
              case 'Thunderstorm':
                setBackGr('./thunderstorm.jpg')
              break;
              case 'Mist':
              setBackGr('./mist.jpg')
              break;
              case 'Fog':
              setBackGr('./mist.jpg')
              break;
            default:
              setBackGr('./main.jpg')
          }
      },[status]);

      const handleStyle = {
        backgroundImage: `url(${backGr})`
      }

    return ( 
        
        <>
<div className='background'>
<div className='container' style={handleStyle}>
         <form onSubmit={handleSubmit}>
            <input className='text_field' type="text" name="country" value={city} placeholder='Search for a city' onChange={handleChange} />
            <input className='submit_b' type="submit" value='Search'/>
         </form>

{ bool &&
<>
         <Card
         name={getCity} 
         temp={temp}
         tempMax={tempMax}
         tempMin={tempMin}
         humidity={humidity}
         status={status}
         descStatus={descStatus}
         />
</>
}

{
  !bool &&
  <>
    <Empty />
  </>
}

</div>
</div>
  </>
 );
}
 
export default Data;