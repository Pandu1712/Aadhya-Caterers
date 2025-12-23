import { FileText } from "lucide-react";

const termsData = [
  "Additional manpower will be provided at an extra cost if the venue is on the first floor or above, for carrying food items. This must be informed in advance.",
  "Transportation is included in the package.",
  "The total package includes disposables, cutlery, and serving boys.",
  "Live food preparation will be charged extra depending on items (e.g., Rumali Roti, Poori, Butter Naan, Mirchi Bajji, Bobbatlu, Boorelu, etc.).",
  "We deliberately provide 10% extra food. If consumption exceeds the allocated amount, an additional charge per person will apply.",
  "Orders will be confirmed only after providing the event date, number of guests, meal preference (breakfast/lunch/dinner), and complete address with landmarks.",
  "The contact person’s primary phone number along with an alternative number must be provided in advance.",
  "The host is responsible for arranging tables, tablecloths, dustbins, and related infrastructure.",
  "There is no additional cost for buffet service. However, Aritaku Bhojanam will incur extra charges.",
  "A minimum of 25% advance payment is required at the time of booking confirmation. The remaining balance must be paid after the event.",
  "The package and terms apply for a minimum guest count of 55 (not less than 55).",
  "For guest size of 30 or below, a fixed charge of ₹10,000 applies (inclusive of all) – no negotiation.",
  "For guest size between 40 and 50, a fixed charge of ₹300 per person applies.",
];

const TermsAndConditions = () => {
  return (
    <section className="bg-[#F6F4FB] py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#3C1285] text-white">
            <FileText className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3C1285]">
            Terms & Conditions
          </h2>

          <p className="mt-2 max-w-2xl mx-auto text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
            Please review the following terms carefully before confirming your catering order.
          </p>
        </div>

        {/* CONTENT CARD */}
        <div className="rounded-2xl sm:rounded-3xl bg-white shadow-md sm:shadow-lg p-4 sm:p-6 lg:p-8">
          <ul className="space-y-4 sm:space-y-5">
            {termsData.map((term, index) => (
              <li
                key={index}
                className="flex gap-3 sm:gap-4 items-start"
              >
                {/* NUMBER */}
                <span className="flex-shrink-0 mt-0.5 sm:mt-1 h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#3C1285] text-white flex items-center justify-center text-xs sm:text-sm font-semibold">
                  {index + 1}
                </span>

                {/* TEXT */}
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                  {term}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
