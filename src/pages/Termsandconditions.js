import React, {useEffect} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./termsandconditions.css";

const Termsandconditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className="tanker">
        <p className="termsandconditions-all">
          <h3 className="termsand-heading">Terms & Conditions</h3>
          <h3 className="termsandconditions-heading">Intellectual Property:</h3>
          All content on the FuelFree, including but not limited to text,
         <p> images, videos, graphics, logos, trademarks, and other materials, are
          owned by or licensed to the Fuel Free owner. You are granted a
          limited, non-exclusive, non-transferable, and revocable license to
          access and use the Fuel Free solely for personal, non-commercial
          purposes. You agree not to reproduce, modify, distribute, display, or
          use any content from the Fuel Free without obtaining prior written
          consent from the Fuel Free owner.</p>
          <h3 className="termsandconditions-heading">
            Accuracy of Information:
          </h3>{" "}
          <p>The FuelFree strives to provide accurate and up-to-date information
          about electric vehicles, including specifications, features, prices,
          and availability. However, the Fuel Free owner does not guarantee the
          accuracy, completeness, or timeliness of the information provided on
          the Fuel Free. You acknowledge that the information on the Fuel Free
          may contain errors or inaccuracies, and you agree to use the
          information at your own risk. It is your responsibility to verify the
          accuracy of any information before making any decisions or taking any
          actions based on it.</p>
          <h3 className="termsandconditions-heading">
            Disclaimer of Warranties:
          </h3>{" "}
          <p> The Fuel Free and its content are provided on an "as is" and "as
          available" basis, without any warranties or representations of any
          kind, express or implied. The Fuel Free owner disclaims all
          warranties, including but not limited to warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement. The Fuel Free owner does not warrant that the Fuel
          Free will be error-free, uninterrupted, secure, or free from viruses
          or other harmful components. You acknowledge that your use of the Fuel
          Free is at your own risk.</p>
          <h3 className="termsandconditions-heading">Third-Party Links:</h3> The
          <p>  FuelFree may contain links to third-party FuelFree, products, or
          services, which are not owned or controlled by the Fuel Free owner.
          The inclusion of any such links does not imply endorsement or
          affiliation by the Fuel Free owner. You acknowledge and agree that the
          Fuel Free owner is not responsible for the content, accuracy,
          legality, or availability of any third-party Fuel Frees, products, or
          services. You access and use such third-party Fuel Frees, products, or
          services at your own risk and subject to their respective terms and
          conditions.</p>
          <h3 className="termsandconditions-heading">User Conduct:</h3> You
          <p> agree to use the FuelFree in compliance with all applicable laws,
          regulations, and these Terms. You further agree not to engage in any
          of the following activities: Posting, transmitting, or sharing any
          content that is illegal, offensive, defamatory, harassing,
          discriminatory, or otherwise objectionable; Interfering with or
          disrupting the operation of the Fuel Free, including but not limited
          to introducing viruses, malware, or other harmful code; Attempting to
          gain unauthorized access to the FuelFree or its servers, or collecting
          or storing personal information of other users without their consent;
          Engaging in any activity that could damage the reputation or integrity
          of the FuelFree or its owner.</p>
          <h3 className="termsandconditions-heading">Privacy Policy:</h3> The
          <p> FuelFree owner may collect and use your personal information in
          accordance with its Privacy Policy, which is incorporated by reference
          into these Terms. By using the Fuel Free, you consent to the
          collection, use, and disclosure of your personal information as
          described in the Privacy Policy.</p>
          <h3 className="termsandconditions-heading">
            Limitation of Liability:
          </h3>{" "}
          <p>  To the fullest extent permitted by law, the Fuel Free owner and its
          affiliates, officers, directors, employees, agents, and licensors
          shall not be liable for any direct, indirect, incidental, special,
          consequential, or exemplary damages, including but not limited to
          damages for loss of profits, goodwill, use, data, or other intangible
          losses, arising out of or in connection with your use or inability to
          use the Fuel Free, even if the Fuel Free owner has been advised of the
          possibility of such damages.</p>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Termsandconditions;
