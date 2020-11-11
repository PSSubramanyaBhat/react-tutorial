import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  // console.log(people);
  const { name, job, image, text } = people[index];


  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newindex = index + 1;
      return checkNumber(newindex);
    });
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newindex = index - 1;
      return checkNumber(newindex);
    });
  }

  function getRandomReviewIndex(min, max) {
    return Math.random() * (max - min) + min;
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index + 1) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }



  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn"
          onClick={() => {
            //Approach 1
            /* if (index > 0) {
              setIndex((i) => i - 1);
            }*/

            //Approach 2
            prevPerson();
          }}
        >
          <FaChevronLeft />
        </button>
        <button className="next-btn"
          onClick={() => {
            //Approach 1
            /*if (index < people.length - 1) {
              setIndex((i) => i + 1);
            }*/

            //Approach 2
            nextPerson();
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn"
      // onClick={()=>{
      //   let randomIndex = getRandomReviewIndex(1, 3);
      //   setIndex(randomIndex);
      // }}
      onClick={randomPerson}
      >
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
