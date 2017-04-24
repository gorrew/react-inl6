class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: 'A',
                    gender: 'male',
                    age: '20'
                },
                {
                    name: 'B',
                    gender: 'male',
                    age: '21'
                },
                {
                    name: 'C',
                    gender: 'female',
                    age: '22'
                },
                {
                    name: 'D',
                    gender: 'male',
                    age: '23'
                },
                {
                    name: 'E',
                    gender: 'female',
                    age: '24'
                }
            ],

            createNew: {
                name: '',
                gender: '',
                age: ''
            },

            clicked: {
                name: '',
                gender: '',
                age: ''
            }


        };

        this.add = this.add.bind(this);
        this.inputValName = this.inputValName.bind(this);
        this.inputValGender = this.inputValGender.bind(this);
        this.inputValAge = this.inputValAge.bind(this);
        this.clickMe = this.clickMe.bind(this)
    }

    clickMe(e){
        console.log(e.target)

        let targetValu = e.target.innerText.split(',');


        this.setState({
            createNew: {
                name:targetValu[0],
                gender: targetValu[1].slice(1),
                age: targetValu[2].slice(1)
            }
        });

        console.log(this.state.createNew);

    }

    add() {
        const createNew = this.state.createNew;
        const list = this.state.list;
        list.push(createNew);
        this.setState({
            list: list
        })
    }

    inputValAge(e) {
        const prevValues = {
            name: this.state.createNew.name,
            gender: this.state.createNew.gender,
            age: this.state.createNew.age
        };

        this.setState({
            createNew: {
                name: prevValues.name,
                gender: prevValues.gender,
                age: e.target.value
            }
        });
        console.log(this.state.createNew);
    }

    inputValGender(e) {
        const prevValues = {
            name: this.state.createNew.name,
            gender: this.state.createNew.gender,
            age: this.state.createNew.age
        };

        this.setState({
            createNew: {
                name: prevValues.name,
                gender: e.target.value,
                age: prevValues.age
            }
        });
        console.log(this.state.createNew);
    }


    inputValName(e) {
        const prevValues = {
            name: this.state.createNew.name,
            gender: this.state.createNew.gender,
            age: this.state.createNew.age
        };

        this.setState({
            createNew: {
                name: e.target.value,
                gender: prevValues.gender,
                age: prevValues.age
            }
        });
        console.log(this.state.createNew);
    }

    render() {
        return (
            <div>

                <AddForm
                    clickHandler={this.add}
                    addName={this.inputValName}
                    addGender={this.inputValGender}
                    addAge={this.inputValAge}
                    clicked={this.state.createNew}
                />
                <MyList
                    items={this.state.list}
                    listClick={this.clickMe}
                />
            </div>
        );
    }
}


class MyList extends React.Component {
    render() {
        return (
            <div className="list-div">
                <h2>List of people </h2>
            <ul className="list-ul">
                {this.props.items.map((obj, index) => <li className="list-li" onClick={this.props.listClick} key={index}>{obj.name}, {obj.gender}, {obj.age}</li>)}
            </ul>
            </div>
        );
    }
}

class AddForm extends React.Component {
    render() {
        return (
            <div className="form-div">
                <h2>Add People To List</h2>
            <form>
                <input className="name-input" type="text" placeholder="Name" onChange={this.props.addName} value={this.props.clicked.name}/>
                <input className="gender-input" type="text" placeholder="Gender" onChange={this.props.addGender} value={this.props.clicked.gender}/>
                <input className="age-input" type="text" placeholder="Age" onChange={this.props.addAge} value={this.props.clicked.age}/>
                <button className="btn" type="button" onClick={this.props.clickHandler}>Add</button>
            </form>
            </div>
        )
    }
}


ReactDOM.render(<App/>,
    document.getElementById('app')
);