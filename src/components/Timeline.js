import React from "react";
import Button from "./Button";
const Timeline = ({ timeline, onTimelineItemClick, currentStep }) => {
  return (
    // untuk bungkus element kalau gak pake div
    //<React.Fragment>
    <>
      <h2>History</h2>
      {
        //map = itterate ssetiap item dalam array dan kembalikan sebuah value pada index tersebut
        timeline.map((_, index) => {
          let buttonText = `Langkah #${index}`;
          if (index === 0) {
            buttonText = "Mulai dari awal!";
          }
          return (
            <Button
              active={currentStep === index}
              key={index}
              onClick={() => onTimelineItemClick(index)}
            >
              {buttonText}
            </Button> //langsung return gunakan () juga wajib karena ingin return objek/jsx tanpa tulis return <Button></Button>
          );
        })
      }
      {/* <Button>Langkah #1</Button>
      <Button>Langkah #2</Button>
      <Button>Langkah #3</Button> */}
    </>
    //</React.Fragment>
  );
};

export default Timeline;
