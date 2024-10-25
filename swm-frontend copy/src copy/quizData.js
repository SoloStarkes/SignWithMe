import imageA from './ASLAlphabetPoster_A.webp';
import imageB from './ASLAlphabetPoster_B.webp';
import imageD from './ASL_D.webp';
import imageC from './ASL_C.webp';
import imageDOG from './ASL_DOG1.webp';
import imageCAT from './ASL_CAT.webp';
import imageBEE from './ASL_BEE.webp';
import imageANT from './ASL_ANT.webp';

export const level1Data = [
  {
    question: "Select the letter this sign represents.",
    image: imageA,
    choices: ["A", "B", "C", "D"],
    correct: "A",
  },
  {
    question: "Select the letter this sign represents.",
    image: imageB,
    choices: ["A", "B", "C", "D"],
    correct: "B",
  },
];

export const level2Data = [
  {
    question: "Spell the word 'DOG'.",
    image: imageD,
    choices: [imageDOG, imageCAT, imageBEE, imageANT],
    correct: imageDOG,
  },
  {
    question: "Spell the word 'CAT'.",
    image: imageC,
    choices: [imageDOG, imageCAT, imageBEE, imageANT],
    correct: imageCAT,
  },
];
