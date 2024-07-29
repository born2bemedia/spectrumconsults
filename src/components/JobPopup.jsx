"use client";
import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";

function JobPopup() {
  const { jobPopupDisplay, setJobPopupDisplay, jobValue } = usePopup();

  const validationSchema = Yup.object({
    fullName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a correct email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    position: Yup.string().required("This field is required."),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    position: jobValue,
    message: "",
    resume: null,
    portfolio: null,
  };

  const closePopup = (resetForm) => {
    setJobPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    let resumeData = null;
    if (values.resume) {
      resumeData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64EncodedData = reader.result;
          resolve({
            base64: base64EncodedData.split(";base64,").pop(), // Get only the base64 part
            filename: values.resume.name, // Get the filename
            mimetype: values.resume.type, // Get the MIME type
          });
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(values.resume);
      });
    }

    let portfolioData = null;
    if (values.portfolio) {
      portfolioData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64EncodedData = reader.result;
          resolve({
            base64: base64EncodedData.split(";base64,").pop(), // Get only the base64 part
            filename: values.portfolio.name, // Get the filename
            mimetype: values.portfolio.type, // Get the MIME type
          });
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(values.portfolio);
      });
    }

    const payload = {
      ...values,
      resume: resumeData,
      portfolio: portfolioData,
    };

    try {
      const response = await fetch("/api/emails/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log(JSON.stringify(payload));
      if (response.ok) {
        setTimeout(() => {
          console.log(JSON.stringify(payload, null, 2));
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
    <div className={`order-popup-wrap ${jobPopupDisplay ? "opened" : ""}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({
          isSubmitting,
          status,
          touched,
          errors,
          resetForm,
          values,
          setFieldValue,
        }) => (
          <div>
            <div className="overlay" onClick={() => closePopup(resetForm)}></div>
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
                        <h2>Ready to join Spectrum Consults?</h2>
                        <p>Fill out the form below to submit your application!</p>
                        <div>
                          <Field
                            name="fullName"
                            type="text"
                            placeholder={"Full Name "}
                            className={
                              touched.fullName && errors.fullName ? "invalid" : ""
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
                            name="position"
                            type="text"
                            placeholder={"Desired position"}
                            className={
                              touched.position && errors.position ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="position"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="form-block">
                          <label>Upload Resume (PDF or Word)</label>
                          <div className="input-wrap file-wrap">
                            <span
                              className="upload-custom"
                              onClick={() =>
                                document.getElementById("resume").click()
                              }
                            >
                              Choose file{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.5 2H6.5C5.70435 2 4.94129 2.31607 4.37868 2.87868C3.81607 3.44129 3.5 4.20435 3.5 5V19C3.5 19.7956 3.81607 20.5587 4.37868 21.1213C4.94129 21.6839 5.70435 22 6.5 22H18.5C19.2956 22 20.0587 21.6839 20.6213 21.1213C21.1839 20.5587 21.5 19.7956 21.5 19V11H15.5C14.7044 11 13.9413 10.6839 13.3787 10.1213C12.8161 9.55871 12.5 8.79565 12.5 8V2ZM21.5 9V8.828C21.4996 8.03276 21.1834 7.27023 20.621 6.708L16.793 2.878C16.2304 2.31572 15.4674 1.9999 14.672 2H14.5V8C14.5 8.26522 14.6054 8.51957 14.7929 8.70711C14.9804 8.89464 15.2348 9 15.5 9H21.5Z"
                                  fill="#ffffff"
                                />
                              </svg>
                            </span>
                            <span className="fileName">
                              {values.resume ? values.resume.name : ""}
                            </span>
                            <input
                              id="resume"
                              name="resume"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "resume",
                                  event.currentTarget.files[0]
                                );
                                console.log(event.currentTarget.files[0]);
                              }}
                              style={{ display: "none" }}
                            />
                            <ErrorMessage name="resume" component="span" />
                          </div>
                        </div>

                        <div className="form-block">
                          <label>Upload Portfolio (PDF or Word)</label>
                          <div className="input-wrap file-wrap">
                            <span
                              className="upload-custom"
                              onClick={() =>
                                document.getElementById("portfolio").click()
                              }
                            >
                              Choose file{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.5 2H6.5C5.70435 2 4.94129 2.31607 4.37868 2.87868C3.81607 3.44129 3.5 4.20435 3.5 5V19C3.5 19.7956 3.81607 20.5587 4.37868 21.1213C4.94129 21.6839 5.70435 22 6.5 22H18.5C19.2956 22 20.0587 21.6839 20.6213 21.1213C21.1839 20.5587 21.5 19.7956 21.5 19V11H15.5C14.7044 11 13.9413 10.6839 13.3787 10.1213C12.8161 9.55871 12.5 8.79565 12.5 8V2ZM21.5 9V8.828C21.4996 8.03276 21.1834 7.27023 20.621 6.708L16.793 2.878C16.2304 2.31572 15.4674 1.9999 14.672 2H14.5V8C14.5 8.26522 14.6054 8.51957 14.7929 8.70711C14.9804 8.89464 15.2348 9 15.5 9H21.5Z"
                                  fill="#ffffff"
                                />
                              </svg>
                            </span>
                            <span className="fileName">
                              {values.portfolio ? values.portfolio.name : ""}
                            </span>
                            <input
                              id="portfolio"
                              name="portfolio"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "portfolio",
                                  event.currentTarget.files[0]
                                );
                                console.log(event.currentTarget.files[0]);
                              }}
                              style={{ display: "none" }}
                            />
                            <ErrorMessage name="portfolio" component="span" />
                          </div>
                        </div>

                        <div className="full">
                          <Field
                            name="message"
                            as="textarea"
                            placeholder="Additional comments/questions"
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

export default JobPopup;
