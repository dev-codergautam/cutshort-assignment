import React, { useEffect, useState } from "react";
import "./../assets/style.css";
import LOGO from "./../assets/images/logo.png";
import USER from "./../assets/images/user.png";
import USERS from "./../assets/images/users.png";
import DONE from "./../assets/images/done.png";
const Main = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [circles, setCircles] = useState(0);
  const progress = document.getElementById("progress");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    setCircles(circle.length);
  }, []);

  const moveStep = () => {
    setActiveStep(parseInt(activeStep + 1));
    progress.style.width = (activeStep / (circles - 1)) * 100 + "%";
  };

  return (
    <>
      <div className="container ">
        <div className="logo ">
          <img src={LOGO} alt="Logo" />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="progress-container">
              <div className="progress" id="progress"></div>
              <div className={`circle ${activeStep > 0 && "active"}`}>1</div>
              <div className={`circle ${activeStep > 1 && "active"}`}>2</div>
              <div className={`circle ${activeStep > 2 && "active"}`}>3</div>
              <div className={`circle ${activeStep > 3 && "active"}`}>4</div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7 col-12">
            {activeStep === 1 && (
              <div className="step1-content steps step-active">
                <div className="step-text">
                  <h2 className="step-title">Welcome! First things first...</h2>
                  <p className="step-subtitle">
                    You can always change from later.
                  </p>
                </div>

                <div className="step-form px-4">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Steve Jobs"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Display Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Steve"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="step2-content steps">
                <div className="step-text">
                  <h2 className="step-title">
                    Let's set up a home for all your work
                  </h2>
                  <p className="step-subtitle">
                    You can always create another workplace later.
                  </p>
                </div>

                <div className="step-form px-4">
                  <div className="form-group">
                    <label htmlFor="name">Workspace Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Eden"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Workspace URL</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">
                          www.eden.com/
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="step3-content steps">
                <div className="step-text">
                  <h2 className="step-title">
                    How are you planning to use Eden?
                  </h2>
                  <p className="step-subtitle">
                    We'll streamline your setup experience accordingly.
                  </p>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-5 col-md-5 col-12 mb-3">
                    <div className="card step-card step-card-active">
                      <div className="card-body text-left">
                        <p className="">
                          <img
                            src={USER}
                            alt="user"
                            className="step3-card-icon"
                          />
                        </p>
                        <h6>For Myself</h6>
                        <p className="step-subtitle" style={{ fontSize: 14 }}>
                          Write better. Think more clearly. stay organized.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-12 mb-3">
                    <div className="card">
                      <div className="card-body text-left">
                        <p className="">
                          <img
                            src={USERS}
                            alt="user"
                            className="step3-card-icon"
                          />
                        </p>
                        <h6>With my team</h6>
                        <p className="step-subtitle" style={{ fontSize: 14 }}>
                          Wickis, docs, talks & projects, all in one place.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeStep === 4 && (
              <div className="step4-content steps">
                <img src={DONE} alt="Congratulations" />
                <h2>Congratulations, Eren</h2>
                <p className="step-subtitle" style={{ fontSize: 15 }}>
                  You have completed onboarding, you can start using the Eden!
                </p>
                <button className="btn btn-block btn-workspace">
                  Launch Eden
                </button>
              </div>
            )}
          </div>
        </div>
        {activeStep !== circles && (
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7 col-12 px-4">
              <button
                className="btn btn-block btn-workspace next"
                id="next"
                onClick={moveStep}
              >
                Create Workspace
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
