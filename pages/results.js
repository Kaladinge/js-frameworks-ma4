import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import { BASE_URL } from "../constants/api";
import styles from "../styles/Home.module.css";

function Results(props) {
  return (
    <div className={styles.container}>
      <Head title="results" />
      <Layout title="Results">
        <div className={styles.grid}>
          {props.entries.map((entry) => (
            <div key={entry.cardId} className={styles.cardHolder}>
              <h3 className="text-secondary">{entry.name}</h3>
              <div
                className={`d-flex align-items-center justify-content-center ${styles.card}`}
              >
                <Image
                  src={entry.img}
                  width="300px"
                  height="410px"
                  alt="Hearthstone Card"
                />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const options = {
    headers: {
      "x-rapidapi-key": "1ab071d27dmsh90fe78102c83ad5p193b7ajsndf23995ff514",
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  let entries = [];

  try {
    const response = await axios.get(BASE_URL, options);
    for (let i = 375; i < 395; i++) {
      if (!response.data[i].img) {
        continue;
      }
      entries.push(response.data[i]);
      if (entries.length === 12) {
        break;
      }
    }
  } catch (error) {
    return <div className="text-danger">Something went wrong</div>;
  }
  return {
    props: {
      entries: entries,
    },
  };
}

export default Results;
