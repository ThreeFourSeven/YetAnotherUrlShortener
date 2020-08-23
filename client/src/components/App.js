import React from 'react';
import {Redirect} from 'react-router-dom'
import {shortenURL, deleteShortURL, getShortURL} from './../api';
import "./styles.css";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            urlBefore: "",
            baseURL: "http://localhost:3000",
            shortURL: "",
            msg: "",
            code: ""
        };
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        }
        );
    }
    render() {
        const {urlBefore, baseURL, shortURL, code, msg} = this.state;
        const urlOrigin = window.location.origin+'/';
        var urlCodeArr = window.location.href.split(urlOrigin);
        urlCodeArr = urlCodeArr.filter(item => item.length > 0);
        if(urlCodeArr.length > 0) {
            var urlCode = urlCodeArr[urlCodeArr.length-1];
            getShortURL(urlCode).then( res => {
                const {shortURLObj} = res.data;
                window.location.href = shortURLObj.originalURL;
            });
        }
        return (
        <div className="container">
            <h4>Example long URL</h4>
            <input type="text" defaultValue="https://www.amazon.in/Apple-iPhone-X-Silver-256GB/dp/B071P37652/ref=sr_1_1?s=electronics&ie=UTF8&qid=1522661136sr=1-1&keywords=iphon" readOnly></input>
            <h4>URL Before</h4>
            <input name="urlBefore" type="text" placeholder="https://www.amazon.in/Apple-iPhone-X-Silver-256GB/dp/B071P37652/ref=sr_1_1?s=electronics&ie=UTF8&qid=1522661136sr=1-1&keywords=iphon" defaultValue={urlBefore} onChange={this.handleInput}></input>
            <button onClick={ () => {
                const {urlBefore, baseURL, code} = this.state;
                const f = () => {
                    shortenURL(urlBefore, baseURL).then(res => {
                        const {data} = res;
                        this.setState(prevState => {
                            return {
                                ...prevState,
                                msg: data.msg,
                                shortURL: data.shortURL,
                                code: data.code
                            }
                        });
                    });
                }
                if(code) {
                    getShortURL(code).then(res => {
                        deleteShortURL(code)
                    }).finally(f);
                } else
                    f();
            }}>Generate</button>
            <h4>Short URL</h4>
            <p>{shortURL}</p>
            <p className="yellow red-text">{msg}</p>
        </div>
        );
    }
}

export default App;