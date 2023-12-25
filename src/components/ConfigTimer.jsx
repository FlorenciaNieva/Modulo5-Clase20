import { Radio, RadioGroup, Stack, Container, Center } from '@chakra-ui/react'

export default function ConfigTimer({ timeMode, setTimeMode }) {
  return (
    <Container m={2}>
      <Center>
        <RadioGroup onChange={setTimeMode} value={timeMode}>
          <Stack>
            <Radio value='24' >24 hours</Radio>
            <Radio value='12' >12 hours</Radio>
          </Stack>
        </RadioGroup>
      </Center>
    </Container>
  )
}
