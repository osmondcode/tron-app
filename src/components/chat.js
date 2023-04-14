import Logo from "../images/logo.png";
import Picture1 from "../images/picture 1.png";
import Picture2 from "../images/picture 2.jfif";
import Picture3 from "../images/picture 3.jfif";
import { FaHome, FaEnvelope, FaBell, FaUserPlus, FaUserCircle, FaSearch, FaVideo, FaPhoneAlt, FaListUl, FaSmile, FaPaperPlane } from "react-icons/fa";



const Chat = () => {
    return ( 
        <div className="Chat">
            <span className="ChatLeft">
                <img src={Logo} alt=""/>
                <span className="LeftMiddleSpan">
                    <p><FaHome/></p>
                    <p className="ActiveIcon"><FaEnvelope /></p>
                    <p><FaBell /></p>
                    <p><FaUserPlus /></p>
                </span>
                <span className="LeftBottomSpan">
                    <p><FaUserCircle /></p>
                </span>
            </span>
            <span className="InboxList">
                <span className="InboxSearch"><p><FaSearch /></p><input type="search" placeholder="Search in your inbox"/></span>
                        {/* AI CHAT 0 */}
                <span className="Message">
                    <span>
                        <img src={Picture1} alt=""/>
                    </span>
                    <span className="InboxContact">
                        <h5>Alisha Ciara</h5>
                        <p>Welcome to tron, a world full of intelligent programmers. Here you meet people, beacome a team and build unimaginable things</p>
                    </span>
                    <span className="InboxTime">
                        <h6>18:02</h6>
                        <p>1</p>
                    </span>
                </span>
                        {/* AI CHAT 1 */}
                <span className="Message">
                    <span>
                        <img src={Picture2} alt=""/>
                    </span>
                    <span className="InboxContact">
                        <h5>Albert Johnson</h5>
                        <p>Welcome to tron, a world full of intelligent programmers. Here you meet people, beacome a team and build unimaginable things</p>
                    </span>
                    <span className="InboxTime">
                        <h6>18:02</h6>
                        <p>1</p>
                    </span>
                </span>
                        {/* AICHAT 2 */}
                <span className="Message ActiveMessage">
                    <span>
                        <img src={Picture3} alt=""/>
                    </span>
                    <span className="InboxContact">
                        <h5>Bella Stones</h5>
                        <p>Welcome to tron, a world full of intelligent programmers. Here you meet people, beacome a team and build unimaginable things</p>
                    </span>
                    <span className="InboxTime">
                        <h6>18:02</h6>
                        <p>1</p>
                    </span>
                </span>        
            </span>

            <span className="OpenMessage">
                <span className="OpenMessageNav">
                    <span className="MessageNavLeft">
                        <img src={Picture3} alt="" />
                        <span>
                            <h5>Bella Stones</h5>
                            <p>Active Now</p>
                        </span>
                    </span>
                    <span className="MessageNavRight">
                        <p><FaVideo /></p>
                        <p><FaPhoneAlt /></p>
                        <p><FaListUl /></p>
                    </span>
                </span>
                <span className="SentMessage">
                    <span className="Timing"><hr/><h4>Today</h4><hr/></span>
                    <span className="Recieve">
                        <span className="picture">
                            <img src={Picture2} alt=""/>
                        </span>
                        <p>Hello
                        <h6>17:36</h6>
                        </p>
                    </span>
                    <span className="Sent">
                        <p>How are you? <br/> And your family sir...
                        <h6>17:36</h6>
                        </p>
                        <span className="picture">
                            <img src={Picture3} alt=""/>
                        </span>
                    </span>
                    <span className="Recieve">
                        <span className="picture">
                            <img src={Picture2} alt=""/>
                        </span>
                        <p>I'm am doing great... how is work and how is everyone around you doing....
                        <h6>17:36</h6>
                        </p>
                    </span>
                    <span className="Sent">
                        <p>How are you? <br/> And your family sir...
                        <h6>17:36</h6>
                        </p>
                        <span className="picture">
                            <img src={Picture3} alt=""/>
                        </span>
                    </span>
                    <span className="Recieve">
                        <span className="picture">
                            <img src={Picture2} alt=""/>
                        </span>
                        <p>I'm am doing great... how is work and how is everyone around you doing....
                        <h6>17:36</h6>
                        </p>
                    </span>
                    <span className="Sent">
                        <p>How are you? <br/> And your family sir...
                        <h6>17:36</h6>
                        </p>
                        <span className="picture">
                            <img src={Picture3} alt=""/>
                        </span>
                    </span>
                    <span className="Recieve">
                        <span className="picture">
                            <img src={Picture2} alt=""/>
                        </span>
                        <p>I'm am doing great... how is work and how is everyone around you doing....
                        <h6>17:36</h6>
                        </p>
                    </span>
                    <span className="Sent">
                        <p>How are you? <br/> And your family sir...
                        <h6>17:36</h6>
                        </p>
                        <span className="picture">
                            <img src={Picture3} alt=""/>
                        </span>
                    </span>
                    <span className="Recieve">
                        <span className="picture">
                            <img src={Picture2} alt=""/>
                        </span>
                        <p>I'm am doing great... how is work and how is everyone around you doing....
                        <h6>17:36</h6>
                        </p>
                    </span>
                </span>
                <span className="MessageTyping">
                    <p className="icons"><FaSmile /></p>
                    <input type="text" placeholder="Type a message" />
                    <p className="icons"><FaPaperPlane /></p>
                </span>
            </span>
        </div>
     );
}
 
export default Chat;