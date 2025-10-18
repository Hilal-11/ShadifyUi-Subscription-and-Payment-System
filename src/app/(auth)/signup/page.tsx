import React from 'react'

import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { SignUp } from '@clerk/nextjs'
import { Button } from '@/components/ui/button';

function signUp() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp />
    </div>
  )
}

export default signUp
