import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

return (
<input
type="text"
placeholder="Search recipes by title, ingredients, or time..."
onChange={(e) => setSearchTerm(e.target.value)}
/>
);
};

export default SearchBar;
