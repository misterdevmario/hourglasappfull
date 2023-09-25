"use client";

import Bars from "@/components/bars/Bars";
import { useInfo } from "@/context/Context";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Jueves = () => {
  const { info } = useInfo();
  const router = usePathname();
  const [barsInfo, setBarsInfo] = useState();
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
    if (selectedDay == "lunes") setBarsInfo(info?.barsMonday);
    if (selectedDay == "martes") setBarsInfo(info?.barsTuesday);
    if (selectedDay == "miercoles") setBarsInfo(info?.barsWednesday);
    if (selectedDay == "jueves") setBarsInfo(info?.barsThursday);
    if (selectedDay == "viernes") setBarsInfo(info?.barsFriday);
    if (selectedDay == "sabado") setBarsInfo(info?.barsSaturday);
    if (selectedDay == "domingo") setBarsInfo(info?.barsSunday);
  }, [
    info.barsTuesday,
    info.barsMonday,
    info.barsThursday,
    info.barsWednesday,
    info.barsFriday,
    info.barsSaturday,
    info.barsSunday,
    selectedDay,
  ]);
  return (
    <div>
      <Bars barsInfo={barsInfo} />
    </div>
  );
};

export default Jueves;
