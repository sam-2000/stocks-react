import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [val, setval] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [val1, setval1] = useState([])
  const [displayData, setdisplayData] = useState([]);

  const getStocks= async()=> {

    const header = new Headers();
    header.append('User-Agent', 'request');

    axios.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=QEOLM41Z6PNYL6YU/", header)
   .then((res) => {

     var res1 = JSON.parse(JSON.stringify(res.data)).bestMatches

     if(res1 && res1.length){
      setval(res1);
    }
   })
  }

  const handleFilter = (event) => {

    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = val.filter((value) => {
      var temp1 = JSON.parse(JSON.stringify(value))

      return temp1["2. name"].toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setval1([]);

    } else {
      setval1(newFilter);
    }
  };

  const displayDetails = (key) => {
    const stockItem = val.filter((currElem) => {
      var temp1 = JSON.parse(JSON.stringify(currElem))
      return temp1["1. symbol"] === key
   
    });
    setdisplayData(stockItem);
   
  }

  return (
    <div>
        <button onClick={getStocks()}>Submit</button>

      <center>

        <div>
            <form>
                <input type="text" placeholder="Search for Stocks" value={wordEntered} onChange= {handleFilter}></input>
            
                <button >Add</button>

            </form>

            {val1.map((curElem)=>{

              var temp1 = JSON.parse(JSON.stringify(curElem))

              return(

          <div key={temp1["1. symbol"]}>

          <button onClick={ () => displayDetails(temp1["1. symbol"]) }>{temp1["2. name"]}</button>

           </div>)})}

            
            
            
        </div>
      </center>
      {displayData.map((i) => {
        var temp2 = JSON.parse(JSON.stringify(i))
        return (
          <div key={temp2["1. symbol"]}>
          
          <ul>
          <li>stocksymbol : {temp2["1. symbol"]}</li>
          <li>stockname : {temp2["2. name"]}</li>
          <li>stocktype : {temp2["3. type"]}</li>
          <li>region : {temp2["4. region"]}</li>
          <li>market opens at : {temp2["5. marketOpen"]}</li>
          <li>market closes at : {temp2["6. marketClose"]}</li>
          <li>timezone : {temp2["7. timezone"]}</li>
          <li>currency : {temp2["8. currency"]}</li>
          <li>matchScore : {temp2["9. matchScore"]}</li>
          </ul>
         
           </div>
        )
      })}
      </div>
  );    
  }


 export default App