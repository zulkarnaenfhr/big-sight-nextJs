import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FooterBigSight from "../../../containers/Footer/Footer";
import Section1 from "../../../containers/Admin/AdminBigSightUpdate/AdminBigSightUpdate-Section1/AdminBigSightUpdate-section1";
import Section2 from "../../../containers/Admin/AdminBigSightUpdate/AdminBigSightUpdate-Section2/AdminBigSightUpdate-section2";
export default function BigSightUpdate() {
    return (
        <div>
            <Section1/>
            <Section2/>
           <FooterBigSight/>
        </div>
    );
}
