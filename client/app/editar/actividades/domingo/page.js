'use client'
import Activities from "@/components/activities/Activities";
import { useInfo } from "@/context/Context";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



const Domingo = () => {
 const { info } = useInfo();
 const router = usePathname();
 const [activitiesInfo, setActivitiesInfo] = useState();
 const selectedDay = router.includes("actividades")
   ? router.replace("/editar/actividades/", "")
   : router.includes("bars")
   ? router.replace("/editar/bars/", "")
   : router.includes("staff")
   ? router.replace("/editar/staff/", "")
   : router.includes("dinning")
   ? router.replace("/editar/dinning/", "")
   : router.includes("breakfast")
   ? router.replace("/editar/breakfast/", "")
   : router.includes("flyers")
   ? router.replace("/editar/flyers/", "")
   : null;

 useEffect(() => {
   if (selectedDay == "lunes") setActivitiesInfo(info?.activitiesMonday);
   if (selectedDay == "martes") setActivitiesInfo(info?.activitiesTuesday);
   if (selectedDay == "miercoles") setActivitiesInfo(info?.activitiesWednesday);
   if (selectedDay == "jueves") setActivitiesInfo(info?.activitiesThursday);
   if (selectedDay == "viernes") setActivitiesInfo(info?.activitiesFriday);
   if (selectedDay == "sabado") setActivitiesInfo(info?.activitiesSaturday);
   if (selectedDay == "domingo") setActivitiesInfo(info?.activitiesSunday);
 }, [
   info.activitiesTuesday,
   info.activitiesMonday,
   info.activitiesThursday,
   info.activitiesWednesday,
   info.activitiesFriday,
   info.activitiesSaturday,
   info.activitiesSunday,
   selectedDay,
 ]);
  return (
    <div>
        <Activities activities = {activitiesInfo}/>
    </div>
  )
}

export default Domingo