import Footer from "@/app/components/layout/Footer";
import Navbar from "@/app/components/layout/Navbar";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex-1 mt-[128px] mb-[64px] px-[8px] font-poppins flex flex-col gap-[64px] items-center">
        <p className="pageTitle text-[24px] text-onBackground">
          FAQ: Membership, Ethics, and Loan Rules
        </p>
        <div className="faqContents flex flex-col gap-[64px]">
          <div className="membershipEthics flex flex-col gap-[24px]">
            <p className="title text-[24px] text-onBackground font-poppins">
              Membership Ethics
            </p>
            <Accordion type="single" collapsible className="font-roboto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="lg:text-[20px]">
                  Who can become a member of the society?
                </AccordionTrigger>
                <AccordionContent>
                  Membership is open to reliable and trustworthy individuals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="lg:text-[20px]">
                  What can lead to a member's expulsion?
                </AccordionTrigger>
                <AccordionContent>
                  <p>A member may be expelled for:</p>
                  <ol className="list-disc list-inside space-y-2 text-outline">
                    <li>
                      Convictions for theft, fraud, rape, corruption, or dealing
                      in stolen goods.
                    </li>
                    <li>Sowing discord or causing division among members.</li>
                    <li>
                      Financial unfaithfulness publicly disclaimed by their
                      employer.
                    </li>
                    <li>Forging signatures of co-operative staff.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="lg:text-[20px]">
                  Can I withdraw my deposits at any time?
                </AccordionTrigger>
                <AccordionContent>
                  Deposits are only withdrawable three months after registration
                  as a member.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="lg:text-[20px]">
                  How long does it take to process withdrawals?
                </AccordionTrigger>
                <AccordionContent>
                  Withdrawals are processed three working days after
                  application.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="membershipEthics flex flex-col gap-[24px]">
            <p className="title text-[24px] text-onBackground font-poppins">
              Loan Rules
            </p>
            <Accordion type="single" collapsible className="font-roboto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="lg:text-[20px]">
                  Who qualifies to apply for a loan?
                </AccordionTrigger>
                <AccordionContent>
                  Members qualify after six months of consistent savings
                  following registration.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="lg:text-[20px]">
                  What is the maximum loan amount I can apply for?
                </AccordionTrigger>
                <AccordionContent>
                  Members can borrow up to 300% of their account balance at the
                  time of application.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="lg:text-[20px]">
                  Are there any account balance requirements for members?
                </AccordionTrigger>
                <AccordionContent>
                  Members must maintain a minimum account balance of N1,000,
                  even during withdrawals or account closures.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="lg:text-[20px]">
                  What happens if a member defaults on a loan?
                </AccordionTrigger>
                <AccordionContent>
                  If a member defaults, their surety(ies) becomes liable for
                  repayment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="lg:text-[20px]">
                  What are the additional benefits for members?
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="list-disc list-inside space-y-2 text-outline">
                    <li>
                      Attendance at meetings strengthens your position in the
                      co-operative.
                    </li>
                    <li>
                      Members who introduce new members may receive rewards.
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="lg:text-[20px]">
                  Can I clarify any unclear loan terms?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, members are free to seek clearance on any unclear issues.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="callout bg-tertiary text-onPrimary rounded-[20px] p-[10px] text-[16px] lg:text-[24px] lg:text-center font-roboto lg:w-[741px] ">
            <p>
              If you have additional questions, please contact the co-operative
              directly for assistance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
