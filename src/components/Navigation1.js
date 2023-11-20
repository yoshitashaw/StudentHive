import { css } from "@emotion/css";

const Navigation1 = () => {
  return (
    <div
      className={css`
        width: 701px;
        height: 85px;
        text-align: center;
        font-size: var(--font-size-xl);
        color: var(--color-white);
        font-family: var(--font-jost);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: calc(50% - 350.5px);
          border-radius: 40px;
          background-color: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(16px);
          width: 701px;
          height: 85px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 27.8px;
          left: calc(50% - 281.7px);
          width: 555.5px;
          height: 24.5px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 60px;
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 30px;
            font-weight: 500;
          `}
        >
          Home
        </div>
        <div
          className={css`
            position: relative;
            line-height: 30px;
            font-weight: 500;
          `}
        >
          For Rent
        </div>
        <div
          className={css`
            position: relative;
            line-height: 30px;
            font-weight: 500;
          `}
        >
          For Sell
        </div>
        <div
          className={css`
            position: relative;
            line-height: 30px;
            font-weight: 500;
          `}
        >
          Forum
        </div>
        <div
          className={css`
            position: relative;
            text-decoration: underline;
            line-height: 30px;
            font-weight: 500;
          `}
        >
          About
        </div>
        <div
          className={css`
            position: relative;
            line-height: 30px;
            font-weight: 500;
            color: #e19948;
          `}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Navigation1;
