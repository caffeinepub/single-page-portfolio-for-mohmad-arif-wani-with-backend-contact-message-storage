import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Submission } from '@/backend';

export function useGetAllMessages() {
  const { actor, isFetching } = useActor();

  return useQuery<Submission[]>({
    queryKey: ['messages'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllMessages();
    },
    enabled: !!actor && !isFetching,
  });
}
