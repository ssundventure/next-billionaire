// app/person/[id]/page.tsx
import PersonInfo from "../../components/person-info";
import "../../styles/global.css";
import styles from "../../styles/person.module.css";

export const metadata = {
  title: "Detail",
};

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }) {
  const { id } = await params;
  return (
    <div className={styles.container}>
      <PersonInfo id={id} />
    </div>
  );
}
