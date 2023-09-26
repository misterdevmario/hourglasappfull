"use client";

import Flyers from "@/components/flyers/Flyers";
import { useInfo } from "@/context/Context";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Domingo = () => {
  const { info } = useInfo();
  const router = usePathname();
  const [flyerInfo, setFlyersInfo] = useState();
  const [flyerTitleInfo, setFlyerTitleInfo] = useState();
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
    if (selectedDay == "lunes") {setFlyersInfo(info?.flyersMonday);setFlyerTitleInfo(info?.flyersTitleMonday)}
    if (selectedDay == "martes") {setFlyersInfo(info?.flyersTuesday);setFlyerTitleInfo(info?.flyersTitleTuesday)}
    if (selectedDay == "miercoles") {setFlyersInfo(info?.flyersWednesday);setFlyerTitleInfo(info?.flyersTitleWednesday)}
    if (selectedDay == "jueves") {setFlyersInfo(info?.flyersThursday);setFlyerTitleInfo(info?.flyersTitleThursday)}
    if (selectedDay == "viernes") {setFlyersInfo(info?.flyersFriday);setFlyerTitleInfo(info?.flyersTitleFriday)}
    if (selectedDay == "sabado") {setFlyersInfo(info?.flyersSaturday);setFlyerTitleInfo(info?.flyersTitleSaturday)}
    if (selectedDay == "domingo") {setFlyersInfo(info?.flyersSunday);setFlyerTitleInfo(info?.flyersTitleSunday)}
  }, [
    info.flyersTuesday,
    info.flyersMonday,
    info.flyersThursday,
    info.flyersWednesday,
    info.flyersFriday,
    info.flyersSaturday,
    info.flyersSunday,
    info?.flyersTitleMonday,
    info?.flyersTitleTuesday,
    info?.flyersTitleWednesday,
    info?.flyersTitleThursday,
    info?.flyersTitleFriday,
    info?.flyersTitleSaturday,
    info?.flyersTitleSunday,
    selectedDay,
  ]);


  return (
    <div>
      <Flyers flyerInfo={flyerInfo} flyerTitleInfo={flyerTitleInfo} />
    </div>
  );
};

export default Domingo;
