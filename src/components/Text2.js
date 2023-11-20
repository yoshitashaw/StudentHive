import { css } from "@emotion/css";

const StudentHiveWhereLearning = () => {
  return (
    <div
      className={css`
        font-size: 26px;
        line-height: 80px;
        font-weight: 600;
        font-family: var(--font-jost);
        color: var(--color-white);
        text-align: center;
        display: inline-block;
        width: 707px;
        height: 533px;
      `}
    >
      <p
        className={css`
          margin: 0;
        `}
      >
        StudentHive: Where Learning Meets Living is a
      </p>
      <p
        className={css`
          margin: 0;
        `}
      >
        rental portal for the students who can easily find, compare, and rent
        accommodation for their studies. It's like an online hub where students
        can search for apartments or rooms near their universities, see photos
        and details, and connect with landlords or property managers to secure a
        place to live during their academic year.
      </p>
    </div>
  );
};

export default StudentHiveWhereLearning;
