import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export default function seedUp(): void {
  const recipeHistory = getValueByKey("recipeHistory");
  if (recipeHistory === null) {
    setValueByKey("recipeHistory", []);
  }
}
