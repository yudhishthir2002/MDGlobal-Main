import { motion } from "framer-motion";

const cardData = [
  {
    title: "Presence in UAE & India",
    content:
      "Our dual presence allows us to source talent locally and internationally, giving your business access to a wider, more diverse talent pool.",
    position: "top-left",
  },
  {
    title: "Industry-Specific Expertise",
    content:
      "We understand the hiring needs and challenges unique to different sectors. Our consultants bring deep domain knowledge to every engagement.",
    position: "top-right",
  },
  {
    title: "Fast & Flexible Hiring Solutions",
    content:
      "We respond quickly to your requirements with scalable solutions — whether you're hiring for a single role or a full team.",
    position: "bottom-left",
  },
  {
    title: "Human-Centered Approach",
    content:
      "We take the time to understand your company culture and values to ensure we recommend candidates who truly belong.",
    position: "bottom-right",
  },
  {
    title: "Compliance-Driven & Transparent",
    content:
      "We adhere strictly to local labor laws and international standards, ensuring ethical, compliant, and transparent hiring processes.",
    position: "center",
  },
];

const positionStyles = {
  "top-left": "lg:absolute lg:top-10 lg:left-10",
  "top-right": "lg:absolute lg:top-10 lg:right-10",
  "bottom-left": "lg:absolute lg:bottom-10 lg:left-10",
  "bottom-right": "lg:absolute lg:bottom-10 lg:right-10",
  center: "lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2",
};

const cardBaseStyles =
  "bg-white/90 backdrop-blur-md shadow-xl p-6 rounded-xl w-full max-w-[280px] min-h-[200px] flex flex-col justify-start border border-gray-200 hover:shadow-2xl transition-all duration-300";

export default function FiveCardLayout() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-12 flex flex-col items-center gap-6 lg:gap-0 lg:block">
      {cardData.map((card, index) => (
        <motion.div
          key={card.title}
          className={`${cardBaseStyles} ${positionStyles[card.position]}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * (index + 1) }}
        >
          <h3 className="text-base font-semibold text-gray-900 mb-2">{card.title}</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{card.content}</p>
        </motion.div>
      ))}
    </div>
  );
}
