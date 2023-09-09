'use client'
import Activities from "@/components/activitiesWeek/sunday/Activities";
import { useInfo } from "@/context/Context";



const Domingo = () => {
 const { info } = useInfo();

  return (
    <div>
        <Activities activities = {info.activitiesSunday}/>
    </div>
  )
}

export default Domingo