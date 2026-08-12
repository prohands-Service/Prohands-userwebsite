const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const logoBase64 = fs.readFileSync(path.join(__dirname, 'src/assets/prohands-logo.jpg'), {encoding: 'base64'});
const logoSrc = `data:image/jpeg;base64,${logoBase64}`;

const baseHtml = (title, content) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      padding: 40px;
      margin: 0;
    }
    .header {
      display: flex;
      align-items: center;
      border-bottom: 2px solid #eaeaea;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .logo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .brand {
      font-size: 24px;
      font-weight: bold;
      color: #111;
      letter-spacing: -0.5px;
    }
    .brand-accent {
      color: #0066FF; /* Primary blue color */
    }
    h1 {
      font-size: 28px;
      color: #111;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 18px;
      color: #222;
      margin-top: 30px;
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    p {
      margin-bottom: 15px;
      text-align: justify;
      font-size: 12px;
    }
    ul, ol {
      margin-bottom: 15px;
      font-size: 12px;
      padding-left: 20px;
      text-align: justify;
    }
    strong {
      color: #222;
    }
    .footer {
      margin-top: 50px;
      text-align: center;
      font-size: 10px;
      color: #888;
      border-top: 1px solid #eaeaea;
      padding-top: 20px;
    }
  </style>
</head>
<body>
  <div class="header">
    <img src="${logoSrc}" class="logo" />
    <div class="brand">Pre<span class="brand-accent">Hands</span></div>
  </div>
  <h1>${title}</h1>
  ${content}
  
  <div class="footer">
    © ${new Date().getFullYear()} PreHands. All rights reserved.
  </div>
</body>
</html>
`;

const customerContent = `
<p><strong>Please read these Terms and Conditions carefully before using the Platform or Services.</strong></p>
<p>These terms and conditions (“Terms”) govern the use of services made available on or through https://prohands.com/ and/or the PREHANDS mobile app (collectively, the “Platform”, and together with the services made available on or through the Platform, the “Services”).</p>
<p>These Terms also include our privacy policy, available at https://prohands.com/policy (“Privacy Policy”), and any guidelines, additional, or supplemental terms, policies, and disclaimers made available or issued by us from time to time (“Supplemental Terms”). The Privacy Policy and the Supplemental Terms form an integral part of these Terms. In the event of a conflict between these Terms and the Supplemental Terms with respect to applicable Services, the Supplemental Terms will prevail.</p>
<p>The Terms constitute a binding and enforceable legal contract between PREHANDS LLP (a company incorporated under the Companies Act, 2013 with its registered address (“PREHANDS”, “we”, “us”, or “our”), and you, a user of the Services, or any legal entity that books Pro Services (defined below) on behalf of end-users (“you” or “Customer”).</p>
<p>By using the Services, you represent and warrant that you have full legal capacity and authority to agree to and bind yourself to these Terms. If you represent any other person, you confirm and represent that you have the necessary power and authority to bind such person to these Terms.</p>
<p>By using the Services, you agree that you have read, understood, and are bound by these Terms, as amended from time to time, and that you will comply with the requirements listed here. These Terms expressly supersede any prior written agreements with you. If you do not agree to these Terms, or comply with the requirements listed here, please do not use the Services.</p>

<h2>1. SERVICES</h2>
<p>The Services include the provision of the Platform that enables you to arrange and schedule different home-based services with independent third-party service providers of those services (“Service Professionals”). As a part of the Services, PREHANDS facilitates the transfer of payments to Service Professionals for the services they render to you and collects payments on behalf of such Service Professionals.</p>
<p>The services rendered by Service Professionals are referred to as “Pro Services”. The term “Services” does not include the Pro Services. Prehands does not provide the Pro Services and is not responsible for their provision. Service Professionals are solely liable and responsible for the Pro Services that they offer or otherwise provide through the Platform. PREHANDS and its affiliates do not employ Service Professionals, nor are Service Professionals agents, contractors, or partners of PREHANDS or its affiliates. Service Professionals do not have the ability to bind or represent PREHANDS.</p>
<p>The Platform is for your personal and non-commercial use only, unless otherwise agreed upon in accordance with the terms of a separate agreement. Please note that the Platform is intended for use only within India. You agree that in the event you avail the Services or Pro Services from a legal jurisdiction other than the territory of India, you will be deemed to have accepted the PREHANDS terms and conditions applicable to that jurisdiction.</p>
<p>The Services are made available under various brands owned by or otherwise licensed to PREHANDS and its affiliates.</p>
<p>A key part of the Services is PREHANDS ability to send you text messages, electronic mails, or WhatsApp messages, including in connection with your bookings, your utilisation of the Services, or as a part of its promotional and marketing strategies. While you may opt out of receiving these text messages by contacting PREHANDS service@prohands.com or through the in-Platform settings, you agree and acknowledge that this may impact PREHANDS ability to provide the Services (or a part of the Services) to you.</p>
<p>In certain instances, you may be required to furnish identification proof to avail the Services or the Pro Services, and hereby agree to do so. A failure to comply with this request may result in your inability to use the Services or Pro Services.</p>
<p><strong>PREHANDS promotional code:</strong></p>
<p>PREHANDS may, in its sole discretion, offer promotional codes that may be redeemed for, other features or benefits related to the Services, and/or Pro Services, subject to any additional terms that may apply on a promotional code.</p>
<p>You agree that (i) you shall use Code in a lawful manner, and only for the purposes specified by such Code, (ii) you shall not duplicate, sell, or transfer the Codes in any manner (including by posting such codes on a public forum) unless you ha PREHANDS express prior consent to do so, (iii) Code may be disabled by PREHANDS at any time for any reason without any liability to you, (iv) Codes are not valid for cash, and (v) Codes may expire prior to your use.</p>
<p>PREHANDS may, at its sole discretion, provide only certain users with Codes that may result in different amounts charged for the same or similar services obtained by other users.</p>
<p>PREHANDS reserves the right to withhold or deduct Codes or other features or benefits obtained through the use of Codes, by you or any other user, if PREHANDS reasonably determines or believes that the use or redemption of the Codes was in error, fraudulent, illegal, or in violation of the applicable Coids terms or these Terms.</p>

<h2>2. ACCOUNT CREATION</h2>
<p>To avail the Services, you will be required to create an account on the Platform (“Account”). For this Account, you may be required to furnish certain details, including but not limited to your phone number. To create an Account, you must be at least 18 years of age.</p>
<p>You warrant that all information furnished in connection with your Account is and shall remain accurate and true. You agree to promptly update your details on the Platform in the event of any change to or modification of this information.</p>
<p>You are solely responsible for maintaining the security and confidentiality of your Account and agree to immediately notify us of any disclosure or unauthorised use of your Account or any other breach of security with respect to your Account.</p>
<p>You are liable and accountable for all activities that take place through your Account, including activities performed by persons other than you. We shall not be liable for any unauthorised access to your Account.</p>
<p>You agree to receive communications from us regarding (i) requests for payments, (ii) information about us and the Services, (iii) promotional offers and services from us and our third party partners, and (iv) any other matter in relation to the Services.</p>

<h2>3. USER CONTENT</h2>
<p>Our Platform may contain interactive features or services that allow users who have created an account with us to post, upload, publish, display, transmit, or submit comments, reviews, suggestions, feedback, ideas, or other content on or through the Platform (“User Content”).</p>
<p>As part of the effective provision of the Services and quality control purposes, we may request reviews from you about Service Professionals and you agree and acknowledge that Service Professionals may provide reviews about you to us. You must not knowingly provide false, inaccurate, or misleading information in respect of the reviews. Reviews will be used by us for quality control purposes and to determine whether Customers and Service Professionals are appropriate users of the Platform. If we determine at our sole discretion that you are not an appropriate user, we reserve the right to cancel your registration and remove you from our Platform.</p>
<p>You grant us a non-exclusive, worldwide, perpetual, irrevocable, transferable, sublicensable, and royalty-free licence to (i) use, publish, display, store, host, transfer, process, communicate, distribute, make available, modify, adapt, translate, and create derivative works of, the User Content, for the functioning of, and in connection with, the Services and (ii) use User Content for the limited purposes of advertising and promoting the Services, or furnishing evidence before a court or authority of competent jurisdiction under applicable laws.</p>
<p>In connection with these Terms and the licences granted under this clause, you hereby waive any claims arising out of any moral rights or other similar rights relating to the User Content.</p>
<p>You agree and acknowledge that PREHANDS may, without notice to you, remove, or otherwise restrict access to User Content that, in its sole discretion, violates these Terms.</p>

<h2>4. CONSENT TO USE DATA</h2>
<p>You agree that we may, in accordance with our Privacy Policy, collect and use your personal data. The Privacy Policy is available at https://prohands.com/policy and it explains the categories of personal data that we collect or otherwise process about you and the manner in which we process such data.</p>
<p>In addition to any consent you may provide pursuant to the Privacy Policy, you hereby consent to us sharing your information with our affiliates or other third-party service providers. We may use information and data pertaining to your use of the Services for provision of the Services, analytics, trend identification, and purposes of statistics to further enhance the effectiveness and efficiency of our Services, and provision of beneficial schemes, new offers, and for experience enhancement.</p>
<p>Subject to applicable laws, we may be directed by law enforcement agencies or the government and related bodies to disclose data in relation to you in connection with criminal or civil proceedings. You understand and agree that in such instances we shall have the right to share such data with relevant agencies or bodies.</p>

<h2>5. BOOKINGS</h2>
<p><strong>Orders:</strong> The Platform permits you to request various Pro Services at a time of your choosing based on available slots. To make a booking, you should follow the instructions on the Platform and provide necessary information. We use reasonable efforts to enable you to find a Service Professional who is able to provide that service at the requested time. If, in the unlikely event we cannot find a Service Professional for the specific timeslot, we will contact you to find an alternative time.</p>
<p><strong>Confirmation:</strong> Once you place a request we will provide confirmation of the booking via SMS, email or a push notification. Once your booking has been confirmed, you will be required to make the payment in accordance with these Terms or as indicated on the Platform. Once a Service Professional has been identified for the requested Pro Services, you shall receive confirmation in App or via SMS, email or a push notification.</p>
<p><strong>Cancellations:</strong> Bookings that are cancelled before confirmation on the Platform will not be charged. PREHANDS cancellation policy sets out applicable cancellation fees.</p>
<p><strong>Substitution:</strong> In case of the unavailability of, or cancellation by a selected Service Professional, we will offer you a substitute of the Service Professional from among our registered Service Professionals.</p>

<h2>6. PRICING, FEES, AND PAYMENT TERMS</h2>
<p>Prehands reserves the right to charge you for the different Services you may avail and/or for any other facilities you may opt for, from time to time, on or via the Platform.</p>
<p><strong>Charges and Fees in respect of Pro Services:</strong></p>
<p>In respect of Pro Services that you seek to avail through the Platform, you shall be required to pay Service Professionals the amount indicated at the time of booking as well as amounts towards (a) any additional Pro Services you may avail, (b) out of pocket expenses incurred by the Service Professional, and (c) expenses arising out of the purchase of goods required or utilised for the performance of the Pro Service (“Charges”). In addition to the Charges payable to Service Professionals, PREHANDS reserves the right to charge you a convenience fee for facilitating the booking and transferring payments to the Service Professional (this fee is referred to as “Fees”). You acknowledge that the final bill you receive may include additional charges, including without limitation, a safety fee, warranty fee, insurance fee, or Service Professional welfare fee.</p>
<p>PREHANDS shall notify you of the applicable Charges, Fees, and payment methods at the time of booking. Generally, you may make payments for Pro Services through credit cards, debit cards, net banking, wallets, UPI or cash upon completion of the Pro Service. We have the right to modify and otherwise restrict the modes of payment available to you. You acknowledge that certain payment methods such as cash upon completion may not always be available to you as a payment method. For the avoidance of doubt, in the event you pay through the method of ‘cash upon completion’, you acknowledge that you will be required to pay both Charges and Fees to the Service Professional.</p>
<p>The Charges and Fees may be payable at the time of making a booking, or upon the completion of the Pro Service, as specified by PREHANDS.</p>
<p>For the avoidance of doubt, please note that the Charges are payable to Service Professionals, and PREHANDS acts as a limited collection agent on behalf of such Service Professionals to collect and transfer amounts due to them.</p>
<p><strong>Taxes:</strong> All Charges and Fees are inclusive of applicable taxes.</p>
<p>PREHANDS reserves the right to reasonably amend the Charges and Fees at any time at its sole discretion. A change in Fees shall not impact any bookings that have been confirmed before the publication of the revised Fees on the Platform.</p>
<p>Charges and Fees that you pay are final and non-refundable, unless otherwise determined by PREHANDS or required by the applicable laws. Under certain laws, you may be entitled to a refund or other remedies for a failure in the provision of the Services.</p>
<p>You acknowledge and agree that Charges and Fees applicable in certain geographical areas may increase substantially during times of high demand. PREHANDS will use reasonable efforts to inform you of the Charges and Fees that may apply. However, by using the Pro Services or Services, you will be responsible for the Charges and Fees incurred under your Account regardless of your awareness of such Charges or Fees.</p>
`;

const professionalContent = `
<p><strong>These Terms and Conditions apply to Service Professionals using the PREHANDS platform.</strong></p>
<p>(A) These terms and conditions (“Terms”) govern the use of services made available on or through https://prohands.com/ and/or the PREHANDS mobile app (collectively, the “Platform” and together with the services made available on or through the Platform, “Services”). These Terms also include our privacy policy, (“Privacy Policy”), and any guidelines, additional, or supplemental terms, policies, and disclaimers made available or issued by us from time to time (“Supplemental Terms”). The Privacy Policy and the Supplemental Terms form an integral part of these Terms. In the event of a conflict between these Terms and the Supplemental Terms, the Supplemental Terms will prevail.</p>
<p>(B) The Terms constitute a binding and enforceable legal contract between PREHANDS LLP (a company incorporated under the Companies Act, 2013 with its registered address at [Insert Registered Office Address] and its corporate office at [Insert Corporate Office Address]) and its affiliates (“PREHANDS”, “PH”, “we”, “us”, or “our”), and you, an independent third-party service provider (“you” or “Service Professional”). By using the Services, you represent and warrant that you have the full legal capacity and authority to agree and bind yourself to these Terms. If you represent any other person, you confirm and represent that you have the necessary power and authority to bind such person to these Terms.</p>
<p>(C) For your ease of reference, we may publish or provide you with a copy of the Terms in languages other than English. However, if there is any discrepancy in the language or meaning between the Terms drafted in English and a copy of the Terms in a language other than English, the Terms drafted in English shall prevail.</p>
<p>(D) By using the Services, you agree that you have read, understood, and are bound by these Terms, as amended from time to time, and that you will comply with the requirements listed here. These Terms expressly supersede any prior written agreements with you. If you do not agree to these Terms, or comply with the requirements listed here, please do not use the Services.</p>

<h2>1. SERVICES</h2>
<p>The Services include the provision of the Platform that enables you to provide different home-based services to end-customers registered on the Platform (“Customers”). As a part of the Services, PREHANDS (i) assists you with determining amounts payable by Customers to you for the services you render, (ii) facilitates the maximum and efficient utilisation of your time while you use the Services, (iii) takes measures to maximise your earning potential through your use of the Services, and (iv) facilitates the transfer of payments from Customers to you for the services you render to the Customers and collect payments on your behalf. The Services are made available under various brands owned by or otherwise licensed to PREHANDS or its affiliates.</p>
<p>The services rendered by you are referred to as “Pro Services”. Our “Services” do not include the Pro Services, and PREHANDS is not responsible for the provision of Pro Services. PREHANDS and its affiliates do not employ you or any other Service Professional, nor are Service Professionals the agents, contractors, or partners of PREHANDS or its affiliates. Service Professionals do not have the ability to bind or represent PREHANDS. You are solely liable and responsible for the Pro Services that you offer or otherwise provide through the Platform.</p>
<p>The Platform is solely for your commercial use and is intended for use only within India. A key part of the Services is PREHANDS’s ability to send you text messages, including in connection with your bookings, your utilisation of the Services, or as a part of its promotional and marketing strategies. While you may opt out of receiving these text messages by contacting PREHANDS at contact@prohands.com, you agree and acknowledge that this may impact PREHANDS ability to provide the Services (or a part of the Services) to you.</p>
<p>Prior to the activation of your ability to use certain parts of the Services and provide Pro Services through the Platform, you are required to attend an orientation programme at your local PREHANDS office to enable you to understand amongst other matters (i) how the Platform works, and (ii) means and ways to maximise your earning potential on the Platform. You hereby agree to attend such orientation programme(s). PREHANDS reserves the right to charge a certain non-refundable fee towards your orientation/ onboarding onto the platform at its sole discretion, for certain Pro Services which will be intimated to you in advance. And such fee will be recovered from you in installments from your earnings after you join the platform.</p>
<p>Further, you hereby agree that certain consumable products will be used in the course of the orientation programme, the cost of which shall be entirely borne by you. If you fail to meet the standards prescribed to join the Platform, any costs incurred by you towards the purchase of such consumable products will not be refunded.</p>

<h2>2. ACCOUNT CREATION</h2>
<p>To avail the Services and provide the Pro Services through the Platform, you will be required to create an account on the Platform (“Account”). In addition to setting up a username and password for your Account, you will be required to furnish certain details and documents, including but not limited to your name, phone number, address, age, valid government issued identification, trade licences, and government approvals that permit you to offer Pro Services under applicable law. To create an Account, you must be at least 18 (Eighteen) years of age. At the time of Account creation, you will be required to make a security deposit of certain amounts depending on your category of Pro Services, and PREHANDS will refund this amount to you (subject to the deduction of any amounts that you owe PREHANDS) within 30 (Thirty) days of the termination of these Terms.</p>
<p>You warrant that all information furnished in connection with your Account is and shall remain accurate and true. You agree to promptly update your details on the Platform in the event of any change to or modification of this information.</p>
<p>You agree that PREHANDS, through third parties, may undertake your background verification, at your sole cost, to fulfil due diligence and safety obligations prior to the approval of your Account on the Platform, activating your access to the Services, and permitting you to provide Pro Services through the Services. In addition, PREHANDS, through third parties may, at its sole discretion, at your sole cost, undertake such background verification from time to time thereafter. If you are registered on the Platform prior to the completion of the background verification, your registration on the Platform shall be contingent on your background verification report meeting PREHANDS’s standards (as PREHANDS may determine in accordance with applicable laws and its internal policies). You agree that your ability to use the Services and offer Pro Services through the Platform shall at all times be subject to your background verification reporting meeting PREHANDS’s standards. For the avoidance of doubt, PREHANDS takes commercially reasonable efforts to undertake background verifications of Service Professionals and is not responsible or liable for ensuring the safety, security, or welfare of the Services Professionals or the Customers.</p>
<p>You may only own, operate, and possess one Account. If PREHANDS discovers or determines that you possess more than one Account, it will have the right to revoke, without notice, your access to the Platform and the Services.</p>
<p>You are solely responsible for maintaining the security and confidentiality of your password and agree to immediately notify us of any disclosure or unauthorised use of your Account or any other breach of security with respect to your Account. You further agree that no person other than yourself has the right to access your Account and you will not share your login credentials with any other person. If PREHANDS reasonably determines that you have shared your login credentials with another person or allowed another person to access and use your Account, it may suspend or terminate your access and use of the Services without notice to you.</p>
<p>You are liable and accountable for all activities that take place through your Account. We shall not be liable for any unauthorised access to your Account.</p>
<p>You agree to receive communications from us regarding (i) information about us and the Services, (ii) promotional offers and services from us and our third party partners, and (iii) any other matter in relation to the Services.</p>

<h2>3. BOOKINGS AND CREDITS</h2>
<p>The Platform permits you to accept requests for the Pro Services you offer based on your availability (“Leads”). To confirm a request, you should follow the instructions on the Platform and provide necessary information.</p>
<p><strong>Ranking of Service Professionals:</strong> Your ranking on the Platform is based on the following factors in descending order of importance: Your ratings on the Platform; Your location; and PH Credits and Pre-Deposits.</p>
<p>You shall, at all times, be required to maintain a minimum balance of credits (“PH Credits”) to be able to access parts of the Services. PH Credits will be credited to your Account against payment being made by you to obtain the PH Credits. You agree and acknowledge that your use of the Services may be affected if you do not have the requisite PH Credits. In addition and notwithstanding anything to the contrary hereunder, PREHANDS reserves the sole discretion to require the payment of additional fees in respect of (A) the provision of Leads in certain market segments or (B) the provision of additional Services.</p>
<p>You are required to deposit a pre-determined amount of PH Credits with PREHANDS (“Pre-Deposit”) in order to be able to accept Leads. The details required to connect you with a Customer will only be communicated to you after the Pre-Deposit is made with PREHANDS. The quantum of the Pre-Deposit will be based on the aggregate value of the Lead(s). Pre-Deposit may be secured as a percentage of the aggregate value of Leads, or as a fixed sum. The quantum of the Pre-Deposit for the particular Pro Services offered by you to the Customer will be communicated to you from time to time, or before the communication of a Lead.</p>
<p>To ensure maintenance of the Pre-Deposit, you acknowledge and authority PREHANDS to deduct certain amounts from the payments made by the Customers to you.</p>
<p>You may also use PH Credits to purchase goods and services offered by PREHANDS to you from time to time.</p>
<p><strong>Promotions, and Subscription Packages:</strong> PREHANDS may, at its sole discretion, issue PH Credits free of charge to your Account, and/or may create promotional codes that may be redeemed for Account credits or other features or benefits related to the Services (“Promo PH Credits”), subject to any additional terms that PREHANDS may impose and share with you from time to time. You agree that Promo PH Credits (A) shall not be duplicated, sold, or transferred in any manner, or made available to any person other than yourself, (B) may be disabled by PREHANDS at any time for any reason without liability to PREHANDS, (C) are not valid for cash, and (D) may expire prior to your use.</p>
<p>Based on factors such as your ratings and reviews by Customers, PREHANDS may, at its sole discretion, from time to time offer (A) subscription packages or scheme (howsoever named) in exchange for PH Credits and/ or (B) minimum business guarantees subject to applicable terms and conditions communicated to prior to acceptance of the minimum guarantee. Upon purchasing such subscription package or scheme or acceptance of minimum business guarantee, you may be entitled to certain benefits such as preferential Leads (i.e., Lead allocation on priority and lower convenience fee deductions), or the job value communicated to you, in lieu of the Leads. Such packages, schemes, and/or guarantees shall be subject to additional terms.</p>
<p>In case you are unable to meet the requirements agreed upon for availing the minimum business guarantee, PREHANDS may on the occurrence of any Customer experience related issues or other conditions, terminate such arrangement. Provided that, PREHANDS shall not be entitled to levy a penalty under Clause 3(d)(iv) if You are unable to meet the requirements due to PREHANDS fault. For clarity, PREHANDS’s fault shall mean (i) outage of Services; (ii) Platform malfunction; or (iii) occurrence of any other event (not attributable to you whether directly or indirectly) causing disruption or failure in the provision of Services.</p>
<p>You hereby acknowledge that PREHANDS offers a minimum business guarantee and subscription packages to improve (A) your access to Leads and (B) the Customer experience of the Services. Nothing in these schemes shall be interpreted to mean that PREHANDS is responsible for the provision of Pro Services.</p>
<p><strong>Performance Based Schemes:</strong> PREHANDS may from time to time introduce schemes for high performing Service Professionals to be allotted preferential Leads (as explained above). The parameters to determine a Service Professional’s performance shall include but not be limited to, service feedback received from Customers, proportion of Leads accepted, and other parameters as may be communicated to you from time to time.</p>
<p>PREHANDS reserves the right to withhold or deduct PH Credits or Promo PH Credits in the event that PREHANDS reasonably determines or believes that the use of the PH Credits or Promo PH Credits was in error, fraudulent, illegal, or in violation of the applicable Promo Code terms or these Terms.</p>

<h2>4. HELPERS</h2>
<p><strong>Helpers or Assistants:</strong> You agree and acknowledge that:</p>
<ul>
<li>You may not engage another person to assist you in the provision of the Pro Services (“Helper”) unless expressly permitted by PREHANDS. You shall be solely liable for all acts and omissions made by the Helper you have engaged. The following terms apply if you choose to appoint a Helper:</li>
  <ul>
    <li>you must provide Pro Services in a category where the engagement of Helpers is permitted by PREHANDS;</li>
    <li>the Helper must be registered on the Platform in their capacity as your Helper. In this regard, PREHANDS shall have the right to demand for documentation governing the applicant’s birth, residency, and any other documents or information that PREHANDS may deem necessary. PREHANDS further reserves the right to carry out a background verification of the Helper, the cost of which verification shall be borne by you;</li>
    <li>the Helper is at least 18 (Eighteen) years of age at the time of registration on the Platform;</li>
    <li>for safety purposes, the Helper must be of the same biological sex as you;</li>
    <li>the Helper must be legally permitted to assist you in the provision of Services to the Customers; and</li>
    <li>such other terms and conditions prescribed by PREHANDS from time to time.</li>
  </ul>
<li>Unless specified otherwise, you may not use more than 1 (One) Helper while providing a Pro Service to a Customer.</li>
<li>You shall accompany the Helper, in person, at all times, while providing a Pro Service to a Customer.</li>
<li>Any breach of these Terms by the Helper shall be considered a breach by you and shall be dealt with accordingly in accordance with these Terms. Further, you shall indemnify and hold harmless PREHANDS and its affiliates and their officers, directors, employees, and agents from any and all claims, demands, losses, liabilities, and expenses (including attorneys’ fees) arising out of, or in connection with, any act or omission by the Helper.</li>
<li>You agree that there is no contract of employment between PREHANDS and the Helper, and that you have engaged the Helper in your capacity as an independent contractor.</li>
<li>You shall be solely liable for compensating the Helper on the terms and conditions agreed upon between you and the Helper. PREHANDS shall not be liable to compensate the Helper for the provision of the Pro Services or any expense incurred or assistance provided by the Helper to you in the provision of the Pro Services. Further, PREHANDS shall not be liable to pay you any extra compensation for engaging a Helper.</li>
</ul>
`;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setContent(baseHtml('Terms and Conditions of Customer', customerContent));
  await page.pdf({ path: path.join(__dirname, 'public/customer-terms.pdf'), format: 'A4', margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '20mm' } });
  
  await page.setContent(baseHtml('Terms and Conditions of Service Professionals', professionalContent));
  await page.pdf({ path: path.join(__dirname, 'public/professional-terms.pdf'), format: 'A4', margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '20mm' } });
  
  await browser.close();
  console.log('PDFs generated successfully.');
})();
