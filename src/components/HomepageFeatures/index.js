import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Documentation DEV',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Link
        className="button button--secondary button--lg"
        to="/docs/category/documentation">
        Aller sur la doc !
      </Link>
    ),
  },
  {
    title: 'Mon profil',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Link
        className="button button--secondary button--lg"
        to="https://www.linkedin.com/in/alex-rovere-906089207/">
        LinkedIn
      </Link>
    ),
  },
  {
    title: 'Mes réalisations',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Link
        className="button button--secondary button--lg"
        to="https://portfolio.agence-web-rovere.fr/#/">
        Portfolio
      </Link>
    ),
  },
];

function Feature ({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
