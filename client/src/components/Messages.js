import React from 'react'

export const Messages = ({messages}) => {

    console.log('messages length:::', messages.length)
    if (messages.length === 0) return null

    const MessageRow = (message,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{message.userName}</td>
                  <td>{message.text}</td>
              </tr>
          )
    }

    const messageTable = messages.map((message,index) => MessageRow(message,index))

    return(
        <div className="container">
            <h2>Messages</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Message Id</th>
                    <th>Username</th>
                    <th>Content</th>
                </tr>
                </thead>
                <tbody>
                    {messageTable}
                </tbody>
            </table>
        </div>
    )
}