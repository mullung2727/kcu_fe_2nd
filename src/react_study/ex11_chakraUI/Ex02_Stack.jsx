import { Box, Button, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "../../components/ui/color-mode";

export default function Ex02_Stack() {
  const bg = useColorModeValue('blue.500', 'blue.700')
  // const btnBg = useColorModeValue('red.700', 'red. 400')
  return (
    <Box p={6} rounded='2xl' bg={bg}>
      <Stack >
        <Button bg={{base:'red.700', _dark:'red.400'}}>기본 버튼</Button>
        <Button variant='outline'>아웃라인</Button>
      </Stack>
    </Box>
  )
}