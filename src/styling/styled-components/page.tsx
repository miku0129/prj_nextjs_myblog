"use client";

import styled from "styled-components";

export const CustomStyledBtn = styled.button`
  margin-top: 10px;
  background: #ececec;
  border: 0;
  padding: 1rem 2rem;
`;

export const CustomStyledHeadline = styled.div`
  padding: 1rem;
  background: white;
  &:hover {
    background: aliceblue;
    cursor: pointer;
  }
`;

export const CustomStylelistLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CustomStyleHeaderItemLayout = styled.div`
  display: flex;
  gap: 1rem;
`;
