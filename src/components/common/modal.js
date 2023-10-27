import React, { Fragment, useRef, useState } from "react"
import Modal from "react-modal"
import Confetti from "react-confetti"
import Dice from "react-dice-roll"

import "./modal.css"
import wish from "../../assets/image/Happy_Birthday_Transparent_Decoration_PNG_Picture.png"

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(17 26 40 / 70%)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "none",
    background: "#1d293a",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    width: "80%",
    height: "35rem",
    textAlign: "center",
    fontSize: "25px",
    overflowX: "hidden",
  },
}

const Modals = () => {
  const [modalIsOpen, setIsOpen] = useState(true)
  const [showDice, setShowDice] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  console.log(showDice)
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {showDice ? <Lottery /> : <Wish setShowDice={setShowDice} />}
    </Modal>
  )
}

const GIFTS = [
  "জুতা",
  "হাসের ডিম",
  "স্পিকার / হেডফোন / এয়ারপডস",
  "থ্রি-পিস",
  "বোরকা",
  "চেয়ার",
]

const Lottery = () => {
  const count = useRef(0)
  const dice1 = useRef(null)
  const dice2 = useRef(null)

  const [cheat, setCheat] = useState({ one: 3, two: 6 })
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)

  const props = {
    rollingTime: 200,
    size: 100,
    disabled: value1 !== 0 && value2 !== 0 && value1 === value2,
  }

  const onDiceRoll = () => {
    dice1.current.rollDice()
    dice2.current.rollDice()
    count.current++

    if (count.current < 10) {
      let cheat1 = Math.round(Math.random() * 6)
      let cheat2 = Math.round(Math.random() * 6)

      cheat1 = cheat1 === 0 ? 1 : cheat1
      cheat2 = cheat2 === 0 ? 1 : cheat2

      if (cheat1 === cheat2) cheat2 = cheat2 - 1
      setCheat({
        one: cheat1,
        two: cheat2,
      })
    } else {
      setCheat({
        one: 0,
        two: 0,
      })
    }
  }

  const onAfterRoll1 = value => {
    setValue1(value)
  }
  const onAfterRoll2 = value => {
    setValue2(value)
  }

  return (
    <div>
      <h3 className="dice-title">বিসমিল্লাহির রাহমানির রাহিম</h3>
      <hr />
      <div className="dice-wrapper" onClick={onDiceRoll}>
        <Dice
          ref={dice1}
          {...props}
          cheatValue={cheat.one}
          onRoll={onAfterRoll1}
        />
        <Dice
          ref={dice2}
          {...props}
          cheatValue={cheat.two}
          onRoll={onAfterRoll2}
        />
      </div>
      <p className="dice-content">
        {value1 === 0 && value2 === 0 && (
          <span>
            <h2 className="dice-icon">🎁</h2>
            <p className="dice-subtitle">
              ছক্কাতে ক্লিক কইরা ঘুরাইতে থাকো। যতক্ষন পর্যন্ত দুই ছক্কা ম্যাচ না
              করবে ততোক্ষন পর্যন্ত ঘুরাইতে থাকবা। মিললে স্ক্রিনশট পাঠাবা।
            </p>
          </span>
        )}
        {value1 !== value2 && (
          <span className="dice-content-sp">
            কিছু পাও নাই তুমি। আবার ক্লিক কইরা ঘুরাও...
            <h2 className="dice-icon">💩</h2>
          </span>
        )}
        {value1 !== 0 && value2 !== 0 && value1 === value2 && (
          <span>
            <Confetti />
            <h2 className="dice-icon">🏆</h2>
            তুমি একটা <strong>{GIFTS[value1 - 1]}</strong> পাইছো। <br />
            <p className="dice-subtitle">
              এইটাই তোমার জন্মদিনের গিফট আমার পক্ষ থেকে। স্ক্রিনশটটা পাঠাইয়া দাও
              আমারে।
            </p>
          </span>
        )}
      </p>
    </div>
  )
}

const Wish = ({ setShowDice }) => {
  return (
    <Fragment>
      <Confetti />
      <img src={wish} alt="Happy Birthday" className="modal-image" />
      <div className="wish-content">
        <p className="wish-title">
          শুভ জন্মদিন 🎂 - Happy Birthday to My Queen! ❤️❤️❤️ <br /> <br />
          ষষ্ঠবারের মতো হ্যাপি বার্থডে জানানোর সুযোগ হইলো। যদিও জন্মদিনের
          শুভেচ্ছা পোস্ট দিয়ে হয় না। ভালোবাসাটা অন্তরের ভিতরেই আছে। 🫰
          <br />
          <br />
          সবার জন্য পৃথিবীর বয়স ৪.৫ বিলিয়ন বছর হইতে পারে, কিন্ত আমার পৃথিবীর বয়স
          মাত্র ২২ বছর। <br />
          <br />
          দোয়া করি, তোমার সব মনের চাওয়া যেন পূর্ণ হয়। ভবিষ্যত এ আসতে যাওয়া তিন
          সতীন নিয়া যেন সুখে শান্তিতে থাকতে পারো।😊 <br />
          সবসময় যেন সবচেয়ে সেরা জিনিসটাই পাও, যেমনটা আমারে পাইছো। 🏆 তোমারে
          দেইখা আসলেই মাঝেমধ্যে হিংসা হয় আমার.. 😉
          <br />
          <br />
          ইতি তোমারই YBBUH ❤️❤💕
          <br /> <br />
          <strong>বত্ব, তুমি কি এখনো আড়াই ফুটই আছো? মেপে জানায়ো..🐸</strong>
          <br /> <br />
        </p>
        <button onClick={() => setShowDice(true)} className="wish-button">
          কিছু চাইলে ক্লিক করো 😉
        </button>
      </div>
    </Fragment>
  )
}

export default Modals
