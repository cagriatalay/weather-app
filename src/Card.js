const Card = ({name, temp, tempMax, tempMin, humidity, status, descStatus}) => {
    return (
        <>
        <div className='wrapper'>

            <div className='temp'>
            <div style={{color: '#131d2d', fontWeight: '500'}}>{name}</div>
            <div>{temp}°</div>
            </div>
            
            <div className='temp_max_min'>
            <div><span>Max Temp</span> <br/>{tempMax}°</div>
            <div><span>Min Temp</span><br/>{tempMin}°</div>
            </div>

            <div className="humidity">
            <div><span>Humidity</span><br/>{humidity}</div>
            </div>

            <div className='status'>
            <div><span>Status</span><br/>{status}</div>
            <div><span>Status Desc</span><br/>{descStatus}</div>
            </div>

        </div>
        </>
      );
}
 
export default Card;