"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getActivities,
  getStaff,
  getDinning,
  getBreakfast,
  getBars,
  getFlyers,
  putBars,
  putDinning,
  putBreakfast,
  putActivities,
  putStaff,
  putFlyers,
  postActivities,
  postStaffs,
  postFlyers,
  deleteActivities,
  deleteStaffs,
  deleteFlyers,
  getFlyersTitle,
} from "@/lib/api";

import {
  getActivitiesFriday,
  postActivitiesFriday,
  putActivitiesFriday,
  deleteActivitiesFriday,
  getStaffFriday,
  postStaffsFriday,
  putStaffFriday,
  deleteStaffFriday,
  getDinningFriday,
  putDinningFriday,
  getBreakfastFriday,
  putBreakfastFriday,
  getBarsFriday,
  putBarsFriday,
  getFlyersFriday,
  postFlyersFriday,
  putFlyersFriday,
  deleteFlyersFriday,
  getFlyersTitleFriday,
  putFlyersTitleFriday,
} from "@/lib/apidaysweek/apifriday";

import {
  getActivitiesMonday,
  postActivitiesMonday,
  putActivitiesMonday,
  deleteActivitiesMonday,
  getStaffMonday,
  postStaffsMonday,
  putStaffMonday,
  deleteStaffMonday,
  getDinningMonday,
  putDinningMonday,
  getBreakfastMonday,
  putBreakfastMonday,
  getBarsMonday,
  putBarsMonday,
  getFlyersMonday,
  postFlyersMonday,
  putFlyersMonday,
  deleteFlyersMonday,
  getFlyersTitleMonday,
  putFlyersTitleMonday,
} from "@/lib/apidaysweek/apimonday";

import {
  getActivitiesSaturday,
  postActivitiesSaturday,
  putActivitiesSaturday,
  deleteActivitiesSaturday,
  getStaffSaturday,
  postStaffsSaturday,
  putStaffSaturday,
  deleteStaffSaturday,
  getDinningSaturday,
  putDinningSaturday,
  getBreakfastSaturday,
  putBreakfastSaturday,
  getBarsSaturday,
  putBarsSaturday,
  getFlyersSaturday,
  postFlyersSaturday,
  putFlyersSaturday,
  deleteFlyersSaturday,
  getFlyersTitleSaturday,
  putFlyersTitleSaturday,
} from "@/lib/apidaysweek/apisaturday";

import {
  getActivitiesSunday,
  postActivitiesSunday,
  putActivitiesSunday,
  deleteActivitiesSunday,
  getStaffSunday,
  postStaffsSunday,
  putStaffSunday,
  deleteStaffSunday,
  getDinningSunday,
  putDinningSunday,
  getBreakfastSunday,
  putBreakfastSunday,
  getBarsSunday,
  putBarsSunday,
  getFlyersSunday,
  postFlyersSunday,
  putFlyersSunday,
  deleteFlyersSunday,
  getFlyersTitleSunday,
  putFlyersTitleSunday,
} from "@/lib/apidaysweek/apisunday";

import {
  getActivitiesThursday,
  postActivitiesThursday,
  putActivitiesThursday,
  deleteActivitiesThursday,
  getStaffThursday,
  postStaffsThursday,
  putStaffThursday,
  deleteStaffThursday,
  getDinningThursday,
  putDinningThursday,
  getBreakfastThursday,
  putBreakfastThursday,
  getBarsThursday,
  putBarsThursday,
  getFlyersThursday,
  postFlyersThursday,
  putFlyersThursday,
  deleteFlyersThursday,
  getFlyersTitleThursday,
  putFlyersTitleThursday,
} from "@/lib/apidaysweek/apithursday";

