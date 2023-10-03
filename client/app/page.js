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

  const [day, setDay] = useState();

  useEffect(() => {
    setDay(new Date().getDay());
    if (day == 0)
      setDayInfo({
        activities: info?.activitiesSunday,
        staff: info?.staffSunday,
        breakfast: info?.breakfastSunday,
        dining: info?.dinningSunday,
        bars: info?.barsSunday,
        flyers: info?.flyersSunday,
        flyersTitle: info?.flyersTitleSunday,
      });
    if (day == 1)
      setDayInfo({
        activities: info?.activitiesMonday,
        staff: info?.staffMonday,
        breakfast: info?.breakfastMonday,
        dining: info?.dinningMonday,
        bars: info?.barsMonday,
        flyers: info?.flyersMonday,
        flyersTitle: info?.flyersTitleMonday,
      });
    if (day == 2)
      setDayInfo({
        activities: info?.activitiesTuesday,
        staff: info?.staffTuesday,
        breakfast: info?.breakfastTuesday,
        dining: info?.dinningTuesday,
        bars: info?.barsTuesday,
        flyers: info?.flyersTuesday,
        flyersTitle: info?.flyersTitleTuesday,
      });
    if (day == 3)
      setDayInfo({
        activities: info?.activitiesWednesday,
        staff: info?.staffWednesday,
        breakfast: info?.breakfastWednesday,
        dining: info?.dinningWednesday,
        bars: info?.barsWednesday,
        flyers: info?.flyersWednesday,
        flyersTitle: info?.flyersTitlWednesday,
      });
    if (day == 4)
      setDayInfo({
        activities: info?.activitiesThursday,
        staff: info?.staffThursday,
        breakfast: info?.breakfastThursday,
        dining: info?.dinningThursday,
        bars: info?.barsThursday,
        flyers: info?.flyersThursday,
        flyersTitle: info?.flyersTitleThursday,
      });
    if (day == 5)
      setDayInfo({
        activities: info?.activitiesFriday,
        staff: info?.staffFriday,
        breakfast: info?.breakfastFriday,
        dining: info?.dinningFriday,
        bars: info?.barsFriday,
        flyers: info?.flyersFriday,
        flyersTitle: info?.flyersTitleFriday,
      });
    if (day == 6)
      setDayInfo({
        activities: info?.activitiesSaturday,
        staff: info?.staffSaturday,
        breakfast: info?.breakfastSaturday,
        dining: info?.dinningSaturday,
        bars: info?.barsSaturday,
        flyers: info?.flyersSaturday,
        flyersTitle: info?.flyersTitleSaturday,
      });
  }, [
    day,
    info?.activitiesFriday,
    info?.activitiesMonday,
    info?.activitiesSaturday,
    info?.activitiesSunday,
    info?.activitiesThursday,
    info?.activitiesTuesday,
    info?.activitiesWednesday,
    info?.barsFriday,
    info?.barsMonday,
    info?.barsSaturday,
    info?.barsSunday,
    info?.barsThursday,
    info?.barsTuesday,
    info?.barsWednesday,
    info?.breakfastFriday,
    info?.breakfastMonday,
    info?.breakfastSaturday,
    info?.breakfastSunday,
    info?.breakfastThursday,
    info?.breakfastTuesday,
    info?.breakfastWednesday,
    info?.dinningFriday,
    info?.dinningMonday,
    info?.dinningSaturday,
    info?.dinningSunday,
    info?.dinningThursday,
    info?.dinningTuesday,
    info?.dinningWednesday,
    info?.flyersFriday,
    info?.flyersMonday,
    info?.flyersSaturday,
    info?.flyersSunday,
    info?.flyersThursday,
    info?.flyersTitlWednesday,
    info?.flyersTitleFriday,
    info?.flyersTitleMonday,
    info?.flyersTitleSaturday,
    info?.flyersTitleSunday,
    info?.flyersTitleThursday,
    info?.flyersTitleTuesday,
    info?.flyersTuesday,
    info?.flyersWednesday,
    info?.staffFriday,
    info?.staffMonday,
    info?.staffSaturday,
    info?.staffSunday,
    info?.staffThursday,
    info?.staffTuesday,
    info?.staffWednesday,
  ]);
  useEffect(() => {
    setTimeout(() => {
      setShow("show");
      setDay(new Date().getDay())
    }, 3000);
  });
 
  return (
    <main>
      <div className={show}>
        <HeaderRender />
        <Activities info={dayInfo} />
        <FooterRender info={dayInfo} />
      </div>
    </main>
  );
}
