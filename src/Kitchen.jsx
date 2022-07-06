import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = () => {
  return (
    <>
      <div className="Kitchen">
        <h2>Kitchen</h2>
        <Oven />
        <Sink />
      </div>
    </>
  )
}

export default Kitchen