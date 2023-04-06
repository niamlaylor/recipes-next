import { useSession, signOut } from 'next-auth/react';

export default function Account() {

  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome {session.user.name}</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
      </div>
    )
  }
}