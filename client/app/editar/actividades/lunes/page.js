'use client'
import Activities from "@/components/activitiesWeek/monday/Activities";
import { useInfo } from "@/context/Context";



const Lunes = () => {
 const { info } = useInfo();

  return (
    <div>
        <Activities activities = {info.activitiesMonday}/>
    </div>
  )
}

export default Lunes