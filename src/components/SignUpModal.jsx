// src/components/SignUpModal.jsx
import { Button, Dialog, Field, Fieldset, Icon, Input, Portal } from "@chakra-ui/react";
import { PasswordInput } from "./ui/password-input";
import { useState } from "react";
import { signUp } from "../services/auth_sign_up";

export default function SignUpModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if(password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {

    } catch {

    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <Button size="sm" variant="outline">회원가입</Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>회원가입</Dialog.Title>
            <Dialog.CloseTrigger 
              size="lg" 
              fontSize={"2xl"} 
              m={3} 
              _hover={{opacity: 0.5}}
              cursor="pointer"
              variant="outline" >
              ×
            </Dialog.CloseTrigger>
          </Dialog.Header>
          <Dialog.Body>
            <Fieldset.Root invalid={!!error}> 
              
            </Fieldset.Root>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Positioner>

    </Dialog.Root>
  );
}