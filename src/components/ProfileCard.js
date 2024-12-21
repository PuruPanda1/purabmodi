import React from 'react'

export default class ProfileCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            position: props.position,
            photo: props.photo,
            link: props.link
        }
    }
    render() {
        return (
            <div className="w-full md:w-1/4">
                <div className="flex flex-col items-center px-10 py-5">
                    <img className="w-44 h-44 mb-3 rounded-full object-fill shadow-lg" src={this.state.photo} alt={this.state.name} />
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">{this.state.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{this.state.position}</span>
                    <div className="flex mt-1 space-x-3 md:mt-2">
                        <a href={this.state.link} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect</a>
                    </div>
                </div>
            </div>
        );
    }
}