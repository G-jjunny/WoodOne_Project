import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Slide = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const DesText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .dis-area {
    padding: 30px 35px;
    box-sizing: border-box;
    color: var(--bright);
    max-width: 350px;
    border-left: 10px solid var(--bright);
    border-right: 10px solid var(--bright);
  }
  .dis {
    font-weight: 900;
    margin-top: 10px;
  }
  .down {
    opacity: 0.8;
  }

  @media screen and (max-width: 500px) {
    .dis-area {
      width: 250px;
      padding: 10px 20px;
    }
  }
`;

const SlideItem = ({ title, description, image, btn }) => {
  return (
    <Slide image={image}>
      <DesText>
        <motion.div
          className="dis-area"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
        >
          <h1 className="dis">{title}</h1>
          <h3 className="dis down">{description}</h3>
        </motion.div>
        {btn && (
          <Link to={`/${btn}`}>
            <Button text="more" type="more" />
          </Link>
        )}
      </DesText>
    </Slide>
  );
};

export default SlideItem;
