import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head title="home" />
      <Layout title="Home Page">
        <Link href="/results">Take me to Results page</Link>
      </Layout>
    </div>
  );
}
