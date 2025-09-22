import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { div, p } from 'framer-motion/client'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

function Contacts({ data }) {
  return (
    <div className='flex-h gap'>
      <img src="/user.png" width={"40px"} />

      <div className="flex-v">
        <p>{data.name}</p>
        <p>{data.mobile}</p>
      </div>
    </div>
  )
}

function DummyContacts() {
  const data = [
    { name: 'Sameer Singh Sisodia', mobile: "+91-9027644034" },
    { name: 'Jasleen Kaur', mobile: "+91-9027644034" },
    { name: 'Sahil Singh', mobile: "+91-9027644034" },
    { name: 'Supriya Rani', mobile: "+91-9027644034" },
  ]

  return (
    <div className='dummycontacts flex-v gap padding border'>
      <div className="flex-v gap-sm">
        <p className="title">Contacts nearby</p>
        <p className='primary'>These contacts are within a 10 km radius of you.</p>
      </div>

      <div className='flex-v gap'>
        {data && data.map((item, index) => (
          <Contacts key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

function News({ data }) {
  return (
    <div className='flex-h gap'>
      <div className="flex-v gap-sm">
        <p className="bold">{data.title}</p>
        <p>{data.content}</p>
      </div>

      <img src="/flood.jpg" width={"180px"} className='border' />
    </div>
  )
}

function Awareness() {
  const data = [
    { title: "Punjab", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, ullam, sed repellat aperiam natus expedita laboriosam assumenda hic eveniet explicabo perferendis error obcaecati, accusantium dolores. Quia architecto sequi maiores fuga!" },
    { title: "Assam", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, ullam, sed repellat aperiam natus expedita laboriosam assumenda hic eveniet explicabo perferendis error obcaecati, accusantium dolores. Quia architecto sequi maiores fuga!" },
    { title: "Bengal", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, ullam, sed repellat aperiam natus expedita laboriosam assumenda hic eveniet explicabo perferendis error obcaecati, accusantium dolores. Quia architecto sequi maiores fuga!" },
    { title: "Bengal", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, ullam, sed repellat aperiam natus expedita laboriosam assumenda hic eveniet explicabo perferendis error obcaecati, accusantium dolores. Quia architecto sequi maiores fuga!" },
    { title: "Bengal", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, ullam, sed repellat aperiam natus expedita laboriosam assumenda hic eveniet explicabo perferendis error obcaecati, accusantium dolores. Quia architecto sequi maiores fuga!" },
    { title: "Bengal", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, ullam, sed repellat aperiam natus expedita laboriosam assumenda hic eveniet explicabo perferendis error obcaecati, accusantium dolores. Quia architecto sequi maiores fuga!" },
  ]

  return (
    <div className='awareness border padding flex-v gap'>
      <p className="title">Top NEWS</p>

      <div className="flex-v gap">
        {data && data.map((item, index) => (
          <React.Fragment key={index}>
            <News data={item} />
            {index !== data.length - 1 && <div className="line"></div>}
          </React.Fragment>
        ))}
      </div>

    </div>
  )
}

function AwarenessTabs() {
  const data = [
    "All Hazards", "Emergency Alerts", "Attacks in Public Places", "Avalanche", "Biohazard Exposure", "Cybersecurity", "Earthquakes", "Floods", "Home Fies"
  ]

  return (
    <div className="awarenesstabs flex-v gap-md">
      <p className="title">Disasters and Emergencies</p>
      <div className='flex-v gap-sm'>
        {
          data && data.map((item, index) => (
            <React.Fragment key={index}>
              <p key={index}>{item}</p>
              {index !== data.length - 1 && <div className="line"></div>}
            </React.Fragment>
          ))
        }
      </div >
    </div>
  )
}

function FloodsTab() {
  const tabs = ['Prepare for a flood', 'During a flood', 'After a flood', 'Associated content']
  return (
    <div className='floodstab flex-v gap'>
      <p className="title">Floods</p>

      <div className="flex-h gap">
        {tabs && tabs.map((item, index) => (
          <p key={index} className='tab border padding'>{item}</p>
        ))}
      </div>

      <div className="flex-v gap-md">
        <div className='flex-v gap-sm'>
          <p>Flooding is a temporary overflow of water onto land that is normally dry. Floods are the most common disaster in the United States. Failing to evacuate flooded areas or entering flood waters can lead to injury or death.</p>
          <p>Floods may:</p>
          <ul style={{ marginLeft: "1.5rem" }}>
            <li>Result from rain, snow, coastal storms, storm surges and overflows of dams and other water systems.</li>
            <li>Develop slowly or quickly. Flash floods can come with no warning.</li>
            <li>Cause outages, disrupt transportation, damage buildings and create landslides.</li>
          </ul>
        </div>

        <div className="flex-v gap-sm">
          <p className="bold"> If you are under a flood warning:</p>
          <ul style={{ marginLeft: "1.5rem" }}>
            <li>Find safe shelter right away.</li>
            <li>Do not walk, swim or drive through flood waters. <span className="bold">Turn Around, Don’t Drown!</span></li>
            <li>Remember, just six inches of moving water can knock you down, and one foot of moving water can sweep your vehicle away.</li>
            <li>Stay off bridges over fast-moving water.</li>
            <li>Depending on the type of flooding:</li>
          </ul>
        </div>

        <div className="flex-h gap">
          <div className="flex-v gap-sm">
            <p className="bold">Know Your Risk for Floods</p>
            <p>Visit Flood Map Service Center to know types of flood risk in your area. However, remember that flooding doesn’t follow lines on a map. Where it can rain it can flood. Sign up for your community’s warning system. The Emergency Alert System and National Oceanic and Atmospheric Administration Weather Radio also provide emergency alerts. The National Risk Index is an easy-to-use, interactive tool that shows which communities are most at risk to natural hazards like flooding.</p>
          </div>
          <div className="flex-v gap-sm">
            <p className="bold">Preparing for a Flood</p>
            <p>Make a plan for your household, including your pets, so that you and your family know what to do, where to go, and what you will need to protect yourselves from flooding. Learn and practice evacuation routes, shelter plans, and flash flood response. </p>
          </div>
        </div>

      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className='flex-v gap-md'>
      <div className="flex-s">
        <Logo />

        <div className="flex-h gap">
          <p className="link">Facebook</p>
          <p className="link">Twitter</p>
          <p className="link">YouTube</p>
        </div>
      </div>

      <div className="flex-e gap-md">
        <div className="flex-v gap-sm">
          <p className="link">Website Information</p>
          <p className="link">Privacy</p>
          <p className="link">Report</p>
          <Link to='/sos'><p className="link">Simulate SOS</p></Link>
        </div>
        <div className="flex-v gap-sm">
          <p className="link">Accessibility</p>
          <p className="link">Accountability</p>
          <p className="link">Careers</p>
          <p className="link">Contact Us</p>
        </div>
      </div>
    </div>
  )
}

function SOSModal({ closeModal }) {
  return (
    <div className='sosmodal'>
      <div className="sosmodal-container border padding flex-v gap-md">
        <p className='title'>The SOS has been sent sucessfully!</p>

        <div className="flex-v gap">
          <p className="bold">We have your basic information which includes name, mobile, email, location.</p>
          <p className="bold">If you’re in good condition, please fill out this form so that we can be one step closer to rescuing you.</p>

          <input type="text" placeholder='How many people are there?' />
          <input type="text" placeholder='Since how many days you have been stuck?' />
          <input type="text" placeholder='Are you injured?' />

          <div className="margin-top flex-v gap-sm">
            <p>Upload some pictures of you and nearby places.</p>
            <input type='file' />
          </div>

          <button className='margin-top' onClick={() => closeModal()}>Submit</button>
        </div>
      </div>
    </div>
  )
}

function Home() {
  const [showModal, setShowModal] = useState(false)

  function handleShowModal() {
    setShowModal(true)
  }

  function closeModal() {
    setShowModal(false)
  }

  return (
    <div className='flex-v gap-md padding'>
      {showModal && <SOSModal closeModal={closeModal} />}
      <Navbar closeModal={closeModal} handleShowModal={handleShowModal} />
      <div className="flex gap">
        <DummyContacts />
        <Awareness />
      </div>
      <div className="flex gap">
        <AwarenessTabs />
        <FloodsTab />
      </div>
      <div className="home-bottom-padding"></div>
      <Footer />
      <div className="home-bottom-padding"></div>
    </div>
  )
}

export default Home
