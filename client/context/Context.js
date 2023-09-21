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
  getStaffsFriday,
  postStaffsFriday,
  putStaffsFriday,
  deleteStaffsFriday,
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
  getStaffsMonday,
  postStaffsMonday,
  putStaffsMonday,
  deleteStaffsMonday,
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
  getStaffsSaturday,
  postStaffsSaturday,
  putStaffsSaturday,
  deleteStaffsSaturday,
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
  getStaffsSunday,
  postStaffsSunday,
  putStaffsSunday,
  deleteStaffsSunday,
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
  getStaffsThursday,
  postStaffsThursday,
  putStaffsThursday,
  deleteStaffsThursday,
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
  getStaffsTuesday,
  postStaffsTuesday,
  putStaffsTuesday,
  deleteStaffsTuesday,
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
  getStaffsWednesday,
  postStaffsWednesday,
  putStaffsWednesday,
  deleteStaffsWednesday,
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

  useEffect(() => {
    (async () => {
      //Activities

      const activitiesResponseMonday = await getActivitiesMonday();
      const activitiesResponseTuesday = await getActivitiesTuesday();
      const activitiesResponseWednesday = await getActivitiesWednesday();
      const activitiesResponseThursday = await getActivitiesThursday();
      const activitiesResponseFriday = await getActivitiesFriday();
      const activitiesResponseSaturday = await getActivitiesSaturday();
      const activitiesResponseSunday = await getActivitiesSunday();

      //Staff

      const staffResponseMonday = await getStaffsMonday();
      const staffResponseTuesday = await getStaffsTuesday();
      const staffResponseWednesday = await getStaffsWednesday();
      const staffResponseThursday = await getStaffsThursday();
      const staffResponseFriday = await getStaffsFriday();
      const staffResponseSaturday = await getStaffsSaturday();
      const staffResponseSunday = await getStaffsSunday();

      //RESTAURANTS AND BARS

      //Dining

      const dinningResponseMonday = await getDinningMonday();
      const dinningResponseTuesday = await getDinningTuesday();
      const dinningResponseWednesday = await getDinningWednesday();
      const dinningResponseThursday = await getDinningThursday();
      const dinningResponseFriday = await getDinningFriday();
      const dinningResponseSaturday = await getDinningSaturday();
      const dinningResponseSunday = await getDinningSunday();

      //Breakfast

      const breakfastResponseMonday = await getBreakfastMonday();
      const breakfastResponseTuesday = await getBreakfastTuesday();
      const breakfastResponseWednesday = await getBreakfastWednesday();
      const breakfastResponseThursday = await getBreakfastThursday();
      const breakfastResponseFriday = await getBreakfastFriday();
      const breakfastResponseSaturday = await getBreakfastSaturday();
      const breakfastResponseSunday = await getBreakfastSunday();
      //Bars

      const barsResponseMonday = await getBarsMonday();
      const barsResponseTuesday = await getBarsTuesday();
      const barsResponseWednesday = await getBarsWednesday();
      const barsResponseThursday = await getBarsThursday();
      const barsResponseFriday = await getBarsFriday();
      const barsResponseSaturday = await getBarsSaturday();
      const barsResponseSunday = await getBarsSunday();

      //flyers

      const flyersResponseMonday = await getFlyersMonday();
      const flyersResponseTuesday = await getFlyersTuesday();
      const flyersResponseWednesday = await getFlyersWednesday();
      const flyersResponseThursday = await getFlyersThursday();
      const flyersResponseFriday = await getFlyersFriday();
      const flyersResponseSaturday = await getFlyersSaturday();
      const flyersResponseSunday = await getFlyersSunday();

      //flyers titles

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
        activitiesMonday: activitiesResponseMonday.data,
        activitiesTuesday: activitiesResponseTuesday.data,
        activitiesWednesday: activitiesResponseWednesday.data,
        activitiesThursday: activitiesResponseThursday.data,
        activitiesFriday: activitiesResponseFriday.data,
        activitiesSaturday: activitiesResponseSaturday.data,
        activitiesSunday: activitiesResponseSunday.data,

        staffMonday: staffResponseMonday.data,
        staffTuesday: staffResponseTuesday.data,
        staffWednesday: staffResponseWednesday.data,
        staffThursday: staffResponseThursday.data,
        staffFriday: staffResponseFriday.data,
        staffSaturday: staffResponseSaturday.data,
        staffSunday: staffResponseSunday.data,

        dinningMonday: dinningResponseMonday.data,
        dinningTuesday: dinningResponseTuesday.data,
        dinningWednesday: dinningResponseWednesday.data,
        dinningThursday: dinningResponseThursday.data,
        dinningFriday: dinningResponseFriday.data,
        dinningSaturday: dinningResponseSaturday.data,
        dinningSunday: dinningResponseSunday.data,

        breakfastMonday: breakfastResponseMonday.data,
        breakfastTuesday: breakfastResponseTuesday.data,
        breakfastWednesday: breakfastResponseWednesday.data,
        breakfastThursday: breakfastResponseThursday.data,
        breakfastFriday: breakfastResponseFriday.data,
        breakfastSaturday: breakfastResponseSaturday.data,
        breakfastSunday: breakfastResponseSunday.data,

        barsMonday: barsResponseMonday.data,
        barsTuesday: barsResponseTuesday.data,
        barsWednesday: barsResponseWednesday.data,
        barsThursday: barsResponseThursday.data,
        barFriday: barsResponseFriday.data,
        barsSaturday: barsResponseSaturday.data,
        barsSunday: barsResponseSunday.data,

        flyersMonday: flyersResponseMonday.data,
        flyersTuesday: flyersResponseTuesday.data,
        flyersWednesday: flyersResponseWednesday.data,
        flyersThursday: flyersResponseThursday.data,
        flyersFriday: flyersResponseFriday.data,
        flyersSaturday: flyersResponseSaturday.data,
        flyersSunday: flyersResponseSunday.data,

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

  //ACTIVITIES
  //monday
  const updateActivityMonday = async (data, id) => {
    const res = await putActivitiesMonday({ data }, id);
    setActivityGallery(res.data);
  };
  const postActivityMonday = async (data) => {
    const res = await postActivitiesMonday({ data });
    setActivityGallery(res.data);
    setImage(null);
  };
  const deleteActivityMonday = async (id) => {
    const res = await deleteActivitiesMonday(id);
    setActivityGallery(res);
  };
  //tuesday
  const updateActivityTuesday = async (data, id) => {
    const res = await putActivitiesTuesday({ data }, id);
    setActivityGallery(res.data);
  };
  const postActivityTuesday = async (data) => {
    const res = await postActivitiesTuesday({ data });
    setActivityGallery(res.data);
    setImage(null);
  };
  const deleteActivityTuesday = async (id) => {
    const res = await deleteActivitiesTuesday(id);
    setActivityGallery(res);
  };
  //wednesday
  const updateActivityWednesday = async (data, id) => {
    const res = await putActivitiesWednesday({ data }, id);
    setActivityGallery(res.data);
  };
  const postActivityWednesday = async (data) => {
    const res = await postActivitiesWednesday({ data });
    setActivityGallery(res.data);
    setImage(null);
  };
  const deleteActivityWednesday = async (id) => {
    const res = await deleteActivitiesWednesday(id);
    setActivityGallery(res);
  };
  //thursday
  const updateActivityThursday = async (data, id) => {
    const res = await putActivitiesThursday({ data }, id);
    setActivityGallery(res.data);
  };
  const postActivityThursday = async (data) => {
    const res = await postActivitiesThursday({ data });
    setActivityGallery(res.data);
    setImage(null);
  };
  const deleteActivityThursday = async (id) => {
    const res = await deleteActivitiesThursday(id);
    setActivityGallery(res);
  };
  //friday
  const updateActivityFriday = async (data, id) => {
    const res = await putActivitiesFriday({ data }, id);
    setActivityGallery(res.data);
  };
  const postActivityFriday = async (data) => {
    const res = await postActivitiesFriday({ data });
    setActivityGallery(res.data);
    setImage(null);
  };
  const deleteActivityFriday = async (id) => {
    const res = await deleteActivitiesFriday(id);
    setActivityGallery(res);
  };
  //saturday
  const updateActivitySaturday = async (data, id) => {
    const res = await putActivitiesSaturday({ data }, id);
    setActivityGallery(res.data);
  };
  const postActivitySaturday = async (data) => {
    const res = await postActivitiesSaturday({ data });
    setActivityGallery(res.data);
    setImage(null);
  };
  const deleteActivitySaturday = async (id) => {
    const res = await deleteActivitiesSaturday(id);
    setActivityGallery(res);
  };
  //sunday
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

  //STAFF
  //monday
  const updateStaffMonday = async (data, id) => {
    const res = await putStaffsMonday({ data }, id);
    setActivityGallery(res.data);
  };

  const postStaffMonday = async (data) => {
    const res = await postStaffsMonday({ data });
    setActivityGallery(res.data);
    setStaffImage(null);
  };
  const deleteStaffMonday = async (id) => {
    const res = deleteStaffsMonday(id);
    setActivityGallery(res);
  };

  //tuesday
  const updateStaffTuesday = async (data, id) => {
    const res = await putStaffsTuesday({ data }, id);
    setActivityGallery(res.data);
  };

  const postStaffTuesday = async (data) => {
    const res = await postStaffsTuesday({ data });
    setActivityGallery(res.data);
    setStaffImage(null);
  };
  const deleteStaffTuesday = async (id) => {
    const res = deleteStaffsTuesday(id);
    setActivityGallery(res);
  };
  //wednesday
  const updateStaffWednesday = async (data, id) => {
    const res = await putStaffsWednesday({ data }, id);
    setActivityGallery(res.data);
  };

  const postStaffWednesday = async (data) => {
    const res = await postStaffsWednesday({ data });
    setActivityGallery(res.data);
    setStaffImage(null);
  };
  const deleteStaffWednesday = async (id) => {
    const res = deleteStaffsWednesday(id);
    setActivityGallery(res);
  };
  //thursday
  const updateStaffThursday = async (data, id) => {
    const res = await putStaffsThursday({ data }, id);
    setActivityGallery(res.data);
  };

  const postStaffThursday = async (data) => {
    const res = await postStaffsThursday({ data });
    setActivityGallery(res.data);
    setStaffImage(null);
  };
  const deleteStaffThursday = async (id) => {
    const res = deleteStaffsThursday(id);
    setActivityGallery(res);
  };
  //friday
  const updateStaffFriday = async (data, id) => {
    const res = await putStaffsFriday({ data }, id);
    setActivityGallery(res.data);
  };

  const postStaffFriday = async (data) => {
    const res = await postStaffsFriday({ data });
    setActivityGallery(res.data);
    setStaffImage(null);
  };
  const deleteStaffFriday = async (id) => {
    const res = deleteStaffsFriday(id);
    setActivityGallery(res);
  };
  //saturday
  const updateStaffSaturday = async (data, id) => {
    const res = await putStaffsSaturday({ data }, id);
    setActivityGallery(res.data);
  };

  const postStaffSaturday = async (data) => {
    const res = await postStaffsSaturday({ data });
    setActivityGallery(res.data);
    setStaffImage(null);
  };
  const deleteStaffSaturday = async (id) => {
    const res = deleteStaffsSaturday(id);
    setActivityGallery(res);
  };
  //sunday
  const updateStaffSunday = async (data, id) => {
    const res = await putStaffsSunday({ data }, id);
    setActivityGallery(res.data);
  };

  const postStaffSunday = async (data) => {
    const res = await postStaffsSunday({ data });
    setActivityGallery(res.data);
    setStaffImage(null);
  };
  const deleteStaffSunday = async (id) => {
    const res = deleteStaffsSunday(id);
    setActivityGallery(res);
  };

  //Bars
  const updateBarMonday = async (data, id) => {
    const res = await putBarsMonday({ data }, id);
    setActivityGallery(res.data);
  };
  const updateBarTuesday = async (data, id) => {
    const res = await putBarsTuesday({ data }, id);
    setActivityGallery(res.data);
  };
  const updateBarWednesday = async (data, id) => {
    const res = await putBarsWednesday({ data }, id);
    setActivityGallery(res.data);
  };
  const updateBarThursday = async (data, id) => {
    const res = await putBarsThursday({ data }, id);
    setActivityGallery(res.data);
  };
  const updateBarFriday = async (data, id) => {
    const res = await putBarsFriday({ data }, id);
    setActivityGallery(res.data);
  };
  const updateBarSaturday = async (data, id) => {
    const res = await putBarsSaturday({ data }, id);
    setActivityGallery(res.data);
  };
  const updateBarSunday = async (data, id) => {
    const res = await putBarsSunday({ data }, id);
    setActivityGallery(res.data);
  };

  //DINING
  //monday
  const updateDinningMonday = async (data, id) => {
    const res = await putDinningMonday({ data }, id);
    setActivityGallery(res.data);
  };
  //tuesday
  const updateDinningTuesday = async (data, id) => {
    const res = await putDinningTuesday({ data }, id);
    setActivityGallery(res.data);
  };
  //wednesday
  const updateDinningWednesday = async (data, id) => {
    const res = await putDinningWednesday({ data }, id);
    setActivityGallery(res.data);
  };
  //thursday
  const updateDinningThursday = async (data, id) => {
    const res = await putDinningThursday({ data }, id);
    setActivityGallery(res.data);
  };
  //friday
  const updateDinningFriday = async (data, id) => {
    const res = await putDinningFriday({ data }, id);
    setActivityGallery(res.data);
  };
  //saturday
  const updateDinningSaturday = async (data, id) => {
    const res = await putDinningSaturday({ data }, id);
    setActivityGallery(res.data);
  };
  //sunday
  const updateDinningSunday = async (data, id) => {
    const res = await putDinningSunday({ data }, id);
    setActivityGallery(res.data);
  };

  //BREAKFAST

  //monday
  const updateBreakfastMonday = async (data, id) => {
    const res = await putBreakfastMonday({ data }, id);
    setActivityGallery(res.data);
  };
  //tuesday
  const updateBreakfastTuesday = async (data, id) => {
    const res = await putBreakfastTuesday({ data }, id);
    setActivityGallery(res.data);
  };
  //wednesday
  const updateBreakfastWednesday = async (data, id) => {
    const res = await putBreakfastWednesday({ data }, id);
    setActivityGallery(res.data);
  };
  //thursday
  const updateBreakfastThursday = async (data, id) => {
    const res = await putBreakfastThursday({ data }, id);
    setActivityGallery(res.data);
  };
  //friday
  const updateBreakfastFriday = async (data, id) => {
    const res = await putBreakfastFriday({ data }, id);
    setActivityGallery(res.data);
  };
  //saturday
  const updateBreakfastSaturday = async (data, id) => {
    const res = await putBreakfastSaturday({ data }, id);
    setActivityGallery(res.data);
  };
  //sunday
  const updateBreakfastSunday = async (data, id) => {
    const res = await putBreakfastSunday({ data }, id);
    setActivityGallery(res.data);
  };

  return (
    <infoContext.Provider
      value={{
        info,
        //Activities
        updateActivityMonday,
        postActivityMonday,
        deleteActivityMonday,

        updateActivityTuesday,
        postActivityTuesday,
        deleteActivityTuesday,

        updateActivityWednesday,
        postActivityWednesday,
        deleteActivityWednesday,

        updateActivityThursday,
        postActivityThursday,
        deleteActivityThursday,

        updateActivityFriday,
        postActivityFriday,
        deleteActivityFriday,

        updateActivitySaturday,
        postActivitySaturday,
        deleteActivitySaturday,

        updateActivitySunday,
        postActivitySunday,
        deleteActivitySunday,

        //STAFF
        updateStaffMonday,
        postStaffMonday,
        deleteStaffMonday,

        updateStaffTuesday,
        postStaffTuesday,
        deleteStaffTuesday,

        updateStaffWednesday,
        postStaffWednesday,
        deleteStaffWednesday,

        updateStaffThursday,
        postStaffThursday,
        deleteStaffThursday,

        updateStaffFriday,
        postStaffFriday,
        deleteStaffFriday,

        updateStaffSaturday,
        postStaffSaturday,
        deleteStaffSaturday,

        updateStaffSunday,
        postStaffSunday,
        deleteStaffSunday,

        //DINING
        updateDinningMonday,
        updateDinningTuesday,
        updateDinningThursday,
        updateDinningWednesday,
        updateDinningFriday,
        updateDinningSaturday,
        updateDinningSunday,

        //BARS
        updateBarMonday,
        updateBarTuesday,
        updateBarWednesday,
        updateBarThursday,
        updateBarFriday,
        updateBarSaturday,
        updateBarSunday,

        //BREAKFAST
        updateBreakfastMonday,
        updateBreakfastTuesday,
        updateBreakfastWednesday,
        updateBreakfastThursday,
        updateBreakfastFriday,
        updateBreakfastSaturday,
        updateBreakfastSunday,

        updateBrakfast,
        updateStaff,
        postStaff,
        deleteStaff,
        updateFlyer,
        postFlyer,
        deleteFlyer,

        //Language
        language,
        languageMobile,
        changeLanguageMobile,

        //Update triggers
        handleFlyerImage,
        flyerImage,
        handleImage,
        image,
        handleStaffImage,
        staffImage,
        handleDescription,
        activityGallery,
      }}
    >
      {children}
    </infoContext.Provider>
  );
};
