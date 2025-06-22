import React from 'react'

const About = (name) => {
  return (
    

    <div className="p-6 max-w-3xl mx-auto">
          {/* {items.map((fruit)=>(<li key={fruit}>{fruit}</li>))} */}
          <h1>name in about {name}</h1>
      <h1 className="text-4xl font-bold mb-4 text-center">Interstellar (2014) - Movie Review</h1>
      <p className="text-lg mb-4">
        <strong>Director:</strong> Christopher Nolan<br />
        <strong>Starring:</strong> Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine
      </p>
      <p className="mb-4">
        <em>Interstellar</em> is a mind-bending sci-fi epic that explores humanity’s quest for survival beyond Earth. Set in a dystopian future where Earth is slowly becoming uninhabitable, a group of explorers travels through a wormhole near Saturn in search of a new home for mankind.
      </p>
      <p className="mb-4">
        The film brilliantly combines theoretical physics, emotional storytelling, and breathtaking visuals. Hans Zimmer's haunting score elevates the emotional stakes and deepens the audience’s connection to the story. Matthew McConaughey delivers a powerful performance as Cooper, a father torn between saving the world and seeing his children grow up.
      </p>
      <p className="mb-4">
        What sets <em>Interstellar</em> apart is its commitment to scientific accuracy while still delivering an emotional, human story. The visual representation of black holes, especially “Gargantua,” was developed in consultation with physicist Kip Thorne, making it both stunning and educational.
      </p>
      <p className="font-semibold">
        ⭐ Rating: 9/10 – A thought-provoking, emotional journey through space and time that leaves a lasting impression.
      </p>
    </div>
  )
}

export default About
