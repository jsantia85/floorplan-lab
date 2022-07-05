import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = () => {
  return (
    <>
      <Kitchen />
      <Bedroom bedNum={1}/>
      <LivingRoom />
      <Bedroom bedNum={2}/>
      <Bath size={"Full Bath"}/>
      <Bedroom bedNum={3}/>
      <Bath size={"Half Bath"}/>
    </>
  )
}

export default FloorPlan