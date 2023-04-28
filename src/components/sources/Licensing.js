import React, { useEffect, useState } from 'react';
import "./licensing.css";

export const Licensing = () => {

  const textBlocks = [
    {
      title: 'React',
      text: `MIT License
  
      Copyright (c) Meta Platforms, Inc. and affiliates.
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`
    },
    {
      title: 'VS Code',
      text: `MIT License
  
      Copyright (c) 2015 - present Microsoft Corporation
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`
    },
    {
      title: 'Google APIs (Maps and Geocoder)',
      text: `Googles licenses above are subject to your compliance with the following requirements
  
      Googles licenses above are subject to your compliance with the following requirements:
  
  9.1 Free, Public Accessibility to Your Maps API Implementation.
  
  9.1.1 General Rules.
  
  Free access (no fees). Subject to Section 9.1.2 (Exceptions), your Maps API Implementation must be accessible to the general public without charge and must not require a fee-based subscription or other fee-based restricted access. This rule applies to Your Content and any other content in your Maps API Implementation, whether Your Content or the other content exists now or is added later.
  Public access (no firewall). Your Maps API Implementation must not operate (i) only behind a firewall; or (ii) only on an internal network (except during the development and testing phase); or (iii) in a closed community (for example, through invitation-only access).
  9.1.2 Exceptions.
  
  Enterprise agreement with Google. The rules in Section 9.1.1 (Free access, Public access) do not apply if you have entered into a separate written agreement with Google (such as a Google Maps agreement) or obtained Google's written permission.
  Mobile applications.
  The rule in Section 9.1.1(a) (Free access) does not apply if your Maps API Implementation is used in a mobile application that is sold for a fee through an online store and is downloadable to a mobile device that can access the online store.
  The rule in Section 9.1.1(b) (Public access) does not apply if your Maps API Implementation is an Android application that uses the Google Maps Android API. (However, the rule in Section 9.1.1(b) (Public access) will continue to apply if your Maps API Implementation is an Android application that uses any other Maps APIs, unless the Maps API Implementation qualifies for the exception in Section 9.1.2(a) (Enterprise agreement with Google).)
  9.1.3 Examples.
  
  You can require users to log in to your Maps API Implementation if you do not require users to pay a fee.
  You can charge a fee for your Maps API Implementation if it is an Android application downloadable to mobile devices from the Google Play Store.
  If you are a consultant who creates or hosts Maps API Implementations for third-party customers, you may charge those customers a fee for your consulting or hosting services (but not for the Maps API Implementations themselves, except as permitted under Section 9.1.2 (Exceptions)).
  9.2 Reporting. You must implement those reporting mechanisms that Google requires (as updated from time to time in these Terms and in the Maps APIs Documentation).
  
  9.3 End User Terms and Privacy Policy. If you develop a Maps API Implementation for use by other users, you must:
  
  display to the users of your Maps API Implementation the link to Google’s Terms of Service as presented through the Service or described in the Maps APIs Documentation;
  explicitly state in your Maps API Implementation’s terms of use that, by using your Maps API Implementation, your users are agreeing to be bound by the Google Maps/Google Earth Additional Terms of Service; and
  protect the privacy and legal rights of those users.
  Your privacy policy. You must make publicly available, and must abide by, an appropriate privacy policy in your Maps API Implementation. In particular, if your Maps API Implementation enables you or any party to gain access to information about users of the Maps API(s), including personally identifiable information (such as user names) or non-personally identifiable usage information (such as location), your privacy policy must describe your use and retention of this information.
  Geolocation privacy
  Your Maps API Implementation must notify the user in advance of the type(s) of data that you intend to collect from the user or the user’s device. Your Maps API Implementation must not obtain or cache any user’s location in any manner except with the user's prior consent. Your Maps API Implementation must let the user revoke the user's consent at any time.
  If your Maps API Implementation provides Google with geolocation data, that geolocation data must not enable Google to identify an individual user. For example, if your Maps API Implementation sends Google Your Content, and Your Content includes geolocation data, Your Content must not also include unique device identifiers associated with individual users.
  If you intend to obtain the user’s location and use it with any other data provider's data, you must disclose this fact to the user.
  Google’s Privacy Policy. Your privacy policy must notify users that you are using the Maps API(s) and incorporate by reference Google’s Privacy Policy by including a link to Google’s then-current Privacy Policy (at http://www.google.com/policies/privacy or such other URL as Google may provide).
  Cookies. As noted in the Documentation, certain Maps API(s) store and access cookies and other information on end users’ devices. If you use any of these cookie-enabled Maps API(s) in your Maps API Implementation, then for end users in the European Union, you must comply with the EU User Consent Policy.
  9.4 Attribution.
  
  Content provided to you through the Service may contain the Brand Features of Google, its strategic partners, or other third-party rights holders of content that Google indexes. When Google provides those Brand Features or other attribution through the Service, you must display such attribution as provided (or as described in the Maps APIs Documentation) and must not delete or alter the attribution.
  You must conspicuously display the "powered by Google" attribution (and any other attribution(s) required by Google in the Maps APIs Documentation) on or adjacent to the relevant Service search box and Google search results. If you use the standard Google search control, or the standard Google search control form, this attribution will be included automatically, and you must not modify or obscure this automatically-generated attribution.
  You understand and agree that Google has the sole right and discretion to determine whether your attribution(s) are in compliance with the above requirements.
  9.5 Preventing Unauthorized Use. You will use all reasonable efforts to prevent unauthorized use of the Service and to terminate any such unauthorized use.
  
  9.6 Responsibility for Breaches. You are solely responsible for (and Google has no responsibility to you or any third party for) any breach of your obligations under the Terms and for the consequences of any such breach (including any loss or damage that Google may suffer).`
    },
    {
      title: 'Mongo DB',
      text: `
      Copyright © 2018 MongoDB, Inc.
  
      Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
  
      TERMS AND CONDITIONS
      0. Definitions.
      “This License” refers to Server Side Public License.
      
      “Copyright” also means copyright-like laws that apply to other kinds of works, such as semiconductor masks.
      
      “The Program” refers to any copyrightable work licensed under this License. Each licensee is addressed as “you”. “Licensees” and “recipients” may be individuals or organizations.
      
      To “modify” a work means to copy from or adapt all or part of the work in a fashion requiring copyright permission, other than the making of an exact copy. The resulting work is called a “modified version” of the earlier work or a work “based on” the earlier work.
      
      A “covered work” means either the unmodified Program or a work based on the Program.
      
      To “propagate” a work means to do anything with it that, without permission, would make you directly or secondarily liable for infringement under applicable copyright law, except executing it on a computer or modifying a private copy. Propagation includes copying, distribution (with or without modification), making available to the public, and in some countries other activities as well.
      
      To “convey” a work means any kind of propagation that enables other parties to make or receive copies. Mere interaction with a user through a computer network, with no transfer of a copy, is not conveying.
      
      An interactive user interface displays “Appropriate Legal Notices” to the extent that it includes a convenient and prominently visible feature that (1) displays an appropriate copyright notice, and (2) tells the user that there is no warranty for the work (except to the extent that warranties are provided), that licensees may convey the work under this License, and how to view a copy of this License. If the interface presents a list of user commands or options, such as a menu, a prominent item in the list meets this criterion.
      
      1. Source Code.
      The “source code” for a work means the preferred form of the work for making modifications to it. “Object code” means any non-source form of a work.
      
      A “Standard Interface” means an interface that either is an official standard defined by a recognized standards body, or, in the case of interfaces specified for a particular programming language, one that is widely used among developers working in that language.
      
      The “System Libraries” of an executable work include anything, other than the work as a whole, that (a) is included in the normal form of packaging a Major Component, but which is not part of that Major Component, and (b) serves only to enable use of the work with that Major Component, or to implement a Standard Interface for which an implementation is available to the public in source code form. A “Major Component”, in this context, means a major essential component (kernel, window system, and so on) of the specific operating system (if any) on which the executable work runs, or a compiler used to produce the work, or an object code interpreter used to run it.
      
      The “Corresponding Source” for a work in object code form means all the source code needed to generate, install, and (for an executable work) run the object code and to modify the work, including scripts to control those activities. However, it does not include the work's System Libraries, or general-purpose tools or generally available free programs which are used unmodified in performing those activities but which are not part of the work. For example, Corresponding Source includes interface definition files associated with source files for the work, and the source code for shared libraries and dynamically linked subprograms that the work is specifically designed to require, such as by intimate data communication or control flow between those subprograms and other parts of the work.
      
      The Corresponding Source need not include anything that users can regenerate automatically from other parts of the Corresponding Source.
      
      The Corresponding Source for a work in source code form is that same work.
      
      2. Basic Permissions.
      All rights granted under this License are granted for the term of copyright on the Program, and are irrevocable provided the stated conditions are met. This License explicitly affirms your unlimited permission to run the unmodified Program, subject to section 13. The output from running a covered work is covered by this License only if the output, given its content, constitutes a covered work. This License acknowledges your rights of fair use or other equivalent, as provided by copyright law.
      
      Subject to section 13, you may make, run and propagate covered works that you do not convey, without conditions so long as your license otherwise remains in force. You may convey covered works to others for the sole purpose of having them make modifications exclusively for you, or provide you with facilities for running those works, provided that you comply with the terms of this License in conveying all material for which you do not control copyright. Those thus making or running the covered works for you must do so exclusively on your behalf, under your direction and control, on terms that prohibit them from making any copies of your copyrighted material outside their relationship with you.
      
      Conveying under any other circumstances is permitted solely under the conditions stated below. Sublicensing is not allowed; section 10 makes it unnecessary.
      
      3. Protecting Users' Legal Rights From Anti-Circumvention Law.
      No covered work shall be deemed part of an effective technological measure under any applicable law fulfilling obligations under article 11 of the WIPO copyright treaty adopted on 20 December 1996, or similar laws prohibiting or restricting circumvention of such measures.
      
      When you convey a covered work, you waive any legal power to forbid circumvention of technological measures to the extent such circumvention is effected by exercising rights under this License with respect to the covered work, and you disclaim any intention to limit operation or modification of the work as a means of enforcing, against the work's users, your or third parties' legal rights to forbid circumvention of technological measures.
      
      4. Conveying Verbatim Copies.
      You may convey verbatim copies of the Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice; keep intact all notices stating that this License and any non-permissive terms added in accord with section 7 apply to the code; keep intact all notices of the absence of any warranty; and give all recipients a copy of this License along with the Program.
      
      You may charge any price or no price for each copy that you convey, and you may offer support or warranty protection for a fee.
      
      5. Conveying Modified Source Versions.
      You may convey a work based on the Program, or the modifications to produce it from the Program, in the form of source code under the terms of section 4, provided that you also meet all of these conditions:
      
      a) The work must carry prominent notices stating that you modified it, and giving a relevant date.
      b) The work must carry prominent notices stating that it is released under this License and any conditions added under section 7. This requirement modifies the requirement in section 4 to “keep intact all notices”.
      c) You must license the entire work, as a whole, under this License to anyone who comes into possession of a copy. This License will therefore apply, along with any applicable section 7 additional terms, to the whole of the work, and all its parts, regardless of how they are packaged. This License gives no permission to license the work in any other way, but it does not invalidate such permission if you have separately received it.
      d) If the work has interactive user interfaces, each must display Appropriate Legal Notices; however, if the Program has interactive interfaces that do not display Appropriate Legal Notices, your work need not make them do so.
      A compilation of a covered work with other separate and independent works, which are not by their nature extensions of the covered work, and which are not combined with it such as to form a larger program, in or on a volume of a storage or distribution medium, is called an “aggregate” if the compilation and its resulting copyright are not used to limit the access or legal rights of the compilation's users beyond what the individual works permit. Inclusion of a covered work in an aggregate does not cause this License to apply to the other parts of the aggregate.
      
      6. Conveying Non-Source Forms.
      You may convey a covered work in object code form under the terms of sections 4 and 5, provided that you also convey the machine-readable Corresponding Source under the terms of this License, in one of these ways:
      
      a) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by the Corresponding Source fixed on a durable physical medium customarily used for software interchange.
      b) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by a written offer, valid for at least three years and valid for as long as you offer spare parts or customer support for that product model, to give anyone who possesses the object code either (1) a copy of the Corresponding Source for all the software in the product that is covered by this License, on a durable physical medium customarily used for software interchange, for a price no more than your reasonable cost of physically performing this conveying of source, or (2) access to copy the Corresponding Source from a network server at no charge.
      c) Convey individual copies of the object code with a copy of the written offer to provide the Corresponding Source. This alternative is allowed only occasionally and noncommercially, and only if you received the object code with such an offer, in accord with subsection 6b.
      d) Convey the object code by offering access from a designated place (gratis or for a charge), and offer equivalent access to the Corresponding Source in the same way through the same place at no further charge. You need not require recipients to copy the Corresponding Source along with the object code. If the place to copy the object code is a network server, the Corresponding Source may be on a different server (operated by you or a third party) that supports equivalent copying facilities, provided you maintain clear directions next to the object code saying where to find the Corresponding Source. Regardless of what server hosts the Corresponding Source, you remain obligated to ensure that it is available for as long as needed to satisfy these requirements.
      e) Convey the object code using peer-to-peer transmission, provided you inform other peers where the object code and Corresponding Source of the work are being offered to the general public at no charge under subsection 6d.
      A separable portion of the object code, whose source code is excluded from the Corresponding Source as a System Library, need not be included in conveying the object code work.
      
      A “User Product” is either (1) a “consumer product”, which means any tangible personal property which is normally used for personal, family, or household purposes, or (2) anything designed or sold for incorporation into a dwelling. In determining whether a product is a consumer product, doubtful cases shall be resolved in favor of coverage. For a particular product received by a particular user, “normally used” refers to a typical or common use of that class of product, regardless of the status of the particular user or of the way in which the particular user actually uses, or expects or is expected to use, the product. A product is a consumer product regardless of whether the product has substantial commercial, industrial or non-consumer uses, unless such uses represent the only significant mode of use of the product.
      
      “Installation Information” for a User Product means any methods, procedures, authorization keys, or other information required to install and execute modified versions of a covered work in that User Product from a modified version of its Corresponding Source. The information must suffice to ensure that the continued functioning of the modified object code is in no case prevented or interfered with solely because modification has been made.
      
      If you convey an object code work under this section in, or with, or specifically for use in, a User Product, and the conveying occurs as part of a transaction in which the right of possession and use of the User Product is transferred to the recipient in perpetuity or for a fixed term (regardless of how the transaction is characterized), the Corresponding Source conveyed under this section must be accompanied by the Installation Information. But this requirement does not apply if neither you nor any third party retains the ability to install modified object code on the User Product (for example, the work has been installed in ROM).
      
      The requirement to provide Installation Information does not include a requirement to continue to provide support service, warranty, or updates for a work that has been modified or installed by the recipient, or for the User Product in which it has been modified or installed. Access to a network may be denied when the modification itself materially and adversely affects the operation of the network or violates the rules and protocols for communication across the network.
      
      Corresponding Source conveyed, and Installation Information provided, in accord with this section must be in a format that is publicly documented (and with an implementation available to the public in source code form), and must require no special password or key for unpacking, reading or copying.
      
      7. Additional Terms.
      “Additional permissions” are terms that supplement the terms of this License by making exceptions from one or more of its conditions. Additional permissions that are applicable to the entire Program shall be treated as though they were included in this License, to the extent that they are valid under applicable law. If additional permissions apply only to part of the Program, that part may be used separately under those permissions, but the entire Program remains governed by this License without regard to the additional permissions.
      
      When you convey a copy of a covered work, you may at your option remove any additional permissions from that copy, or from any part of it. (Additional permissions may be written to require their own removal in certain cases when you modify the work.) You may place additional permissions on material, added by you to a covered work, for which you have or can give appropriate copyright permission.
      
      Notwithstanding any other provision of this License, for material you add to a covered work, you may (if authorized by the copyright holders of that material) supplement the terms of this License with terms:
      
      a) Disclaiming warranty or limiting liability differently from the terms of sections 15 and 16 of this License; or
      b) Requiring preservation of specified reasonable legal notices or author attributions in that material or in the Appropriate Legal Notices displayed by works containing it; or
      c) Prohibiting misrepresentation of the origin of that material, or requiring that modified versions of such material be marked in reasonable ways as different from the original version; or
      d) Limiting the use for publicity purposes of names of licensors or authors of the material; or
      e) Declining to grant rights under trademark law for use of some trade names, trademarks, or service marks; or
      f) Requiring indemnification of licensors and authors of that material by anyone who conveys the material (or modified versions of it) with contractual assumptions of liability to the recipient, for any liability that these contractual assumptions directly impose on those licensors and authors.
      All other non-permissive additional terms are considered “further restrictions” within the meaning of section 10. If the Program as you received it, or any part of it, contains a notice stating that it is governed by this License along with a term that is a further restriction, you may remove that term. If a license document contains a further restriction but permits relicensing or conveying under this License, you may add to a covered work material governed by the terms of that license document, provided that the further restriction does not survive such relicensing or conveying.
      
      If you add terms to a covered work in accord with this section, you must place, in the relevant source files, a statement of the additional terms that apply to those files, or a notice indicating where to find the applicable terms.
      
      Additional terms, permissive or non-permissive, may be stated in the form of a separately written license, or stated as exceptions; the above requirements apply either way.
      
      8. Termination.
      You may not propagate or modify a covered work except as expressly provided under this License. Any attempt otherwise to propagate or modify it is void, and will automatically terminate your rights under this License (including any patent licenses granted under the third paragraph of section 11).
      
      However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.
      
      Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.
      
      Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, you do not qualify to receive new licenses for the same material under section 10.
      
      9. Acceptance Not Required for Having Copies.
      You are not required to accept this License in order to receive or run a copy of the Program. Ancillary propagation of a covered work occurring solely as a consequence of using peer-to-peer transmission to receive a copy likewise does not require acceptance. However, nothing other than this License grants you permission to propagate or modify any covered work. These actions infringe copyright if you do not accept this License. Therefore, by modifying or propagating a covered work, you indicate your acceptance of this License to do so.
      
      10. Automatic Licensing of Downstream Recipients.
      Each time you convey a covered work, the recipient automatically receives a license from the original licensors, to run, modify and propagate that work, subject to this License. You are not responsible for enforcing compliance by third parties with this License.
      
      An “entity transaction” is a transaction transferring control of an organization, or substantially all assets of one, or subdividing an organization, or merging organizations. If propagation of a covered work results from an entity transaction, each party to that transaction who receives a copy of the work also receives whatever licenses to the work the party's predecessor in interest had or could give under the previous paragraph, plus a right to possession of the Corresponding Source of the work from the predecessor in interest, if the predecessor has it or can get it with reasonable efforts.
      
      You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.
      
      11. Patents.
      A “contributor” is a copyright holder who authorizes use under this License of the Program or a work on which the Program is based. The work thus licensed is called the contributor's “contributor version”.
      
      A contributor's “essential patent claims” are all patent claims owned or controlled by the contributor, whether already acquired or hereafter acquired, that would be infringed by some manner, permitted by this License, of making, using, or selling its contributor version, but do not include claims that would be infringed only as a consequence of further modification of the contributor version. For purposes of this definition, “control” includes the right to grant patent sublicenses in a manner consistent with the requirements of this License.
      
      Each contributor grants you a non-exclusive, worldwide, royalty-free patent license under the contributor's essential patent claims, to make, use, sell, offer for sale, import and otherwise run, modify and propagate the contents of its contributor version.
      
      In the following three paragraphs, a “patent license” is any express agreement or commitment, however denominated, not to enforce a patent (such as an express permission to practice a patent or covenant not to sue for patent infringement). To “grant” such a patent license to a party means to make such an agreement or commitment not to enforce a patent against the party.
      
      If you convey a covered work, knowingly relying on a patent license, and the Corresponding Source of the work is not available for anyone to copy, free of charge and under the terms of this License, through a publicly available network server or other readily accessible means, then you must either (1) cause the Corresponding Source to be so available, or (2) arrange to deprive yourself of the benefit of the patent license for this particular work, or (3) arrange, in a manner consistent with the requirements of this License, to extend the patent license to downstream recipients. “Knowingly relying” means you have actual knowledge that, but for the patent license, your conveying the covered work in a country, or your recipient's use of the covered work in a country, would infringe one or more identifiable patents in that country that you have reason to believe are valid.
      
      If, pursuant to or in connection with a single transaction or arrangement, you convey, or propagate by procuring conveyance of, a covered work, and grant a patent license to some of the parties receiving the covered work authorizing them to use, propagate, modify or convey a specific copy of the covered work, then the patent license you grant is automatically extended to all recipients of the covered work and works based on it.
      
      A patent license is “discriminatory” if it does not include within the scope of its coverage, prohibits the exercise of, or is conditioned on the non-exercise of one or more of the rights that are specifically granted under this License. You may not convey a covered work if you are a party to an arrangement with a third party that is in the business of distributing software, under which you make payment to the third party based on the extent of your activity of conveying the work, and under which the third party grants, to any of the parties who would receive the covered work from you, a discriminatory patent license (a) in connection with copies of the covered work conveyed by you (or copies made from those copies), or (b) primarily for and in connection with specific products or compilations that contain the covered work, unless you entered into that arrangement, or that patent license was granted, prior to 28 March 2007.
      
      Nothing in this License shall be construed as excluding or limiting any implied license or other defenses to infringement that may otherwise be available to you under applicable patent law.
      
      12. No Surrender of Others' Freedom.
      If conditions are imposed on you (whether by court order, agreement or otherwise) that contradict the conditions of this License, they do not excuse you from the conditions of this License. If you cannot use, propagate or convey a covered work so as to satisfy simultaneously your obligations under this License and any other pertinent obligations, then as a consequence you may not use, propagate or convey it at all. For example, if you agree to terms that obligate you to collect a royalty for further conveying from those to whom you convey the Program, the only way you could satisfy both those terms and this License would be to refrain entirely from conveying the Program.
      
      13. Offering the Program as a Service.
      If you make the functionality of the Program or a modified version available to third parties as a service, you must make the Service Source Code available via network download to everyone at no charge, under the terms of this License. Making the functionality of the Program or modified version available to third parties as a service includes, without limitation, enabling third parties to interact with the functionality of the Program or modified version remotely through a computer network, offering a service the value of which entirely or primarily derives from the value of the Program or modified version, or offering a service that accomplishes for users the primary purpose of the Program or modified version.
      
      “Service Source Code” means the Corresponding Source for the Program or the modified version, and the Corresponding Source for all programs that you use to make the Program or modified version available as a service, including, without limitation, management software, user interfaces, application program interfaces, automation software, monitoring software, backup software, storage software and hosting software, all such that a user could run an instance of the service using the Service Source Code you make available.
      
      14. Revised Versions of this License.
      MongoDB, Inc. may publish revised and/or new versions of the Server Side Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.
      
      Each version is given a distinguishing version number. If the Program specifies that a certain numbered version of the Server Side Public License “or any later version” applies to it, you have the option of following the terms and conditions either of that numbered version or of any later version published by MongoDB, Inc. If the Program does not specify a version number of the Server Side Public License, you may choose any version ever published by MongoDB, Inc.
      
      If the Program specifies that a proxy can decide which future versions of the Server Side Public License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Program.
      
      Later license versions may give you additional or different permissions. However, no additional obligations are imposed on any author or copyright holder as a result of your choosing to follow a later version.
      
      15. Disclaimer of Warranty.
      THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
      
      16. Limitation of Liability.
      IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      
      17. Interpretation of Sections 15 and 16.
      If the disclaimer of warranty and limitation of liability provided above cannot be given local legal effect according to their terms, reviewing courts shall apply local law that most closely approximates an absolute waiver of all civil liability in connection with the Program, unless a warranty or assumption of liability accompanies a copy of the Program in return for a fee.
      
      END OF TERMS AND CONDITIONS`
    },
    {
      title: 'NPM',
      text: `Copyright (c) npm, Inc. and Contributors All rights reserved.
  
      npm is released under the Artistic License 2.0, subject to additional terms that are listed below.
      
      The text of the npm License follows and the text of the additional terms follows the Artistic License 2.0 terms:
      
      The Artistic License 2.0
      
      Copyright (c) 2000-2006, The Perl Foundation.
      
      Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
      
      Preamble
      
      This license establishes the terms under which a given free software Package may be copied, modified, distributed, and/or redistributed. The intent is that the Copyright Holder maintains some artistic control over the development of that Package while still keeping the Package available as open source and free software.
      
      You are always permitted to make arrangements wholly outside of this license directly with the Copyright Holder of a given Package. If the terms of this license do not permit the full use that you propose to make of the Package, you should contact the Copyright Holder and seek a different licensing arrangement.
      
      Definitions
      x
       
      "Copyright Holder" means the individual(s) or organization(s)
      named in the copyright notice for the entire Package.
      "Contributor" means any party that has contributed code or other
      material to the Package, in accordance with the Copyright Holder's
      procedures.
      "You" and "your" means any person who would like to copy,
      distribute, or modify the Package.
      "Package" means the collection of files distributed by the
      Copyright Holder, and derivatives of that collection and/or of
      those files. A given Package may consist of either the Standard
      Version, or a Modified Version.
      "Distribute" means providing a copy of the Package or making it
      accessible to anyone else, or in the case of a company or
      organization, to others outside of your company or organization.
      "Distributor Fee" means any fee that you charge for Distributing
      this Package or providing support for this Package to another
      party.  It does not mean licensing fees.
      "Standard Version" refers to the Package if it has not been
      modified, or has been modified only in ways explicitly requested
      by the Copyright Holder.
      "Modified Version" means the Package, if it has been changed, and
      such changes were not explicitly requested by the Copyright
      Holder.
      "Original License" means this Artistic License as Distributed with
      the Standard Version of the Package, in its current version or as
      it may be modified by The Perl Foundation in the future.
      "Source" form means the source code, documentation source, and
      configuration files for the Package.
      "Compiled" form means the compiled bytecode, object code, binary,
      or any other form resulting from mechanical transformation or
      translation of the Source form.
      Permission for Use and Modification Without Distribution
      
      (1) You are permitted to use the Standard Version and create and use Modified Versions for any purpose without restriction, provided that you do not Distribute the Modified Version.
      
      Permissions for Redistribution of the Standard Version
      
      (2) You may Distribute verbatim copies of the Source form of the Standard Version of this Package in any medium without restriction, either gratis or for a Distributor Fee, provided that you duplicate all of the original copyright notices and associated disclaimers. At your discretion, such verbatim copies may or may not include a Compiled form of the Package.
      
      (3) You may apply any bug fixes, portability changes, and other modifications made available from the Copyright Holder. The resulting Package will still be considered the Standard Version, and as such will be subject to the Original License.
      
      Distribution of Modified Versions of the Package as Source
      
      (4) You may Distribute your Modified Version as Source (either gratis or for a Distributor Fee, and with or without a Compiled form of the Modified Version) provided that you clearly document how it differs from the Standard Version, including, but not limited to, documenting any non-standard features, executables, or modules, and provided that you do at least ONE of the following:
      
       
      (a)  make the Modified Version available to the Copyright Holder
      of the Standard Version, under the Original License, so that the
      Copyright Holder may include your modifications in the Standard
      Version.
      (b)  ensure that installation of your Modified Version does not
      prevent the user installing or running the Standard Version. In
      addition, the Modified Version must bear a name that is different
      from the name of the Standard Version.
      (c)  allow anyone who receives a copy of the Modified Version to
      make the Source form of the Modified Version available to others
      under
          (i)  the Original License or
          (ii)  a license that permits the licensee to freely copy,
          modify and redistribute the Modified Version using the same
          licensing terms that apply to the copy that the licensee
          received, and requires that the Source form of the Modified
          Version, and of any works derived from it, be made freely
          available in that license fees are prohibited but Distributor
          Fees are allowed.
      Distribution of Compiled Forms of the Standard Version or Modified Versions without the Source
      
      (5) You may Distribute Compiled forms of the Standard Version without the Source, provided that you include complete instructions on how to get the Source of the Standard Version. Such instructions must be valid at the time of your distribution. If these instructions, at any time while you are carrying out such distribution, become invalid, you must provide new instructions on demand or cease further distribution. If you provide valid instructions or cease distribution within thirty days after you become aware that the instructions are invalid, then you do not forfeit any of your rights under this license.
      
      (6) You may Distribute a Modified Version in Compiled form without the Source, provided that you comply with Section 4 with respect to the Source of the Modified Version.
      
      Aggregating or Linking the Package
      
      (7) You may aggregate the Package (either the Standard Version or Modified Version) with other packages and Distribute the resulting aggregation provided that you do not charge a licensing fee for the Package. Distributor Fees are permitted, and licensing fees for other components in the aggregation are permitted. The terms of this license apply to the use and Distribution of the Standard or Modified Versions as included in the aggregation.
      
      (8) You are permitted to link Modified and Standard Versions with other works, to embed the Package in a larger work of your own, or to build stand-alone binary or bytecode versions of applications that include the Package, and Distribute the result without restriction, provided the result does not expose a direct interface to the Package.
      
      Items That are Not Considered Part of a Modified Version
      
      (9) Works (including, but not limited to, modules and scripts) that merely extend or make use of the Package, do not, by themselves, cause the Package to be a Modified Version. In addition, such works are not considered parts of the Package itself, and are not subject to the terms of this license.
      
      General Provisions
      
      (10) Any use, modification, and distribution of the Standard or Modified Versions is governed by this Artistic License. By using, modifying or distributing the Package, you accept this license. Do not use, modify, or distribute the Package, if you do not accept this license.
      
      (11) If your Modified Version has been derived from a Modified Version made by someone other than you, you are nevertheless required to ensure that your Modified Version complies with the requirements of this license.
      
      (12) This license does not grant you the right to use any trademark, service mark, tradename, or logo of the Copyright Holder.
      
      (13) This license includes the non-exclusive, worldwide, free-of-charge patent license to make, have made, use, offer to sell, sell, import and otherwise transfer the Package with respect to any patent claims licensable by the Copyright Holder that are necessarily infringed by the Package. If you institute patent litigation (including a cross-claim or counterclaim) against any party alleging that the Package constitutes direct or contributory patent infringement, then this Artistic License to you shall terminate on the date that such litigation is filed.
      
      (14) Disclaimer of Warranty: THE PACKAGE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS "AS IS' AND WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES. THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT ARE DISCLAIMED TO THE EXTENT PERMITTED BY YOUR LOCAL LAW. UNLESS REQUIRED BY LAW, NO COPYRIGHT HOLDER OR CONTRIBUTOR WILL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING IN ANY WAY OUT OF THE USE OF THE PACKAGE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      
      The following additional terms shall apply to use of the npm software, the npm website, the npm repository and any other services or products offered by npm, Inc.:
      
      "Node.js" trademark Joyent, Inc. npm is not officially part of the Node.js project, and is neither owned by nor affiliated with Joyent, Inc.
      
      "npm" and "The npm Registry" are owned by npm, Inc. All rights reserved.
      
      Modules published on the npm registry are not officially endorsed by npm, Inc. or the Node.js project.
      
      Data published to the npm registry is not part of npm itself, and is the sole property of the publisher. While every effort is made to ensure accountability, there is absolutely no guarantee, warrantee, or assertion expressed or implied as to the quality, fitness for a specific purpose, or lack of malice in any given npm package. Packages downloaded through the npm registry are independently licensed and are not covered by this license.
      
      Additional policies relating to, and restrictions on use of, npm products and services are available on the npm website. All such policies and restrictions, as updated from time to time, are hereby incorporated into this license agreement. By using npm, you acknowledge your agreement to all such policies and restrictions.
      
      If you have a complaint about a package in the public npm registry, and cannot resolve it with the package owner, please contact support and explain the situation. See the npm Dispute Resolution policy for more details.
      
      Any data published to The npm Registry (including user account information) may be removed or modified at the sole discretion of the npm server administrators.
      
      "npm Logo" contributed by Mathias Pettersson and Brian Hammond, use is subject to https://docs.npmjs.com/trademark
      
      "Gubblebum Blocky" font Copyright (c) by Tjarda Koster, https://jelloween.deviantart.com included for use in the npm website and documentation, used with permission.
      
      This program uses several Node modules contained in the node_modules/ subdirectory, according to the terms of their respective licenses.`
    },
  ];
  const size = () => {
    if(window.innerWidth < 700){
        return true;
    }
    return false;
  }
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

const [iphoneSize, setIphoneSize] = useState(() => size())
  if(iphoneSize){
    return (
      <div style={{ position: 'relative' }}>
            <div className='LicensingFullContainer'>
              <div className='phoneLicensingParagraphContainer' style={{ marginLeft: '5%', marginRight: '5%', borderRadius: 25, padding: '4%', backgroundColor: '#E3E3E3' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className='arrow' onClick={toggleExpand} style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderRight: isExpanded ? '10px solid #294539' : '10px solid #294539', transform: isExpanded ? 'rotate(180deg)' : 'rotate(270deg)' }} />
                  <h1 className='LicensingTitleText railwayBold' style={{fontSize:30,  backgroundColor: isExpanded ? '#E3E3E3' : '#E3E3E3', marginLeft: 10 }}>licensing</h1>
                </div>
                <hr className='phoneLicensingLine' />
                <div style={{ display: isExpanded ? 'block' : 'none' }}>
                {textBlocks.map((block) => (
                  <div key={block.title} className='LicensingBlock'>
                    <h4>{block.title}</h4>
                    <p className='LicensingParagraph railway'>{block.text}</p>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
    );
  }
  else{
    return (
      <div className='LicensingFullContainer'> 
          <div className='LicensingTitleDiv'>
              <h1 className='LicensingTitleText railwayBold'>LICENSING</h1>
          </div>
          <hr className='LicensingLine' />
          <div className='LicensingParagraphContainer'>
              {textBlocks.map(block => (
              <div key={block.title} className='LicensingBlock'>
                <h4>{block.title}</h4>
                <p className='LicensingParagraph railway'>{block.text}</p>
              </div>
            ))}
          </div>
      </div>
    )
  }
  

}



