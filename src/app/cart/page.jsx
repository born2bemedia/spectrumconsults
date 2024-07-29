"use client";
import "@/styles/cart.scss";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import DeleteIcon from "@/icons/DeleteIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonArrow from "@/icons/ButtonArrow";

const CartPage = () => {
  const { cart, deleteFromCart, clearCart, totalAmount } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <>
          {cart.length > 0 ? (
            <div>
              <section className="cart-wrap">
                <div className="_container">
                  <h1>Cart</h1>

                  <div className="cart">
                    <div className="cart-head">
                      <div>Product</div>
                      <div>Quantity</div>
                      <div>Price</div>
                      <div>Subtotal</div>
                    </div>
                    <div className="cart-content">
                      {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                          <div>
                            <button onClick={() => deleteFromCart(item.id)}>
                              <DeleteIcon />
                            </button>
                            <span>{item.title}</span>
                          </div>
                          <div>{item.quantity}</div>
                          <div>€{item.price}</div>
                          <div>€{item.quantity * item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="total">Total: €{totalAmount}</div>
                  <div className="button-wrap">
                    <Link className="main-button" href="/checkout">
                      <span>Proceed to checkout</span>
                      <ButtonArrow />
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div>
              <section className="cart-wrap empty">
                <div className="_container">
                  <h1>Your cart is empty</h1>
                  <h2>
                    Discover our wide array of business and marketing consulting
                    services!
                  </h2>
                  <Link href="/" className="main-button">
                    <span>Go home</span>
                    <ButtonArrow />
                  </Link>
                </div>
              </section>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CartPage;
