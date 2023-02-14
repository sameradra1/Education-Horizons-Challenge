# Education-Horizons-Challenge
## Program Summary
A React component that generates an array of 32768 unique RGB colours, where each colour occurs exactly once with no repition and no unused colours. Colours are made up of three components — red,green, and blue, and each colour component is broken into 32 steps — 8,16, 24 .. 255 with the exception of using the value 255 instead of 256 because the coluor component ranges from 0 to 255, and using 256 will be interpreted as 0.
## Program Setup
To run this React project, npm and Node.js need to be installed on your system.
### Program Initialisation
The following command was used to initialise the project: <br /> `npx create-react-app my-project` <br />
### Running the Program
Navigate to the directory of 'my-project' and run the following command: `npm start` <br />
Open your web browser and go to http://localhost:3000 to see the image generated.
## Program Description
### PreSorting
When I first wrote the program,  it generated an array of 32768 unique RGB colours, and then displayed them as 2px-wide, 24px-tall blocks of colour. <br />
The process of generating the colours is done in the 'generateColors' function. The function uses three nested for loops to generate all the possible combinations of red, green, and blue values within a given range (8 to 256, with a step of 8), and stores them in an array of RGB strings in the format "rgb(R, G, B)" where R,G,B are the red, green, and blue components respectively. <br />
The 'ImageWithUniqueColors' component uses the useState and useEffect hooks from React to manage the state of the component. The component initializes its state with an empty array of colours using const [colors, setColors] = useState([]);. <br />
The useEffect hook then runs the generateColors function once, when the component is first rendered, and sets the state of the component to the generated array of colours. This ensures that the component will only generate the colours once, instead of generating the colours on every render. <br />
Finally, the component renders the array of colours using the map function to create a div for each colour, with the div's background colour set to the corresponding RGB value. The divs' display is chosen as 'inline-block' so that the colours are displayed next to each other, with no line breaks, giving the colours a strip look. <br />
The code and the image generated can be seen in the 'PreSorting.txt' and 'PreSorting.png' files respectively. To run the PreSorting code, replace the code in the App.js file with the code found in 'PreSorting.txt'. <br />
However, the image generated was not aesthetically pleasing. Thus, I realized I need to sort the colours in the colours array to improve of the Image.
After researching and experimenting, the two best results were sorting the colours based on luminosity and HSV (hue, saturation, and value). <br />
This link helped improve my understanding on colour sorting: https://www.alanzucconi.com/2015/09/30/colour-sorting/.
### Sorting Colours based on Luminosity
Sorting the colours based on luminosity produced the most aesthetically pleasing result based on the experiments I conducted. <br />
The code is similar to that of the PreSorting; however, after generating the colours, the 'generateColors' function then sorts the colours based on their luminosity value, which is calculated using the formula: $luminosity = 0.2126 * red + 0.7152 * green + 0.0722 * blue$. The colours are sorted in ascending order of their luminosity values, so the lightest colours appear first. <br />
The image generated can be seen in the 'Sorting Luminosity.png' file, and the code for colour luminosity sorting is found in both the 'App.js' file and 'Sorting Luminosity.txt' file.
### Sorting Colours based on HSV
Sorting the colours based on HSV produced a more aesthetically pleasing result than the PreSorting. <br />
The code is similar to that of the PreSorting; however, after generating the colours, the 'generateColors' function then converts each RGB color to its corresponding HSV (Hue, Saturation, Value) representation and sorts the array based on the hue, saturation, and value values. <br />
The image generated can be seen in the 'Sorting HSV.png' file, and the code for colour HSV sorting is found in 'Sorting HSV.txt' file.
<br />
<br />
#### Thank you for your time!
