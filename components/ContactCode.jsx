import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'murghendraakki10@gmail.com',
    href: 'mailto:murghendraakki10@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/Murghendra',
    href: 'https://www.linkedin.com/in/murghendra-akki-8667a6273/',
  },
  {
    social: 'GitHub',
    link: 'github.com/Murghendra',
    href: 'https://github.com/Murghendra',
  },
  {
    social: 'Leetcode',
    link: 'Leetcode/Murghendra',
    href: 'https://leetcode.com/u/murghendraakki10/',
  },
  {
    social: 'HackerRank',
    link: 'HackerRank/Murghendra',
    href: 'https://www.hackerrank.com/profile/E_02FE21BCS050',
  },
  
  {
    social: 'Portfolio',
    link: 'Murghendra.dev',
    href: 'https://gkos.dev',
  },
  
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>Murghendra Akki</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
