"use client";

import { useInfo } from "@/context/Context";
import HeaderRender from "../home/header/HeaderRender";
import FooterRender from "@/home/footer/FooterRender";
import Transition from "@/home/transition/Transition";
import { useEffect, useState } from "react";
import Activities from "@/home/activities/Activities";

export default function Page() {
  const { info } = useInfo();
  const [show, setShow] = useState("hide");
  const [dayInfo, setDayInfo] = useState({
    activities: [],
    staff: [],
    dining: [],
    breakfast: [],
    bars: [],
    flyers: [],
  });
 
  const day = new Date().getDay();
  useEffect(() => {
    if (day == 0)
      setDayInfo({
        activities:info?.activitiesSunday,
        staff: info?.staffSunday,
        breakfast: info?.dinningSunday,
        dining: info?.breakfastSunday,
        bars: info?.barsSunday,
        flyers: info?.flyersSunday,
        flyersTitleSunday:info?.flyersTitleSunday
      });
      if (day == 1)
      setDayInfo({
        activities:info?.activitiesMonday,
        staff: info?.staffMonday,
        breakfast: info?.dinningMonday,
        dining: info?.breakfastSMonay,
        bars:info?.barsMonday,
        flyers: info?.flyersMonday,
        flyersTitleMonday:info?.flyersTitleMonday
      });
      if (day == 2)
      setDayInfo({
        activities:info?.activitiesTuesday,
        staff: info?.staffTuesday,
        breakfast: info?.dinningTuesday,
        dining: info?.breakfastTuesday,
        bars: info?.barsTuesday,
        flyers: info?.flyersTuesday,
        flyersTitleTuesday:info?.flyersTitleTuesday
      });
      if (day == 3)
      setDayInfo({
    activities:info?.activitiesWednesday,
    staff: info?.staffWednesday,
    breakfast: info?.dinningWednesday,
    dining: info?.breakfastWednesday,
    bars: info?.barsWednesday,
    flyers: info?.flyersWednesday,
    flyersTitleWednesday:info?.flyersTitlWednesday
      });
      if (day == 4)
      setDayInfo({
        activities:info?.activitiesThursday,
        staff: info?.staffThursday,
        breakfast: info?.dinningThursday,
        dining: info?.breakfastThursday,
        bars: info?.barsThursday,
        flyers: info?.flyersThursday,
        flyersTitleThursday:info?.flyersTitleThursday
      });
      if (day == 5)
      setDayInfo({
        activities:info?.activitiesFriday,
        staff: info?.staffFriday,
        breakfast: info?.dinningFriday,
        dining: info?.breakfastFriday,
        bars: info?.barsFriday,
        flyers: info?.flyersFriday,
        flyersTitleFriday:info?.flyersTitleFriday
      });
      if (day == 6)
      setDayInfo({
        activities:info?.activitiesSaturday,
        staff: info?.staffSaturday,
        breakfast: info?.dinningSaturday,
        dining: info?.breakfastSaturday,
        bars: info?.barsSaturday,
        flyers: info?.flyersSaturday,
        flyersTitleSaturday:[info?.flyersTitleSaturday]
      });

  },[day, info?.activitiesFriday, info?.activitiesMonday, info?.activitiesSaturday, info?.activitiesSunday, info?.activitiesThursday, info?.activitiesTuesday, info?.activitiesWednesday, info?.barsFriday, info?.barsMonday, info?.barsSaturday, info?.barsSunday, info?.barsThursday, info?.barsTuesday, info?.barsWednesday, info?.breakfastFriday, info?.breakfastSMonay, info?.breakfastSaturday, info?.breakfastSunday, info?.breakfastThursday, info?.breakfastTuesday, info?.breakfastWednesday, info?.dinningFriday, info?.dinningMonday, info?.dinningSaturday, info?.dinningSunday, info?.dinningThursday, info?.dinningTuesday, info?.dinningWednesday, info?.flyersFriday, info?.flyersMonday, info?.flyersSaturday, info?.flyersSunday, info?.flyersThursday, info?.flyersTitlWednesday, info?.flyersTitleFriday, info?.flyersTitleMonday, info?.flyersTitleSaturday, info?.flyersTitleSunday, info?.flyersTitleThursday, info?.flyersTitleTuesday, info?.flyersTuesday, info?.flyersWednesday, info?.staffFriday, info?.staffMonday, info?.staffSaturday, info?.staffSunday, info?.staffThursday, info?.staffTuesday, info?.staffWednesday]);
  console.log(dayInfo?.activities)
  useEffect(() => {
    setTimeout(() => {
      setShow("show");
    }, 3000);
  });

  return (
    <main>
      <div className={show}>
        <HeaderRender/>
        <Activities info = {dayInfo}/>
      </div>
    </main>
  );
}
