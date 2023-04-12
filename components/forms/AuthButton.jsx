import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AuthButton ({ authProvider }) {

  const [provider, setProvider] = useState(authProvider);

  return (
    <button className={`${authProvider}Btn`} onClick={() => signIn(provider)}>
      <Image
        src={`/${provider}-logo.png`}
        alt={`${provider} logo`}
        width={20}
        height={20}
      />
      {provider === 'google' && <span>Sign in with Google</span>}
      {provider === 'github' && <span>Sign in with Github</span>}
    </button>
  );
};