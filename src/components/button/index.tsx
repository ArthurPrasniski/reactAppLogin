import * as s from "./styles";

interface IProps {
  children: string;
}

export const Button = ({children }: IProps) => {
  return <s.Button type="submit">{children}</s.Button>;
};
