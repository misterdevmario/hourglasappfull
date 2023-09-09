'use client'
import Activities from "@/components/activitiesWeek/friday/Activities";
import { useInfo } from "@/context/Context";



const Viernes = () => {
 const { info } = useInfo();

  return (
    <div>
        <Activities activities = {info.activitiesFriday}/>
    </div>
  )
}

export default Viernes