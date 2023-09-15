"use client";
import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModal } from "@/components/modal/useModal";
import { useState } from "react";
import RestaurantsGallery from "./gallery/DinningGallery";
import Modal from "@/components/modal/Modal";
import { time } from "@/lib/language";
import styles from "../Dinning.module.css";

const validation = Yup.object().shape({
  name: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  hours: Yup.string()
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

const Dinning = () => {
  const { info, updateDinningFriday } = useInfo();
  const [id, setId] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        {info.dinningFriday.map((item) => (
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
              descEn: item.attributes.descEn,
              descEs: item.attributes.descEs,
              menuImgEn: item.attributes.menuImgEn,
              menuImgEn: item.attributes.menuImgEn,
            }}
            validationSchema={validation}
            onSubmit={async (data, actions) => {
              await updateDinningFriday(data, item.id);
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
                  <Field name="descEn" placeholder="descripcion ingles" />
                  <ErrorMessage
                    name="descEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="descEs" placeholder="descripcion español" />
                  <ErrorMessage
                    name="descEs"
                    component="p"
                    className={styles.error}
                  />
                  <button className={styles.save} type="submit">
                    Guardar
                  </button>
                </div>
                <div className={styles.images}>
                  <div className={styles.diningimg}>
                    <Image
                      src={item.attributes.diningImg}
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
                    <Image
                      src={item.attributes.menuImgEn}
                      alt="bar"
                      width={200}
                      height={250}
                      priority
                      onClick={() => {
                        
                        setId(item.id);
                      }}
                    />{" "}
                    <Image
                      src={item.attributes.menuImgEs}
                      alt="bar"
                      width={200}
                      height={250}
                      priority
                      onClick={() => {
                        
                        setId(item.id);
                      }}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        ))}
        <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
          <RestaurantsGallery id={id} closeModal={closeGallery} />
        </Modal>
      </div>
    </div>
  );
};

export default Dinning;
