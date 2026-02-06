import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[font2] relative flex items-center justify-center gap-2 lg:gap-6 px-4">

      {/* Paragraph */}
      <p
        className="
          absolute 
          lg:w-[17vw] w-72
          lg:right-20 right-4
          lg:bottom-72 bottom-40
          font-[font1]
          lg:text-lg text-xs
          lg:leading-relaxed leading-snug
          opacity-90
        "
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        K72 est une agence qui pense chaque action pour nourrir la marque. Demain,
        dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour
        générer de l’émotion. Pour assurer une relation honnête, on est sans filtre,
        on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>

      {/* Projects */}
      <div
        className="
          border-2 lg:border-3
          border-white
          rounded-full
          uppercase
          flex items-center justify-center
          h-20 lg:h-44
          px-6 lg:px-14
          transition-all duration-300
          hover:border-[#D3FD50] hover:text-[#D3FD50]
        "
      >
        <Link
          className="text-[7vw] lg:text-[6vw] lg:mt-6 leading-none"
          to="/projects"
        >
          Projects
        </Link>
      </div>

      {/* Agence */}
      <div
        className="
          border-2 lg:border-3
          border-white
          rounded-full
          uppercase
          flex items-center justify-center
          h-20 lg:h-44
          px-6 lg:px-14
          transition-all duration-300
          hover:border-[#D3FD50] hover:text-[#D3FD50]
        "
      >
        <Link
          className="text-[7vw] lg:text-[6vw] lg:mt-6 leading-none"
          to="/agence"
        >
          agence
        </Link>
      </div>

    </div>
  )
}

export default HomeBottomText
