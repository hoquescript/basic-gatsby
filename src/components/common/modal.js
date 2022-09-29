import React, { useState } from "react"
import Modal from "react-modal"
import "./modal.css"
import wish from '../../assets/image/Happy_Birthday_Transparent_Decoration_PNG_Picture.png'

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
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    width: "80%",
    height: '35rem',
    textAlign: 'center'

  },
}

const Modals = () => {
  var subtitle
  const [modalIsOpen, setIsOpen] = useState(true)
  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#111a28"
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img src={wish} alt="Happy Birthday" className="modal-image"/>
      <div className="wish-content">
      <p className="wish-title">শুভ জন্মদিন পিচ্চি, আড়াইফুট, নসু, পেশকার, #####, #####, ##### ! <br/> <br/> 
      দোয়া করি, সুখী থাকো, বড় হও। আর আমার মতো সেক্সি, স্মার্ট,  হ্যান্ডাম, ড্যাসিং পোলার সাথে যেন তোমার বিয়া হয়.. <br/>
      আর কালকে যেন সেক্সি দেইখা একটা বার্থডে ট্রিট পাই। <br/>

      ইতি তোমারই YBBUH ❤️❤💕<br/> <br/> 
      </p>
    <h6>পিছনের ইতিহাস.....</h6>
    <p className="wish-title">
    <br/> 
      এই পোর্টফোলিও বানানোর প্ল্যান ৩ মাস আগেই করতেছিলাম,কিন্তু একটা পোর্টফোলিও ওয়েবসাইট বানানো সময়সাপেক্ষ ব্যাপার, সব ওয়ার্কিং প্রজেক্ট বাদ দিয়ে আলাদা নতুন কাজ করার মতো সময় ছিল না। কিন্ত তোমার রিসেন্টলি জব নিয়ে ঘাটাঘাটি করতে যেয়ে মনে হইলো তোমার একটা পোর্টফোলিও সাইট থাকলে জব পাইতে আরো বেশী সুবিধা পাইতা। তাই ২ সপ্তাহের পার্টটাইম পরিশ্রম। <br/> <br/> 
      এখন বলো কি দিবা আমাকে পারিশ্রমিক হিসেবে? একটা জিনিস চাইলে দিবা? 😜😜😜<br/> <br/> 
    </p>
    <h6>নতুন কিছু সংযোজন.....</h6>
    <p className="wish-title">
    <br/> 
      বছরের সবথেকে বেশী আমার প্লানিং থাকে তোমার বার্থডেকে ঘিরে। কিন্ত আজকের দিনটা এমন খারাপ যাবে কখনো ভাবতে পারি নাই। যাই হোক না কেন, আমি সবকিছুর জন্য দুঃখিত। সবকিছু ভূলে যাই আমরা। তোমারে কষ্ট দিয়া আমার কি লাভ বলো? 😥😥😥 <br/> <br/> 

      বত্ব, দিনের তো আরো বহুত সময় বাকী আছে, আমার সাথে রিক্সা-ডেটে যাবা মাঝি? জাদু কি ঝাপ্পি দিয়ে সবকিছু ভূলায়া দিব। চাপ খাওয়াবো চাপ! 🐸
    </p>
    </div>
    </Modal>
  )
}

export default Modals
