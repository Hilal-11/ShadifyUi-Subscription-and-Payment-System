import React from 'react'
import { SignIn,SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs";

import { Button } from '@/components/ui/button';
function Login() {
  return (
   <div className="flex justify-center items-center h-screen">
        <SignIn />
    </div>
  )
}

export default Login
