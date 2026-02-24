import { LoginForm } from "@/components/forms/login-form";
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

export default function Login() {
  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your SupportMe account</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="justify-between">
          Dont' have an account{" "}
          <Button asChild variant="outline" size="xs">
            <Link href="/signup">Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
