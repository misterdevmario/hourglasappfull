'use client'
import Activities from "@/components/activitiesWeek/saturday/Activities";
import { useInfo } from "@/context/Context";



const Sabado = () => {
 const { info } = useInfo();

  return (
    <div>
        <Activities activities = {info.activitiesSaturday}/>
    </div>
  )
}

export default Sabado