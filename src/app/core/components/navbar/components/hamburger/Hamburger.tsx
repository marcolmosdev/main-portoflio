import styles from "./Hamburger.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type HamburgerProps = {
  onClick: () => void;
  hamburgerState: boolean;
}

export default function Hamburger({ onClick, hamburgerState }: HamburgerProps) {
  useGSAP(() => {
    if (hamburgerState) {
      gsap.timeline()
        .to("." + styles.hamburger__line + ":nth-child(1)", {
          rotation: 45,
          y: +7,
          duration: 0.3
        })
        .to("." + styles.hamburger__line + ":nth-child(3)", {
          rotation: -45,
          y: -7,
          duration: 0.3,
          delay: -0.3
        })
        .to("." + styles.hamburger__line + ":nth-child(2)", {
          opacity: 0,
          duration: 0.3,
          delay: -0.3
        });
    } else {
      gsap.timeline()
        .to("." + styles.hamburger__line + ":nth-child(1)", {
          rotation: 0,
          y: 0,
          duration: 0.3
        })
        .to("." + styles.hamburger__line + ":nth-child(3)", {
          rotation: 0,
          y: 0,
          duration: 0.3,
          delay: -0.3
        })
        .to("." + styles.hamburger__line + ":nth-child(2)", {
          opacity: 1,
          duration: 0.3,
          delay: -0.3
        });
    }
  }, [hamburgerState]);

  return (
    <div className={styles.hamburger} onClick={onClick}>
      <div className={styles.hamburger__line}></div>
      <div className={styles.hamburger__line}></div>
      <div className={styles.hamburger__line}></div>
    </div>
  );
}
