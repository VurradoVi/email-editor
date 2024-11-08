import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailService } from "../services/email.service";
import { useQueryMutationProps } from "./hookTypes";

export default function useQueryMutation({
  text,
  setText,
}: useQueryMutationProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: () => emailService.sendEmail(text),
    onSuccess: () => {
      setText("");
      queryClient.refetchQueries({ queryKey: ["email list"] });
    },
  });

  return { mutate, isPending };
}
