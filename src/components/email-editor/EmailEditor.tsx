import { Bold, Eraser, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.scss";
import useEditor from "../../hooks/useEditor";
import React from "react";
import useQueryMutation from "../../hooks/useQueryMutation";

const tools = [
  { component: <Eraser /> },
  { component: <Bold /> },
  { component: <Italic /> },
  { component: <Underline /> },
];

export function EmailEditor() {
  const { applyFormat, text, updateSelection, setText, textRef } = useEditor();

  const { mutate, isPending } = useQueryMutation({ text, setText });

  const handleClick = (i: number) => {
    switch (i) {
      case 0:
        setText("");
        break;
      case 1:
        applyFormat("bold");
        break;
      case 2:
        applyFormat("italic");
        break;
      case 3:
        applyFormat("underline");
        break;
      default:
        console.log(`Кнопка ${i} нажата`);
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
          onChange={(e) => setText(e.target.value)}
        />
        <div className={styles.actions}>
          <div className={styles.tools}>
            {tools.map((t, i) => (
              <button key={i} onClick={() => handleClick(i)}>
                {React.cloneElement(t.component, { size: 20 })}
              </button>
            ))}
          </div>
          <button disabled={isPending} onClick={() => mutate()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
