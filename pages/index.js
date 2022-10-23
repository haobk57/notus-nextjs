/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <iframe src="http://localhost:8080/user/residency-status" width="100%" height="1700px" name="the-iFrame" frameborder="0" sandbox='allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups'></iframe>
    </>
  );
}
