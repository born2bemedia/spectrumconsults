"use client";
import "@/styles/account.scss";
import React, { useState, useEffect } from "react";
import LogoutButton from "./_components/LogoutButton";
import { useAuth } from "@/context/AuthContext";
import MainTab from "./_components/MainTab";
import PersonalData from "./_components/PersonalData";
import OrderHistory from "./_components/OrderHistory";
import ThanksPopup from "@/components/ThanksPopup";

export default function Account() {
  const { currentUser, fetchCurrentUser } = useAuth();

  const [openIndex, setOpenIndex] = useState(1);

  useEffect(() => {
    console.log(currentUser);
    setOpenIndex(1);
  }, []);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!currentUser) {
    return "";
  }

  return (
    <>
      <section className="account-wrap">
        <div className="_container">
          <div className="account-wrap__body">
            <ul className="account-nav">
              <li
                data-id={openIndex}
                aria-current="page"
                onClick={() => toggleItem(1)}
                className={`${openIndex === 1 && "active"}`}
              >
                <span>My Account</span>
              </li>
              <li
                data-id={openIndex}
                aria-current="page"
                onClick={() => toggleItem(2)}
                className={`${openIndex === 2 && "active"}`}
              >
                <span>Recent Orders</span>
              </li>
              <li
                data-id={openIndex}
                aria-current="page"
                onClick={() => toggleItem(3)}
                className={`${openIndex === 3 && "active"}`}
              >
                <span>My Addresses</span>
              </li>
              <LogoutButton />
            </ul>

            <div className="account-content">
              <div className={openIndex === 1 ? "block" : "hidden"}>
                <div className="main-tab">
                  <p>
                    Welcome to your personal control centre. Here, you can
                    manage your{" "}
                    <span onClick={() => toggleItem(3)}>account details</span>,
                    monitor{" "}
                    <span onClick={() => toggleItem(2)}>recent orders</span>,
                    and update your{" "}
                    <span onClick={() => toggleItem(3)}>billing address</span>{" "}
                    in one convenient place. You can do it here if you need to
                    change your password or update your personal information.
                    Stay organised and in control with everything you need at
                    your fingertips.
                  </p>
                </div>
              </div>
              <div className={openIndex === 2 ? "block" : "hidden"}>
                <OrderHistory />
              </div>
              <div className={openIndex === 3 ? "block" : "hidden"}>
                <PersonalData />
              </div>
              <div className={openIndex === 4 ? "block" : "hidden"}></div>
            </div>
          </div>
        </div>
      </section>
      <ThanksPopup />
    </>
  );
}
