import React from "react";
import { IOperator } from "../components/types";
import styles from "../styles/operator.module.css";
import { useRouter } from "next/dist/client/router";
import {OperatorBlock, OperatorText, OperatorImage} from "../styles/myStyles"

interface OperatorProps {
  operator: IOperator;
}

export const Operator = ({ operator }: OperatorProps) => {
  const router = useRouter();

  return (
    <OperatorBlock>
      <OperatorImage
        src={operator.link_image}
      />
      <OperatorText> {operator.name}</OperatorText>
    </OperatorBlock>
  );
};



