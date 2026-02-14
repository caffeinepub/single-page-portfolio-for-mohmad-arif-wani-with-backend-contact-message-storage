import { useState } from 'react';
import { useActor } from '@/hooks/useActor';
import type { MessagePayload } from '@/backend';

export function useContactForm() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const submitMessage = async (payload: MessagePayload) => {
    if (!actor) {
      setIsError(true);
      setErrorMessage('Backend connection not available');
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage(undefined);

    try {
      await actor.submitMessage(payload);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage(undefined);
  };

  return {
    submitMessage,
    isSubmitting,
    isSuccess,
    isError,
    errorMessage,
    reset,
  };
}
