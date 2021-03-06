import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useUnavailableToast } from "@hooks";

export const useActionButton = () => {
  const router = useRouter();
  const { showUnavailableToast } = useUnavailableToast();

  const handleGoHome = () => {
    router.push("/");
  };

  const handleBookNow = () => {
    showUnavailableToast();
  };

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  const handleSignOut = () => {
    signOut();
  };

  return {
    handleGoHome,
    handleBookNow,
    handleSignIn,
    handleSignUp,
    handleSignOut,
  };
};
