import { Banknote, FileSearch, Handshake, MessagesSquare } from "lucide-react";

// The enquiry process, shown on the homepage and the How it works page. Keep both in step by editing here.
export const processSteps = [
  {
    icon: MessagesSquare,
    title: "Tell us the plan",
    copy: "What the funding is for, how trading has been and when you need it by. Five minutes, no paperwork.",
  },
  {
    icon: FileSearch,
    title: "We do the legwork",
    copy: "We work out which lenders are worth approaching for a business like yours, and skip the ones that are not.",
  },
  {
    icon: Handshake,
    title: "We lay out the options",
    copy: "Where there are workable routes, we explain how they differ in plain English, including the trade-offs and anything that deserves a second look.",
  },
  {
    icon: Banknote,
    title: "You decide",
    copy: "Your call, entirely. There is no obligation to proceed, and we would rather you walked away than took something that does not fit.",
  },
] as const;
