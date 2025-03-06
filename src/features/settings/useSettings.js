import { useQuery } from "@tanstack/react-query";
import { getSettings } from "./../../services/apiSettings";

export function useSettings() {
  const {
    isPending: isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}
