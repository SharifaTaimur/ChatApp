import React from "react";

class MessageList extends React.Component {
  constructor() {
    super();
  }

  render() {
    const styles = {
      container: {
        overflowY: "scroll",
        flex: 1
      },
      ul: {
        listStyle: "none"
      },
      li: {
        marginTop: 13,
        marginBottom: 13
      },
      senderUsername: {
        fontWeight: "bold"
      },
      message: { fontSize: 15 }
    };
    return (
      <div
        style={{
          ...this.props.style,
          ...styles.container
        }}
      >
        <ul style={styles.ul}>
          {this.props.messages.map((message, index) => {
            {
              return (
                <li key={index} style={styles.li}>
                  <div>
                    <div className="message-username"> {message.senderId}</div>
                    <p className="message-text">{message.text}</p>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default MessageList;
