"use client";

import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useInfo } from "@/context/Context";
import Modal from "@/components/modal/Modal";
import { useModal } from "@/components/modal/useModal";
import { useModalDesc} from "@/components/modalDesc/useModalDesc"
import { useEffect, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import ActivitiesGallery from "./gallery/ActivitiesGallery";
import { time } from "@/lib/language";
import ModalDesc from "@/components/modalDesc/ModalDesc";
import styles from "../Carousel.module.css";

const validation = Yup.object().shape({
  activitieEn: Yup.string()
    .required("*Campo requerido")
    .max(22, "La longitud maxima es de 22 letras!"),
  activitieEs: Yup.string()
    .required("*Campo requerido")
    .max(22, "La longitud maxima es de 22 letras!"),

  hourStart: Yup.string().required("*Campo requerido"),
  hourEnd: Yup.string().required("*Campo requerido"),

  spotEn: Yup.string()
    .required("*Campo requerido")
    .max(22, "La longitud maxima es de 22 letras!"),
  spotEs: Yup.string()
    .required("*Campo requerido")
    .max(22, "La longitud maxima es de 22 letras!"),

});

const Carousel = ({ activities }) => {
  const {
    updateActivityThursday,
    image,
    postActivityThursday,
    deleteActivityThursday,
    handleDescription,
  } = useInfo();
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
  const [isOpenModalDescEn, openModalDescEn, closeModalDescEn] = useModalDesc(true);
  const [isOpenModalDescEs, openModalDescEs, closeModalDescEs] = useModalDesc(true);
  const [hoursUppercase, sethoursUppercase] = useState([]);

  useEffect(() => {
    const hoursUppercase = [];
    for (let i = 0; i < time.length; i++) {
      for (let j = 0; j < activities.length; j++) {
        if (
          time[i] ==
          activities[j].attributes.hourStart
            .toLocaleLowerCase()
            .replace(" ", "")
        )
          hoursUppercase.push(activities[j]);
      }
    }
    sethoursUppercase(hoursUppercase);
  }, [activities, desc]);

  const handleDescEn = () => {
    const description = hoursUppercase
      .filter((item) => item.id == id)
      .map((item) => item.attributes.descEn);
    setDesc(description);
  };
  const handleDescEs = () => {
    const description = hoursUppercase
      .filter((item) => item.id == id)
      .map((item) => item.attributes.descEs);
    setDesc(description);
  };
  //console.log(hoursUppercase.map((item) => item.attributes.descEn));
   console.log(id);
   console.log(desc);
  return (
    <div className={styles.container}>
      {hoursUppercase.map((item) => (
        <Formik
          key={item.id}
          initialValues={{
            activitieEn: item.attributes.activitieEn.toUpperCase(),
            activitieEs: item.attributes.activitieEs.toUpperCase(),
            hourStart: item.attributes.hourStart.toUpperCase(),
            hourEnd: item.attributes.hourEnd.toUpperCase(),
            spotEn: item.attributes.spotEn.toUpperCase(),
            spotEs: item.attributes.spotEs.toUpperCase(),
          }}
          validationSchema={validation}
          onSubmit={async (data, actions) => {
            await updateActivityThursday(data, item.id);
          }}
        >
          {({ handleSubmit }) => (
            <div>
              <Form onSubmit={handleSubmit} className={styles.form}>
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
                  <Field name="activitieEn" placeholder="Actividad Ingles" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="activitieEn"
                  />
                  <Field name="activitieEs" placeholder="Actividad Español" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="activitieEs"
                  />
                  <Field name="spotEn" placeholder="Locacion Ingles" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="spotEn"
                  />
                  <Field name="spotEs" placeholder="Locacion Español" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="spotEs"
                  />
                  <Field
                    value={item.attributes.descEn}
                    name="descEn"
                    placeholder="Descripcion Ingles"
                    onClick={() => {
                      handleDescEn();
                      openModalDescEn();
                    }}
                    onMouseEnter={() => setId(item.id)}
                  />

                  <Field
                    value={item.attributes.descEs}
                    id={item.id}
                    placeholder="Descripcion Español"
                    onClick={() => {
                      handleDescEs();
                      openModalDescEs();
                    }}
                    onMouseEnter={() => setId(item.id)}
                  />

                  <button className={styles.save} type="submit">
                    Guardar
                  </button>
                  {activities.length > 12 ? (
                    <button
                      type="submit"
                      disabled={activities.length <= 12}
                      className={styles.delete}
                      onClick={() => deleteActivityThursday(item.id)}
                    >
                      Eliminar
                    </button>
                  ) : null}
                </div>
                <Image
                  className={styles.form_image}
                  src={item.attributes.activitieImage}
                  alt="activity"
                  width={400}
                  height={650}
                  priority
                  onClick={() => {
                    openGallery();
                    setId(item.id);
                  }}
                />
              </Form>
            </div>
          )}
        </Formik>
      ))}
      <ModalDesc isOpen={isOpenModalDescEn} En closeModal={closeModalDescEn}>
        <div className={styles.description}>
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
              updateActivityThursday({ descEn: desc }, id);
              closeModalDescEn();
            }}
            disabled={!desc}
          >
            Guardar
          </button>
        </div>
      </ModalDesc>
      <ModalDesc isOpen={isOpenModalDescEs} closeModal={closeModalDescEs}>
        <div className={styles.description}>
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
              updateActivityThursday({ descEs: desc }, id);
              closeModalDescEs();
            }}
            disabled={!desc}
          >
            Guardar
          </button>
        </div>
      </ModalDesc>

      <Formik
        initialValues={{
          activitieEn: "",
          activitieEs: "",
          activitieImage: "",
          hourStart: "",
          hourEnd: "",
          spotEn: "",
          spotEs: "",
          descEn: "",
          descEs: "",
        }}
        validationSchema={validation}
        onSubmit={async (data, { resetForm }) => {
          data.activitieImage = image;
          await postActivityThursday(data);
          resetForm({ values: "" });
        }}
      >
        {({ handleSubmit }) => (
          <div>
            <Form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputs}>
                <div className={styles.hours}>
                  <Field as="select" name="hourStart" placeholder="Inicio">
                    <option value="defaultValue">Inicio</option>
                    {time.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </Field>
                  <Field as="select" name="hourEnd" placeholder="Termino">
                    <option value="defaultValue">termino</option>
                    {time.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </Field>
                </div>

                <Field name="activitieEn" placeholder="Actividad Ingles" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="activitieEn"
                />
                <Field name="activitieEs" placeholder="Actividad Español" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="activitieEs"
                />
                <Field name="spotEn" placeholder="Locacion Ingles" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="spotEn"
                />
                <Field name="spotEs" placeholder="Locacion Español" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="spotEs"
                />
                <Field name="descEn" placeholder="Descripcion ingles" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="descEn"
                />

                <Field name="descEs" placeholder="Descripcion Español" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="descEs"
                />
                <button className={styles.save} disabled={!image} type="submit">
                  Guardar
                </button>
              </div>
              {!image ? (
                <div className="flex items-center justify-center w-1/2 h-12">
                  <RiImageAddLine
                    size={80}
                    onClick={() => {
                      openGallery();
                      setId(null);
                    }}
                  />
                </div>
              ) : (
                <Image
                  className={styles.post_form_image}
                  src={image}
                  alt="activity"
                  width={200}
                  height={250}
                  priority
                  onClick={() => {
                    openGallery();
                    setId(null);
                  }}
                />
              )}

              <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
                <ActivitiesGallery id={id} closeModal={closeGallery} />
              </Modal>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Carousel;
