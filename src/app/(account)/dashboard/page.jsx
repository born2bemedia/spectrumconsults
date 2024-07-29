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
                <MainTab />
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
