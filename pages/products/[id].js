import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerId, fadeInUp } from "../../animate";

const Product = (props) => (
  <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
    <div className="fullscreen">
      <div className="product">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="img"
        >
          <motion.img
            key={props.product.image}
            src={props.product.image}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />
        </motion.div>
        <div className="product-details">
          <motion.div variants={staggerId} className="inner">
            <Link href="/">
              <motion.div variants={fadeInUp}>
                <a className="go-back">Back to products</a>
              </motion.div>
            </Link>

            <motion.div variants={fadeInUp}>
              <span className="category">Meal</span>
            </motion.div>

            <motion.h1 variants={fadeInUp}>{props.product.name}</motion.h1>

            <motion.p variants={fadeInUp}>{props.product.details}</motion.p>
            <motion.div variants={fadeInUp} className="additonals">
              <span>Gluten Free</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="qty-price">
              <div className="qty">
                <div className="minus">-</div>
                <div className="amount">1</div>
                <div className="add">+</div>
              </div>
              <span className="price">{props.product.price}</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="btn-row">
              <button className="add-to-cart"> Add to cart</button>
              <button className="subscribe"> Subscribe</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

Product.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(
    `https://my-json-server.typicode.com/dzigg/demo/products/${id}`
  );
  const product = await res.json();
  return { product };
};

export default Product;
