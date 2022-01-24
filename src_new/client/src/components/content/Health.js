import React from "react";

const Health = () => {
  return (
    <div>
      {/*health content */
      /*Symptoms Part*/}
      <div className="titleSymptom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={require("../../asset/health/Symptoms.jpg")} style={{height:"500px;"}}/>
            </div>

            <div className="col-md-6">
              <div className="panel text-left">
                <h1>Symptoms</h1>
                <br />
                <p>
                  People with COVID-19 have had a wide range of symptoms
                  reported – ranging from mild symptoms to severe illness.
                  Symptoms may appear 2-14 days after exposure to the virus. The
                  most common symptoms are:
                </p>
                <p>&diams; Fever</p>
                <p>&diams; Cough or sore throat</p>
                <p>&diams; Shortness of breath or difficulty breathing</p>
                <p>&diams; Chills</p>
                <p>&diams; Fatigue</p>
                <p>&diams; Muscle or body aches</p>
                <p>&diams; Diarrhea</p>
                <p>&diams; Headache</p>
                <p>&diams; New loss of taste or smell</p>
                <p>&diams; Congestion or runny nose</p>
                <p>&diams; Nausea or vomiting</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prevention Part*/}
      <div className="titlePrevention">
        <h1>Prevention Tips</h1>
        <p> </p>
        <p> </p>
        <img src={require("../../asset/health/prevention.png")} />
        <p> </p>        
        <p> </p>
        <p>
          The best way to prevent COVID-19 is to avoid being exposed to this
          virus. You can reduce the risk to yourself and others by:
        </p>
        <p>&diams; Wearing a mask outside home.</p>
        <p>
          &diams; Don’t touch your face, eyes, nose, or mouth when your hands
          are dirty.
        </p>
        <p>
          &diams; Wash your hands often with soap and warm water for at least 20
          seconds at a time.
        </p>
        <p>&diams; Avoid close contact with people who are sick.</p>
        <p>&diams; Stay at least 6 feet away from people.</p>
        <p>
          &diams; Cover your cough or sneeze with a tissue. Throw tissues you
          use.
        </p>
        <p>&diams; Clean and disinfect any objects touched frequently.</p>
        <p>&diams; Avoid crowds and poorly ventilated places.</p>
        <p>
          &diams; Don’t go out if you feel sick or have any cold or flu
          symptoms.
        </p>
      </div>
      
      {/* Treatments Part */}
      <div className="titleTreatment">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="panel text-left">
                <h1>Self Care Instruction by CDC</h1>
                <p>If you have possible or confirmed COVID-19:</p>
                <p>&diams; Stay home except to get medical care.</p>
                <p>
                  &diams; Monitor your symptoms carefully. If your symptoms get
                  worse, contact your healthcare provider immediately.
                </p>
                <p>
                  &diams; Get rest and stay hydrated. Take over-the-counter
                  medicines, such as acetaminophen, to help you feel better.
                </p>
                <p>
                  &diams; If you have a medical appointment, notify your
                  healthcare provider ahead of time that you have or may have
                  COVID-19.
                </p>
                <p>
                  &diams; Stay in a specific room and away from other people in
                  your home. If possible, use a separate bathroom. If you must
                  be around others, wear a mask.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="panel text-left">
                <h1>Medical Treatments Instruction by CDC</h1>
                <p>
                  &diams; Stay in touch with your doctor. Call before you get
                  medical care.
                </p>
                <p>
                  &diams; Your local health authorities may give instructions on
                  checking your symptoms and reporting information.
                </p>
                <p>
                  &diams; The Food and Drug Administration (FDA) has approved
                  one drug, remdesivir (Veklury), to treat COVID-19.
                </p>
                <p>
                  &diams; The FDA can also issue emergency use authorizations
                  (EUAs) to allow healthcare providers to use products that are
                  not yet approved, or that are approved for other uses, to
                  treat patients with COVID-19 if certain requirements are met.
                </p>
                <p>
                  &diams; Any treatments that are used for COVID-19 should be
                  taken under the care of a healthcare provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
