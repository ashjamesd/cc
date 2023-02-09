import React, {useState} from "react";

function Planeteer({name, image, twitterHandle, location, yearBorn, bio, quote}) {


  const[clicked, setClicked] = useState(false);

  function handleClick(){
    if(clicked===true){
      setClicked(false);
    }
    else{
      setClicked(true)
    }
    };

    // function fromUSA(){
    //   if(location==='true'){
    //     return "hello"
    //   }
    // };
    



  return (
    <li className="cards__item">
      <div className="card" onClick={handleClick}>
        <img
          src={image}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{clicked ? bio : quote}</p>
          <div className="card__detail">
            <p>{twitterHandle}</p>
            <p>
              {
                location === true ? "USA-BASED":"Outside of USA"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
