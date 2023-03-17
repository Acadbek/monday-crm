import { PropsWithChildren } from "react";

type TicketPageProps = PropsWithChildren<{
  editMode?: boolean;
}>;

const TicketPage = ({ editMode }: TicketPageProps) => {
  return <div>TicketPage {editMode} </div>;
};

export default TicketPage;
