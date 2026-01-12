import { useEffect } from "react";
import "./Typewritter.css";

/**
 * Typewriter component
 *
 * @param {Object} props
 * @param {string[]} props.data - Array of strings to be typed
 * @param {number} props.TypeSpeed - Speed of typing in milliseconds
 * @param {number} props.MsgDelay - Delay between each message in milliseconds
 *
 * @returns {JSX.Element}
 *
 * @example
 * <Typewriter
 *   data={msgArray}
 *   TypeSpeed={100}
 *   MsgDelay={2000}
 * />
 */

export const Typewritter = ({
  data = [],
  TypeSpeed = 100,
  MsgDelay = 2000,
}) => {
  useEffect(() => {
    let CharacterPos = 0;
    let MsgBuffer = "";
    let MsgIndex = 0;
    let delay;

    const startTyping = () => {
      let id = document.getElementById("typing-text");
      if (CharacterPos !== data[MsgIndex].length) {
        MsgBuffer = MsgBuffer + data[MsgIndex].charAt(CharacterPos);
        id.value = MsgBuffer + "_";
        delay = TypeSpeed;
      } else {
        delay = MsgDelay;
        MsgBuffer = "";
        CharacterPos = -1;
        if (MsgIndex !== data.length - 1) {
          MsgIndex++;
        } else {
          MsgIndex = 0;
        }
      }

      CharacterPos++;
      setTimeout(startTyping, delay);
    };

    startTyping();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <textarea id="typing-text" readOnly></textarea>
    </>
  );
};
