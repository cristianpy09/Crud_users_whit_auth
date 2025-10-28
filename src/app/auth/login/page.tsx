import SigninForm from '@/components/auth/SigninForm'
import {  Card, Container, Flex, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'



export default function LoginPage() {
  return (
    <Container className='min-h-screen flex-items-center justify-center ml-180' >
        <Card className='w-90 '>
        <Heading>Sign in</Heading>
            <Flex className='' >
               
            
            <SigninForm/>
               
            </Flex>
            <Text>
                    Dont have an account?
                    <Link href={"/auth/register"} >Register</Link>
                </Text>

        </Card>
    </Container>
  )
}
