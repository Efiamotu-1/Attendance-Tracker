import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 0.7rem;
    padding: 0.6rem 0.8rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: #eef2ff;
    background-color: #4f46e5;

    &:hover {
      background-color: #4338ca;
    }
  `,
  secondary: css`
    color: #d1d5db;
    background: #18212f;
    border: 1px solid #374151;

    &:hover {
      background-color: #111827;
    }
  `,
  danger: css`
    color: #fee2e2;
    background-color: #b91c1c;

    &:hover {
      background-color: #991b1b;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