import {
  getActivitiesTuesday,
  postActivitiesTuesday,
  putActivitiesTuesday,
  deleteActivitiesTuesday,
  getStaffTuesday,
  postStaffsTuesday,
  putStaffTuesday,
  deleteStaffTuesday,
  getDinningTuesday,
  putDinningTuesday,
  getBreakfastTuesday,
  putBreakfastTuesday,
  getBarsTuesday,
  putBarsTuesday,
  getFlyersTuesday,
  postFlyersTuesday,
  putFlyersTuesday,
  deleteFlyersTuesday,
  getFlyersTitleTuesday,
  putFlyersTitleTuesday,
} from "@/lib/apidaysweek/apituesday";

import {
  getActivitiesWednesday,
  postActivitiesWednesday,
  putActivitiesWednesday,
  deleteActivitiesWednesday,
  getStaffWednesday,
  postStaffsWednesday,
  putStaffWednesday,
  deleteStaffWednesday,
  getDinningWednesday,
  putDinningWednesday,
  getBreakfastWednesday,
  putBreakfastWednesday,
  getBarsWednesday,
  putBarsWednesday,
  getFlyersWednesday,
  postFlyersWednesday,
  putFlyersWednesday,
  deleteFlyersWednesday,
  getFlyersTitleWednesday,
  putFlyersTitleWednesday,
} from "@/lib/apidaysweek/apiwednesday";

import {
  getActivtiesGallery,
  getFlyersGallery,
  getBarsRestaurantsGallery,
  getStaffGallery,
} from "@/lib/apigalleries/galleries";

const infoContext = createContext();

export const useInfo = () => {
  const context = useContext(infoContext);
  if (!context) throw new Error("Provider is required");
  return context;
};

export const Provider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [languageMobile, setLanguageMobile] = useState("en");
  const [activityGallery, setActivityGallery] = useState();
  const [image, setImage] = useState();
  const [flyerImage, setFlyerImage] = useState();
  const [staffImage, setStaffImage] = useState();
  const [desc, setDesc] = useState("");
  const [info, setInfo] = useState({
    activitiesMonday: [],
    activitiesTuesday: [],
    activitiesWednesday: [],
    activitiesThursday: [],
    activitiesFriday: [],
    activitiesSaturday: [],
    activitiesSunday: [],
    staffMonday: [],
    staffTuesday: [],
    staffWednesday: [],
    staffThursday: [],
    staffFriday: [],
    staffSaturday: [],
    staffSunday: [],
    dinningMonday: [],
    dinningTuesday: [],
    dinningWednesday: [],
    dinningThursday: [],
    dinningFriday: [],
    dinningSaturday: [],
    dinningSunday: [],
    breakfastMonday: [],
    breakfastTuesday: [],
    breakfastWednesday: [],
    breakfastThursday: [],
    breakfastFriday: [],
    breakfastSaturday: [],
    breakfastSunday: [],
    barsMonday: [],
    barsTuesday: [],
    barsWednesday: [],
    barsThursday: [],
    barsFriday: [],
    barsSaturday: [],
    barsSunday: [],
    flyersMonday: [],
    flyersTuesday: [],
    flyersWednesday: [],
    flyersThursday: [],
    flyersFriday: [],
    flyersSaturday: [],
    flyersSunday: [],
    flyersTitleMonday: [],
    flyersTitleTuesday: [],
    flyersTitleWednesday: [],
    flyersTitleThursday: [],
    flyersTitleFriday: [],
    flyersTitleSaturday: [],
    flyersTitleSunday: [],
    activitiesGallery: [],
    staffGallery: [],
    barsrestaurantsGallery: [],
    flyersGallery: [],
  });
