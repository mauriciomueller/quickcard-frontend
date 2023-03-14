import { Input, InputGroup, InputLeftAddon, Stack, Button } from '@chakra-ui/react'
import { BsQrCode } from 'react-icons/bs'

export const FormQRGeneratorComponent = () => {
    return (
        <Stack spacing={4}>
        <InputGroup>
            <InputLeftAddon children='Name' />
            <Input type='input' placeholder='phone number' />
        </InputGroup>

        <InputGroup>
            <InputLeftAddon children='LinkedIn URL' />
            <Input type='input' placeholder='phone number' />
        </InputGroup>

        <InputGroup>
            <InputLeftAddon children='Github URL' />
            <Input type='input' placeholder='phone number' />
        </InputGroup>

        <Stack direction='row' spacing={4}>
            <Button
                leftIcon={<BsQrCode />}
                colorScheme='pink'
                variant='solid'
            >
                Generate Image
            </Button>
        </Stack>
    </Stack>
    )
}