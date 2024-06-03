"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { TextDescriptions } from "./text-descriptions";
import { p, h1 } from "../fonts/fonts.ts";
import { TiArrowLoop, TiArrowMaximise } from "react-icons/ti";

const borderStyles = "border-2";

const Card = ({
  url,
  text,
  title,
  onMaximize,
}: {
  url: string;
  text: string;
  title: string;
  isMaximized: boolean;
  onMaximize: () => void;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const Section = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className={`border-2 h-full flex flex-col p-2 flex-grow`}>
        <div className="flex justify-between p-1 mb-2">
          <TiArrowLoop
            className="cursor-pointer"
            onClick={handleClick}
            size={20}
          />
          {isFlipped && (
            <TiArrowMaximise
              className="cursor-pointer"
              size={20}
              onClick={onMaximize}
            />
          )}
        </div>
        {children}
      </div>
    );
  };

  return (
    <ReactCardFlip
      containerStyle={{ height: "100%" }}
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <Section>
        <p className={`${h1.className} text-center pb-4`}>{title}</p>
        <p className={p.className + "text-2xl"}>{text}</p>
      </Section>
      <Section>
        <iframe
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            boxSizing: "border-box",
          }}
          src={url}
          title="Fådetpå"
        ></iframe>
      </Section>
    </ReactCardFlip>
  );
};

export const CardContainer = () => {
  const [maximizedCard, setMaximizedCard] = useState<string | null>(null);

  const cards = [
    {
      url: "https://www.xn--fdetp-mrae.com/",
      text: TextDescriptions.FåDetPå,
      title: "Få det på",
    },
    {
      url: "https://sunchaser.vercel.app/",
      text: TextDescriptions.Sunchaser,
      title: "Sunchaser",
    },
    {
      url: "https://gift-coordinator.vercel.app/",
      text: TextDescriptions.GiftCoordinator,
      title: "Gift Coordinator",
    },
  ];

  return (
    <div className="card-container grid md:grid-cols-3 grid-cols-1 gap-4 h-full overflow-hidden">
      {cards.map((card) => (
        <div
          key={card.text}
          className="h-[200px] h-full flex flex-col overflow-auto"
        >
          <Card
            url={card.url}
            text={card.text}
            title={card.title}
            isMaximized={card.url === maximizedCard}
            onMaximize={() => setMaximizedCard(card.url)}
          />
        </div>
      ))}
    </div>
  );
};
