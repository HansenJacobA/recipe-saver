import {
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  Text,
  Fade,
  Radio,
  RadioGroup,
  Stack,
  Card,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Review } from "../../types";
import { addRecipe } from "../../utilities/recipe";

export default function AddNewRecipe() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [directions, setDirections] = useState([]);
  const [newDirectionStep, setNewDirectionStep] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [inspiredBy, setInspiredBy] = useState("");
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const toast = useToast();

  return (
    <Flex direction="column" gap={5} w={300}>
      <Fade in={true}>
        <Heading
          as="h2"
          size="lg"
          noOfLines={1}
          textAlign="center"
          fontWeight="light"
        >
          Lets add a new recipe,
        </Heading>
      </Fade>
      {
        <Fade in={true}>
          <Flex direction="column" gap={5} w={300}>
            <Input
              placeholder="Category"
              value={category}
              onChange={function updateCategory({ target }) {
                setCategory(target.value.toLowerCase());
              }}
            />

            <Textarea
              placeholder="Description"
              value={description}
              onChange={function updateDescription({ target }) {
                setDescription(target.value);
              }}
            />

            <Card direction="column" gap={5} p={3}>
              <Flex direction="column" gap={5}>
                {ingredients.length ? (
                  ingredients.map((ingredient: string, index: number) => (
                    <Flex key={index} gap={2}>
                      <Text fontWeight="extrabold">{index + 1}.</Text>
                      <Text>{ingredient}</Text>
                    </Flex>
                  ))
                ) : (
                  <Flex gap={2}>
                    <Text fontWeight="extrabold">1.</Text>
                    <Text fontWeight="light" fontStyle="italic">
                      Add an ingredient below
                    </Text>
                  </Flex>
                )}
              </Flex>
              <Input
                placeholder="Ingredients"
                value={newIngredient}
                onChange={function updateNewIngredient({ target }) {
                  setNewIngredient(target.value);
                }}
              />
              <Button
                size="sm"
                onClick={function addIngredient() {
                  if (newIngredient === "") return;
                  const newIngredients = [...ingredients];
                  newIngredients.push(newIngredient);
                  setIngredients(newIngredients);
                  setNewIngredient("");
                }}
              >
                Add Ingredient
              </Button>
            </Card>

            <Card direction="column" gap={5} p={3}>
              <Flex direction="column" gap={5}>
                {directions.length ? (
                  directions.map((step: string, index: number) => (
                    <Flex key={index} gap={2}>
                      <Text fontWeight="extrabold">{index + 1}.</Text>
                      <Text>{step}</Text>
                    </Flex>
                  ))
                ) : (
                  <Flex gap={2}>
                    <Text fontWeight="extrabold">1.</Text>
                    <Text fontWeight="light" fontStyle="italic">
                      Add a direction step below
                    </Text>
                  </Flex>
                )}
              </Flex>
              <Input
                placeholder="Directions"
                onChange={function updateNewDirection({ target }) {
                  setNewDirectionStep(target.value);
                }}
                value={newDirectionStep}
              />
              <Button
                size="sm"
                onClick={function addDirectionStep() {
                  if (newDirectionStep === "") return;
                  const newDirections = [...directions];
                  newDirections.push(newDirectionStep);
                  setDirections(newDirections);
                  setNewDirectionStep("");
                }}
              >
                Add Step
              </Button>
            </Card>

            <Input
              placeholder="Prep Time"
              value={prepTime}
              onChange={function updatePrepTime({ target }) {
                setPrepTime(target.value);
              }}
            />

            <Input
              placeholder="Cook Time"
              value={cookTime}
              onChange={function updateCookTime({ target }) {
                setCookTime(target.value);
              }}
            />

            <Input
              placeholder="Servings"
              value={servings}
              onChange={function updateServings({ target }) {
                setServings(target.value);
              }}
            />

            <Input
              placeholder="Inspired By"
              value={inspiredBy}
              onChange={function updateInspiredBy({ target }) {
                setInspiredBy(target.value);
              }}
            />

            <Card direction="column" gap={5} p={3}>
              {reviews.length
                ? reviews.map((review: Review, index: number) => (
                    <Flex key={index} direction="column">
                      <Flex align="center" justify="space-between">
                        <Text>
                          {new Array(parseInt(review.rating))
                            .fill("⭑")
                            .join("")}
                        </Text>
                        <Text fontSize={12}>{review.date}</Text>
                      </Flex>
                      <Text>{review.review}</Text>
                    </Flex>
                  ))
                : null}
              <Flex justify="center">
                <RadioGroup onChange={setRating} value={rating}>
                  <Stack direction="row">
                    <Radio value="1">1⭑</Radio>
                    <Radio value="2">2⭑</Radio>
                    <Radio value="3">3⭑</Radio>
                    <Radio value="4">4⭑</Radio>
                    <Radio value="5">5⭑</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Textarea
                placeholder="Add a review"
                value={newReview}
                onChange={function updateNewReview({ target }) {
                  setNewReview(target.value);
                }}
              />
              <Button
                size="sm"
                onClick={function updateReviews() {
                  if (newReview === "" && rating === "") return;
                  const newReviews = [...reviews];
                  newReviews.unshift({
                    review: newReview,
                    rating,
                    date: new Date().toLocaleString(),
                  });
                  setReviews(newReviews);
                  setNewReview("");
                  setRating("");
                }}
              >
                Add Review
              </Button>
            </Card>

            <Card direction="column" gap={5} p={3}>
              {notes.length
                ? notes.map((note: string, index: number) => (
                    <Flex key={index} gap={2}>
                      <Text fontWeight="extrabold">{index + 1}.</Text>
                      <Text>{note}</Text>
                    </Flex>
                  ))
                : null}
              <Textarea
                placeholder="Add a note"
                value={newNote}
                onChange={function updateNewNote({ target }) {
                  setNewNote(target.value);
                }}
              />
              <Button
                size="sm"
                onClick={function updateNewNote() {
                  if (newNote === "") return;
                  const newNotes = [...notes];
                  newNotes.push(newNote);
                  setNotes(newNotes);
                  setNewNote("");
                }}
              >
                Add Note
              </Button>
            </Card>

            <Button
              onClick={function submitNewRecipe() {
                addRecipe({
                  category,
                  description,
                  ingredients,
                  directions,
                  prepTime,
                  cookTime,
                  servings,
                  inspiredBy,
                  notes,
                  reviews,
                });

                toast({
                  title: "Recipe added.",
                  description: "Your recipe has been saved.",
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                });
              }}
            >
              {
                <Link as={NextLink} href="/home">
                  Add Recipe
                </Link>
              }
            </Button>
          </Flex>
        </Fade>
      }
    </Flex>
  );
}
