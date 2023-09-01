import styles from './NewsLetter.module.css';
function NewsLetter() {
  return (
    <form className={styles.newsletterForm}>
      <label htmlFor="newsletter">Newsletter</label>
      <div className={styles.newsletterInput}>
        <input type="text" placeholder="Your email" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <circle cx="24" cy="24" r="24" fill="url(#paint0_linear_1196_139)" />
          <path
            d="M14.5404 24.327C13.794 24.7186 13.8249 25.2922 14.6075 25.6018L16.9262 26.5192C17.7095 26.8302 18.8946 26.6605 19.5585 26.1425L29.6275 18.2018C30.2895 17.6812 30.3604 17.758 29.7856 18.3734L21.8256 26.8934C21.2488 27.507 21.4191 28.2605 22.2049 28.5644L22.4766 28.6702C23.2624 28.9741 24.543 29.4844 25.3237 29.8018L27.8953 30.8489C28.6766 31.1663 29.5114 30.7922 29.7333 29.9792L33.6527 15.5728C33.874 14.7599 33.4443 14.4147 32.6978 14.8057L14.5404 24.327Z"
            fill="white"
          />
          <path
            d="M20.9037 33.7585C20.8579 33.8959 22.4895 31.3959 22.4895 31.3959C22.9508 30.6914 22.6889 29.8508 21.9095 29.5321L20.1302 28.8037C19.3508 28.485 18.9773 28.8592 19.2999 29.6379C19.2999 29.6379 20.9508 33.6172 20.9037 33.7585Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1196_139"
              x1="0"
              y1="24"
              x2="48"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#513EFF" />
              <stop offset="1" stopColor="#52E5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </form>
  );
}

export default NewsLetter;
