import React, { useRef, useState } from "react";

import "./styles.scss";

interface Props {
  onClick: (arg: any) => void;
}

export const VerifyCodeFields: React.FC<Props> = ({ onClick }) => {
  const [code, setCode] = useState([...Array(4)].map(() => ""));
  const inputs = useRef<any>([]);

  const processInput = (e: any, slot: number) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    onClick(newCode);
    if (slot !== code.length - 1) {
      inputs.current[slot + 1].focus();
    }
  };

  const onKeyUp = (e: any, slot: any) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  return (
    <div className="verify-input-container">
      {code.map((num, index) => (
        <input
          className="verify-input"
          ref={(ref) => inputs.current.push(ref)}
          key={index}
          value={num}
          autoFocus={!code[0]?.length && index === 0}
          onChange={(e) => processInput(e, index)}
          inputMode="numeric"
          onKeyUp={(e) => onKeyUp(e, index)}
          maxLength={1}
        />
      ))}
    </div>
  );
};
