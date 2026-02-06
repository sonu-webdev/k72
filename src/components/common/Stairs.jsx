import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })

        tl.set(stairParentRef.current, {
            display: 'block'
        })

        tl.from('.stair', {
            height: 0,
            stagger: { amount: -0.2 }
        })

        tl.to('.stair', {
            y: '100%',
            stagger: { amount: -0.25 }
        })

        tl.set(stairParentRef.current, {
            display: 'none'
        })

        tl.set('.stair', {
            y: '0%'
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            scale: window.innerWidth < 768 ? 1.05 : 1.2, // 🔥 mobile-friendly
            duration: 0.6,
            delay: 1.2,
            ease: 'power2.out'
        })

    }, [currentPath])

    return (
        <div className="relative overflow-hidden">
            <div
                ref={stairParentRef}
                className="h-screen w-full fixed z-20 top-0 left-0 pointer-events-none"
            >
                <div className="h-full w-full flex">
                    <div className="stair h-full w-1/5 bg-black" />
                    <div className="stair h-full w-1/5 bg-black" />
                    <div className="stair h-full w-1/5 bg-black" />
                    <div className="stair h-full w-1/5 bg-black" />
                    <div className="stair h-full w-1/5 bg-black" />
                </div>
            </div>

            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs
