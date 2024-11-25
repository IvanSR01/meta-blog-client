import authService from "@/services/auth-service/auth.service";
import { TypeLogin, TypeRegister } from "@/shared/types/auth.type";
import { TypeTokens } from "@/shared/types/tokens.type";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";

export enum AuthApi {
	LOGIN = "login",
	REGISTER = "register",
}

type UseAuthProps<V> = {
  api: AuthApi;
  onError?: (err: any) => void;
  onSuccess?: (data: V) => void;
};

export const useAuth = <T = TypeLogin | TypeRegister | undefined, V = TypeTokens>({
  api,
  onError,
  onSuccess,
}: UseAuthProps<V>): {
  onSubmit: (data: T) => void;
  isPending: boolean;
} => {
  const { mutate, isPending } = useMutation({
    mutationFn: (credential: T) =>
      authService[api](credential as T & TypeRegister & TypeLogin) as any,
    onError,
    onSuccess,
  });
  const onSubmit = (data: T) => {
    mutate(data);
  };
  return useMemo(() => ({ onSubmit, isPending }), [onSubmit, isPending]);
};

