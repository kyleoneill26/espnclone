import styles from "./footer.module.css";

export const Footer = ({ theme }) => {
  return (
    <>
      {" "}
      <div
        style={theme === "light" ? null : { backgroundColor: "black" }}
        className={styles.footer}
      >
        <div
          style={
            theme === "light"
              ? null
              : {
                  backgroundColor: "#1d1e1f",
                  color: "white",
                  border: "1px solid #2b2c2d",
                }
          }
          className={styles.footmain}
        >
          <div
            className={styles.keyseries}
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
          >
            <h1 style={{ fontWeight: "700", marginTop: "10px" }}>Key Series</h1>
            <hr
              style={
                theme === "light"
                  ? { width: "100%" }
                  : {
                      backgroundColor: "#2b2c2d",
                      color: "#2b2c2d",
                      width: "100%",
                    }
              }
            />
            <h1> Wolrd Series</h1> 
            <h1> NBA FInals</h1>
            <h1>Superbowl</h1> 
            <h1>CFP Playoffs</h1> 
            <h1>World Cup</h1> 
            <h1>Olympics</h1> 
          
          </div>
          <div
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "700", marginTop: "10px" }}>
              Quick Links
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>NFL</h1>
            <h1>NBA</h1>
            <h1>NHL</h1>
            <h1>MLB</h1>
            <h1>NCAA</h1>
           
          </div>
          <div
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "700", marginTop: "10px" }}>
              ESPN Apps
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>Android App</h1>
            <h1>IOS App</h1>
          </div>
          <div
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "700", marginTop: "10px" }}>
              Follow 
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>Instagram</h1>
            <h1>Twitter</h1>
            <h1>Facebook</h1>
            <h1>Youtube</h1>
          </div>
          <div
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "700", marginTop: "10px" }}>
              Created By
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>Kyle ONeill</h1>
            <h1></h1>
          </div>
        </div>
      </div>
      <div
        style={
          theme === "light"
            ? null
            : { backgroundColor: "#1d1e1f", color: "white" }
        }
        className={styles.contact}
      >
        <h1>
          Terms of Use | Private policy | Interest-Based Ads | Addendum to the
          Global Private Policy | Feedback
        </h1>
        <h2>ESPN . All rights reserved</h2>
      </div>
    </>
  );
};
