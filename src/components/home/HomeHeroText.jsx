import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className="font-[font1] mt-56 sm:mt-64 lg:mt-0 pt-5 text-center">

            {/* Line 1 */}
            <div className="flex items-center justify-center uppercase 
                text-[12vw] lg:text-[9.5vw]
                leading-[10vw] lg:leading-[8vw]">
                L'étincelle
            </div>

            {/* Line 2 */}
            <div className="flex items-center justify-center uppercase 
                text-[12vw] lg:text-[9.5vw]
                leading-[10vw] lg:leading-[8vw] gap-2">

                qui

                <div
                    className="
                        w-[18vw] h-[8vw]
                        lg:w-[16vw] lg:h-[7vw]
                        rounded-full
                        overflow-hidden
                        -translate-y-[0.3vw]
                    "
                >
                    <Video />
                </div>

                génère
            </div>

            {/* Line 3 */}
            <div className="flex items-center justify-center uppercase 
                text-[12vw] lg:text-[9.5vw]
                leading-[10vw] lg:leading-[8vw]">
                la créativité
            </div>

        </div>
    )
}

export default HomeHeroText
