import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div className="relative text-white min-h-screen overflow-hidden">

      {/* Background Video */}
      <div className="fixed inset-0 -z-10">
        <Video />
      </div>

      {/* Foreground Content */}
      <div className="
        relative
        min-h-screen
        flex flex-col
        justify-between
        pb-5
      ">
        <HomeHeroText />
        <HomeBottomText />
      </div>

    </div>
  )
}

export default Home
