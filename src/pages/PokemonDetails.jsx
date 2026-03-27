import { useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

export default function PokemonDetails() {
  const {id} = useParams();
  return (
    <PokemonCard id={id} />
  )
}