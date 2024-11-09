import styles from "./footer.module.scss";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import {
  FooterLinkCircle,
  FooterLinkText,
} from "../../../shared/ui/footerLink";
import { footerCircleData } from "../model/footerCircleData";

export const Footer = () => {
  const { animateY50 } = useMyAnimated();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <motion.div
          initial={animateY50.hidden}
          whileInView={animateY50.visible(1)}
          viewport={{ amount: 0.2 }}
          className={styles.footerContant}
        >
          <h2>{window.screen.width > 480 ? "UDO Team" : "UDO"}</h2>
          <div>
            {footerCircleData.map((footerItem) => (
              <FooterLinkCircle key={footerItem.id} {...footerItem} />
            ))}
          </div>
          <FooterLinkText
            href="https://spicy-plot-110.notion.site/UDO_-Docs-11d9787787f1808e8c9ad72d131efb7c"
            text="Powered by TON Blockchain"
          />
        </motion.div>
      </div>
    </footer>
  );
};
