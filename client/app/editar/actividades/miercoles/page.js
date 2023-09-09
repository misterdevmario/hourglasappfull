'use client'
import Activities from "@/components/activitiesWeek/wednesday/Activities";
import { useInfo } from "@/context/Context";



const Miercoles = () => {
 const { info } = useInfo();

  return (
    <div>
        <Activities activities = {info.activitiesWednesday}/>
    </div>
  )
}

export default Miercoles