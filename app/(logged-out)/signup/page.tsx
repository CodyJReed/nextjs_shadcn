import { SignupForm } from "@/components/forms/signup-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            <h4>Sign Up</h4>
          </CardTitle>
          <CardDescription>Sign up for a SupportMe account</CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
        <CardFooter className="justify-between">
          Already have an account{" "}
          <Button asChild variant="outline" size="xs">
            <Link href="/login">Log in</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
