import styles from "./SidebarFooter.module.css";

function SidebarFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} CreepyTeabag
      </p>
    </footer>
  );
}

export default SidebarFooter;
