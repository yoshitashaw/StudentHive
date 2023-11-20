import { css } from "@emotion/css";

const LetUsHelp = () => {
  return (
    <div
      className={css`
        font-size: 24px;
        line-height: 80px;
        font-weight: 600;
        font-family: var(--font-jost);
        color: var(--color-white);
        text-align: center;
        display: inline-block;
        width: 514px;
        height: 414px;
      `}
    >
      <p
        className={css`
          margin: 0;
        `}
      >{`Let us help you to find the best stay `}</p>
      <p
        className={css`
          margin: 0;
        `}
      >
        which is no less than a home ---
      </p>
      <p
        className={css`
          margin: 0;
        `}
      >
        to the best of your budget, security and
      </p>
      <p
        className={css`
          margin: 0;
        `}
      >
        comfort. Happy Stay!
      </p>
    </div>
  );
};

export default LetUsHelp;
