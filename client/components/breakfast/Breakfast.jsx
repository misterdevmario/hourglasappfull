"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModal } from "@/components/modal/useModal";
import { useModalDesc } from "@/components/modalDesc/useModalDesc";
import Modal from "@/components/modal/Modal";
import ModalDesc from "@/components/modalDesc/ModalDesc";
import BreakfastGallery from "./gallery/BreakfastGallery";
import { time } from "@/lib/language";
import styles from "./Breakfast.module.css";
import { usePathname } from "next/navigation";
import { getBreakfastMonday } from "@/lib/apidaysweek/apimonday";
import { getBreakfastTuesday } from "@/lib/apidaysweek/apituesday";
import { getBreakfastWednesday } from "@/lib/apidaysweek/apiwednesday";
import { getBreakfastThursday } from "@/lib/apidaysweek/apithursday";
import { getBreakfastFriday } from "@/lib/apidaysweek/apifriday";
import { getBreakfastSaturday } from "@/lib/apidaysweek/apisaturday";
import { getBreakfastSunday } from "@/lib/apidaysweek/apisunday";

const validation = Yup.object().shape({
  name: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  hourStart: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  hourEnd: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  membersEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  membersEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  serviceEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  serviceEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  typeEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  typeEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  typeEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});

const Breakfast = () => {
  const [breakfast, setBreakfast] = useState();
  const {
    updateBreakfastMonday,
    updateBreakfastTuesday,
    updateBreakfastWednesday,
    updateBreakfastThursday,
    updateBreakfastFriday,
    updateBreakfastSaturday,
    updateBreakfastSunday,
    handleDescription,
  } = useInfo();
  const [id, setId] = useState("");
  const [desc, setDesc] = useState();
  const [menuLgEn, setMenuLgEn] = useState("");
  const [menuLgEs, setMenuLgEs] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
  const [isOpenMenuEn, openMenuEn, closeMenuEn] = useModalDesc(true);
  const [isOpenMenuEs, openMenuEs, closeMenuEs] = useModalDesc(true);
  const [isOpenMenuLgEn, openMenuLgEn, closeMenuLgEn] = useModalDesc(true);
  const [isOpenMenuLgEs, openMenuLgEs, closeMenuLgEs] = useModalDesc(true);

  const router = usePathname();
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
    (async () => {
      if (selectedDay == "lunes") {
        const breakfastResponseMonday = await getBreakfastMonday();
        setBreakfast(breakfastResponseMonday.data);
      }
      if (selectedDay == "martes") {
        const breakfastResponseTuesday = await getBreakfastTuesday();
        setBreakfast(breakfastResponseTuesday.data);
      }
      if (selectedDay == "miercoles") {
        const breakfastResponseWednesday = await getBreakfastWednesday();
        setBreakfast(breakfastResponseWednesday.data);
      }
      if (selectedDay == "jueves") {
        const breakfastResponseThursday = await getBreakfastThursday();
        setBreakfast(breakfastResponseThursday.data);
      }
      if (selectedDay == "viernes") {
        const breakfastResponseFriday = await getBreakfastFriday();
        setBreakfast(breakfastResponseFriday.data);
      }
      if (selectedDay == "sabado") {
        const breakfastResponseSaturday = await getBreakfastSaturday();
        setBreakfast(breakfastResponseSaturday.data);
      }
      if (selectedDay == "domingo") {
        const breakfastResponseSunday = await getBreakfastSunday();
        setBreakfast(breakfastResponseSunday.data);
      }
    })();
  }, [
    selectedDay,
    updateBreakfastMonday,
    updateBreakfastTuesday,
    updateBreakfastWednesday,
    updateBreakfastThursday,
    updateBreakfastFriday,
    updateBreakfastSaturday,
    updateBreakfastSunday,
  ]);
  const handleDescEn = () => {
    const description = breakfast
      .filter((item) => item.id == id)
      .map((item) => item.attributes.descEn);
    setDesc(description);
  };
  const handleDescEs = () => {
    const description = breakfast
      .filter((item) => item.id == id)
      .map((item) => item.attributes.descEs);
    setDesc(description);
  };
  const handleMenuLgEn = () => {
    const description = breakfast
      .filter((item) => item.id == id)
      .map((item) => item.attributes?.menuImgEn);
    setMenuLgEn(description.toString());
  };
  const handleMenuLgEs = () => {
    const description = breakfast
      .filter((item) => item.id == id)
      .map((item) => item.attributes?.menuImgEs);
    setMenuLgEs(description.toString());
  };
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        {breakfast?.map((item) => (
          <Formik
            key={item.id}
            initialValues={{
              name: item.attributes.name,
              hourStart: item.attributes.hourStart,
              hourEnd: item.attributes.hourEnd,
              membersEn: item.attributes.membersEn,
              membersEs: item.attributes.membersEs,
              serviceEn: item.attributes.serviceEn,
              serviceEs: item.attributes.serviceEs,
              typeEn: item.attributes.typeEn,
              typeEs: item.attributes.typeEs,
            }}
            validationSchema={validation}
            onSubmit={async (data, actions) => {
              if (selectedDay == "lunes")
                await updateBreakfastMonday(data, item.id);
              if (selectedDay == "martes")
                await updateBreakfastTuesday(data, item.id);
              if (selectedDay == "miercoles")
                await updateBreakfastThursday(data, item.id);
              if (selectedDay == "jueves")
                await updateBreakfastWednesday(data, item.id);
              if (selectedDay == "viernes")
                await updateBreakfastFriday(data, item.id);
              if (selectedDay == "sabado")
                await updateBreakfastSaturday(data, item.id);
              if (selectedDay == "domingo")
                await updateBreakfastSunday(data, item.id);
            }}
          >
            {({ handlesubmit }) => (
              <Form className={styles.form}>
                <div className={styles.inputs}>
                  <div className={styles.hours}>
                    <Field as="select" name="hourStart" placeholder={"Inicio"}>
                      <option value="defaultValue">
                        {item.attributes.hourStart}
                      </option>
                      {time.map((item, i) => (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      ))}
                    </Field>
                    <Field as="select" name="hourEnd" placeholder={"Termino"}>
                      <option value="defaultValue">
                        {item.attributes.hourEnd}
                      </option>
                      {time.map((item, i) => (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <Field name="name" placeholder="nombre" />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="typeEn" placeholder="tipo español" />
                  <ErrorMessage
                    name="typeEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="typeEs" placeholder="tipo ingles" />
                  <ErrorMessage
                    name="typeEs"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="serviceEn" placeholder="servicio español" />
                  <ErrorMessage
                    name="serviceEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="serviceEs" placeholder="servicio ingles" />
                  <ErrorMessage
                    name="serviceEs"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="membersEn" placeholder="miembros ingles" />
                  <ErrorMessage
                    name="membersEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="membersEs" placeholder="miembros español" />
                  <ErrorMessage
                    name="membersEs"
                    component="p"
                    className={styles.error}
                  />
                  {/* <Field
                  value={item.attributes.descEn}
                  name="descEn"
                  placeholder="Descripcion Ingles"
                  onClick={() => {
                    setId(item.id);
                    handleDescEn();
                    openMenuEn();
                  }}
                  onMouseEnter={() => setId(item.id)}
                />

                <Field
                  value={item.attributes.descEs}
                  id={item.id}
                  placeholder="Descripcion Español"
                  onClick={() => {
                    handleDescEs();
                    openMenuEs();
                  }}
                  onMouseEnter={() => setId(item.id)}
                /> */}
                  <button className={styles.save} type="submit">
                    Guardar
                  </button>
                </div>
                <div className={styles.images}>
                  <div className={styles.diningimg}>
                    <Image
                      src={item.attributes.breakfastImg}
                      alt="bar"
                      width={200}
                      height={250}
                      priority
                      onClick={() => {
                        openGallery();
                        setId(item.id);
                      }}
                    />
                  </div>
                  <div className={styles.menus}>
                    <div className={styles.menuitem}>
                      <label htmlFor="">Menu ingles</label>
                      <Image
                        src={item.attributes.menuImgEn}
                        alt="bar"
                        width={200}
                        height={250}
                        priority
                        onClick={() => {
                          setId(item.id);
                          handleMenuLgEn();
                          openMenuLgEn();
                        }}
                      />{" "}
                    </div>
                    <div className={styles.menuitem}>
                      <label htmlFor="">menu español</label>
                      <Image
                        src={item.attributes.menuImgEs}
                        alt="bar"
                        width={200}
                        height={250}
                        priority
                        onClick={() => {
                          setId(item.id);
                          handleMenuLgEs();
                          openMenuLgEs();
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        ))}
        <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
          <BreakfastGallery id={id} closeModal={closeGallery} />
        </Modal>
        <Modal isOpen={isOpenMenuLgEn} closeModal={closeMenuLgEn}>
          <div className={styles.menuLg}>
            <h1>Menu ingles</h1>
            <Image
              src={menuLgEn}
              alt="Menu"
              width={600}
              height={800}
              priority
            />
          </div>
        </Modal>
        <Modal isOpen={isOpenMenuLgEs} closeModal={closeMenuLgEs}>
          <div className={styles.menuLg}>
            <h1> Menu español</h1>
            <Image
              src={menuLgEs}
              alt="Menu"
              width={600}
              height={800}
              priority
            />
          </div>
        </Modal>
        <ModalDesc isOpen={isOpenMenuEn} closeModal={closeMenuEn}>
          <div className={styles.description}>
            <h1>descripcion ingles</h1>
            <textarea
              name="descEn"
              type="textarea"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              maxLength="120"
              cols="30"
              rows="5"
            />
            <button
              onClick={() => {
                handleDescription(desc);
                if (selectedDay == "lunes")
                  updateBreakfastMonday({ descEn: desc }, id);
                if (selectedDay == "martes")
                  updateBreakfastTuesday({ descEn: desc }, id);
                if (selectedDay == "miercoles")
                  updateBreakfastThursday({ descEn: desc }, id);
                if (selectedDay == "jueves")
                  updateBreakfastWednesday({ descEn: desc }, id);
                if (selectedDay == "viernes")
                  updateBreakfastFriday({ descEn: desc }, id);
                if (selectedDay == "sabado")
                  updateBreakfastSaturday({ descEn: desc }, id);
                if (selectedDay == "domingo")
                  updateBreakfastSunday({ descEn: desc }, id);
                closeMenuEn();
              }}
              disabled={!desc}
            >
              Guardar
            </button>
          </div>
        </ModalDesc>
        <ModalDesc isOpen={isOpenMenuEs} closeModal={closeMenuEs}>
          <div className={styles.description}>
            descripcion Español
            <textarea
              name="descEn"
              type="textarea"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              maxLength="120"
              cols="30"
              rows="5"
            />
            <button
              onClick={() => {
                handleDescription(desc);
                if (selectedDay == "lunes")
                  updateBreakfastMonday({ descEs: desc }, id);
                if (selectedDay == "martes")
                  updateBreakfastTuesday({ descEs: desc }, id);
                if (selectedDay == "miercoles")
                  updateBreakfastThursday({ descEs: desc }, id);
                if (selectedDay == "jueves")
                  updateBreakfastWednesday({ descEs: desc }, id);
                if (selectedDay == "viernes")
                  updateBreakfastFriday({ descEs: desc }, id);
                if (selectedDay == "sabado")
                  updateBreakfastSaturday({ descEs: desc }, id);
                if (selectedDay == "domingo")
                  updateBreakfastSunday({ descEs: desc }, id);
                closeMenuEs();
              }}
              disabled={!desc}
            >
              Guardar
            </button>
          </div>
        </ModalDesc>
      </div>
    </div>
  );
};

export default Breakfast;
