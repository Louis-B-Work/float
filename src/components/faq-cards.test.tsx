import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { FaqCards } from "./faq-cards";

describe("FaqCards", () => {
  it("gives every answer a unique ID and matching control across instances", () => {
    const faqs = [
      { question: "First question?", answer: "First answer." },
      { question: "Second question?", answer: "Second answer." },
    ];
    const html = renderToStaticMarkup(
      <>
        <FaqCards faqs={faqs} />
        <FaqCards faqs={faqs} />
      </>,
    );
    const ids = Array.from(html.matchAll(/\bid="([^"]+)"/g), (match) => match[1]);
    const controls = Array.from(html.matchAll(/aria-controls="([^"]+)"/g), (match) => match[1]);

    expect(ids).toHaveLength(4);
    expect(new Set(ids).size).toBe(4);
    expect(controls).toEqual(ids);
  });
});
