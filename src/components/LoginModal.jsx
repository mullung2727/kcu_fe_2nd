
import { Dialog, Fieldset, Icon } from "@chakra-ui/react";
import { FaX } from "react-icons/fa6";


export default function LoginModal() {


  const handleLogin = async (e) => {

  }

  const handleLogout = async () => {

  }



  return (
    <Dialog.Root open={open} onOpenChange={}>
      {/* TODO  Trigger 작성*/}
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>로그인</Dialog.Title>
            <Dialog.CloseTrigger
              size='lg'
              fontSize={"2xl"}
              m={3}
              _hover={{opacity:0.5}}
              cursor="pointer"
              variant="outline"
            >
              <Icon as={FaX} />
            </Dialog.CloseTrigger>
          </Dialog.Header>
          <Dialog.Body>
            <Fieldset.Root invalid={loginError}>
            {/*TODO Field (ID, PW) 작성 */}
            </Fieldset.Root>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Positioner>

    </Dialog.Root>
  )

}