/*
Name: Samer Adra      Date: February 14, 2023

Program Description: A React component that generates an array of 32768 unique RGB colors,
breaks each colour component into 32 steps — 8,16, 24 .. 255 with the exception of using the value 255 instead of 256,
sorts them by luminosity value (lightness), and then displays them as 2px-wide, 24px-tall blocks of color.
*/
import React, { useState, useEffect } from "react";

const COLOR_STEP = 8;

const generateColors = () => {
  const colors = [];
  for (let red = 8; red <= 256; red += COLOR_STEP) {
    for (let green = 8; green <= 256; green += COLOR_STEP) {
      for (let blue = 8; blue <= 256; blue += COLOR_STEP) {
        // Since the RGB color values range from 0 to 255, then if a color component reaches 256, it will be set to 255
        // to avoid the 256 being interpreted as a zero
        red = red === 256 ? 255 : red;
        green = green === 256 ? 255 : green;
        blue = blue === 256 ? 255 : blue;
        colors.push(`rgb(${red}, ${green}, ${blue})`);
      }
    }
  }
  // console.log(`Total number of colors: ${colors.length}`); -- Used to verify the total number of colors was indeed 32768 unique colors

  /*
  This sorts the colors in ascending luminosity order
  First, it removes the "rgb(" prefix from the string, so that only the RGB values remain.
  Then, generate an array strings representing the RGB values
  Finally, map each string in the array to its integer representation
  */
  colors.sort((a, b) => {
    const [ar, ag, ab] = a
      .substring(4, a.length - 1)
      .split(", ")
      .map((c) => parseInt(c));
    const [br, bg, bb] = b
      .substring(4, b.length - 1)
      .split(", ")
      .map((c) => parseInt(c));

    // Calculate the luminosity value for each color
    const aLuminosity = 0.2126 * ar + 0.7152 * ag + 0.0722 * ab;
    const bLuminosity = 0.2126 * br + 0.7152 * bg + 0.0722 * bb;

    // Compare the luminosity values and return the difference
    return aLuminosity - bLuminosity;
  });

  return colors;
};

const ImageWithUniqueColors = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors(generateColors());
  }, []); // Empty array to run 'generateColors' once, when the component is first rendered

  /*
  Create a div for each color, with the div's background color set to the corresponding RGB value. 
  The divs are displayed in a single line, with no line breaks, so that the generated color blocks appear as a single horizontal strip.
  Note that lineHeight was set to 0 to remove white spacing between different lines of color.
  */
  return (
    <div style={{ lineHeight: 0 }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: "2px",
            height: "24px",
            display: "inline-block",
          }}
        />
      ))}
    </div>
  );
};

export default ImageWithUniqueColors;
