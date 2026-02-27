import React from "react";
import "@/styles/policy.scss";
import Link from "next/link";

const PolicyPage = () => {
  return (
    <section className="policy">
      <div className="_container">
        <h1>Refund Policy</h1>
        <div className="content">
          <h2>Policy Overview</h2>
          <p>
            Thank you for choosing Spectrum Consults at{" "}
            <a href="https://spectrumconsults.io/">
              https://spectrumconsults.io/
            </a>
            , operated by SPECTRUM GROWTH LIMITED with its registered address at
            128 City Road, London, United Kingdom, EC1V 2NX and registration
            number 15810537.&nbsp;
          </p>
          <p>
            You can reach us via email at
            <a href="mailto:info@spectrumconsults.io">
              info@spectrumconsults.io
            </a>{" "}
            or by phone at +442070434509. Please note that we have a strict
            no-refund policy for all services and products purchased through our
            website. All transactions are considered final once completed.
          </p>
          <h2>Customer Responsibilities</h2>
          <p>
            Customers are fully responsible for their purchasing decisions on
            our platform. We strongly encourage you to review all information
            and specifications regarding the services or products you intend to
            purchase before deciding.
          </p>
          <h2>Exceptional Refund Considerations</h2>
          <p>
            In rare circumstances, we may consider refund requests. These
            circumstances may include:
          </p>
          <ul>
            <li>
              <strong>Erroneous Payments:</strong> Situations where accidental
              or duplicate payments have been made.
            </li>
            <li>
              <strong>Incorrect Payment Amount:</strong> Instances where
              customers are charged incorrectly due to technical or clerical
              errors on our part.
            </li>
            <li>
              <strong>Payment Using Wrong Details:</strong> Cases where evidence
              shows that a payment was made using incorrect details, resulting
              in an unsuccessful transaction.
            </li>
            <li>
              <strong>Non-Delivery of Service or Product:</strong> Situations
              where the purchased Service or product is not delivered as
              described for reasons within our control.
            </li>
          </ul>
          <h2>Requesting a Refund</h2>
          <p>
            If your situation qualifies for one of the exceptional circumstances
            listed above, please request a refund from our customer support team
            at{" "}
            <a href="mailto:info@spectrumconsults.io">
              info@spectrumconsults.io
            </a>
            . Include the following details in your request:
          </p>
          <ul>
            <li>Your Full Name</li>
            <li>Email Address Used for the Purchase</li>
            <li>Transaction Date</li>
            <li>Transaction ID or Receipt</li>
            <li>Detailed Explanation of the Issue</li>
          </ul>
          <h2>Evaluation and Conclusion</h2>
          <p>
            Once we receive your refund request, our team will thoroughly review
            the provided information. We aim to respond to all refund requests
            within seven (7) business days. Our decision will be based on the
            validity of the circumstances presented and our policies.
          </p>
          <h2>How to Reach Us</h2>
          <p>
            If you have any questions or need further clarification regarding
            our Refund Policy, please get in touch with our customer support
            team:
          </p>
          <ul>
            <li>
              Via email at{" "}
              <a href="mailto:info@spectrumconsults.io">
                info@spectrumconsults.io
              </a>
              ;
            </li>
            <li>By phone at +442070434509;</li>
            <li>
              Or through the contact form provided on the website:{" "}
              <a href="https://spectrumconsults.io/get-in-touch">
                https://spectrumconsults.io/get-in-touch
              </a>
              .
            </li>
          </ul>
          <p>
            Please note that this Refund Policy is subject to change without
            prior notice. We recommend reviewing this policy periodically for
            any updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PolicyPage;
