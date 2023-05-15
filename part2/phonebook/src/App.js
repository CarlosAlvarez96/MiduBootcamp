import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  ChakraProvider,
  Input,
  Image,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import R from "./img/R.jpeg";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const addPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons((prevPersons) => [
        ...prevPersons,
        { name: newName, number: newNumber }, // Group name and number properties together
      ]);
      setNewName("");
      setNewNumber("");
    }
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Flex>
        <Box as="form" p={10} onSubmit={addPerson}>
          <Heading
            as="h2"
            color="#3182CE"
            fontFamily="Helvetica"
            fontWeight="bold"
          >
            Phonebook
          </Heading>

          <FormLabel>Filter shown with: </FormLabel>
          <Input
            placeholder="Filtro"
            size="lg"
            variant="flushed"
            type="text"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />

          <Heading
            as="h2"
            color="#3182CE"
            fontFamily="Helvetica"
            fontWeight="bold"
          >
            Add a new
          </Heading>
          <FormLabel>Name: </FormLabel>
          <Input
            placeholder="Nombre"
            size="lg"
            variant="flushed"
            type="text"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
          <FormLabel>Number: </FormLabel>
          <Input
            placeholder="Número"
            size="lg"
            variant="flushed"
            color="blue"
            type="text"
            value={newNumber}
            onChange={(event) => setNewNumber(event.target.value)}
          />

          <div>
            <Button colorScheme="blue" size="lg" type="submit" m={4}>
              add
            </Button>
          </div>

          <Heading
            as="h2"
            color="#3182CE"
            fontFamily="Helvetica"
            fontWeight="bold"
          >
            Numbers
          </Heading>
          {filteredPersons.map((person, i) => (
            <p key={i}>
              {person.name} {person.number}
            </p>
          ))}
        </Box>

        <Box boxSize="lg" p={10}>
          <Image alt="Imagen contacto" src={R} />
        </Box>
      </Flex>
    </div>
  );
};

export default App;
