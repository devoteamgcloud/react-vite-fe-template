import type { FC } from "react";
import * as S from "./styled";

export type FabColor = "primary" | "secondary" | "danger" | "success" | "info";

type Props = {
  onClick: () => void;
  color?: FabColor;
};

const Fab: FC<Props> = ({ onClick, color = "primary" }) => {
    return <S.Container onClick={onClick} color={color} />;
};

export default Fab;
