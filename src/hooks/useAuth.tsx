import { AuthService } from '@/services';
import { useMutation } from '@tanstack/react-query';

export const useSignIn = () =>
  useMutation({ mutationFn: (data: TObject) => AuthService.signIn(data) });

export const useSignUp = () =>
  useMutation({ mutationFn: (data: TObject) => AuthService.signUp(data) });
