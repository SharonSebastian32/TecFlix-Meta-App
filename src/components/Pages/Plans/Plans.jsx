import React from "react";
import "./Plans.css";

const plansData = [
  {
    id: 1,
    name: "Basic Plan",
    price: 29,
    features: [
      "Unlimited Access to Courses",
      "Customer Support",
      "Personal Mentor",
      "Standard Options",
      "5 Classes per Week",
    ],
    theme: "green",
  },
  {
    id: 2,
    name: "Standard Plan",
    price: 49,
    features: [
      "All Basic Plan Features",
      "Personal Mentor",
      "Standard Options",
      "10 Classes per Week",
      "Offline Mode",
    ],
    theme: "blue",
  },
  {
    id: 3,
    name: "Premium Plan",
    price: 89,
    features: [
      "All Standard Plan Features",
      "Premium Options",
      "Unlimited Classes",
      "Offline Mode",
      "Exclusive Content",
    ],
    theme: "grey",
  },
];

const Plans = () => {
  return (
    <>
      {" "}
      <div className="container">
        <div className="pricing_top">
          <h2 className="section_title">Premium Pricing Plans</h2>
          <p>
            Choose the perfect plan to elevate your learning experience and
            unlock your full potential.
          </p>
        </div>

        <div className="pricing_wrapper">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className="pricing_item"
              role="article"
              aria-label={`${plan.name} Pricing`}
            >
              <div
                className="pricing_card-top"
                style={{ backgroundColor: `${plan.theme}` }}
              >
                <h3 className="plan_name">{plan.name}</h3>
                <p className="pricing_title">
                  ${plan.price}
                  <span>/month</span>
                </p>
              </div>
              <div className="services">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <i
                        className="ri-checkbox-circle-line"
                        aria-hidden="true"
                      ></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="reg-btn" style={{backgroundColor:`${plan.theme}`}} >Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Plans;
