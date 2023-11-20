import { css } from "@emotion/css";

const AboutText = () => {
  return (
    <div
      className={css`
        font-size: 48px;
        line-height: 80px;
        font-weight: 600;
        font-family: var(--font-jost);
        background: linear-gradient(90deg, #ef8828, #b7b281);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        display: inline-block;
        width: 501px;
        height: 80px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      `}
    >{`About `}</div>
  );
};

export default AboutText;
