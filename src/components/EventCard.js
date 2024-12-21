import React from 'react'
import PropTypes from 'prop-types'

export default class EventCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            date: props.date,
            desc: props.desc,
            photo: props.photo
        }
    }
    render() {
        return (
            <div className="w-full md:w-1/4">
                <div className="flex flex-col items-center px-10 py-5">
                    <img className="w-44 h-44 mb-3 rounded-full object-fill shadow-lg" src={require(`../images/purabmodi.jpg`)} alt={this.state.name} />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{this.state.date}</span>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">{this.state.name}</h5>
                    <div className="flex space-x-3">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{this.state.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}
