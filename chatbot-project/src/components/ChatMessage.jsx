import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
    //const message = props.message;
    //const sender = props.sender;
    //const { message,sender } = props;

    /*if (sender == "chatbot") {
      return (
        <div>
          <img src="robot.png" alt="chatbot Icon" width="50" />
          {message}
        </div>
      );
    }*/

    return (
      <div className={
        sender === "user" 
        ? 'chat_message_user'
        :'chat_message_robot'
      }>
        {sender == "chatbot" && (
          <img src={RobotProfileImage} alt="ChatBot Icon" className="chat_message_profile"/>
        )}
        <div className="chat_message_text">
          {message}
        </div>
        
        {sender == "user" && (
          <img src={UserProfileImage} alt="User Icon" className="chat_message_profile"/>
        )}
      </div>
    );
  }