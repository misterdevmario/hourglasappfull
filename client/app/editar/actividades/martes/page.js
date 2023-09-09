'use client'
import Activities from "@/components/activitiesWeek/tuesday/Activities";
import { useInfo } from "@/context/Context";



const Martes = () => {
 const { info } = useInfo();

  return (
    <div>
        <Activities activities = {info.activitiesTuesday}/>
    </div>
  )
}

export default Martes