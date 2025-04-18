import Link from "next/link";
import "../styles/global.css";
import styles from "../styles/home.module.css";

export const metadata = {
  title: "Home",
};

const API_URL = "https://billions-api.nomadcoders.workers.dev/";

async function getBillionaires() {
  const response = await fetch(API_URL);
  const result = await response.json();
  return result;
}

function formatToBillion(millions) {
  const billions = millions / 1000;
  const integerPart = Math.floor(billions);
  return `${integerPart} Billion`;
}

export default async function Home() {
  const billionaires = await getBillionaires();

  return (
    <section className={styles.container}>
      {billionaires.map((result) => (
        <div className={styles.card}>
          <Link href={`/person/${result.id}`}>
            <img
              className={styles.img}
              src={result.squareImage}
              alt={result.name}
            />
          </Link>

          <h2 className={styles.name} key={result.id}>
            {result.name}
          </h2>
          <h3 className={styles.info}>
            {formatToBillion(result.netWorth)} / {result.industries}
          </h3>
        </div>
      ))}
    </section>
  );
}
