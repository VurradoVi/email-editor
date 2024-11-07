import { Bold, Eraser, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.scss";
import React, { useRef, useState } from "react";
import { applyStyle, TStyle } from "./apply-style";


const tools = [
  { component: <Eraser /> },
  { component: <Bold /> },
  { component: <Italic /> },
  { component: <Underline /> },
];

export function EmailEditor() {
  const [text, setText] = useState("loreMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [selectionStart, setSelectionStart] = useState(0)
  const [selectionEnd, setSelectionEnd] = useState(0)

  const updateSelection = () => {
    if (!textRef.current) return
    setSelectionStart(textRef.current.selectionStart)
    setSelectionEnd(textRef.current.selectionEnd)
  } 

  const applyFormat = (type: TStyle) => {
    const selectedText = text.substring(selectionStart, selectionEnd)
    
    if (!selectedText) return
    const before = text.substring(0, selectionStart)
    const after = text.substring(selectionEnd)

    setText(before + applyStyle(type, selectedText) + after)
    
  };

  const handleClick = (index) => {
    switch(index) {
      case 0:
        setText('')
        break;
      case 1:
        applyFormat('bold')
        break;
      case 2:
        applyFormat('italic')
        break;
      case 1:
        applyFormat('underline')
        break;
      default:
        console.log(`Кнопка ${index} нажата`);
    }
  };

  return (
    <div>
      <h1>Email editor</h1>
      <div className={styles.card}>
        <textarea
          ref={textRef}
          className={styles.editor}
          spellCheck="false"
          onSelect={updateSelection}
          value={text}
          onChange={e => setText(e.target.value)}
        >
          {text}
        </textarea>
        <div className={styles.actions}>
          <div className={styles.tools}>
            {tools.map((t, i) => (
              <button key={i} onClick={() => handleClick(i)}>
                {React.cloneElement(t.component, { size: 18 })}
              </button>
            ))}
          </div>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
