"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const PostCard = ({ slug, title, image, excerpt }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="post-card"
    >
      <div>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
      <Link href={`/articles/${slug}`} className="main-button">
        <span>Read more</span>
        <ButtonArrow />
      </Link>
    </motion.div>
  );
};

export default PostCard;
