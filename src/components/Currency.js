import React, { useState} from 'react';

const Currency = () => {
    //const { currency } = useContext(AppContext);
    const [selectedValue, setSelectedValue] = useState('');
    const options = ['£ Pound','$ Dollar','€ Euro','₹ Ruppee'];
    const handleSelectChange = (event) => {
        setSelectedValue("Currency ("+event.target.value+")");
        event.target.add("display", "none")
      };
    
       
    return (       
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
           <div className="input-group-prepend alert alert-succes">
           <label className="input-group-text alert alert-success  currencySelect" htmlFor="inputGroupSelect01">{selectedValue}
        </label>
        <select  class= "alert alert-success"  value={selectedValue} onChange={handleSelectChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      </div> 
     
    </div> 
       
    );
};
export default Currency;
