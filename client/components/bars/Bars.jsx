"use client";

import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModal } from "../modal/useModal";
import { useState } from "react";
import Modal from "../modal/Modal";
import styles from "./Bars.module.css";
import BarsGallery from "./gallery/BarsGallery";
import { usePathname } from "next/navigation";
import { time } from "@/lib/language";

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
});

const Bars = ({ barsInfo }) => {
  const {
    updateBarMonday,
    updateBarTuesday,
    updateBarWednesday,
    updateBarThursday,
    updateBarFriday,
    updateBarSaturday,
    updateBarSunday,
  } = useInfo();
  const [id, setId] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);

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
  return (
    <div className={styles.container}>
      {barsInfo?.map((item) => (
        <Formik
          key={item.id}
          initialValues={{
            name: item.attributes.name.toUpperCase(),
            hourStart: item.attributes.hourStart.toUpperCase(),
            hourEnd: item.attributes.hourEnd.toUpperCase(),
          }}
          validationSchema={validation}
          onSubmit={async (data, actions) => {
            if (selectedDay == "lunes") await updateBarMonday(data, item.id);
            if (selectedDay == "martes") await updateBarTuesday(data, item.id);
            if (selectedDay == "miercoles")
              await updateBarThursday(data, item.id);
            if (selectedDay == "jueves")
              await updateBarWednesday(data, item.id);
            if (selectedDay == "viernes") await updateBarFriday(data, item.id);
            if (selectedDay == "sabado") await updateBarSaturday(data, item.id);
            if (selectedDay == "domingo") await updateBarSunday(data, item.id);
          }}
        >
          {({ handlesubmit }) => (
            <div key={item.id}>
              <Form className={styles.form}>
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

                <Image
                  src={item.attributes.barImg}
                  alt="bar"
                  width={200}
                  height={250}
                  priority
                  onClick={() => {
                    openGallery();
                    setId(item.id);
                  }}
                />
                <button className={styles.save} type="submit">
                  Guardar
                </button>
              </Form>
            </div>
          )}
        </Formik>
      ))}
      <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
        <BarsGallery id={id} closeModal={closeGallery} />
      </Modal>
    </div>
  );
};

export default Bars;
