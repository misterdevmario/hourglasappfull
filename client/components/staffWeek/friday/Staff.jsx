"use client";

import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModal } from "../../modal/useModal";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import StaffGallery from "./gallery/StaffGallery";
import { RiImageAddLine } from "react-icons/ri";
import styles from "../Staff.module.css";

const validation = Yup.object().shape({
  name: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  positionEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  positionEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});

const Staff = () => {
  const {
    info,
    updateStaffFriday,
    postStaffFriday,
    deleteStaffFriday,
    staffImage,
  } = useInfo();
  const [id, setId] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
console.log(info.staffFriday)
  return (
    <div className={styles.container}>
      {info.staffFriday.map((item, i) => (
        <Formik
          key={item.id}
          initialValues={{
            name: item.attributes.name,
            positionEn: item.attributes.positionEn,
            positionEs: item.attributes.positionEs,
            bioEs: item.attributes.bioEs,
            bioEn: item.attributes.bioEn,
          }}
          validationSchema={validation}
          onSubmit={async (data, actions) => {
            await updateStaffFriday(data, item.id);
          }}
        >
          {({ handlesubmit }) => (
            <div key={item.id}>
              <Form className={styles.form}>
                <div className={styles.inputs}>
                  <Field name="name" placeholder="nombre" />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="positionEn" placeholder="posición ingles" />
                  <ErrorMessage
                    name="positionEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="positionEs" placeholder="posición español" />
                  <ErrorMessage
                    name="positionEs"
                    component="p"
                    className={styles.error}
                  />

                  <Field name="bioEn" placeholder="bio ingles" />
                  <ErrorMessage
                    name="bioEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="bioEs" placeholder="bio español" />
                  <ErrorMessage
                    name="bioEs"
                    component="p"
                    className={styles.error}
                  />

                  <button className={styles.save} type="submit">
                    Guardar
                  </button>
                  {info.staffFriday.length > 1 ? (
                    <button
                      type="button"
                      className={styles.delete}
                      onClick={() => deleteStaffFriday(item.id)}
                    >
                      Eliminar
                    </button>
                  ) : null}
                </div>
                <Image
                  className={styles.form_image}
                  src={item.attributes.staffImg}
                  alt="bar"
                  width={200}
                  height={250}
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

      <Formik
        initialValues={{
          name: "",
          positionEn: "",
          positionEs: "",
          bioEn: "",
          bioEs: "",
        }}
        validationSchema={validation}
        onSubmit={async (data, { resetForm }) => {
          data.staffImg = staffImage;
          await postStaffFriday(data);
          resetForm({ values: "" });
        }}
      >
        {({ handleSubmit }) => (
          <div>
            <Form className={styles.form}>
              <div className={styles.inputs}>
                <Field name="name" placeholder="nombre" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="name"
                />
                <Field name="positionEn" placeholder="posición ingles" />
                <ErrorMessage
                  name="positionEn"
                  component="p"
                  className={styles.error}
                />
                <Field name="positionEs" placeholder="posición español" />
                <ErrorMessage
                  name="positionEs"
                  component="p"
                  className={styles.error}
                />

                <Field name="bioEn" placeholder="bio ingles" />
                <ErrorMessage
                  name="bioEn"
                  component="p"
                  className={styles.error}
                />
                <Field name="bioEs" placeholder="bio español" />
                <ErrorMessage
                  name="bioEs"
                  component="p"
                  className={styles.error}
                />
                <button
                  className={styles.save}
                  disabled={!staffImage}
                  type="submit"
                >
                  Guardar
                </button>
              </div>

              {!staffImage ? (
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
                  src={staffImage}
                  alt="staff"
                  width={200}
                  height={250}
                  priority
                  onClick={() => {
                    openGallery();
                    setId(null);
                  }}
                />
              )}
            </Form>
            <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
              <StaffGallery id={id} closeModal={closeGallery} />
            </Modal>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Staff;
