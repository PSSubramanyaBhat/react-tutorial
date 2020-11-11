import React, { useState } from 'react';
import questions from './data';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';

function App() {
  const [questions, setWuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
