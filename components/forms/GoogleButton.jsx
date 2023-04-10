import Image from "next/image";
import { useSession, signIn } from "next-auth/react";

export default function GoogleButton () {
  const { data: session } = useSession();
  return (
    <button className="google-btn" onClick={() => signIn()}>
      <Image
        src="/google-logo.png"
        alt="Google Logo"
        width={20}
        height={20}
      />
      <span>Sign in with Google</span>
    </button>
  );
};