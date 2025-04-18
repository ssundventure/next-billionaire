import { API_URL } from "../person/[id]/page";
import styles from "../styles/person.module.css";

async function getBillionaires(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const result = await response.json();
  return result;
}

export default async function PersonInfo({ id }: { id: string }) {
  const info = await getBillionaires(id);

  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <img src={info.squareImage} alt={info.name} />
        <h2>{info.name}</h2>
        <p>{info.netWorth}</p>
        <p>{info.country}</p>
        <p>{info.industry}</p>
        <p>{info.about}</p>
      </div>
      <div className={styles.asset}></div>
    </section>
  );
}
