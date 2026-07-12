"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItem {
  id: string;
  number: string;
  title: string;
  content: string;
}
const items = [
  {
    id: "ideas",
    number: "01",
    title: "Ideas First",
    content:
      "Every project starts with curiosity. Whether it's solving a real-world problem, exploring a new technology, or validating a crazy idea, the goal is to learn by building.",
  },
  {
    id: "prototype",
    number: "02",
    title: "Rapid Prototyping",
    content:
      "I quickly turn concepts into working prototypes using modern technologies like Next.js, React, TypeScript, AI models, and cloud services. Fast feedback beats perfect planning.",
  },
  {
    id: "collaboration",
    number: "03",
    title: "Open Collaboration",
    content:
      "The Lab is open to developers, designers, researchers, and founders. If you're passionate about creating impactful software, let's collaborate, share ideas, and build together.",
  },
  {
    id: "ship",
    number: "04",
    title: "Ship & Iterate",
    content:
      "Great products aren't built in one release. Every experiment is deployed, tested with real users, improved continuously, and documented so others can learn from the journey.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>(["discovery"]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center px-4 py-8 w-full">
      <div className="w-full max-w-lg">
        <Accordion
          value={openItems}
          onValueChange={setOpenItems}
          className="w-full"
        >
          {items.map((item) => {
            const isActive = openItems.includes(item.id);
            const isHovered = hoveredId === item.id;

            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="relative border-none not-last:border-none"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <AccordionTrigger className="hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden px-1 py-5 cursor-pointer">
                  <div className="flex items-center gap-6 w-full">
                    {/* Number bubble */}
                    <div className="relative flex h-10 w-10 items-center justify-center shrink-0">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-foreground"
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : isHovered ? 0.85 : 0,
                          opacity: isActive ? 1 : isHovered ? 0.1 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                      <motion.span
                        className="relative z-10 text-sm font-medium tracking-wide"
                        animate={{
                          color: isActive
                            ? "var(--color-primary-foreground)"
                            : "var(--color-muted-foreground)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.number}
                      </motion.span>
                    </div>

                    {/* Title */}
                    <motion.span
                      className="text-base font-medium"
                      animate={{
                        x: isActive || isHovered ? 4 : 0,
                        color:
                          isActive || isHovered
                            ? "var(--color-foreground)"
                            : "var(--color-muted-foreground)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      {item.title}
                    </motion.span>

                    {/* Plus / X icon */}
                    <motion.div
                      className="ml-auto flex h-8 w-8 items-center justify-center shrink-0"
                      animate={{
                        rotate: isActive ? 45 : 0,
                        opacity: isActive || isHovered ? 1 : 0.4,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Plus className="size-4 text-foreground" />
                    </motion.div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pl-16 pr-4 pb-6 text-sm text-muted-foreground leading-relaxed">
                  {item.content}
                </AccordionContent>

                {/* Static border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

                {/* Animated active/hover line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px origin-left bg-foreground"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
