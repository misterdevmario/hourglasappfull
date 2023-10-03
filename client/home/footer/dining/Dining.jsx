import { useInfo } from "@/context/Context";
import styles from "./Dining.module.css";
import Image from "next/image";
import { sectionTitles, descriptions } from "@/lib/language";
import { useModal } from "@/components/modal/useModal";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const Dining = ({ info }) => {
  const { language, languageMobile } = useInfo();
  const [isOpenDining, openDining, closeDining] = useModal(true);
  const [isOpenDiningMobile, openDiningMobile, closeDiningMobile] = useModal(true);
  const [infoDesc, setInfoDesc] = useState();

  const handleImg = (id) => {
    const infoModal = info.dining
      .filter((item) => item.id == id)
      .map((item) => ({
        menuImgEn: item.attributes.menuImgEn,
        menuImgEs: item.attributes.menuImgEs,
      }));

    setInfoDesc(infoModal);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          {language == "en" ? sectionTitles.en.dining : sectionTitles.es.dining}
        </div>
        <div className={styles.card_container}>
          <Modal isOpen={isOpenDining} closeModal={closeDining}>
            <div className={styles.modal_img}>
              <Image
                src={
                  language == "en"
                    ? infoDesc?.map((item) => item.menuImgEn).toString()
                    : infoDesc?.map((item) => item.menuImgEs).toString()
                }
                alt="menu"
                width={600}
                height={800}
              />
            </div>
          </Modal>
          {info.dining.map((item) => (
            <div
              className={styles.card}
              key={item.id}
              onClick={() => {
                handleImg(item.id);
                openDining();
              }}
            >
              <div className={styles.name}>{item.attributes.name}</div>
              <div className={styles.restaurants_info_container}>
                <div className={styles.logo}>
                  <Image
                    src={item.attributes.diningImg}
                    width={80}
                    height={80}
                    alt="restaurant logo"
                  />
                </div>
                <div className={styles.iconsinfo}>
                  <div className={styles.icons_container}>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/clock.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/menu.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/buffet.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/members.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                  </div>
                  <div className={styles.info_container}>
                    <div className={styles.info}>{item.attributes.hourStart} - {item.attributes.hourEnd}</div>
                    <div className={styles.info}>
                      {language == "en"
                        ? item.attributes.typeEn
                        : item.attributes.typeEn}
                    </div>
                    <div className={styles.info}>
                      {language == "en"
                        ? item.attributes.serviceEn
                        : item.attributes.serviceEn}
                    </div>
                    <div className={styles.info}>
                      {language == "en"
                        ? item.attributes.membersEn
                        : item.attributes.membersEn}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 768px */}
      <div className={styles.container_sm}>
        <div className={styles.title}>
          {languageMobile == "en"
            ? sectionTitles.en.dining
            : sectionTitles.es.dining}
        </div>
        <div className={styles.card_container} >
          <Modal isOpen={isOpenDining} closeModal={closeDining}>
            <div className={styles.modal_img}>
              <Image
                src={
                  languageMobile == "en"
                    ? infoDesc?.map((item) => item.menuImgEn).toString()
                    : infoDesc?.map((item) => item.menuImgEs).toString()
                }
                alt="menu"
                width={600}
                height={800}
              />
            </div>
          </Modal>
          {info.dining.map((item) => (
            <div
              className={styles.card}
              key={item.id}
              onClick={() => {
                handleImg(item.id);
                openDining();
              }}
            >
              <div className={styles.name}>{item.attributes.name}</div>
              <div className={styles.restaurants_info_container}>
                <div className={styles.logo}>
                  <Image
                    src={item.attributes.diningImg}
                    width={80}
                    height={80}
                    alt="restaurant logo"
                  />
                </div>
                <div className={styles.iconsinfo}>
                  <div className={styles.icons_container}>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/clock.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/menu.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/buffet.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/members.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                  </div>
                  <div className={styles.info_container}>
                    <div className={styles.info}>{item.attributes.hourStart} - {item.attributes.hourEnd}</div>
                    <div className={styles.info}>
                      {languageMobile == "en"
                        ? item.attributes.typeEn
                        : item.attributes.typeEn}
                    </div>
                    <div className={styles.info}>
                      {languageMobile == "en"
                        ? item.attributes.serviceEn
                        : item.attributes.serviceEn}
                    </div>
                    <div className={styles.info}>
                      {languageMobile == "en"
                        ? item.attributes.membersEn
                        : item.attributes.membersEn}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpenDining} closeModal={closeDining}>
            <div className={styles.modal_img}>
              <Image
                src={
                  language == "en"
                    ? infoDesc?.map((item) => item.menuImgEn).toString()
                    : infoDesc?.map((item) => item.menuImgEs).toString()
                }
                alt="menu"
                width={600}
                height={800}
              />
            </div>
          </Modal>
    </>
  );
};

export default Dining;
