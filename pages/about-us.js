import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function About() {
  return (
    <div>
      <Head title="about" />
      <Layout title="About Us">
        <div className={styles.aboutHolder}>{lorem.generateSentences(7)}</div>
      </Layout>
    </div>
  );
}

export default About;
