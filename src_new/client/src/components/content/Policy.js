import React from 'react';
// var __html = require('./policy.html');
// var template = { __html: __html };
const Policy = () => {
    return (
        <div className="policy-body">
            <div className="policy">
                <h1 className="text-center">Covid-19 Policy</h1>
                <div className="policy-item">
                    <h2 className="text-primary">State Social Distancing Actions</h2>
                    <p>On March 13, 2020, President Trump declared a state of emergency over the coronavirus in an effort to enhance the federal government’s response to the pandemic. At that time, a number of states had already declared some type of emergency, and by March 16, 2020, every state had made an emergency declaration, with most taking the form of a State of Emergency or a Public Health Emergency. Such emergency declarations allow governors to exercise emergency powers that may include activating state emergency personnel and funds, supporting the needs of local governments, protecting consumers against price gouging, and adjusting regulations to maximize access to health care. States, especially those hardest hit by the outbreak, took additional actions to slow the spread of the virus. These social distancing measures included mandatory stay at home orders, closures of non-essential businesses, bans on large gatherings, school closures, and limits on bars and restaurants and other public places. With regard to the actions included in this resource, the map and table include only mandates ordered by a state’s executive branch (not state legislature). The authority of governors to issue such mandates may vary by state.</p>
                    <a href={"https://www.kff.org/coronavirus-covid-19/issue-brief/state-data-and-policy-actions-to-address-coronavirus/"} >Reference source: KFF-State Data and Policy Actions to Address Coronavirus</a>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={require('../../asset/policy/policy01.jpg')} style={{ width: "100%" }} alt={""} />
                                <h2 style={{ color: "#fff", marginTop: "10px" }}>STOP THE VIRUS</h2>
                            </div>
                            <div className="flip-card-back">
                                <img src={require('../../asset/policy/policy01_graph.png')} style={{ width: "100%" }} alt={""} />
                                <p style={{ textAlign: "left", padding: "10px" }}>Since imposing social distancing requirements, some states very quickly rolled back measures, while others reopened more cautiously.  As COVID-19 cases surged this summer and continue to increase in some areas, some states have reimposed certain restrictions, particularly limits on large gatherings and bars and restaurants as well as travel restrictions. These actions to roll back or reimpose social distancing requirements will appear in the map and table when they take effect, which may occur several days after they are announced.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="policy-item">
                    <h2 className="text-primary">State COVID-19 Health Policy Actions</h2>
                    <p>With enactment of the Families First Coronavirus Response Act on March 18, 2020, the federal government took action to ensure access to COVID-19 testing. The legislation requires Medicare, Medicaid, all group health plans, and individual health insurance policies to cover testing and associated visits related to the diagnosis of COVID-19 with no cost sharing and prohibits plans from imposing prior authorization requirements on these services during the federally-declared emergency period. In addition, the new law gives states the option to provide Medicaid coverage of COVID-19 testing for uninsured residents with 100% federal financing.</p>
                    <a href={"https://www.kff.org/coronavirus-covid-19/issue-brief/state-data-and-policy-actions-to-address-coronavirus/"} >Reference source: KFF-State Data and Policy Actions to Address Coronavirus</a>
                    <div className="policy-content">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={require('../../asset/policy/policy2.jpg')} style={{ width: "100%" }} alt={""} />
                                    <h2 style={{ color: "#fff", marginTop: "10px" }}>PROTECT YOURSELF AND FAMILY</h2>
                                </div>
                                <div className="flip-card-back">
                                    <img src={require('../../asset/policy/policy2_graph.png')} style={{ width: "100%" }} alt={""} />
                                    <p style={{ textAlign: "left", padding: "10px" }}>Finally, while the new federal law creates a federal emergency paid sick leave program through December 2020, a number of states have enacted mandatory sick leave policies that will fill in gaps in the new federal emergency leave, while others are proposing to adopt these policies in the wake of the coronavirus outbreak.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="policy-item">
                    <h2 className="text-primary"> Newly Government Policy Actions</h2>
                    <h5>Get information from federal agencies on how they're responding to the coronavirus pandemic. </h5>
                    <a href={"https://www.usa.gov/coronavirus"} >Reference source: KFF-State Data and Policy Actions to Address Coronavirus</a>
                    <div className="container policy-row mt-2">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 item">
                                <div className="card item-card card-block">
                                    <img src={require('../../asset/policy/a1.png')} alt={""} />
                                    <h5 className="card-title  mt-3 mb-3">Health and Safety</h5>
                                    <p className="card-text">Administration for Children and Families has program information for children, families, and communities.</p>
                                    <a href={"https://www.acf.hhs.gov/coronavirus"} >Learn more</a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 item">
                                <div className="card item-card card-block">
                                    <img src={require('../../asset/policy/a2.png')} alt={""} />
                                    <h5 className="card-title  mt-3 mb-3">Health and Safety</h5>
                                    <p className="card-text">Administration for Community Living offers information for older adults, and people with disabilities.</p>
                                    <a href={"https://acl.gov/COVID-19"} >Learn more</a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 item">
                                <div className="card item-card card-block">
                                    <img src={require('../../asset/policy/a3.png')} alt={""} />
                                    <h5 className="card-title  mt-3 mb-3">Travel and Immigration</h5>
                                    <p className="card-text">Customs and Border Patrol issues travel and trade advisories.</p>
                                    <a href={"https://www.cbp.gov/newsroom/coronavirus"} >Learn more</a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 item">
                                <div className="card item-card card-block">
                                    <img src={require('../../asset/policy/a2.png')} alt={""} />
                                    <h5 className="card-title  mt-3 mb-3">Money and Taxes</h5>
                                    <p className="card-text">Consumer Financial Protection Bureau has advice for managing the personal financial impact of coronavirus</p>
                                    <a href={"https://acl.gov/COVID-19"} >Learn more</a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 item">
                                <div className="card item-card card-block">
                                    <img src={require('../../asset/policy/a5.png')} alt={""} />
                                    <h5 className="card-title  mt-3 mb-3">Education</h5>
                                    <p className="card-text">Federal Student Aid has information for students, borrowers, and parents.</p>
                                    <a href={"https://studentaid.gov/announcements-events/coronavirus"} >Learn more</a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 item">
                                <div className="card item-card card-block">
                                    <img src={require('../../asset/policy/a6.png')} alt={""} />
                                    <h5 className="card-title  mt-3 mb-3">Scams and Fraud</h5>
                                    <p className="card-text">Department of Health and Human Services warns about Medicare and COVID-19 testing and treatment scams.</p>
                                    <a href={"https://oig.hhs.gov/coronavirus/"} >Learn more</a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 item">
                                <div className="card item-card card-block">
                                    <img src={require('../../asset/policy/a7.png')} alt={""} />
                                    <h5 className="card-title  mt-3 mb-3">Benefits and Grants</h5>
                                    <p className="card-text">Appalachian Regional Commission resources and support for Appalachia's communities.</p>
                                    <a href={"https://www.arc.gov/coronavirus/"} >Learn more</a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 item">
                                <div className="card item-card card-block">
                                    <img src={require('../../asset/policy/a8.png')} alt={""} />
                                    <h5 className="card-title  mt-3 mb-3">Courts</h5>
                                    <p className="card-text">Department of Justice Immigration Courts Operation Status.</p>
                                    <a href={"https://www.justice.gov/eoir-operational-status#operational_status"} >Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default Policy;