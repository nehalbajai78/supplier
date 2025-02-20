import React from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'



function TermsCondition(props) {
    const navigate = useNavigate();
    const location = useLocation
 


  const hancleClick =() =>{
    localStorage.setItem("termsAccepted", "true"); 
    navigate("/signUpYesForm", { state: { checked: true } }); 
  }

  const handleDis =() =>{
    localStorage.removeItem("termsAccepted"); 
    navigate("/signUpYesForm", { state: { checked: false } }); 
  }
  return (
    <>
     <main id="wrapper">
  {/*Content*/}
  <section className="flex-container pl-400">
    <section className="pl-50 pr-50 left-section width-400 minH-100vh bg-white">
     
      <div className="stepper  " style={{marginTop:"225px"}}>
      
       <p className='fs-30' >Do you agree with our <br /> <br />
        <span className='' style={{color:"#0fb1b4 "}}> Terms & Conditions?</span></p>
      </div>
    </section>
    <section className="width-full pl-80 pt-80 pr-80 bg-white ">
      {/*Header*/}
   <div className='terms-wrapper'>
    <span className='text-align'>
   <b >TERMS AND CONDITIONS</b> 
    </span>
  <br />
  <br />
<p>These General Terms are between Bharti Airtel Limited (“Airtel”) and you, the authorize representative of your organisation (" Partner") ,</p>

<p>(Airtel and Partner, collectively referred to as “Parties”, and individually as “Party”, and includes their respective successors and permitted assigns)
</p>
<p>Airtel is in the business of providing telecom and other services. Airtel seeks to engage Partner for providing the Deliverables. Partner represents it is adequately experienced, qualified, equipped, organized and financed to provide the Deliverables, and agrees to provide them to Airtel. Relying on the representations, warranties and covenants of Partner, Airtel has agreed to appoint Partner to provide the Deliverables, on a non-exclusive basis, on the terms and conditions set out here.
</p>
<p>1.Interpretation and Priority</p>

<p>1.1 This Agreement consists of the following: (a) these General Terms, (b) the Ordering Document(s) signed by the Parties, referencing and incorporating these General Terms, and (c) the Schedules attached to these General Terms and the Ordering Document.</p>

<p>1.2 The following Schedules will be attached along with these General Terms: (a) Schedule GT-1: Bharti Information Security Policy, and (b) Schedule GT-2: Bharti Code of Conduct for Business Associates. Transaction specific Schedules will be attached to the Ordering Document(s).</p>

<p>1.3 Interpretation. In this Agreement, unless specified otherwise: (a) “include” means “including without limitation”, (b) singular includes plural, and vice versa, (c) reference to one gender includes the other, (d) references to any time of day are to Indian Standard Time, (e) reference to a statute or a statutory provision include its amendments, modifications, re-enactments and consolidations, and (f) the Parties have negotiated this Agreement in good faith and have jointly drafted the Agreement, and accordingly, the rule of construction that an agreement should be interpreted against the party responsible for drafting it will not apply to this Agreement.
</p>

<p>1.4 Priority. If a conflict arises among the terms of the various documents in this Agreement, (a) to the extent the conflicting provisions may be reasonably interpreted in a manner consistent with each other, such consistent interpretation will apply, (b) provisions in the General Terms or the Ordering Document will override those in any Schedules attached to them respectively, (c) in relation to each Ordering Document, the terms of that Ordering Document will override such terms of these General Terms that are referenced in the Ordering Document and declared to be overridden, and (d) this Agreement will override any standard documentation provided by Partner. Additional or conflicting terms contained in any Purchase Order, standardized form or correspondence shall be overridden by the Agreement
</p>

<p>2. Ordering Document</p>


<p>The Parties may enter into several Ordering Documents incorporating these General Terms. Each Ordering Document and its Schedules (read along with these General Terms) will contain terms and conditions specific to the transaction, including a tenure and additional representations, warranties and obligations.
</p>
<p>3. Purchase Orders</p>

<p>3.1 For ordering the Deliverables under an Ordering Document, Airtel will issue Purchase Order(s) to Partner. The terms of the Agreement will govern such Purchase Order(s) as if incorporated.
</p>

<p>3.2 Airtel will be under no obligation to issue Purchase Orders for procuring any minimum quantity of Deliverables. Airtel’s obligation to procure the Deliverables will arise only after Airtel issues and Partner accepts a Purchase Order.</p>

<p>3.3 Partner shall confirm its acceptance of the Purchase Order in writing within two (2) Business Days of the Purchase Order date, or such Purchase Order will be deemed accepted.
</p>
<p>4. Terms of Delivery</p>

<p>4.1 Partner will provide the Deliverables in accordance with this Agreement. If applicable, Partner will also provide all necessary Documentation with the Deliverables.</p>

<p>4.2 Time is of the essence of this Agreement. Partner will comply with all delivery schedules and timelines agreed under the Ordering Document.</p>

<p>4.3 If required by Airtel, Partner will use commercially reasonable efforts to coordinate and cooperate with other vendors and service providers of Airtel while providing the Deliverables.
</p>

<p>4.4 Compliance</p>
<p>(a) Partner shall ensure that the Deliverables comply at all times with the BISP.</p>

<p>
(b) Partner will comply with all Applicable Laws while performing its obligations under this Agreement. Partner, throughout the tenure of the relevant Ordering Document and at its own cost, will obtain, maintain and comply with all Applicable Clearances necessary for it to perform its obligations under this Agreement.
</p>
<p>4.5 Partner’s Contract Manager:</p>

<p>Partner will appoint and designate one Contract Manager. Partner may replace the Contract Manager with five (5) days’ written notice to Airtel. The Contract Manager will be authorized to bind Partner by his acts for all purposes of this Agreement. Any notices, approval and consents given to or received from the Contract Manager will have the same effect as if given to or received from Partner.</p>


<p>4.6 Subcontractors:</p>

<p>Unless specified otherwise in the Ordering Document, Partner may use subcontractors in the performance of its obligations under this Agreement, provided that (a) Partner will ensure that the subcontractors comply with all of Partner’s obligations under this Agreement, and (b) Partner will always remain primarily and fully responsible for all acts, defaults and omissions of such subcontractors. Engagement of subcontractors by Partner will not create any contractual relationship between Airtel and the subcontractor, nor will it relieve Partner of its obligations or liability under this Agreement. If Airtel reasonably requires Partner to remove a subcontractor, Partner will comply with such instructions. Also, Partner will not engage any subcontractors that are prohibited by Airtel.
</p>

<p>4.7 Risk purchase:</p>

<p>If Partner (1) fails to provide the Deliverables in accordance with the agreed delivery schedule; or (2) provides defective Deliverables or provides Deliverables that are not in accordance with the Specifications; or (3) fails to provide the Deliverables in breach of the Agreement; then Airtel, without prejudice to its rights and remedies, reserves the right to procure the same, similar or equivalent Deliverables from alternate sources at Partner’s risk and cost.</p>

<p>5. Price and Payment Terms</p>

<p>5.1 Price:</p>

<p>In consideration of the Deliverables, Airtel will pay to Partner the Price in accordance with the payment terms specified in the Ordering Document. Unless specified otherwise in the Ordering Document, the currency of the Price will be Indian Rupees (INR).</p>

<p>5.2 Taxes:</p>

<p>Each Party will be liable for taxes based on its income. Airtel will be entitled to withhold from amounts payable to Partner, taxes on income in accordance with Applicable Laws, and will remit the same to the applicable Government Authority. Airtel will provide Partner a certificate evidencing such payment.
</p>
<p>5.3 Invoicing:</p>

<p>Partner will raise correct and commercially acceptable invoices within the deadlines stipulated in the Purchase Order, along with relevant supporting documents. Partner shall ensure that the invoices are compliant with Applicable laws and any other tax related laws.
</p>
<p>5.4</p>

<p>Airtel will notify in writing any discrepancy in an invoice within a period of 30 days of receipt of such invoice. Partner will raise a revised invoice for the undisputed amounts and Airtel will pay the same in accordance with this Agreement. Payment disputes will be resolved through the Governance Framework. If no Governance Framework is specified, the dispute will be decided in accordance with Clause 15.</p>

<p>6. Most Favoured Customer</p>

<p>6.1 If Partner offers to any third party any deliverables that are the same as or substantially similar to the Deliverables at a price lower than the Price (“Lower Price”), Partner shall inform Airtel promptly (but no later than 7 days) after such offer, and the Price will be equitably adjusted to provide Airtel the benefit of the Lower Price. Such Lower Price will apply to all Deliverables that Partner supplies after it has offered the Lower Price to a third party (“Lower Price Offer Date”).
</p>
 <p>6.2 If Partner does not offer the Lower Price to Airtel for the Deliverables or does not notify Airtel of such Lower Price in accordance with Clause 6.1, and Airtel has paid the original Price for Deliverables supplied to it after the Lower Price Offer Date, Airtel may set off or deduct the differential from any payment due to Partner under this Agreement or any other agreement, or may recover such sums from Partner as a debt due to Airtel.
 </p>
<p>7. Representation and Warranties</p>

<p>7.1 Mutual</p>

<p>Each Party represents to the other Party that (a) it is duly incorporated or established under the laws of its jurisdiction and has all requisite power and authority to own and operate its business, (b) it has not suffered an Insolvency Event, (c) it has the full legal capacity and power to enter into, exercise its rights under and perform its obligations under this Agreement, and the execution, delivery, and performance of this Agreement have been authorized by all necessary corporate and organizational actions, and (d) it has duly executed this Agreement, which forms a legal, valid and binding obligation, enforceable in accordance with its terms.</p>

<p>7.2 Partner’s</p>

<p>Partner represents to Airtel that (a) it is not subject to any obligation that may prevent it from entering into this Agreement, (b) no claim or action against Partner is threatened or pending before any arbitrator or Government Authority, and no order, judgment, injunction, award, or settlement has been issued, pending or outstanding, relating to Partner entering into or performing its obligations under this Agreement, (c) Partner owns, or has all necessary rights in, all IPRs in the Deliverables, free of all liens, and Airtel will not, at any time, require any additional license or consent from third parties for use of the Deliverables, and (d) no actual or threatened claim or action exists against Partner alleging infringement of third party IPRs in relation to the Deliverables such that it will restrict or prohibit (i) Airtel’s use of the Deliverables or (ii) performance of Partner’s obligations under this Agreement.</p>

<p>7.3 Deliverables warranty</p>

<p>Partner warrants that:</p>

<p>(a) it will, and will ensure that its Representatives, perform the obligations and provide the Deliverables in accordance with this Agreement and Good Industry Practices.
</p>
<p>(b) the Deliverables will materially conform to the Specifications at all times.</p>

<p>(c) Products comprised in the Deliverables shall be free from defects in materials and workmanship.</p>

<p>8. Term and Termination</p>

<p>8. Term and Termination</p>
 <p>8.2 Without prejudice to other provisions of the Agreement:</p>

<p>(a) Airtel may terminate this Agreement or an Ordering Document, in whole or in part, by providing a written notice to Partner:</p>

<p>
(i) Effective immediately (or if Airtel determines in its sole discretion, with the opportunity to remedy the breach) if Partner commits a material breach (which in the case of Partner, may include but will not be limited to failure to comply with warranties, failure to meet timelines specified herein, failure to meet Specifications) of any provisions contained in this Agreement;</p>

<p>(ii) With immediate effect, if Partner breaches or has failed to comply with any of its representations or warranties;</p>

<p>(iii) With immediate effect, if Partner suffers an Insolvency Event; or</p>

<p>(iv) With immediate effect, if Partner suffers a change of Control, or the whole or substantial part of Partner's business is transferred to a third party, as a consequence of which Partner is or is likely to become (in the reasonable opinion of Airtel) unable to perform its obligations under the Agreement.</p>

   </div>
   <div className="mt-50 text-right mb-40">
    <a href=""  style={{color:"#0fb1b4 "}} className='mr-50 inline-block' onClick={handleDis}>
        CANCEL, I DISAGREE
    </a>
    <button
              className="btn btn-lg btn-red-thin-stroked color-red fs-16"
              onClick={hancleClick}
            >
             YES , I AGREE
            </button>
   </div>
    </section>
  </section>
  {/*Content*/}
</main>
    
    
    </>
  )
}

export default TermsCondition