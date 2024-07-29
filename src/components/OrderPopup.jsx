"use client";
import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";

function OrderPopup() {
  const { orderPopupDisplay, setOrderPopupDisplay, serviceValue } = usePopup();

  const validationSchema = Yup.object({
    fullName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a correct email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    service: Yup.string().required("This field is required."),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    service: serviceValue,
    message: "",
  };

  const closePopup = (resetForm) => {
    setOrderPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(JSON.stringify(values));
      if (response.ok) {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <div className={`order-popup-wrap ${orderPopupDisplay ? "opened" : ""}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, status, touched, errors, resetForm }) => (
          <div>
            <div
              className="overlay"
              onClick={() => closePopup(resetForm)}
            ></div>
            <div className="popup-inner">
              <svg
                className="popup-close"
                onClick={() => closePopup(resetForm)}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 18.5L2 2.5M18 2.5L2 18.5"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <div className="form-wrap">
                  <Form>
                    {!status && (
                      <div className="form-inner">
                        <h2>Service Request</h2>
                        <h3>Ready to enhance your business?</h3>
                        <p>Complete the form below to request your customised business consulting solution from Spectrum Consults.</p>

                        <span className="service">{serviceValue}</span>

                        <Field type="hidden" name="service" />
                        <div className="full">
                          <Field
                            name="fullName"
                            type="text"
                            placeholder={"Full Name "}
                            className={
                              touched.fullName && errors.fullName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="fullName"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="phone"
                            type="tel"
                            placeholder={"Phone"}
                            className={
                              touched.phone && errors.phone ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="email"
                            type="email"
                            placeholder={"Email"}
                            className={
                              touched.email && errors.email ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="full">
                          <Field
                            name="message"
                            as="textarea"
                            placeholder="Your Message"
                            className={
                              touched.message && errors.message ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="error"
                          />
                        </div>

                        <button
                          type="submit"
                          className="main-button"
                          disabled={isSubmitting}
                        >
                          <span>Send</span>
                          <ButtonArrow />
                        </button>
                      </div>
                    )}
                    {status && status.success && (
                      <div className="success">
                        <h3>THANK YOU!</h3>
                        <p>
                          Your request has been received successfully!
                          <br />
                          One of our team members will get in touch with you
                          shortly.
                        </p>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default OrderPopup;
