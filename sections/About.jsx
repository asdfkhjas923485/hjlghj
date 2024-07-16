'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Communifhy" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[25px] text-[15px] text-center text-black"
      >
        <span className="font-extrabold text-black">Communifhy</span> adalah tempat di mana kita berfokus pada pertumbuhan pribadi, kreativitas dalam menciptakan konten, dan pengembangan diri secara <span className="font-extrabold text-black">
        positif.
        </span>Kita membangun komunitas yang saling {' '}
        <span className="font-extrabold text-black">
        mendukung
        </span> dan{' '}
        {' '}
        <span className="font-extrabold text-black">berinteraksi</span> menginspirasi satu sama lain untuk mencapai potensi terbaik. Dari artikel inspiratif hingga tips praktis, kita berbagi pengetahuan dan pengalaman untuk membantu setiap individu {' '}
        <span className="font-extrabold text-black">tumbuh dan berkembang.</span> #GrowthThroughCommunity
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
