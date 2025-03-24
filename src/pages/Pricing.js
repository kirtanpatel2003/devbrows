import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$499",
      features: [
        { label: "Website Maintenance", value: "Small Fixes + Payment Gateway Maintenance" },
        { label: "Ongoing SEO", value: "On-page Updates" },
        { label: "Ad Budget (Included)", value: "$150" },
        { label: "Ad Strategy", value: "Setup & Basic Ads" },
      ],
      gradient: "linear-gradient(135deg, #2E2E2E, #3A3A3A)",
    },
    {
      name: "Standard Plan",
      price: "$699",
      features: [
        { label: "Website Maintenance", value: "Moderate Fixes + Payment Gateway Optimization" },
        { label: "Ongoing SEO", value: "Keyword Optimization" },
        { label: "Ad Budget (Included)", value: "$250" },
        { label: "Ad Strategy", value: "Retargeting" },
      ],
      gradient: "linear-gradient(135deg, #4B0082, #8A2BE2)",
      bestValue: true, // Highlight this plan
    },
    {
      name: "Premium Plan",
      price: "$899",
      features: [
        { label: "Website Maintenance", value: "Major Fixes + Advanced Payment System Support" },
        { label: "Ongoing SEO", value: "Full SEO Growth Plan" },
        { label: "Ad Budget (Included)", value: "$350" },
        { label: "Ad Strategy", value: "Full Strategy & A/B Testing" },
      ],
      gradient: "linear-gradient(135deg, #FF0000, #FF6347)",
    },
  ];

  return (
    <div className="pricing-container">
      <h2>Choose the plan that’s right for you</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.bestValue ? "highlight" : ""}`}
            style={{ background: plan.gradient }}
          >
            {plan.bestValue && <div className="best-value-badge">Best Value</div>}
            <h3>{plan.name}</h3>
            <h4>{plan.price} <span>/month</span></h4>

            <div className="feature-list">
              {plan.features.map((feature, i) => (
                <div key={i} className="feature">
                  <span className="feature-label">{feature.label}</span>
                  <span className="feature-value">{feature.value}</span>
                  {i !== plan.features.length - 1 && <hr />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
