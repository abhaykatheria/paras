import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;
const Paragraph = tw.p `my-5 lg:my-8 text-base xl:text-lg`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Kanpur",
            description: (
              <>
                <Address>
                  <AddressLine>78/60, Latouche Road, Near Fire Brigade, Mulganj,</AddressLine>
                  <AddressLine>Kanpur-208001, Uttar Pradesh, India</AddressLine>
                </Address>
                <Email>contact@abcd.com</Email>
                <Phone>+91 8068442252</Phone>
              </>
            )
          },
                  ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
