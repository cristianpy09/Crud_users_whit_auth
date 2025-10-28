import RegisterForm from '@/components/auth/RegisterForm'

import {  Card, Container, Flex, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'



export default function RegisterPage() {
  return (
    <Container className='min-h-screen flex-items-center justify-center ml-180' >
        <Card className='w-90'>
            <Heading>Sign un</Heading>
            <RegisterForm/>
            <Flex>
                <Text className='' >
                    do you already an account?
                    <Link href={"/auth/login"} >Logn in</Link>
                </Text>


               
            </Flex>
        </Card>
    </Container>
  )
}
