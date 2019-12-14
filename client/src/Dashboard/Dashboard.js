import React from 'react'
import RoundButton from '../common/button/RoundButton'
import Modal from '../common/modal/Modal'
import './Dashboard.css'

class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		// set initial state
		this.state = {
			isModalOpen: false,
			isInnerModalOpen: false
		};

		// bind functions
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	// close modal (set isModalOpen, true)
	closeModal() {
		this.setState({
			isModalOpen: false
		});
	}

	// open modal (set isModalOpen, false)
	openModal() {
		this.setState({
			isModalOpen: true
		});
	}

	// render app
	render() {
		return (
			<div style={mainStyle.app} className="dashboard">
                <button style={mainStyle.button} onClick={this.openModal}>
					ask for help
				</button>
				<Modal
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}
					style={modalStyle}
				>
                    To ask for help, login into yor twitter account and tweet telling us the location of 
                    the person, and use the hashtag #IAmDistressed to allow our twitter bot automatically 
                    retweet to other users

					<button
						style={{
							...mainStyle.button,
							margin: 0,
							width: "auto",
							marginTop: 10
						}}
						onClick={this.closeModal}
					>
						Close
					</button>
				</Modal>
				<div className="utils-alignCenter">
                	<RoundButton  name="Report to an authority" color="#281de0" clicking={() => this.props.history.push("/emergency_list")}/>

				</div>
			</div>
		);
	}
}

export default Dashboard

const modalStyle = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0,0.5)"
	}
};

const mainStyle = {
	button: {
		backgroundColor: "#281de0",
		border: 0,
		padding: "15px 40px",
		color: "#fff",
        margin: "0 auto",
        marginBottom: "15px",
        display: "block",
        borderRadius: "10px",
        fontSize: "15px"
	}
};
