"use client";

import Staff from "@/components/staff/Staff";
import { useInfo } from "@/context/Context";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Viernes = () => {
  const router = usePathname();
  const { info } = useInfo();
  const [staffInfo, setStaffInfo] = useState();
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
    if (selectedDay == "lunes") setStaffInfo(info?.staffMonday);
    if (selectedDay == "martes") setStaffInfo(info?.staffTuesday);
    if (selectedDay == "miercoles") setStaffInfo(info?.staffThursday);
    if (selectedDay == "jueves") setStaffInfo(info?.staffWednesday);
    if (selectedDay == "viernes") setStaffInfo(info?.staffFriday);
    if (selectedDay == "sabado") setStaffInfo(info?.staffSaturday);
    if (selectedDay == "domingo") setStaffInfo(info?.staffSunday);
  }, [
    info.staffTuesday,
    info.staffMonday,
    info.staffThursday,
    info.staffWednesday,
    info.staffFriday,
    info.staffSaturday,
    info.staffSunday,
    selectedDay,
  ]);
 
  return (
    <div>
      <Staff staffInfo={staffInfo}/>
    </div>
  );
};

export default Viernes;
