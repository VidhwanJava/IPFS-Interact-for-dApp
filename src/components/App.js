import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const ipfsClient = require('ipfs-http-client')   //importing module

const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })   // connect to ipfs daemon API server

class App extends React.Component {

  constructor(props){
    super(props);
    // this.state={
      // buffer: null,
      // fileHash : 'QmbBpbxg8poDNdAMcMgFi86dz2gwmtrW5x3ojQHfz3yp4i'

    // };

    this.state = { items: [], text: '' };
    this.captureFile = this.captureFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  captureFile=(event)=>{
    event.preventDefault()    // to prevent the default event actions that may taken by javascript
  //now process file for IPFS
  const file = event.target.files[0]
  const reader = new window.FileReader() //creating new object and adding to the array
  reader.readAsArrayBuffer(file)  //storing the blob file to the buffer
  reader.onloadend=()=>{
    this.setState({ buffer: Buffer(reader.result)})  
  // console.log('buffer',Buffer(reader.result))
    }
  }


//Example hash: "QmbBpbxg8poDNdAMcMgFi86dz2gwmtrW5x3ojQHfz3yp4i"
// Can be retreived from: "https://ipfs.infura.io/ipfs/QmbBpbxg8poDNdAMcMgFi86dz2gwmtrW5x3ojQHfz3yp4i"

  onSubmit = (event)=>{   //submit button event
    event.preventDefault()
    console.log("Submitting the file...")
    ipfs.add(this.state.buffer,(error,result)=>{   //params : (data , callback)

      console.log("Ipfs result",result)   //gives the hash as return

      const fileHash = result[0].hash  //storing hash to const from result
      // this.setState({fileHash})

    const newFile = {
      text: fileHash,
      id: Date.now()   //don't know why, but won't work without id!
    };

     // console.log(fileHash)
    this.setState(state => ({
      items: state.items.concat(newFile),  //adding new hash to the list
      text: ''

    }));

      if(error){
      console.log(error)    //log the error if crashed
      return
    }
    })
        //now store the resultant hash on blockchain.
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.cce.edu.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chain Cuffs
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto mt-5">
                <div>
                  <h3>Hash of files uploaded :</h3>
                   <TodoList items={this.state.items} />
                </div>
                <p>&nbsp;</p>
                <h2>Upload case files</h2>
                <p>&nbsp;</p>
                <form onSubmit={this.onSubmit}>
                  <input type='file' onChange={this.captureFile}/>
                  <button>
                      Upload 
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
class TodoList extends React.Component {
  render() {
    return (
      <ol>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>  //class for rendering the list elements
        ))}
      </ol>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')     //
);

export default App;