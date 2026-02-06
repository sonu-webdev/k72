import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
      {/* Card 1 */}
      <div className="
        lg:w-1/2 w-full
        group relative overflow-hidden
        transition-all duration-500
        rounded-none lg:hover:rounded-[70px]
        h-full
      ">
        <img
          className="h-full w-full object-cover"
          src={props.image1}
          alt=""
        />

        <div className="
          absolute inset-0
          flex items-center justify-center
          bg-black/20
          opacity-0
          lg:group-hover:opacity-100
          transition-opacity duration-300
        ">
          <h2 className="
            uppercase font-[font1]
            text-[6vw] sm:text-3xl lg:text-6xl
            border-2 lg:border-4
            px-6 lg:px-8
            pt-2 lg:pt-4
            text-white border-white
            rounded-full
          ">
            Voir le projet
          </h2>
        </div>
      </div>

      {/* Card 2 */}
      <div className="
        lg:w-1/2 w-full
        group relative overflow-hidden
        transition-all duration-500
        rounded-none lg:hover:rounded-[70px]
        h-full
      ">
        <img
          className="h-full w-full object-cover"
          src={props.image2}
          alt=""
        />

        <div className="
          absolute inset-0
          flex items-center justify-center
          bg-black/20
          opacity-0
          lg:group-hover:opacity-100
          transition-opacity duration-300
        ">
          <h2 className="
            uppercase font-[font1]
            text-[6vw] sm:text-3xl lg:text-6xl
            border-2 lg:border-4
            px-6 lg:px-8
            pt-2 lg:pt-4
            text-white border-white
            rounded-full
          ">
            Voir le projet
          </h2>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
