import {
  Card,
  Flex,
  Input,
  Text,
  CardBody,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Template from "../../components/template";
import { useState, useEffect } from "react";
import getValueByKey from "../../utilities/getValueByKey";
import { Recipe, Review } from "../../types";
import setValueByKey from "../../utilities/setValueByKey";
import RecipeCardSection from "../../components/recipeCardSection";
import Line from "../../components/line";
import NumberedList from "../../components/numberedList";
import LinkEditButton from "../../components/linkEditButton";

export default function Search() {
  const [selectedCategory, setSelectedCategory] = useState("none");
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [newNote, setNewNote] = useState("");
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const recipes = getValueByKey("recipeHistory");
    setAllRecipes(recipes);
  }, []);

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap={5}
      mb={10}
      w={300}
    >
      <Template />
      <Text fontSize={20} fontWeight="light">
        Search Recipes by Category 📖
      </Text>

      <Flex>
        <Input
          type="text"
          onChange={(e) => setSelectedCategory(e.target.value.toLowerCase())}
          list="catagories"
          placeholder="Select catagory"
        />
        <datalist id="catagories">
          {allRecipes
            .filter(({ category }) =>
              category.toLowerCase().includes(selectedCategory.toLowerCase())
            )
            .map(({ category }, index) => (
              <option value={category} key={index} />
            ))}
          ;
        </datalist>
      </Flex>

      <Flex direction="column" gap={5}>
        {selectedCategory.split("").join("").length
          ? allRecipes
              .filter(({ category }) =>
                category.toLowerCase().includes(selectedCategory.toLowerCase())
              )
              .map((recipe, recipeIndex) => (
                <Card key={recipeIndex} w={300}>
                  <CardBody>
                    <LinkEditButton index={recipeIndex} />
                    <Flex direction="column" gap={5}>
                      <RecipeCardSection
                        header="Category"
                        detail={recipe.category}
                      />

                      <Line />

                      <RecipeCardSection
                        header="Description"
                        detail={recipe.description}
                      />

                      <Line />

                      <RecipeCardSection
                        header="Prep Time"
                        detail={recipe.prepTime}
                      />

                      <Line />

                      <RecipeCardSection
                        header="Cook Time"
                        detail={recipe.cookTime}
                      />

                      <Line />

                      <RecipeCardSection
                        header="Servings"
                        detail={recipe.servings}
                      />

                      <Line />

                      <RecipeCardSection
                        header="Inspired By"
                        detail={recipe.inspiredBy}
                      />

                      <Line />

                      <NumberedList
                        list={recipe.ingredients}
                        heading="Ingredients"
                      />

                      <Line />

                      <NumberedList
                        list={recipe.directions}
                        heading="Directions"
                      />

                      <Line />

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

                      <Line />

                      <Flex direction="column" textAlign="center" gap={5}>
                        <Text fontWeight="bold">Notes</Text>
                        {recipe.notes.length
                          ? recipe.notes.map(
                              (note: string, noteIndex: number) => (
                                <Flex key={noteIndex} gap={2}>
                                  <Text fontWeight="extrabold">
                                    {noteIndex + 1}.
                                  </Text>
                                  <Text>{note}</Text>
                                </Flex>
                              )
                            )
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
              ))
          : null}
      </Flex>
    </Flex>
  );
}
