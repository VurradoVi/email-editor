import { useQuery } from "@tanstack/react-query";
import style from "./emailList.module.scss";
import { emailService } from "../../services/email.service";
import parse from "html-react-parser";

export default function EmailList() {
  const { data } = useQuery({
    queryKey: ["email list"],
    queryFn: () => emailService.getEmails(),
  });

  return (
    <div className={style.list}>
      {data?.map((email) => (
        <div key={email.text}>{parse(email.text)}</div>
      ))}
    </div>
  );
}
