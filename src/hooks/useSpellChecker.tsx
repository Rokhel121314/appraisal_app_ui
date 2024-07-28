import { useState } from "react";
import Typo from "typo-js";

var dictionary = new Typo("en_US", null, null, {
  dictionaryPath: "/node_modules/typo-js/dictionaries",
});

const useSpellChecker = () => {
  const [spelledCorrect, setSpelledCorrect] = useState<boolean>();

  const spellChecker = (value: any) => {
    setSpelledCorrect(dictionary.check(`${value}`));
  };

  return {
    spellChecker,
    spelledCorrect,
  };
};

export default useSpellChecker;
