import ThemeToggle from "./ThemeToggle";
export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        Designed with a little help from AI, built and implemented by me.
      </div>

      <div style={styles.right}>
        © {new Date().getFullYear()} | All rights reserved
      </div>
              <div className="hidden md:flex items-center gap-3">
                <ThemeToggle />
                </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    fontSize: "0.9rem",
    backgroundColor: "#111",
    color: "#aaa",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
};