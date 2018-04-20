import React, {Component} from 'react';
import classificationTree from './api/classificationTree';
import Quiz from './components/Quiz';
import Result from './components/Result';
import ServerResponse from './components/ServerResponse';
import Timer from './components/Timer';
import logo from './svg/logo.svg';
import './App.css';


let axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const classification_separator = ' / ';
const user = "admin";
const password = "YWRtaW4=";
const dbname = "auditoria-medica";
const model = "am.incedente";
const host = "http://192.168.0.102:8888";

class App extends Component {

    constructor(props) {
        super(props);

        this.isBlocked();

        this.state = {
            countdown: 0,
            classification: '',
            subTree: [],
            answer: '',
            final: false,
            navigation: '',
            serverResponse: false,
            disabled: false,
            comments: ''
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.shuffleArray = this.shuffleArray.bind(this);
        this.setServerResponse = this.setServerResponse.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.getParent = this.getParent.bind(this);
        this.changeComments = this.changeComments.bind(this);
        this.isBlocked = this.isBlocked.bind(this);


    }

    shuffleArray(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    getParent(navigation, actualClassification) {

        let prevNavigation = navigation.replace(classification_separator + actualClassification, "");  // Tipo de Incidente*
        if (!prevNavigation.includes(classification_separator)) {
            // Tipo de Incidente* / Accidentes de los pacientes* --> Tipo de Incidente*
            return prevNavigation;
        } else {
            // Tipo de Incidente* / Accidentes de los pacientes* / Caídas* --> Accidentes de los pacientes*
            return prevNavigation.match(/(.*)\s\/\s(.*)*/)[2];
        }

    }

    componentWillMount() {


    }

    componentDidMount() {

        this.isBlocked();

        const options = classificationTree.map((classification) => this.shuffleArray(classification.subTree));
        this.setState({
            timer: 0,
            classification: classificationTree[0].classification,
            navigation: classificationTree[0].classification,
            subTree: options[0]
        });
    }

    handleAnswerSelected(event) {
        this.setNextQuestion(event.currentTarget.value);
    }

    changeComments(event) {
        this.setState({
            comments: event.currentTarget.value
        })
    }

    findByAnswer(o, answer) {
        //Early return
        if (o.classification === answer) {
            return o;
        }
        let result, p;
        for (p in o) {
            if (o.hasOwnProperty(p) && typeof o[p] === 'object') {
                result = this.findByAnswer(o[p], answer);
                if (result) {
                    return result;
                }
            }
        }
        return result;
    }

    handleBack() {
        let previousNavigation = this.state.navigation.replace(classification_separator + this.state.classification, "");

        let previousClassification = this.getParent(this.state.navigation, this.state.classification);

        let previousTree = this.findByAnswer(classificationTree, previousClassification);

        let previousSubtree = this.shuffleArray(previousTree.subTree);

        this.setState({
            answer: '',
            comments: '',
            final: false,
            classification: previousClassification,
            subTree: previousSubtree,
            navigation: previousNavigation
        });
    }

    setNextQuestion(answer) {
        this.isBlocked();

        const newTree = this.state.subTree.filter((subtree) => subtree.classification === answer);
        const navigation = this.state.navigation;
        const newClassification = newTree[0].classification;
        if (!newTree[0].final) {
            const newSubTree = this.shuffleArray(newTree[0].subTree);
            this.setState({
                answer: '',
                final: false,
                classification: newClassification,
                subTree: newSubTree,
                navigation: navigation + classification_separator + answer

            });

        } else {
            this.setState({
                classification: newClassification,
                final: true,
                answer: answer,
                navigation: navigation + classification_separator + answer
            });
        }
    }

    renderClassification() {
        return (<Quiz
            navigation={this.state.navigation}
            subTree={this.state.subTree}
            onAnswerSelected={this.handleAnswerSelected}
            onBack={this.handleBack}
        />);
    }

    handleCancel(event) {
        window.location.reload();
    }

    handleSubmit(event) {

        if (!this.state.disabled) {

            let serverResponse = '';

            const answer = this.state.answer;
            const comments = this.state.comments;
            const random_number = (Math.floor(Math.random() * 1000000000) + 1);

            try {

                this.setState({
                    disabled: true
                });

                axios.post(host + '/hem_auditoria_medica_odoo', {
                    "model": model,
                    "vals": {"resultado": answer, "random_number": random_number, "comentarios": comments},
                    "dbname": dbname,
                    "user": user,
                    "password": password
                }, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((response) => {
                    let params = {
                        model: model,
                        user: user,
                        password: password,
                        dbname: dbname,
                        criteria: '[["resultado", "=", "' + answer + '"],["random_number","=","' + random_number + '"]]'
                    };

                    axios.get(host + '/hem_auditoria_medica_odoo', {params: params}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((response) => {

                        if (response.data[0].random_number === random_number.toString()) {
                            // Devolver Exito.
                            serverResponse = 'OK';
                            this.setServerResponse(serverResponse)

                        } else {
                            serverResponse = 'error';
                            this.setServerResponse(serverResponse)

                        }
                    }).catch(function (error) {
                        serverResponse = 'error';
                        this.setServerResponse(serverResponse)
                    });
                });


            } catch (err) {
                serverResponse = 'error';
                this.setServerResponse(serverResponse)
            }

        }

    };


    setServerResponse(msg) {
        this.setState({
            serverResponse: msg
        });
    }


    renderResult() {


        return (<Result navigation={this.state.navigation} answer={this.state.answer} handleSubmit={this.handleSubmit}
                        handleCancel={this.handleCancel} onBack={this.handleBack}
                        handleComments={this.changeComments}/>);
    }

    renderServerResponse() {

        return (<ServerResponse msg={this.state.serverResponse}/>);
    }

    renderTimer() {
        return (<Timer timeToWait={this.state.countdown}/>)
    }


    isBlocked() {

        try {

            let params = {
                user: user, password: password, dbname: dbname,
            };

            axios.get(host + '/timer', {params: params}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((response) => {

                if (response.data.countdown > 0) {
                    this.setState({
                        countdown: response.data.countdown
                    })
                }
            }).catch(function (error) {

            });

        } catch (error) {

        }

    }

    render() {
        return (<div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Reporte de Incidentes</h2>
            </div>
            {this.state.countdown > 0 ? this.renderTimer() : this.state.serverResponse ? this.renderServerResponse() : this.state.final ? this.renderResult() : this.renderClassification()}
        </div>);
    }

}


export default App;
