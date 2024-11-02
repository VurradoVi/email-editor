import { Bold, Eraser, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.scss";
import React from "react";

const tools = [
  { component: <Eraser /> },
  { component: <Bold /> },
  { component: <Italic />},
  { component: <Underline />},
];

export function EmailEditor() {
  return (
    <div>
      <h1>Email editor</h1>
      <div className={styles.card}>
        <div className={styles.editor}>
          hey! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          ex voluptates esse, doloremque sequi officiis rerum quibusdam eveniet
          deserunt distinctio numquam reiciendis impedit odit cupiditate
          repellat error explicabo natus perspiciatis?
        </div>
        <div className={styles.actions}>
          <div className={styles.tools}>
            {tools.map((t, i) => <button key={i}>{React.cloneElement(t.component, { size: 18 })}</button>)}
          </div>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
