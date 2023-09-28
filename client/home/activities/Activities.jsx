"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { CiLocationOn } from "react-icons/ci";
import { time, descriptions } from "@/lib/language";
import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./Activities.module.css";
import Transition from "../transition/Transition";
import { useModal } from "@/components/modal/useModal";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const Activities = ({ info }) => {
  const { language, languageMobile } = useInfo();
  const [isOpenActivity, openActivity, closeActivity] = useModal(true);
  const [infoDesc, setInfoDesc] = useState([]);

  const sortedHours = [];
  for (let i = 0; i < time.length; i++) {
    for (let j = 0; j < info?.activities.length; j++) {
      if (
        time[i] ==
        info?.activities[j].attributes.hourStart
          .toLocaleLowerCase()
          .replace(" ", "")
      )
        sortedHours.push(info?.activities[j]);
    }
  }
  console.log(info.activities);
  const handleImg = (id) => {
    const infoModal = info?.activities
      .filter((item) => item.id == id)
      .map((item) => ({
        img: item.attributes.activitieImage,
        descEn: item.attributes.descEn,
        descEs: item.attributes.descEs,
      }))
      .toString();
    setInfoDesc(infoModal);
    console.log(infoModal.descEs)
  };
  //console.log();

  return (
    <>
      <Modal isOpen={isOpenActivity} closeModal={closeActivity}>
        <div className={styles.modal_img}>
          <Image src={infoDesc?.img} alt="menu" width={600} height={800} />
          <div className={styles.modaldesc}>
            <div className={styles.modaldesc_item}>
              <div className={styles.modaldesc_desc}>
                {language == "en"
                  ? descriptions.descEn
                  : descriptions.descEs
                  ? "hola"
                  : null}
              </div>
              {/* <div>{language == "en" ? infoDesc.descEn : infoDesc.descEs}</div> */}
            </div>
          </div>
        </div>
      </Modal>
      <div className={styles.container_lg}>
        <Swiper
          className={styles.slideshow_lg}
          spaceBetween={3}
          slidesPerView={6}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {sortedHours.map((item, i) => (
            <SwiperSlide
              key={i}
              className={styles.slide}
              onClick={(id) => {
                openActivity();
                handleImg(item.id);
                console.log(item.id);
              }}
            >
              <div className={styles.card}>
                <Image
                  src={item.attributes.activitieImage}
                  alt={
                    language?.lang == "en"
                      ? item.attributes.activitieEn
                      : item.attributes.activitieEs
                  }
                  width={400}
                  height={600}
                  priority
                />
                <div className={styles.infocard}>
                  <div className={styles.hours}>
                    <div>
                      {item.attributes.hourStart} - {item.attributes.hourEnd}
                    </div>
                  </div>
                  <div className={styles.locationactivity}>
                    <div className={styles.activity}>
                      {language == "en"
                        ? item.attributes.activitieEn
                        : item.attributes.activitieEs}
                    </div>
                    <div className={styles.location}>
                      <div className={styles.loctaion_pin}>
                        <CiLocationOn size={25} />
                      </div>
                      <div>
                        {language == "en"
                          ? item.attributes.spotEn
                          : item.attributes.spotEs}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 768px */}
        <Swiper
          className={styles.slideshow_sm}
          spaceBetween={3}
          slidesPerView={2}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {sortedHours.map((item, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <Image
                  src={item.attributes.activitieImage}
                  alt={
                    languageMobile == "en"
                      ? item.attributes.activitieEn
                      : item.attributes.activitieEs
                  }
                  width={400}
                  height={600}
                  priority
                />
                <div className={styles.infocard}>
                  <div className={styles.hours}>
                    {item.attributes.hourStart} - {item.attributes.hourEnd}
                  </div>
                  <div className={styles.locationactivity}>
                    <div className={styles.activity}>
                      {languageMobile == "en"
                        ? item.attributes.activitieEn
                        : item.attributes.activitieEs}
                    </div>
                    <div className={styles.location}>
                      <div className={styles.loctaion_pin}>
                        <CiLocationOn />
                      </div>
                      <div>
                        {language == "en"
                          ? item.attributes.spotEn
                          : item.attributes.spotEs}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Activities;
