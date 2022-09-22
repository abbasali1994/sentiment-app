import React from "react";
import FAQs from "./FAQs";
import { Header } from "./Header";
import aos from "aos";
import "aos/dist/aos.css";

aos.init();

const FAQSection = () => {
  const faqs = [
    {
      question: "Is the Sentiment Protocol Audited ?",
      answer: "Yes, we have Audits from Arbitrary Execution and Sherlock.",
    },
    {
      question: "How does sentiment allow borrowers to get access to leverage?",
      answer:
        "Borrowers are able to open “Accounts” that allow them to post some collateral and get access to capital via sentiment’s lending pools. Borrowers have increased borrow capacity and can borrow 5x the value of their collateral.",
    },
    {
      question: "Why do we need Sentiment in the first place?",
      answer: "Yes, we have Audits from Arbitrary Execution and Sherlock.",
    },
    {
      question: "Is Sentiment a stable coin?",
      answer: "Yes, we have Audits from Arbitrary Execution and Sherlock.",
    },
  ];

  return (
    <div className="mt-[130px] flex flex-row justify-between">
      <div data-aos="fade-right">
        <Header header="FAQ" position="blank" />
        <button className="h-[48px] w-[185px] border-[1px] border-white text-white rounded-[8px] mt-[15px] text-[16px] font-[700]">
          Documentation
        </button>
      </div>
      <div className="w-[820px]">
        {faqs.map(({ question, answer }, index) => (
          <FAQs question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
