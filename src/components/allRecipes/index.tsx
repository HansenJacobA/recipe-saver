import {
  Button,
  Card,
  CardBody,
  Fade,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Recipe, Review } from "../../types";
import getValueByKey from "../../utilities/getValueByKey";
import setValueByKey from "../../utilities/setValueByKey";

export default function Recipes() {
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [newNote, setNewNote] = useState("");
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const recipes = getValueByKey("recipeHistory");
    setAllRecipes(recipes || []);
  }, []);

  useEffect(() => {
    //
  }, [allRecipes]);

  return (
    <Flex direction="column" gap={5}>
      <Fade in={true}>
        <Text textAlign="center" fontWeight="light" fontSize={20}>
          All Stored Recipes
        </Text>
      </Fade>

      <Fade in={true}>
        <Flex gap={5} direction="column">
          {allRecipes?.map((recipe: Recipe, recipeIndex: number) => (
            <Card key={recipeIndex} w={300}>
              <CardBody>
                <Flex direction="column" gap={5}>
                  <Flex direction="column" textAlign="center">
                    <Text fontWeight="bold">Category</Text>
                    <Text fontSize={18} fontWeight="light">
                      {recipe.category}
                    </Text>
                  </Flex>

                  <Flex borderTop="1px"></Flex>

                  <Flex direction="column" textAlign="center">
                    <Text fontWeight="bold">Description</Text>
                    <Text fontSize={18} fontWeight="light">
                      {recipe.description}
                    </Text>
                  </Flex>

                  <Flex borderTop="1px"></Flex>

                  <Flex direction="column" textAlign="center">
                    <Text fontWeight="bold">Prep Time</Text>
                    <Text fontSize={18} fontWeight="light">
                      {recipe.prepTime}
                    </Text>
                  </Flex>

                  <Flex borderTop="1px"></Flex>

                  <Flex direction="column" textAlign="center">
                    <Text fontWeight="bold">Cook Time</Text>
                    <Text fontSize={18} fontWeight="light">
                      {recipe.cookTime}
                    </Text>
                  </Flex>

                  <Flex borderTop="1px"></Flex>

                  <Flex direction="column" textAlign="center">
                    <Text fontWeight="bold">Servings</Text>
                    <Text fontSize={18} fontWeight="light">
                      {recipe.servings}
                    </Text>
                  </Flex>

                  <Flex borderTop="1px"></Flex>

                  <Flex direction="column" textAlign="center">
                    <Text fontWeight="bold">Inspired By</Text>
                    <Text fontSize={18} fontWeight="light">
                      {recipe.inspiredBy}
                    </Text>
                  </Flex>

                  <Flex borderTop="1px"></Flex>

                  <Flex direction="column" textAlign="center" gap={5}>
                    <Text fontWeight="bold">Ingredients</Text>
                    {recipe.ingredients.map(
                      (ingredient: string, ingredientIndex: number) => (
                        <Flex key={ingredientIndex} gap={2}>
                          <Text fontWeight="extrabold">
                            {ingredientIndex + 1}.
                          </Text>
                          <Text fontSize={18} fontWeight="light">
                            {ingredient}
                          </Text>
                        </Flex>
                      )
                    )}
                  </Flex>

                  <Flex borderTop="1px"></Flex>

                  <Flex direction="column" textAlign="center" gap={5}>
                    <Text fontWeight="bold">Directions</Text>
                    {recipe.directions.map(
                      (direction: string, directionIndex: number) => (
                        <Flex key={directionIndex} gap={2}>
                          <Text fontWeight="extrabold">
                            {directionIndex + 1}.
                          </Text>
                          <Text fontSize={18} fontWeight="light">
                            {direction}
                          </Text>
                        </Flex>
                      )
                    )}
                  </Flex>

                  <Flex borderTop="1px"></Flex>

                  <Flex direction="column" textAlign="center" gap={5}>
                    <Text fontWeight="bold">Reviews</Text>
                    {recipe.reviews.length
                      ? recipe.reviews.map(
                          (review: Review, reviewIndex: number) => (
                            <Flex key={reviewIndex} direction="column">
                              <Flex align="center" justify="space-between">
                                <Text>
                                  {new Array(parseInt(review.rating))
                                    .fill("⭑")
                                    .join("")}
                                </Text>
                                <Text fontSize={12}>{review.date}</Text>
                              </Flex>
                              <Text textAlign="left">{review.review}</Text>
                            </Flex>
                          )
                        )
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
                        const newReviews = [...recipe.reviews];
                        newReviews.unshift({
                          review: newReview,
                          rating,
                          date: new Date().toLocaleString(),
                        });
                        setNewReview("");
                        setRating("");

                        const newAllRecipes = [...allRecipes];
                        newAllRecipes[recipeIndex].reviews = newReviews;
                        setValueByKey("recipeHistory", newAllRecipes);
                        setAllRecipes(newAllRecipes);
                      }}
                    >
                      Add Review
                    </Button>
                  </Flex>

                  <Flex borderTop="1px"></Flex>

                  <Flex direction="column" textAlign="center" gap={5}>
                    <Text fontWeight="bold">Notes</Text>
                    {recipe.notes.length
                      ? recipe.notes.map((note: string, noteIndex: number) => (
                          <Flex key={noteIndex} gap={2}>
                            <Text fontWeight="extrabold">{noteIndex + 1}.</Text>
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

                        const newNotes = [...recipe.notes];
                        newNotes.push(newNote);
                        const newAllRecipes = [...allRecipes];
                        newAllRecipes[recipeIndex].notes = newNotes;
                        setValueByKey("recipeHistory", newAllRecipes);
                        setAllRecipes(newAllRecipes);
                        setNewNote("");
                      }}
                    >
                      Add Note
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Fade>
    </Flex>
  );
}