console.log(desc)
  useEffect(() => {
    (async () => {
      //Activities
      const activitiesResponse = await getActivities();

      const activitiesResponseMonday = await getActivitiesMonday();
      const activitiesResponseTuesday = await getActivitiesTuesday();
      const activitiesResponseWednesday = await getActivitiesWednesday();
      const activitiesResponseThursday = await getActivitiesThursday();
      const activitiesResponseFriday = await getActivitiesFriday();
      const activitiesResponseSaturday = await getActivitiesSaturday();
      const activitiesResponseSunday = await getActivitiesSunday();

      //Staff
      const staffResponse = await getStaff();

      const staffResponseMonday = await getStaffMonday();
      const staffResponseTuesday = await getStaffTuesday();
      const staffResponseWednesday = await getStaffWednesday();
      const staffResponseThursday = await getStaffThursday();
      const staffResponseFriday = await getStaffFriday();
      const staffResponseSaturday = await getStaffSaturday();
      const staffResponseSunday = await getStaffSunday();

      //RESTAURANTS AND BARS

      //Dining
      const dinningResponse = await getDinning();

      const dinningResponseMonday = await getDinningMonday();
      const dinningResponseTuesday = await getDinningTuesday();
      const dinningResponseWednesday = await getDinningWednesday();
      const dinningResponseThursday = await getDinningThursday();
      const dinningResponseFriday = await getDinningFriday();
      const dinningResponseSaturday = await getDinningSaturday();
      const dinningResponseSunday = await getDinningSunday();

      //Breakfast
      const breakfastResponse = await getBreakfast();

      const breakfastResponseMonday = await getBreakfastMonday();
      const breakfastResponseTuesday = await getBreakfastTuesday();
      const breakfastResponseWednesday = await getBreakfastWednesday();
      const breakfastResponseThursday = await getBreakfastThursday();
      const breakfastResponseFriday = await getBreakfastFriday();
      const breakfastResponseSaturday = await getBreakfastSaturday();
      const breakfastResponseSunday = await getBreakfastSunday();
      //Bars
      const barsResponse = await getBars();

      const barsResponseMonday = await getBarsMonday();
      const barsResponseTuesday = await getBarsTuesday();
      const barsResponseWednesday = await getBarsWednesday();
      const barsResponseThursday = await getBarsThursday();
      const barsResponseFriday = await getBarsFriday();
      const barsResponseSaturday = await getBarsSaturday();
      const barsResponseSunday = await getBarsSunday();

      //flyers
      const flyersResponse = await getFlyers();

      const flyersResponseMonday = await getFlyersMonday();
      const flyersResponseTuesday = await getFlyersTuesday();
      const flyersResponseWednesday = await getFlyersWednesday();
      const flyersResponseThursday = await getFlyersThursday();
      const flyersResponseFriday = await getFlyersFriday();
      const flyersResponseSaturday = await getFlyersSaturday();
      const flyersResponseSunday = await getFlyersSunday();

      //flyers titles
      const flyersTitleResponse = await getFlyersTitle();

      const flyersTitleResponseMonday = await getFlyersTitleMonday();
      const flyersTitleResponseTuesday = await getFlyersTitleTuesday();
      const flyersTitleResponseWednesday = await getFlyersTitleWednesday();
      const flyersTitleResponseThursday = await getFlyersTitleThursday();
      const flyersTitleResponseFriday = await getFlyersTitleFriday();
      const flyersTitleResponseSaturday = await getFlyersTitleSaturday();
      const flyersTitleResponseSunday = await getFlyersTitleSunday();

      //GALLERIES

      //Activities
      const activitiesGalleryResponse = await getActivtiesGallery();
      const images = activitiesGalleryResponse.data.map((item) =>
        item.attributes.activity.data.map((item) => item.attributes.url)
      );
      //Staff
      const staffGalleryResponse = await getStaffGallery();
      const staffImages = staffGalleryResponse.data.map((item) =>
        item.attributes.staffgallery.data.map((item) => item.attributes.url)
      );
      //Bars and restaurants
      const restaurantsBarsGalleryResponse = await getBarsRestaurantsGallery();
      const restaurantsBarsImages = restaurantsBarsGalleryResponse.data.map(
        (item) =>
          item.attributes.restaurantsbarsgallery.data.map(
            (item) => item.attributes.url
          )
      );
      //Flyers
      const flyersGalleryResponse = await getFlyersGallery();
      const flyerImage = flyersGalleryResponse.data.map((item) =>
        item.attributes.flyersgallery.data.map((item) => item.attributes.url)
      );

      setInfo({
        activities: activitiesResponse.data,
        activitiesMonday: activitiesResponseMonday.data,
        activitiesTuesday: activitiesResponseTuesday.data,
        activitiesWednesday: activitiesResponseWednesday.data,
        activitiesThursday: activitiesResponseThursday.data,
        activitiesFriday: activitiesResponseFriday.data,
        activitiesSaturday: activitiesResponseSaturday.data,
        activitiesSunday: activitiesResponseSunday.data,

        staff: staffResponse.data,
        staffMonday: staffResponseMonday.data,
        staffTuesday: staffResponseTuesday.data,
        staffWednesday: staffResponseWednesday.data,
        staffThursday: staffResponseThursday.data,
        staffFriday: staffResponseFriday.data,
        staffSaturday: staffResponseSaturday.data,
        staffSunday: staffResponseSunday.data,
        dinning: dinningResponse.data,
        dinningMonday: dinningResponseMonday.data,
        dinningTuesday: dinningResponseTuesday.data,
        dinningWednesday: dinningResponseWednesday.data,
        dinningThursday: dinningResponseThursday.data,
        dinningFriday: dinningResponseFriday.data,
        dinningSaturday: dinningResponseSaturday.data,
        dinningSunday: dinningResponseSunday.data,

        breakfast: breakfastResponse.data,
        breakfastMonday: breakfastResponseMonday.data,
        breakfastTuesday: breakfastResponseTuesday.data,
        breakfastWednesday: breakfastResponseWednesday.data,
        breakfastThursday: breakfastResponseThursday.data,
        breakfastFriday: breakfastResponseFriday.data,
        breakfastSaturday: breakfastResponseSaturday.data,
        breakfastSunday: breakfastResponseSunday.data,

        bars: barsResponse.data,
        barsMonday: barsResponseMonday.data,
        barsTuesday: barsResponseTuesday.data,
        barsWednesday: barsResponseWednesday.data,
        barsThursday: barsResponseThursday.data,
        barFriday: barsResponseFriday.data,
        barsSaturday: barsResponseSaturday.data,
        barsSunday: barsResponseSunday.data,

        flyers: flyersResponse.data,
        flyersMonday: flyersResponseMonday.data,
        flyersTuesday: flyersResponseTuesday.data,
        flyersWednesday: flyersResponseWednesday.data,
        flyersThursday: flyersResponseThursday.data,
        flyersFriday: flyersResponseFriday.data,
        flyersSaturday: flyersResponseSaturday.data,
        flyersSunday: flyersResponseSunday.data,

        flyersTitle: flyersTitleResponse.data,
        flyersTitleMonday: flyersTitleResponseMonday.data,
        flyersTitleTuesday: flyersTitleResponseTuesday.data,
        flyersTitleWednesday: flyersTitleResponseWednesday.data,
        flyersTitleThursday: flyersTitleResponseThursday.data,
        flyersTitleFriday: flyersTitleResponseFriday.data,
        flyersTitleSaturday: flyersTitleResponseSaturday.data,
        flyersTitleSunday: flyersTitleResponseSunday.data,
        activitiesGallery: images.toString().split(","),
        staffGallery: staffImages.toString().split(","),
        barsrestaurantsGallery: restaurantsBarsImages.toString().split(","),
        flyersGallery: flyerImage.toString().split(","),
      });
    })();

  }, [activityGallery, image, staffImage, flyerImage, desc]);

  useEffect(() => {
    const changeLanguage = setInterval(() => {
      if (language == "en") setLanguage("es");
      if (language == "es") setLanguage("en");
    }, 60000);
    return () => {
      clearInterval(changeLanguage);
    };
  });

  const changeLanguageMobile = (lang) => {
    setLanguageMobile(lang);
  };

  const handleImage = (item) => {
    setImage(item);
  };
  const handleStaffImage = (item) => {
    setStaffImage(item);
  };
  const handleFlyerImage = (item) => {
    setFlyerImage(item);
  };

  const handleDescription = (desc) => {
    setDesc(desc);
  };

  const updateActivity = async (data, id) => {
    const res = await putActivities({ data }, id);
    setActivityGallery(res.data);
  };
  const postActivity = async (data) => {
    const res = await postActivities({ data });
    setActivityGallery(res.data);
    setImage(null);
  };
  const deleteActivity = async (id) => {
    const res = await deleteActivities(id);
    setActivityGallery(res);
  };

  const updateBar = async (data, id) => {
    const res = await putBars({ data }, id);
    setActivityGallery(res.data);
  };
  const updateDinning = async (data, id) => {
    const res = await putDinning({ data }, id);
    setActivityGallery(res.data);
  };
  const updateBrakfast = async (data, id) => {
    const res = await putBreakfast({ data }, id);
    setActivityGallery(res.data);
  };
  const updateStaff = async (data, id) => {
    const res = await putStaff({ data }, id);
    setActivityGallery(res.data);
  };

  const postStaff = async (data) => {
    const res = await postStaffs({ data });
    setActivityGallery(res.data);
    setStaffImage(null);
  };
  const deleteStaff = async (id) => {
    const res = deleteStaffs(id);
    setActivityGallery(res);
  };

  const updateFlyer = async (data, id) => {
    const res = await putFlyers({ data }, id);
    setActivityGallery(res.data);
  };

  const postFlyer = async (data) => {
    const res = await postFlyers({ data });
    setActivityGallery(res.data);
    setFlyerImage(null);
  };
  const deleteFlyer = async (id) => {
    const res = deleteFlyers(id);
    setActivityGallery(res);
  };

  //MONDAY
  //Activities
  const updateActivitySunday = async (data, id) => {
    const res = await putActivitiesSunday({ data }, id);
    setActivityGallery(res.data);
  };
  const postActivitySunday = async (data) => {
    const res = await postActivitiesSunday({ data });
    setActivityGallery(res.data);
    setImage(null);
  };
  const deleteActivitySunday = async (id) => {
    const res = await deleteActivitiesSunday(id);
    setActivityGallery(res);
  };

  // const updateBar = async (data, id) => {
  //   const res = await putBars({ data }, id);
  //   setActivityGallery(res.data);
  // };
  // const updateDinning = async (data, id) => {
  //   const res = await putDinning({ data }, id);
  //   setActivityGallery(res.data);
  // };
  // const updateBrakfast = async (data, id) => {
  //   const res = await putBreakfast({ data }, id);
  //   setActivityGallery(res.data);
  // };
  // const updateStaff = async (data, id) => {
  //   const res = await putStaff({ data }, id);
  //   setActivityGallery(res.data);
  // };

  // const postStaff = async (data) => {
  //   const res = await postStaffs({ data });
  //   setActivityGallery(res.data);
  //   setStaffImage(null);
  // };
  // const deleteStaff = async (id) => {
  //   const res = deleteStaffs(id);
  //   setActivityGallery(res);
  // };

  // const updateFlyer = async (data, id) => {
  //   const res = await putFlyers({ data }, id);
  //   setActivityGallery(res.data);
  // };

  // const postFlyer = async (data) => {
  //   const res = await postFlyers({ data });
  //   setActivityGallery(res.data);
  //   setFlyerImage(null);
  // };
  // const deleteFlyer = async (id) => {
  //   const res = deleteFlyers(id);
  //   setActivityGallery(res);
  // };

  return (
    <infoContext.Provider
      value={{
        info,
        updateActivity,
        updateActivitySunday,
        postActivitySunday,
        deleteActivitySunday,
        activityGallery,
        handleImage,
        image,
        handleStaffImage,
        staffImage,
        postActivity,
        deleteActivity,
        updateBar,
        updateDinning,
        updateBrakfast,
        updateStaff,
        postStaff,
        deleteStaff,
        handleFlyerImage,
        flyerImage,
        updateFlyer,
        postFlyer,
        deleteFlyer,
        language,
        languageMobile,
        changeLanguageMobile,
        handleDescription
      }}
    >
      {children}
    </infoContext.Provider>
  );
};
