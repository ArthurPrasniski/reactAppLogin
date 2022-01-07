import * as s from "./styles";
interface Props {
  type: string;
  onChange: (e: any) => void;
}
export function Input({ type, onChange }: Props) {
  return <s.Input type={type} onChange={onChange} />;
}
