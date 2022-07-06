import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = () => {
  return (
    <>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1}/>
      <Bath size={"Full Bath"}/>
      <Bedroom bedNum={2}/>
      <Bath size={"Half Bath"}/>
      <Bedroom bedNum={3}/>
    </>
  )
}

export default FloorPlan