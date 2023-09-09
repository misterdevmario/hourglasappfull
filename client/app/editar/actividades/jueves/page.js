'use client'
import Activities from "@/components/activitiesWeek/thursday/Activities";
import { useInfo } from "@/context/Context";



const Jueves = () => {
 const { info } = useInfo();

  return (
    <div>
        <Activities activities = {info.activitiesThursday}/>
    </div>
  )
}

export default Jueves