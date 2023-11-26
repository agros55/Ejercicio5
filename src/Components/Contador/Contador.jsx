import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react'
const Contador = () => {
    const [contador, setContador] = useState(0);
    const [texto, setTexto] = useState(true);

    const aumentar = () => {
        setContador(contador + 1)
        setTexto(true)

    };
    const disminuir = () => {
        setContador(contador - 1)
        setTexto(false)
    };

    const reset = () => {
        setContador(0)
    }

    return (
        <Center flexDir='column' h='100vh'>
            <Center boxSize='300px' bg='gray.100' borderRadius='50%'>
                <Heading color={(contador > 0) ? 'green' : 'red'} fontSize='50px'>{contador}</Heading>
            </Center>

            <Flex justifyContent='space-around' w='300px' m='50px'>
                <Button onClick={disminuir} bg='red.200' p='20px'>Disminuir</Button>
                <Button onClick={aumentar} bg='green.200' p='20px'>Aumentar</Button>
            </Flex>
            <Button onClick={reset} bg='blue.100' p='20px'>Reset</Button>
        </Center>
    );
}

export default Contador;