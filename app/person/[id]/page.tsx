import PersonInfo from "../../components/person-info";
import "../../styles/global.css";
import styles from "../../styles/person.module.css";

export const metadata = {
  title: "Detail",
};

export const API_URL = `https://billions-api.nomadcoders.workers.dev/person`;

export default async function Person(props: { params: { id: string } }) {
  const { id } = await props.params;

  return (
    <div>
      <PersonInfo id={id} />
    </div>
  );
}
