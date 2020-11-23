import React from "react";

import { Header } from "./components/Header";
import { TermsOfCourses } from "./components/TermsOfCourses";
import { Footer } from "./components/Footer";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <Header />
      <TermsOfCourses />
      <Footer />
    </div>
  );
}
