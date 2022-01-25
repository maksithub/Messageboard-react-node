import React from 'react'

const CreateMessage = ({onChangeForm, createMessage }) => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create Message</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">User Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="username" id="username" aria-describedby="nameHelp" placeholder="User Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Message</label>
                            <textarea onChange={(e) => onChangeForm(e)} className="form-control" name="message" id="message" placeholder="Message" cols={10} rows={6}></textarea>
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createMessage()} className="btn btn-danger mt-2">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateMessage