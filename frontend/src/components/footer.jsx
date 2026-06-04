export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        Designed with a little help from AI, built and implemented by me.
      </div>

      <div style={styles.right}>
        © {new Date().getFullYear()} | All rights reserved
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
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