"use client";

import Flyers from "@/components/flyers/Flyers";
import { useInfo } from "@/context/Context";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Domingo = () => {
  const { info } = useInfo();
  const router = usePathname();
  const [flyerInfo, setFlyersInfo] = useState();
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
    if (selectedDay == "lunes") setFlyersInfo(info?.flyersMonday);
    if (selectedDay == "martes") setFlyersInfo(info?.flyersTuesday);
    if (selectedDay == "miercoles") setFlyersInfo(info?.flyersWednesday);
    if (selectedDay == "jueves") setFlyersInfo(info?.flyersThursday);
    if (selectedDay == "viernes") setFlyersInfo(info?.flyersFriday);
    if (selectedDay == "sabado") setFlyersInfo(info?.flyersSaturday);
    if (selectedDay == "domingo") setFlyersInfo(info?.flyersSunday);
  }, [
    info.flyersTuesday,
    info.flyersMonday,
    info.flyersThursday,
    info.flyersWednesday,
    info.flyersFriday,
    info.flyersSaturday,
    info.flyersSunday,
    selectedDay,
  ]);
  return (
    <div>
      <Flyers flyerInfo={flyerInfo} />
    </div>
  );
};

export default Domingo;
