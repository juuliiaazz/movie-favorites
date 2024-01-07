import { Paragraph } from "../ui/Paragraph";

export function ErrorMessage({ message }) {
  return <Paragraph type="error">{message}</Paragraph>;
}
