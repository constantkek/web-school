import React from "react";

import { Header } from "./components/Header"
import { TermsOfCourses } from "./components/TermsOfCourses"
import { Footer } from "./components/Footer"
import { OurStudents } from "./components/OurStudens"

import "./Landing.css"
import { OurTeachers } from "./components/OurTeachers";

export default function Landing() {
  return (
    <div className="App">
      <div className="landing">
        <Header />
        <TermsOfCourses />
        <OurStudents />
        <OurTeachers />
        <Footer />
      </div>
    </div>
  );
}
