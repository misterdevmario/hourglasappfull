"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import StaffGallery from "./gallery/StaffGallery";
import { RiImageAddLine } from "react-icons/ri";
import styles from "../Staff.module.css";
import ModalDesc from "@/components/modalDesc/ModalDesc";
import Modal from "../../Modal/Modal";
import { useModal } from "@/components/modal/useModal";
import { useModalDesc } from "@/components/modalDesc/useModalDesc";

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
  // bioEn: Yup.string()
  //   .required("*Campo requerido")
  //   .max(19, "La longitud maxima es de 19 letras!"),
  // bioEs: Yup.string()
  //   .required("*Campo requerido")
  //   .max(19, "La longitud maxima es de 19 letras!"),
});

const Staff = () => {
  const {
    info,
    updateStaffMonday,
    postStaffMonday,
    deleteStaffMonday,
    staffImage,
    handleDescription,
  } = useInfo();
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
  const [isOpenModalBioEn, openModalBioEn, closeModalBioEn] =
    useModalDesc(true);
  const [isOpenModalBioEs, openModalBioEs, closeModalBioEs] =
    useModalDesc(true);
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    setStaff(info.staffMonday);
  }, [info.staffMonday, desc]);

  const handleBioEn = () => {
    const description = info.staffMonday
      .filter((item) => item.id == id)
      .map((item) => item.attributes.bioEn);
    setDesc(description);
  };
  const handleBioEs = () => {
    const description = info.staffMonday
      .filter((item) => item.id == id)
      .map((item) => item.attributes.bioEs);
    setDesc(description);
  };

  return (
    <div className={styles.container}>
      {staff.map((item, i) => (
        <Formik
          key={item.id}
          initialValues={{
            name: item.attributes.name,
            positionEn: item.attributes.positionEn,
            positionEs: item.attributes.positionEs,
          }}
          validationSchema={validation}
          onSubmit={async (data, actions) => {
            await updateStaffMonday(data, item.id);
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

                  <Field
                    value={item.attributes.bioEn}
                    placeholder="bio ingles"
                    onClick={() => {
                      handleBioEn();
                      openModalBioEn();
                    }}
                    onMouseEnter={() => setId(item.id)}
                  />
                  <ErrorMessage
                    name="bioEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field
                    value={item.attributes.bioEs}
                    placeholder="bio español"
                    onClick={() => {
                      handleBioEs();
                      openModalBioEs();
                    }}
                    onMouseEnter={() => setId(item.id)}
                  />
                  <ErrorMessage
                    name="bioEs"
                    component="p"
                    className={styles.error}
                  />

                  <button className={styles.save} type="submit">
                    Guardar
                  </button>
                  {info.staffMonday.length > 1 ? (
                    <button
                      type="button"
                      className={styles.delete}
                      onClick={() => deleteStaffMonday(item.id)}
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
      <ModalDesc isOpen={isOpenModalBioEn} En closeModal={closeModalBioEn}>
        <div className={styles.bio}>
          <textarea
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
              updateStaffMonday({ bioEn: desc }, id);
              closeModalBioEn();
            }}
            disabled={!desc}
          >
            Guardar
          </button>
        </div>
      </ModalDesc>
      <ModalDesc isOpen={isOpenModalBioEs} closeModal={closeModalBioEs}>
        <div className={styles.bio}>
          <textarea
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
              updateStaffMonday({ bioEs: desc }, id);
              closeModalBioEs();
            }}
            disabled={!desc}
          >
            Guardar
          </button>
        </div>
      </ModalDesc>
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
          await postStaffMonday(data);
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
