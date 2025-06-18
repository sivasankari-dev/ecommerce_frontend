
import Hero from '../../components/Hero'
import Category from '../../components/Category'
import Featured from '../../components/Featured'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Category size="large"/>
        <Featured />
    </div>
  )
}

export default HomePage